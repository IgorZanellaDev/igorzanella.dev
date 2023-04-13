import React, { FunctionComponent, useState } from "react";
import Animation from "components/core/Animation";
import axios from "axios";
import { TOOLS_TAG } from "constants/customerly";
import { EMAIL_REGEX } from "constants/regex";
import { handleRecaptcha } from "utils/recaptcha";

interface InsertEmailInputProps {
  cookieConsent: boolean;
}

const InsertEmailInput: FunctionComponent<InsertEmailInputProps> = ({
  cookieConsent,
}) => {
  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  const handleSendClick = async () => {
    if (cookieConsent && !sent && EMAIL_REGEX.test(email)) {
      const isRecaptchaPass = await handleRecaptcha(
        "SEND_TOOLS_LIST",
        process.env.NEXT_PUBLIC_RECAPTCHA_KEY
      );

      if (isRecaptchaPass) {
        await axios
          .post("/api/customerly-lead", { email, tags: [TOOLS_TAG] })
          .then(() => {
            setSent(true);
          });
      }
    }
  };

  return (
    <section className={"flex flex-col flex-1 justify-center"}>
      <Animation
        type={"fadeInUp"}
        className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
      >
        {!cookieConsent && (
          <div
            className={
              "absolute top-0 left-0 w-full h-full flex flex-1 z-10 px-4 sm:px-6 lg:px-8"
            }
          >
            <span
              className={"text-white text-3xl font-semibold m-auto text-center"}
            >
              Please, accept cookies policy to insert your email
            </span>
          </div>
        )}
        <div
          className={`relative flex flex-col items-center gap-4 text-center ${
            !cookieConsent ? "filter blur-md" : ""
          }`}
        >
          <p className={"mt-4 mx-auto text-2xl text-white font-semibold"}>
            Insert your email to receive my tools list
          </p>
          <input
            placeholder={"example@gmail.com"}
            className={
              "w-full sm:w-80 px-4 py-2 outline-none text-gray-200 bg-gray-600 rounded-md text-lg"
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSendClick();
              }
            }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            disabled={!email || cookieConsent}
            onClick={() => handleSendClick()}
            className={`w-full sm:w-80 py-4 px-6 rounded-xl text-lg font-bold text-white ${
              sent
                ? "bg-iz-blue-dark-darker-10 cursor-default"
                : "bg-gradient-to-b from-iz-blue-light to-iz-blue-dark hover:to-iz-blue-dark-darker-10"
            }`}
          >
            {sent ? "Email sent! Check your inbox" : "Send me the email!"}
          </button>
        </div>
      </Animation>
    </section>
  );
};

export default InsertEmailInput;
