import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const AddDataToFirestore = ({ studentsData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(db);
  useEffect(() => {
    const addData = async () => {
      const collectionName = "studentsData";
      const docId = "two";
      const docData = studentsData;
      await setDoc(doc(db, collectionName, docId), { students: docData });
      //   try {
      //     // Assuming 'teachers' is the collection name
      //     const teachersCollection = db.collection("teachers");

      //     // Loop through teachersData and add each teacher to Firestore
      //     // for (const teacher of teachersData) {
      //     //   await teachersCollection.add(teacher);
      //     // }

      //     console.log("Data added to Firestore!");
      //   } catch (error) {
      //     console.error("Error adding data to Firestore:", error);
      //     setError("An error occurred while adding data to Firestore.");
      //   } finally {
      //     setLoading(false);
      //   }
    };

    addData();
  }, [studentsData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Data added to Firestore!</div>;
};

export default AddDataToFirestore;
