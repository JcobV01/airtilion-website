import { Schema, model, models } from 'mongoose';

const PricingSchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Number: { type: Number, required: true },
    Company: { type: String },
    Industry: { type: String },
    Type: {type: String, required: true},
    Number_of_subpages: {type: String, required: true},
    Functionality: [{type: String, required: true}],
    CMS: {type: String},
    Optimization_and_additional_services: [{type: String}],
    Integrations: [{type: String}],
    Budget: {type: String, required: true},
    Deadline: {type: String, required: true},
    Additional_services: {type: String},
    Privacy_policy: {type: String, required: true},
    Processing_of_personal_data: {type: String, required: true},
}, { collection: 'wyceny' });

const Pricing = models?.Pricing || model('Pricing', PricingSchema);

export default Pricing;