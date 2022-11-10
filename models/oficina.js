const { Schema, model } = require('mongoose');


const OficinaSchema = Schema({
    barrio: {
        type: String,
        required: [true, "el barrio es requerido"]
    },
    oficinas: { // foreignField
        type: Schema.Types.ObjectId,
        ref: "Coworking", // schema a donde hace referencia
        required: [true, "la oficina debe estar vinculada a un coworking"],
    },
    disponible24h: {
        type: Boolean,
        required: [true, "digita si true o false"]
    }

});


module.exports = model('Materia', OficinaSchema)
