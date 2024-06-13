import React, { useState, useEffect } from "react";
import classes from "./MainContent.module.css";
import Button from "../UI/Button/Button";
import AddItemsForm from "../AddItemsForm/AddItemsForm";
import Card from "../UI/Card/Card";

const MainContent = () => {
  // Define state to hold the data
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetch data from an API

    const fetchData = async () => {
      try {
        // Set loading state to true when fetching starts
        setLoading(true);
        // Fetch data from an API endpoint
        // "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(
        "https://storeposts-dd9ae-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
        );
        // Convert response to JSON format
        const jsonData = await response.json();

        // Convert the object data into an array
        const formattedData = jsonData ? Object.values(jsonData) : [];


        // Update state with the fetched data
        setJsonData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Set loading state to false when fetching completes
        setLoading(false);
      }
    };

    // Call the fetchData function when component mounts
    fetchData();
  }, []);

  const weHaveData = jsonData && jsonData.length > 0;

  return (
    <div className={classes.container}>
      <h2>Main Content</h2>
      <pre>
        {/*
            JSON.stringify(jsonData, null, 2) */}
      </pre>
      {weHaveData ? (
        <ul>
          {jsonData.slice(95, 105).map((item, index) => (
            <li key={index}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.... or Loading</p>
      )}

      <Button text="Click me !" />

      <Card>
        <AddItemsForm />
      </Card>
    </div>
  );
};

export default MainContent;
