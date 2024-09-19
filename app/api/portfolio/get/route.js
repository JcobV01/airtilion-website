
import PortfolioItem from '@models/PortfolioItem';
import { connectToDB } from '@utils/database';

export async function POST(req) {
    try {
        await connectToDB();
        let id = ''
        
        try {
            const body = await req.json();  // Bezpiecznie pobierz treść żądania

            id = body.id || '';  // Jeśli nie ma id, ustaw jako pusty string
        } catch (e) {
            // Jeśli nie ma treści w żądaniu, to nie rzucaj błędu, po prostu zostaw id puste
            console.warn('Brak treści w żądaniu lub błąd parsowania');
        }
        

        let document = []

        if(id){
            document = await PortfolioItem.find({ _id: id }).lean();
        }
        else{
            document = await PortfolioItem.find({}).lean()
        }

        if (!document || document.length === 0) {
            return new Response(JSON.stringify({ error: 'Nie znaleziono projektów' }), { status: 404 });
        }
        
        

        return new Response(JSON.stringify(document), { status: 200 });
    } catch (error) {
        console.error('Błąd pobierania:', error);
        return new Response(JSON.stringify({ error: 'Błąd serwera' }), { status: 500 });
    }
}
