import { Schema, model, models } from 'mongoose';

const PortfolioItemSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Screens: [{ type: String }],
    Work: [{ type: String }],
    Technologies: [{ type: String }],
    Challanges: [
        {
            icon: String,
            title: String,
            description: String,
        },
    ],
    Steps: [
        {
            title: String,
            description: String,
        },
    ],
    Achivements: [
        {
            icon: String,
            title: String,
            description: String,
        },
    ],
    Client: {
        logo: String,
        name: String,
        description: String,
        opinion: String,
        author: String,
        background: String,
    },
    Logo: {
        type: String, required: true
    },
    Type: {type: String, required: true},
    Date: {type: Date, required: true},
    Link: {type: String, required: true}
}, { collection: 'portfolio' }); // Ustawienie nazwy kolekcji

const PortfolioItem = models?.PortfolioItem || model('PortfolioItem', PortfolioItemSchema);

export default PortfolioItem;
