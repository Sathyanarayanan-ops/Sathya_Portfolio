# Portfolio Website 


## Getting Started

To get a local copy up and running, follow these steps:

Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn

## Installation 

1. Clone the Repo

``` git clone https://github.com/Sathyanarayanan-ops/Sathya_Portfolio.git ```

2. Navigate to the project directory:

```cd Sathya_Portfolio```

3. Install Dependencies

```npm install```

4. Start Development Server

```npm start```


```
Sathya_Portfolio/
├── public/
│   ├── index.html
│   ├── Resume.pdf
│   └── ...
├── src/
│   ├── components/
│   │   ├── Appbar.jsx
│   │   ├── Contacts.jsx
│   │   ├── Homepage.jsx
│   │   ├── ProjectCards.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeButton.jsx
│   │   ├── Skills.jsx
│   │   └── WorkExperience.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...

```

## File Significance

Public Directory

index.html: The main HTML file that serves the React application.
Resume.pdf:  PDF file used for the resume button functionality.

Src Directory

App.js: The root component that defines the main structure of the application.
index.js: Entry point of the React application, rendering the App component into the DOM.

Components Directory
Appbar.jsx: Contains the navigation bar component with links to different sections of the portfolio.
Contacts.jsx: Renders the contact section with personal contact information and links.
Homepage.jsx: Displays the homepage with a brief introduction and links to other sections.
ProjectCards.jsx: Defines the card component used to display individual projects.
Projects.jsx: Renders the projects section, utilizing ProjectCards to showcase various projects.
ResumeButton.jsx: Contains a button that opens the resume PDF in a new tab.
Skills.jsx: Displays the skills section, listing various technical skills.
WorkExperience.jsx: Renders the work experience section with details about previous roles.

## Deployment 

1. Install the gh-pages packages

   ```npm install --save gh-pages```

2. Add the following scripts to package.json:

```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy

```
npm run deploy
```


