/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("45nc4mkqe5gsc3l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gz9apgze",
    "name": "cree_par",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "45nc4mkqe5gsc3l",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jrhj8fvn",
    "name": "couleurs",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "4bxh7xds23fdf3a",
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
  collection.schema.removeField("gz9apgze")

  // remove
  collection.schema.removeField("jrhj8fvn")

  return dao.saveCollection(collection)
})
