import { Schema, model, models } from 'mongoose';

const AppsSchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Number: { type: Number, required: true },
    Company: { type: String },
    Industry: { type: String },
    Website_type: [{ type: String, required: true }],
    App_type: [{type: String, required: true}],
    Number_of_subpages: [{ type: String, required: true }],
    Website_functionality: [{ type: String, required: true }],
    App_functionality: [{ type: String, required: true }],
    CMS: [{ type: String }],
    Optimization_and_additional_services: [{ type: String }],
    Integrations: [{ type: String }],
    Budget: { type: String, required: true },
    Deadline: { type: String, required: true },
    Additional_services: { type: String },
    Privacy_policy: { type: String, required: true },
    Processing_of_personal_data: { type: Boolean, required: true },
}, { collection: 'aplikacje' });

const Apps = models?.Apps || model('Apps', AppsSchema);

export default Apps;