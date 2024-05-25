"use server";

export async function sendEmail({
  email,
  message,
  name,
  subject,
}: {
  email: string;
  message: string;
  name: string;
  subject: string;
}) {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.PUBLIC_KEY,
      accessToken: process.env.PRIVATE_KEY,
      template_params: {
        from_email: email,
        message: message,
        from_name: name,
        subject: subject,
      },
    }),
  });

  return { ok: res.ok };
}
