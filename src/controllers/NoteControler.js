const mongoose = require("mongoose");

const Note = mongoose.model("Note");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const notes = await Note.paginate({}, { page, limit: 10 });
    return res.json(notes);
  },

  async store(req, res) {
    /*  #swagger.parameters['note_scheme'] = {
                in: 'body',
                description: 'Informações da nova nota',
                schema: {
                    title: '',
                    description: ''
                }
        } 
    */
    const note = await Note.create(req.body);
    return res.json(note);
  },
  async show(req, res) {
    const note = await Note.findById(req.params.id);
    return res.json(note);
  },

  async update(req, res) {
    /*  #swagger.parameters['note_scheme'] = {
                    in: 'body',
                    description: 'Novas informações da rota',
                    schema: {
                        _id: '',
                        title: '',
                        description: '', 
                        createdAt: ''
                    }
            } 
        */

    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(note);
  },

  async destroy(req, res) {
    await Note.findByIdAndRemove(req.params.id);
    return res.send();
  }
};

