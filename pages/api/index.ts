// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

function makeid(length: number) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
        user: makeid(10),
      })
      .then((result) => {
        console.log(result);
        return res.send({
          status: "Success",
          image: result.data.data[0],
        });
      });
  } catch (err: any) {
    res.json({
      status: "Error",
      err: err?.message,
    });
  }
};

export default generateImage;
