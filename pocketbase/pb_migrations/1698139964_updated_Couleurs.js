/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4bxh7xds23fdf3a")

  collection.name = "couleur"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4bxh7xds23fdf3a")

  collection.name = "Couleurs"

  return dao.saveCollection(collection)
})
