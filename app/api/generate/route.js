export async function POST(req) {
  const { name, desc } = await req.json();

  const prompt = `
Create 3 short marketing content ideas.

Business: ${name}
Description: ${desc}

Return JSON:
{
  "ideas": [
    {
      "title": "",
      "hook": "",
      "caption": "",
      "script": ""
    }
  ]
}
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Something went wrong" });
  }
}
