/* Create using  React js a Simple website builder 
- Implement an initial version of a WYSIWYG editor 
that enables users to build a simple website just 
by picking HTML tags from the widget and filling 
all the attributes they need. */


import React, { useState } from "react";

function App() {
  const [elements, setElements] = useState([]);

  const handleAddElement = (tag) => {
    setElements([...elements, { tag, attributes: {} }]);
  };

  const handleChangeAttribute = (index, attribute, value) => {
    const updatedElements = [...elements];
    updatedElements[index].attributes[attribute] = value;
    setElements(updatedElements);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <button onClick={() => handleAddElement("h1")}>Add H1</button>
        <button onClick={() => handleAddElement("p")}>Add Paragraph</button>
        <button onClick={() => handleAddElement("img")}>Add Image</button>
      </div>
      <div className="preview">
        {elements.map((element, index) => (
          <div key={index}>
            <element.tag
              {...element.attributes}
              onChange={(e) =>
                handleChangeAttribute(index, "text", e.target.value)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
