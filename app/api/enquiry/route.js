
import connectMongo from "@/utils/connectMongo";
import EnquiryModel from "@/models/enquiryModel";
export async function POST(req){
try {

    const {name,email,message} = await req.json();
    const enquiry = {name, email, message};
    await connectMongo();
    await EnquiryModel.create(enquiry);

    return Response.json({message: "Enquiry submitted successfully!"});
    
} catch (error) {

    return Response.json({message: error instanceof Error? error.message : String(error)});
    
}

    

}