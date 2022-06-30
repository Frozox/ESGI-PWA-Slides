import { openDB } from "idb";

const USER_STORE_NAME = "User";
const DIAPO_STORE_NAME = "diaporama";
export function initDB() {
  return openDB("myGES-slide", 1, {
    upgrade(db) {
      // Create a store of objects
      const userStore = db.createObjectStore(USER_STORE_NAME, {
        // The 'id' property of the object will be the key.
        keyPath: "uid",
      });
      // Create an index on the 'date' property of the objects.
      userStore.createIndex("uid", "uid");
      userStore.createIndex("email", "email");

      const diapoStore = db.createObjectStore(DIAPO_STORE_NAME);
    },
  });
}

export async function setRessources(data) {
  const db = await initDB();
  const tx = db.transaction(DIAPO_STORE_NAME, "readwrite");
  data.forEach((item) => {
    tx.store.put(item);
  });
  await tx.done;
  return db.getAllFromIndex(DIAPO_STORE_NAME, "uid");
}

export async function setRessource(data) {
  const db = await initDB();
  const tx = db.transaction(USER_STORE_NAME, "readwrite");
  await tx.store.put(data);
  return db.getFromIndex(USER_STORE_NAME, "uid", data.uid);
}

export async function getRessources() {
  const db = await initDB();
  return db.getAllFromIndex(USER_STORE_NAME, "uid");
}

export async function getRessourcesFromIndex(indexName) {
  const db = await initDB();
  return db.getAllFromIndex(USER_STORE_NAME, indexName);
}

export async function getRessource(id) {
  const db = await initDB();
  return db.getFromIndex(USER_STORE_NAME, "uid", id);
}

export async function unsetRessource(id) {
  const db = await initDB();
  await db.delete(USER_STORE_NAME, id);
}

export async function setCart(diapo) {
  const db = await initDB();
  const tx = db.transaction(DIAPO_STORE_NAME, "readwrite");
  await tx.store.put(diapo, "diapo");
  return db.get(DIAPO_STORE_NAME, "diapo");
}

export async function getCart() {
  const db = await initDB();
  return db.get(DIAPO_STORE_NAME, "diapo");
}