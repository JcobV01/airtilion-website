import { Schema, model, models } from 'mongoose';

const ClientSchema = new Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true},
    Background: {
        file: String,
        base64: String,
    },
    Logo: {
        file: String,
        base64: String,
    }

}, { collection: 'klienci' });

const Clients = models?.Clients || model('Clients', ClientSchema);

export default Clients;