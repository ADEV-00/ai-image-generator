// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai";

export default function handler(req, res) {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const propmt = "beautiful sunset in city of future";

  (async () => {
    const gptResponse = await openai.createImage({
      propmt,
      n: 1,
      size: "1024x1024",
    });

    console.log(gptResponse.data.data[0].url);
  })();
  res.status(200).json("hi");
}
