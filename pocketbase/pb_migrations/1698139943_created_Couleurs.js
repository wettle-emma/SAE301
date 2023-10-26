/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4bxh7xds23fdf3a",
    "created": "2023-10-24 09:32:23.878Z",
    "updated": "2023-10-24 09:32:23.878Z",
    "name": "Couleurs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rmdi39fw",
        "name": "code_hexa",
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
  const collection = dao.findCollectionByNameOrId("4bxh7xds23fdf3a");

  return dao.deleteCollection(collection);
})
