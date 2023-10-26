/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zsi2tb5ebddvy8u",
    "created": "2023-10-26 12:08:54.752Z",
    "updated": "2023-10-26 12:08:54.752Z",
    "name": "lunetteparuser",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lrnhbut1",
        "name": "idlunettes",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "45nc4mkqe5gsc3l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "bxzc9nws",
        "name": "nom",
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
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id, lunettes.id as idlunettes, users.nom FROM users, lunettes\nWHERE users.id=lunettes.cree_par\nGROUP BY users.nom"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zsi2tb5ebddvy8u");

  return dao.deleteCollection(collection);
})
