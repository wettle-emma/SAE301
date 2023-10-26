/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("45nc4mkqe5gsc3l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "12uqy4yf",
    "name": "materiau",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "sqfjsj9k3jzgzl9",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("45nc4mkqe5gsc3l")

  // remove
  collection.schema.removeField("12uqy4yf")

  return dao.saveCollection(collection)
})
