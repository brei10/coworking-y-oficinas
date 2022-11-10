
const Coworking = require("../models/coworking")


const coworkingGet = async (req, res) => {
    const coworking = await Coworking.find().populate('oficinas');
    res.json(coworking);
}

const coworkingPost = async (req, res) => {

    const { telefono, correo } = req.body;
    const coworking = new Coworking({ telefono, correo });
    await coworking.save()

    res.json({
        msg: "post api",
        coworking
    });
}
const coworkingPut = async (req, res) => {

    const { id } = req.params;
    const { _id, ...all } = req.body

    try {

        const coworking = await Coworking.findByIdAndUpdate(id, all, { new: true })
        res.json({
            msg: "Actualizado!!",
            coworking

        })

    } catch (error) {
        console.log(error)
    }

}

const coworkingDelete = async (req, res) => {
    const { id } = req.params

    try {
        await Coworking.findByIdAndDelete(id)

        res.json({
            msg: "el coworking se elimino de la base de datos"
        });
    } catch (error) {
        console.log(error)
    }



}

module.exports = {
    coworkingGet,
    coworkingPost,
    coworkingPut,
    coworkingDelete

}