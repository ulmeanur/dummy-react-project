
//I used an Immediately Invoked Function Expression (IIFE) to create a namespace WYSIWYGEditor

/* By encapsulating the code in a namespace, we achieve better modularity and avoid 
potential conflicts with other code, which is especially useful in larger applications 
or when integrating multiple scripts. */



const WYSIWYGEditor = (function() {
    const preview = document.getElementById('preview');

    function addElement(tag) {
        const elementContainer = document.createElement('div');
        elementContainer.classList.add('element');

        let element;
        switch(tag) {
            case 'h1':
                element = document.createElement('h1');
                element.contentEditable = true;
                element.textContent = 'Editable Heading';
                break;
            case 'p':
                element = document.createElement('p');
                element.contentEditable = true;
                element.textContent = 'Editable paragraph text...';
                break;
            case 'img':
                element = document.createElement('img');
                element.src = 'https://via.placeholder.com/150';
                element.alt = 'Placeholder Image';
                element.contentEditable = true;
                elementContainer.appendChild(createInputField(element, 'src', 'Image URL'));
                elementContainer.appendChild(createInputField(element, 'alt', 'Alt Text'));
                break;
            default:
                break;
        }

        if (tag !== 'img') {
            elementContainer.appendChild(element);
        }

        preview.appendChild(elementContainer);
    }

    function createInputField(element, attribute, placeholder) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = placeholder;
        inputField.addEventListener('input', (event) => {
            element.setAttribute(attribute, event.target.value);
        });

        return inputField;
    }

    return {
        addElement,
        createInputField
    };
})();
