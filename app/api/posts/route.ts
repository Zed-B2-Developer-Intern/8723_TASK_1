import connectMongo from "@/utils/connectMongo";
import PostModel from "@/models/postModel";

export async function GET(req: any) {
  const query = req.nextUrl.searchParams.get('q')
  // console.log(query, "query");
  try {
    await connectMongo();
    let postData;
    if (query) {
      postData = await PostModel.find({
        $or: [
        { title: new RegExp(query, 'i') },
        { description: new RegExp(query, 'i') }

      ]
      });
    } else {
      postData = await PostModel.find({});
    }
    return Response.json(postData);
  } catch (error) {
    return Response.json({
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
