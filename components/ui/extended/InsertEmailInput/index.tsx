import React, { FunctionComponent, useEffect, useState } from "react";
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
  const [error, setError] = useState<string>();

  const handleSendClick = async () => {
    if (cookieConsent && !sent && EMAIL_REGEX.test(email)) {
      const isRecaptchaPass = await handleRecaptcha(
        "SEND_TOOLS_LIST",
        process.env.NEXT_PUBLIC_RECAPTCHA_KEY
      );

      if (isRecaptchaPass) {
        const { disposable } = (
          await axios.get<{ disposable: string }>(
            "https://disposable.debounce.io",
            {
              params: { email: email },
            }
          )
        ).data;

        if (disposable === "true") {
          setError("Please, insert a valid email (not temporary)");
        } else {
          setError(undefined);
          await axios
            .post("/api/customerly-lead", { email, tags: [TOOLS_TAG] })
            .then(() => {
              setSent(true);
            });
        }
      } else {
        setError("Please, verify that you are not a robot");
      }
    }
  };

  useEffect(() => {
    setError(undefined);
  }, [email]);

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
            Enter your email to unlock the secret tools
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
          {error && <span className={"text-red-500 text-sm"}>{error}</span>}
          <button
            disabled={!email || !cookieConsent}
            onClick={() => handleSendClick()}
            className={`w-full sm:w-80 py-4 px-6 rounded-xl text-lg font-bold text-white ${
              sent
                ? "bg-iz-blue-dark-darker-10 cursor-default"
                : "bg-gradient-to-b from-iz-blue-light to-iz-blue-dark hover:to-iz-blue-dark-darker-10"
            }`}
          >
            {sent ? "Email sent! Check your inbox" : "Get Access Now!"}
          </button>
        </div>
      </Animation>
    </section>
  );
};

export default InsertEmailInput;
