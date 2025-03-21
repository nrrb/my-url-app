# My URL App

This was generated with the following [ChatGPT](https://chatgpt.com/) prompt:

You are an expert React developer. I want you to generate a complete React project that meets the following requirements. The project should be created using Create React App and use Material-UI (MUI) for styling.

**Project Overview:**

Create a URL Query Parameter Editor application with the following features:

1. **URL Input:**  
   - A multiline text input where a user can paste a URL (e.g., a LinkedIn jobs search URL).
   - When a URL with query string parameters is pasted, the app should parse the URL and display individual text input rows for each query parameter. Each row should have two text fields:
     - One for the parameter name (label: "Parameter Name")
     - One for the parameter value (label: "Parameter Value")
   - Users can edit the values in these text fields.

2. **Add Parameter:**  
   - A “+” button (using Material-UI's AddIcon) that allows the user to add a new, empty query parameter row.

3. **Generated URL:**  
   - A second multiline text input that displays the generated URL formed by combining the base URL and all current query parameter values. This field should update as the user edits parameters.
   - Below this field, add a clickable link that opens the generated URL in a new tab.

4. **Special f_TPR Handling:**  
   - If a query parameter with the key `"f_TPR"` exists, modify the row as follows:
     - The entire row should have a yellow background.
     - Before the row appears, add an explanation text in a `<Typography>` element with a yellow background that reads:  
       **Change this to number of seconds you want your job search range to be (keep the leading "r"):**
     - Ensure that this explanation text appears above the text inputs for the `"f_TPR"` parameter.

5. **Footer:**  
   - At the bottom of the page, include a footer that says:  
     *Made by Nicholas Bennett with ChatGPT (code on github)*  
   - The text should have hyperlinks:  
     - “Nicholas Bennett” links to `https://www.linkedin.com/in/nicholasrrbennett/`  
     - “ChatGPT” links to `https://chatgpt.com/`  
     - “code on github” links to `https://github.com/nrrb/my-url-app`

6. **Responsive Design:**  
   - Use Material-UI components (such as Container, Grid, Typography, TextField, Button, IconButton, and Link) to ensure the layout is responsive for mobile devices.
   - Use tight spacing so that more content fits on the screen at once.

**Additional Instructions:**
- Generate the code for a component called `URLForm.js` that implements the described functionality.
- Also, show how to integrate `URLForm` into the main `App.js` file.
- Include installation instructions for Material-UI dependencies.
- Make sure to use functional React components and hooks (`useState`, `useEffect`).

Please output the entire code for the project along with explanations for any important parts. This prompt should yield the full code for a working URL Query Parameter Editor React application that meets all the requirements.