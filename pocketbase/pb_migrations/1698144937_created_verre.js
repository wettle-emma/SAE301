/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3313ujabhdeg12a",
    "created": "2023-10-24 10:55:37.391Z",
    "updated": "2023-10-24 10:55:37.391Z",
    "name": "verre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wwj9q2ff",
        "name": "libelle",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3313ujabhdeg12a");

  return dao.deleteCollection(collection);
})
