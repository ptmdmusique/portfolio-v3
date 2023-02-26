import emailjs from "@emailjs/nodejs";
import { NextApiRequest, NextApiResponse } from "next";

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type ContactPossibleError = "contact/sent-failed";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Get data submitted in request's body.
  const { email, message, name } = (req.body as ContactForm) ?? {};

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!email || !message || !name) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ error: "contact/missing-data" });
  }

  try {
    await emailjs.send(
      "service_hcg1dhc",
      "template_xfare6g",
      { name, email, message },
      { publicKey: "jmL_DBi6Yru-bzbRl", privateKey: "xBlQsncnWBmWvemvmyQ_g" },
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "contact/sent-failed" });
  }
}
