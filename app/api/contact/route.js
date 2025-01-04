import Contact from "@models/Contact";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    const { Name, Email, Number, Text, Date } = await req.json();

    try {
        await connectToDB();
        const newContact = new Contact({Name, Email, Number, Text, Date});

        await newContact.save();
        return new Response(JSON.stringify(newContact), { status: 201 });
    } catch (error) {
        return new Response("Failed to insert a new data", { status: 500 });
    }
}