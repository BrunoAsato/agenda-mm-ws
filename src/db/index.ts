import * as nedb from 'nedb'
import { resolve } from "path";

const collections = {}

const filename = (collection) => resolve(process.cwd(), `./data/${collection}.db`);

export const crud = {
  find: (collection) => new Promise((resolve, reject) =>
    collections[collection]
      .find({})
      .exec((err, res) =>
        err ? reject(err) : resolve(res))
  ),
  findOne: (collection, _id) => new Promise((resolve, reject) =>
    collections[collection]
      .findOne({_id}, (err, res) =>
        err ? reject(err) : resolve(res))
  ),
  create: (collection, document) => new Promise((resolve, reject) =>
    collections[collection].insert(document, (err, res) =>
      err ? reject(err) : resolve(res))
  ),
  update: (collection, _id, document) =>
    new Promise((resolve, reject) =>
      collections[collection].update({_id}, document, {}, (err, res) =>
        err ? reject(err) : resolve(res === 1)
      )),
  delete: (collection, _id) =>
    new Promise((resolve, reject) =>
      collections[collection].remove({_id}, (err, res) =>
        err ? reject(err) : resolve(res === 1)
      ))
}


/** Define your collections here **/

// The name of the collection and file
export const contatoCollection = 'contatos';

// Define the nedb instance
collections[contatoCollection] = new nedb({
  filename: filename(contatoCollection),
  autoload: true,
})

// Configure the collection
collections[contatoCollection]
  .ensureIndex({fieldName: 'name', unique: true}, (e) => e ? console.error(e) : null);

// Export the API you like to use in your app
export const contatos = {
  find: () => crud.find(contatoCollection),
  findOne: (_id) => crud.findOne(contatoCollection, _id),
  create: (document) => crud.create(contatoCollection, document),
  update: (_id, document) => crud.update(contatoCollection, _id, document),
  delete: (_id) => crud.delete(contatoCollection, _id),
}
