import PortfolioItem from '@models/PortfolioItem';
import { connectToDB } from '@utils/database';

export async function POST(req) {
    try {
        await connectToDB();

        let document = []

        document = await PortfolioItem.find({Type: 'website'}).sort({ _id: -1 }).limit(3).lean();


        if (!document || document.length === 0) {
            return new Response(JSON.stringify({ error: 'Nie znaleziono projektów' }), { status: 404 });
        }


        return new Response(JSON.stringify(document), { status: 200 });
    } catch (error) {
        console.error('Błąd pobierania:', error);
        return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
    }
}
