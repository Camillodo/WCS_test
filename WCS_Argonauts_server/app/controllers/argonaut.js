// IMPORT
const Argonaut = require('../models/argonauts');

const argonautController = {
    /**
     * Get all argonauts from db and return them as json object
     * @param {*} req no use
     * @param {*} res array of all argonauts
     */
    getallArgonauts: async (_, res) => {
        // We use the model method to get all argonauts
        const allArgonauts = await Argonaut.findAll();
        // And we send it in json
        res.json(allArgonauts);
    },
        /**
     * Get all argonauts from db and return them as json object
     * @param {*} req name to insert in db
     * @param {*} res array of all argonauts
     */
    addArgonauts: async (req, res) => {
        // We put the body into variable via destructuring
        const { body } = req;
        // We use data from body to create new instance of Argonaut
        const newArgonaut = new Argonaut(body)
        try {
            //If it works we save it in db and send it in json
            await newArgonaut.save();
            res.json(newArgonaut);
        } catch (error) {
            // If not we send error message
            res.status(500).json(error.message);
        }
    }

};

//EXPORT
module.exports = argonautController;