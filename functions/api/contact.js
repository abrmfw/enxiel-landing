export async function onRequestPost({ request }) {
  const form = await request.formData();

  const name = form.get("name") || "";
  const email = form.get("email") || "";
  const org = form.get("org") || "";
  const interest = form.get("interest") || "";
  const message = form.get("message") || "";

  const body = `
ENXIEL Inquiry

Name: ${name}
Email: ${email}
Organization: ${org}
Interest: ${interest}

Message:
${message}
`;

  await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      personalizations: [
        { to: [{ email: "hello@enxiel.com" }] }
      ],
      from: {
        email: "no-reply@enxiel.com",
        name: "ENXIEL Website"
      },
      subject: "New ENXIEL Inquiry",
      content: [{
        type: "text/plain",
        value: body
      }]
    })
  });

  return Response.redirect("/success.html", 302);
}