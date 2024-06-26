import React, { useState } from "react";
import classes from "./AddItemsForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const AddItemsForm = (props) => {

  /* const [formData, setFormData] = useState({
    userId: '',
    id: '',
    title: '',
    body: ''
  }); */

  const submitHandler = (event) => {
    event.preventDefault();
	const url = "https://storeposts-dd9ae-default-rtdb.europe-west1.firebasedatabase.app/posts.json";

    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());
    console.log(data);

    if (data.title && data.title.length > 20) {
      console.log("the title is to long");
    }

	fetch(url, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		
		body: JSON.stringify(data),
	  })
		.then((response) => response.json())
		.then((dataToBeStored) => {
		  console.log("Data saved successfully!", dataToBeStored);
		})
		.catch((error) => {
		  console.error("Error saving data: ", error);
		});

   // event.target.reset();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
		<Input
        label="User ID"
        input={{
          type: "text",
		  id: "userId",
          name: "userId",
          min: 2,
          max: 400,
          required: true,
        }}
        errorMessage="Error! Please enter a valid value!"
        showError=""
      />

      <Input
        label="ID"
        input={{
          type: "number",
		  id:"id",
          name: "id",
          min: 2,
          max: 400,
          required: true,
        }}
        errorMessage="Error! Please enter a valid value!"
        showError=""
      />

      <Input
        label="Title"
        input={{
          type: "text",
          name: "title",
          minLength: 2,
          maxLength: 100,
          required: true,
        }}
        errorMessage="Error! Please enter a valid value!"
        showError=""
      />

      <Input
        label="Description"
        input={{
          type: "text",
		  id:"body",
          name: "body",
          minLength: 2,
          maxLength: 500,
          required: true,
        }}
        errorMessage="Error! Please enter a valid value!"
        showError=""
      />

      <Button type="submit" text="Add" />
    </form>
  );
};

export default AddItemsForm;
