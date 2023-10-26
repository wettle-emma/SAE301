/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4dfabzflt2bvk84",
    "created": "2023-10-24 10:55:46.023Z",
    "updated": "2023-10-24 10:55:46.023Z",
    "name": "branche",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rt0obijq",
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
  const collection = dao.findCollectionByNameOrId("4dfabzflt2bvk84");

  return dao.deleteCollection(collection);
})
