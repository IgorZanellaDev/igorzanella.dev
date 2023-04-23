import axios from "axios";

export const handleRecaptcha = async (action: string, key?: string) => {
  const token =
    key &&
    (await window.grecaptcha?.enterprise.execute(key, {
      action: action,
    }));

  const res = (
    await axios.post<{ reason: string[]; score: number; status: string }>(
      "/api/recaptcha",
      { token, action },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  ).data;

  return res.score > 0.6;
};
