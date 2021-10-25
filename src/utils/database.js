import Datastore from 'nedb';

const db = {};
db.contatos = new Datastore('../data/agenda.db');
db.contatos.loadDatabase();

export default db;
