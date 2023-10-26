/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("prjunmzjnwbvg63");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "prjunmzjnwbvg63",
    "created": "2023-10-24 10:55:28.497Z",
    "updated": "2023-10-24 13:54:23.948Z",
    "name": "monture",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z8eif0ol",
        "name": "libelle_monture",
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
