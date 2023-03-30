async function completion(cvData) {
  const cvPrompt = [
    {
      role: "system",
      content:
        'You are a json parser, parsing data from a cv/resume. You should respond in this json format. {"project":{"projectName":"","projectDescription":"","projectLink":"","skills":"","tools":""},"workExperience":{"jobTitle":"","company":"","location":"","position":"","startDate":"","endDate":"","duties":""},"personalInfo":{"fullName":"","email":"","phoneNumber":"","location":"","link":""},"education":{"schoolName":"","degree":"","major":"","gpa":"","startDate":"","endDate":"","activities":""}} from the cv/resume.',
    },
    {
      role: "user",
      content: `Extract all the relevant information from ${cvData} and return the result in a json format.`,
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
