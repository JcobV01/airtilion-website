import Pricing from "@models/Pricing";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { post } = await req.json();

    try {
        await connectToDB();
        const newPricing = new Pricing(post);

        await newPricing.save();
        return new Response(JSON.stringify(newPricing), { status: 201 });
    } catch (error) {
        return new Response("Failed to insert a new data", { status: 500 });
    }
}