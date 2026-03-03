import OpenAI from "openai";

export const chatWithAI = async (req, res) => {

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const { message } = req.body;

  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are Nirspace Technologies AI assistant helping clients about AI automation and web development."
      },
      {
        role: "user",
        content: message
      }
    ]
  });

  res.setHeader("Content-Type", "text/plain");

  for await (const chunk of stream) {
    const text =
      chunk.choices[0]?.delta?.content || "";
    res.write(text);
  }

  res.end();
};