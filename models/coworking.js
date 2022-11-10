
const { Schema, model } = require('mongoose');

const CoworkingSchema = Schema({
    telefono: {
        type: Number,
        required: [true, "el numero es requerido"]
    },
    correo: {
        type: String,
        required: [true, "el correo electronico es necesario para el registro"],
    },
}, {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
});

CoworkingSchema.virtual("oficinas", { // nombre de la propiedad al mostrarse en el res.json
    ref: 'Oficina', // a que schema hace referencia?
    localField: '_id', // el id de ambos schemas 
    foreignField: 'oficinas', // el mismo nombre de donde se hace la referencia
    justOne: false // falso que solo me traiga un objeto.
});

module.exports = model('Coworking', CoworkingSchema)
