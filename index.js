async function completion(cvData) {
  const cvPrompt = [
    {
      role: "system",
      content:
        '',
    },
    {
      role: "user",
      content: ``,
    },
  ];

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: cvPrompt,
  });

  console.log(completion.data.choices[0].message.content);
}

async function main() {
  const cvData = await getCvData();
  await completion(cvData);
}

main();
