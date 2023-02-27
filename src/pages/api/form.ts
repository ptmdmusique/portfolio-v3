import emailjs from "@emailjs/nodejs";
import { NextApiRequest, NextApiResponse } from "next";

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const contactPossibleErrorList = [
  "contact/sent-failed",
  "contact/missing-data",
  "contact/missing-api-key",
  "contact/sent-with-fake-api-key",
] as const;

export type ContactPossibleError = typeof contactPossibleErrorList[number];

export interface ResponseDto {
  error?: ContactPossibleError;
}

export const isResponseDto = (obj: any): obj is ResponseDto =>
  contactPossibleErrorList.includes(obj.error);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseDto>,
) {
  // Get data submitted in request's body.
  const { email, message, name } = (req.body as ContactForm) ?? {};

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!email || !message || !name) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ error: "contact/missing-data" });
  }

  const publicKey = process.env.EMAIL_PUBLIC_KEY;
  const privateKey = process.env.EMAIL_PRIVATE_KEY;
  if (publicKey === "placeholder" || privateKey === "placeholder") {
    return res.status(200).json({ error: "contact/sent-with-fake-api-key" });
  }

  if (!publicKey || !privateKey) {
    console.error("Missing API key");
    return res.status(500).json({ error: "contact/missing-api-key" });
  }

  try {
    await emailjs.send(
      "service_hcg1dhc",
      "template_xfare6g",
      { name, email, message },
      { publicKey, privateKey },
    );

    return res.status(200).json({});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "contact/sent-failed" });
  }
}
