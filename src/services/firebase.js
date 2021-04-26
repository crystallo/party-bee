import { Item } from '../components/accordion/styles';
import { firebase, FieldValue } from '../lib/firebase';

export async function getBounceHouses() {
  const result = await firebase
    .firestore()
    .collection('bouncehouses')
    .get();

    return result.docs.map(doc => doc.data()); 
}

export async function getBounceHouseByID(id) {
  const result = await firebase
    .firestore()
    .collection('bouncehouses')
    .where('id', '==', id)
    .limit(1)
    .get();

  return result.docs.map(doc => doc.data()); 
}