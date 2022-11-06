// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req: any, res: any) => {
  const { description } = req.body;
  if (!description)
    return res.json({
      status: "Error",
      err: "Image description is required",
    });
  try {
    await openai
      .createImage({
        prompt: `${description}`,
        n: 1,
        size: "1024x1024",
      })
      .then((result) => {
        console.log(result);
        return res.send({
          status: "Success",
          image: result.data.data[0],
        });
      });
  } catch (err) {
    res.json({
      status: "Error",
      err: err,
    });
  }
};

export default generateImage;
