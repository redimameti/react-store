import firestore from "../firebase.js";
import shoes from "./shoes.js";

export const createShoe = async (record) => {
  const collectionRef = firestore.collection("shoes");
  await collectionRef.add(record);
};

export const seedShoes = async () => {
  // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Firestore#collection
  // Getting Collection Reference instance for the shoes collection
  const collectionRef = firestore.collection("shoes");
  // Returns Promise<QuerySnapshot<T>>
  const data = await collectionRef.get();

  // Checking if database is empty or not
  if (!data.empty) {
      return;
  }

  // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference#add
  // Grabbing every shoe object in our array and adding it to the 'shoes' collection (id db)
  const promises = shoes.map(async (shoe) => {
      return await collectionRef.add(shoe);
  });

  await Promise.all(promises);
};


export const getShoes = async () => {
  await seedShoes();

  // Firestore.collection
  // - https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#collection
  // Returns a CollectionReference
  const collectionRef = firestore.collection("shoes");

  // QuerySnapshot
  // (https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot)
  const queryData = await collectionRef.get();

  // Returns An array of all the documents in the QuerySnapshot.
  // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot#docs
  const documents = queryData.docs;

  // data() > Return an object with all the fields in the doc (apart from id)
  // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QueryDocumentSnapshot#data
  const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));

  // Returning an array of shoes with their unique IDs.
  return data;
};