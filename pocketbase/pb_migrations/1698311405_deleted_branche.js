/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4dfabzflt2bvk84");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4dfabzflt2bvk84",
    "created": "2023-10-24 10:55:46.023Z",
    "updated": "2023-10-24 13:54:02.807Z",
    "name": "branche",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rt0obijq",
        "name": "libelle_branche",
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
