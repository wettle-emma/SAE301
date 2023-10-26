/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4dfabzflt2bvk84")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mxkle8gn",
    "name": "couleur_branche",
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
  const collection = dao.findCollectionByNameOrId("4dfabzflt2bvk84")

  // remove
  collection.schema.removeField("mxkle8gn")

  return dao.saveCollection(collection)
})
