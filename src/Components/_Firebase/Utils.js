import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { firestore } from "./Firebase";

// Create manager
export const addManager = async (manager) => {
  const managersCollectionRef = collection(firestore, "managers");

  try {
    const managerQuery = query(
      managersCollectionRef,
      where("name", "==", manager)
    );
    const querySnapshot = await getDocs(managerQuery);

    if (querySnapshot.empty) {
      await addDoc(managersCollectionRef, {
        name: manager,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// Read manager
export const readManager = async () => {
  const docRef = doc(firestore, "managers", "1fJju1laDdvZxX8apBvD");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    console.log("No such document!");
  }
};

//Read all managers
export const readAllManagers = async () => {
  try {
    const managersCollectionRef = collection(firestore, "managers");
    const querySnapshot = await getDocs(managersCollectionRef);

    const managersDataArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("managers:", managersDataArray);

    //setManagersData(managersDataArray);
  } catch (error) {
    console.log("Error fetching managers:", error);
  }
};

// Update manager
export const updateManager = () => {};

// Delete manager
export const deleteManager = () => {};

export const addKehila = async (managerName, kehilaName) => {
  const managersCollectionRef = collection(firestore, "managers");
  let kehilotCollectionRef; // Declare kehilotCollectionRef outside the try block

  try {
    const managerQuery = query(
      managersCollectionRef,
      where("name", "==", managerName)
    );
    const managerSnapshot = await getDocs(managerQuery);

    if (!managerSnapshot.empty) {
      // If the query snapshot is not empty, the manager exists
      const managerDocRef = managerSnapshot.docs[0].ref;

      // Add workers to the subcollection
      kehilotCollectionRef = collection(managerDocRef, "kehilot");

      // Add the new kehila to the subcollection
      await addDoc(kehilotCollectionRef, kehilaName);
    }
  } catch (err) {
    console.log(err);
  }
};

// read all kehilot by manager
export const raedKAllKehilotByManager = async () => {
  const temp = [];
  const querySnapshot = await getDocs(
    collection(firestore, "managers", "hvQk3qCDd9AWYoiMSsFr", "kehilot")
  );
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    //console.log(doc.id, " => ", doc.data());
    temp.push(doc.data());
  });
  return temp;
};

// Helpers
const findManager = async () => {};
