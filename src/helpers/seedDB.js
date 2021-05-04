import BounceHouses from '../data/bouncehouse';

export default function SeedDatabase(firebase) {
  let add = true;
  BounceHouses.forEach(item => {
    const id = item.id.toString();
    delete item.id;
    if (add) {
      firebase.firestore().collection("bouncehouses").doc(id).set(item)
      .then((docRef) => {
        console.log("written: ",docRef.id)
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    }
    // add = false;
  });
}