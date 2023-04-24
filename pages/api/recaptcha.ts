import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import { NextApiRequest, NextApiResponse } from "next";
import { createFileFromBase64, fileExists } from "utils/file";

export default async function createAssessment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    process.env.GOOGLE_APPLICATION_CREDENTIALS &&
    process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64 &&
    !fileExists(process.env.GOOGLE_APPLICATION_CREDENTIALS)
  ) {
    createFileFromBase64(
      process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64,
      process.env.GOOGLE_APPLICATION_CREDENTIALS
    );
  }

  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath("igorzanelladev-w-1681079157939");
  const request = {
    assessment: {
      event: {
        token: req?.body.token,
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
      },
    },
    parent: projectPath,
  };
  const [response] = await client.createAssessment(request);
  if (!response.tokenProperties?.valid) {
    res.status(400)?.json({
      message: "Invalid token",
      score: response?.riskAnalysis?.score,
      reason: response.tokenProperties?.invalidReason,
    });
    return;
  }

  if (response.tokenProperties.action === "SEND_TOOLS_LIST") {
    return res.status(200)?.json({
      score: response?.riskAnalysis?.score,
      reason: response.riskAnalysis?.reasons,
      status: "Ok",
    });
  } else {
    return res.status(500)?.json({
      reason: response.riskAnalysis?.reasons,
      status: "Fail",
    });
  }
}
