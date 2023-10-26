/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3313ujabhdeg12a");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "3313ujabhdeg12a",
    "created": "2023-10-24 10:55:37.391Z",
    "updated": "2023-10-24 13:54:30.304Z",
    "name": "verre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wwj9q2ff",
        "name": "libelle_verre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dg1blona",
        "name": "couleur_verre",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
