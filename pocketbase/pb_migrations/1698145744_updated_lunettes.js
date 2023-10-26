/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("45nc4mkqe5gsc3l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mcrotdgv",
    "name": "materiaux",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "acétate",
        "titane"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("45nc4mkqe5gsc3l")

  // remove
  collection.schema.removeField("mcrotdgv")

  return dao.saveCollection(collection)
})
