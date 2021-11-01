import db from '~/utils/db';
import crypto from 'crypto';

const getAllContatos = async () => {
  const contatos = new Promise((resolve, reject) => {
    db.find({}, (err, docs) => {
      if (err) {
        reject(err);
      }
      resolve(docs);
    });
  });
  return contatos;
};

const getContatoById = async (_, { query }) => {
  const contato = new Promise((resolve, reject) => {
    db.findOne({ _id: query._id }, (err, docs) => {
      if (err) {
        reject(err);
      }
      resolve(docs);
    });
  });
  return contato;
};

const insertContato = async (_, { data }) => {
  let _id = crypto.randomBytes(10).toString('hex');
  // const contato = { _id: _id, ...data };
  // console.log('contato', contato);
  const contato = new Promise((resolve, reject) => {
    db.insert({ _id: _id, ...data }, (err, docs) => {
      if (err) {
        reject(err);
      }
      db.findOne({ _id: _id }, (err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
    });
  });
  return contato;
};

const removeContato = async (_, { query }) => {
  const contatos = new Promise((resolve, reject) => {
    db.remove({ _id: query._id }, {}, (err, docs) => {
      if (err) {
        reject(err);
      }
      db.find({}, (err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
    });
  });
  return contatos;
};

const updateContato = async (_, { query, data }) => {
  const id = query._id;
  const contato = new Promise((resolve, reject) => {
    db.update({ _id: id }, { ...data }, {}, (err, docs) => {
      if (err) {
        reject(err);
      }
      db.findOne({ _id: id }, (err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
    });
  });
  return contato;
};

const resolvers = {
  getAllContatos,
  getContatoById,
  insertContato,
  removeContato,
  updateContato
};

export default resolvers;
