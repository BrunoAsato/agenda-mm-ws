import Datastore from 'nedb';

const db = new Datastore({ filename: './data/agenda.db', autoload: true });
db.loadDatabase(function (err) {
  if (err) {
    console.log('Erro no carregamento da base: ' + err);
  }
});
export default db;
