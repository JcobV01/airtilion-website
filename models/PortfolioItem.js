import { Schema, model, models } from 'mongoose';

const PortfolioItemSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Screens: [{ 
        file: String,
        base64: String,
     }],
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
    Client: { type: String, required: true},
    Logo: {
        file: String,
        base64: String,
    },
    Background: {
        file: String,
        base64: String,
    },
    Type: {type: String, required: true},
    Date: {type: Date, required: true},
    Link: {type: String, required: true},
    Opinion: {type: String, required: true},
    Author: {type: String, required: true},
}, { collection: 'portfolio' }); // Ustawienie nazwy kolekcji

const PortfolioItem = models?.PortfolioItem || model('PortfolioItem', PortfolioItemSchema);

export default PortfolioItem;
