import { firebase } from '../lib/firebase';

export async function getBounceHouses() {
  const result = await firebase
    .firestore()
    .collection('bouncehouses')
    .get();

    return result.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })); 
}

export async function getBounceHouseByID(id) {
  const result = await firebase
    .firestore()
    .collection('bouncehouses')
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        return undefined;
      }
    })

  return result;
}