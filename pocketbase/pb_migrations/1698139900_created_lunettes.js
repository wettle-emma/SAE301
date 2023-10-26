/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "45nc4mkqe5gsc3l",
    "created": "2023-10-24 09:31:40.437Z",
    "updated": "2023-10-24 09:31:40.437Z",
    "name": "lunettes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zoaps7dk",
        "name": "prix",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "6aco94fu",
        "name": "commande",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("45nc4mkqe5gsc3l");

  return dao.deleteCollection(collection);
})
