import Order from "@models/Order";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { Name, Email, Number, Package } = await req.json();

    try {
        await connectToDB();
        const newOrder = new Order({ Name, Email, Number, Package });

        await newOrder.save();
        return new Response(JSON.stringify(newOrder), { status: 201 });
    } catch (error) {
        return new Response("Failed to insert a new data", { status: 500 });
    }
}