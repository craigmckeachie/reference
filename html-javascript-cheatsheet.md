# HTML & JavaScript Cheatsheet

# Forms

## Input

### get

```html
<label for="firstNameInput">First Name</label>
<input
  type="text"
  id="firstNameInput"
  placeholder="enter first name"
  value="Craig"
/>

<script>
  "use strict";
  const firstNameInput = document.querySelector("#firstNameInput");
  let firstName = firstNameInput.value;
  console.log(firstName); //Craig
</script>
```

### set

```html
<label for="firstNameInput">First Name</label>
<input type="text" id="firstNameInput" placeholder="enter first name" />

<script>
  "use strict";
  const firstNameInput = document.querySelector("#firstNameInput");
  firstNameInput.value = "Adeyemi";
</script>
```

![input set](images/input-set.png)

## Dropdown (Select)

### get

### set

## Checkbox

## RadioButton

# Content

## Paragraph

### get

### set

## Div

### get

### set

# Events

## Associate function with HTML Element's event

# Build

## Droppdown (select)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dropdown Using JavaScript</title>
  </head>
  <body>
    <select id="animalDropdown">
      <option value="">Select...</option>
      <!-- <option value="1">Dog</option>
           <option value="2">Cat</option>
           <option value="3">Mouse</option>
           <option value="4">Rat</option> -->
    </select>
    <script>
      "use strict";

      const animalsArray = [
        { id: 1, name: "Dog" },
        { id: 1, name: "Cat" },
        { id: 1, name: "Mouse" },
        { id: 1, name: "Rat" },
      ];
      const animalDropdown = document.querySelector("#animalDropdown");

      for (const animal of animalsArray) {
        let option = document.createElement("option");
        option.value = animal.id;
        option.innerText = animal.name;
        animalDropdown.appendChild(option);
      }
    </script>
  </body>
</html>
```

## Table

## Divs (cards)

# Hide & Show

# Recipe

```js
//HTML Variables

//Fucntions

//Associate Function to Event

//Initial Loading
```

# Call API
