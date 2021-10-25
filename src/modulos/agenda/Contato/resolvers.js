import db from '~/utils/database';

const { sequelize } = db;
const { models } = sequelize;

const getContatoById = async (parent, args) => {
  const { id_contato } = parent || args;
  if (id_contato) {
    const contato = await models.contato.findByPk(id_contato);
    return contato;
  }
  return null;
};

const getAllContatos = async () => {
  const contatos = await models.contato.findAll({
    order: [['nome']]
  });
  return contatos;
};

const insertOneContato = (parent, { data }) => {
  new Promise(resolve => {
    db.contato.insert(data, () => {
      db.users.find({}, (err, docs) => {
        resolve(docs);
      });
    });
  });
};

const removeContato = (parent, { data }) =>
  new Promise(resolve => {
    db.contato.remove({ id_contato: data.id_contato }, {}, () => {
      db.contatos.find({}, (err, docs) => {
        resolve(docs);
      });
    });
  });

const updataContato = (parent, { data }) =>
  new Promise(resolve => {
    db.contatos.update(
      { id_contato: contato.id_contato },
      {
        name: contato.nome,
        email: contato.email
      },
      {},
      () => {
        db.contatos.find({}, (err, docs) => {
          resolve(docs);
        });
      }
    );
  });

const contatoResolvers = {
  getContatoById,
  getAllContatos,
  insertOneContato,
  removeContato,
  updataContato
};

export default contatoResolvers;
