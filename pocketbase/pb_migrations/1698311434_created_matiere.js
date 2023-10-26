/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sqfjsj9k3jzgzl9",
    "created": "2023-10-26 09:10:34.000Z",
    "updated": "2023-10-26 09:10:34.000Z",
    "name": "matiere",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hkeox6cf",
        "name": "nom_matiere",
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
  const collection = dao.findCollectionByNameOrId("sqfjsj9k3jzgzl9");

  return dao.deleteCollection(collection);
})
