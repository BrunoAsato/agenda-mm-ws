import db from '~/utils/db';

const Contato = mongoose.model(
  'Contato',
  new mongoose.Schema(
    {
      _id: {
        type: Id,
        required: true
      },
      nome: {
        type: String,
        required: true
      },
      telefone: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
    },
    { collection: 'contato' }
  )
);

export default Contato;
