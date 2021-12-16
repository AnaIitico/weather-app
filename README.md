# Getting Started with This Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Skill Level

This is a basic weather data api based application that displays weather condition results of a City search.

This project should be suited for developers looking to learn React and are at the Beginner stage, or are having challenges understanding local state management and conditional rendering using useEffect and useState hooks.

## //notes in the code

There are notes in the weatherData.jsx file that help you understand and figure out the behavior of the code. Read the notes and watch the console log for the behavior of the state variables and the useEffect (render function).

The index.html file in the /public folder has one or two modifications to make this all work.  Look at the background picture and also at the page title, etc. These are small customizations that you can do as a developer to make your site work for you.

## Node.js

Make sure that you are running at least [node v16x LTS](https://nodejs.org/en/download/).  I don't recommend using odd versions of node.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Yarn is a much more stable dependency management tool for React so you would need to [install yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) according to your OS.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Env Variables

You need to create an .env file to place the variables you need to keep secret, such as the api key. You can rename the .env.example file or copy and paste it. Your choice.  Make sure the .env file is NOT in the src folder.

Go to [OpenWeather](https://openweathermap.org/) and sign up for a free account and a free API Key. Then copy and paste the key into the .env file.

If you're running the development server when you paste the api key it may not read the variable.  You need to stop the development server on your terminal by pressing ctrl c then type yarn start to restart the server and it will now read the .env file and the value of the api key variable.

## Improvements

I left the app as it is purposely. Any CSS responsiveness improvements or improvements to code logic on form functionality, etc, are completely up to you.

I hope that I have provided a useful beginner's project that allows you to sharpen your knowledge and coding skills.