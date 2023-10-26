/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("prjunmzjnwbvg63")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yca4xf46",
    "name": "couleur_monture",
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
  const collection = dao.findCollectionByNameOrId("prjunmzjnwbvg63")

  // remove
  collection.schema.removeField("yca4xf46")

  return dao.saveCollection(collection)
})
