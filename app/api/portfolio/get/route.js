
import PortfolioItem from '@models/PortfolioItem';
import { connectToDB } from '@utils/database';

export async function POST(req) {
    try {
        await connectToDB();

        const document = await PortfolioItem.find({}).lean()

        return new Response(JSON.stringify(document), { status: 200 });
    } catch (error) {
        console.error('Błąd pobierania:', error);
        return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
    }
}
