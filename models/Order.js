import { Schema, model, models } from 'mongoose';

const OrderSchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Number: { type: String, required: true },
    Package: { type: String, required: true },
}, { collection: 'zamowienia' });

const Order = models?.Order || model('Order', OrderSchema);

export default Order;