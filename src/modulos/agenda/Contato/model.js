import { DataTypes } from 'sequelize';
import db from '~/utils/database';

const Contato = db.sequelize.define('contato', {
  id_contato: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  }
});

//Contato.belongsTo(Pessoa, { foreignKey: 'id_pessoa', as: 'id_pessoa' });

export default Contato;
