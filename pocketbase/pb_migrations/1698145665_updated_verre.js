/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3313ujabhdeg12a")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dg1blona",
    "name": "couleur",
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
  const collection = dao.findCollectionByNameOrId("3313ujabhdeg12a")

  // remove
  collection.schema.removeField("dg1blona")

  return dao.saveCollection(collection)
})
