import Apps from "@models/Apps";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { post } = await req.json();

    try {
        await connectToDB();
        const newApps = new Apps(post);

        await newApps.save();
        return new Response(JSON.stringify(newApps), { status: 201 });
    } catch (error) {
        return new Response("Failed to insert a new data", { status: 500 });
    }
}