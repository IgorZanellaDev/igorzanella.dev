import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { CUSTOMERLY_ENDPOINT } from "constants/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.body.email) {
    return res.status(400).send({ status: "Missing email" });
  }

  try {
    await axios.post(
      `${CUSTOMERLY_ENDPOINT}/leads`,
      {
        leads: [
          {
            email: req.body.email,
            tags: req.body.tags || [],
          },
        ],
      },
      {
        headers: {
          Authentication: `AccessToken: ${process.env.CUSTOMERLY_API_TOKEN}`,
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );

    return res.status(200).send({ status: "Ok" });
  } catch (error) {
    return res.status(500).send({ status: "Customerly error" });
  }
};
