import { Schema, model, models } from 'mongoose';

const ContactSchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Number: { type: String, required: true },
    Text: { type: String, required: true },
    Date: { type: Date, required: true},
}, { collection: 'kontakt' });

const Contact = models?.Contact || model('Contact', ContactSchema);

export default Contact;