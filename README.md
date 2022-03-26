<a id="idtext"></a>

# 📈 Crypto Updates 📉 
- Developed by [Ali Ali](https://github.com/alibeniaminali) and [Neil Mcfayden](https://github.com/Spurs129)
- I deployed this website on Netlify and it is available here 👉 [Crypto Updates](https://crypto-updates-aliali-neilmcfayden.netlify.app/) 👈

## Overview 
- A React app built during a 48 hours hackathon. My first pair project for General Assembly's Software Engineering Immersive Course.
- Crypto Updates is a website that requests the top 100 crypto currencies from Coincap API and users can see detailed live updates of the selected currency.

![App Screenshot](https://i.imgur.com/48laWP8.png)

## Project Brief :
- 48 hours to build a React application that consumes a public API.
- Include wireframes that we designed before building the app.
- Be deployed online and accessible to the public.
- A working request in Insomnia from the API we want to use, showing that we can access the dataset we need.

## Installation Steps
Clone or download the repository , then run the following in terminal :
- First run : **yarn**
- After installing run : **yarn start** 

## Technologies Used

### API :
- [Coincap API](https://docs.coincap.io/)

### Frontend
- React.js
- React Bootstrap 
- React Router DOM
- Axios
### Development Tools
- VS Code
- Insomnia
- Netlify

## General Approach and Planning 

- We first had to choose an API we wanted to use. My partner and I realised we both have interest in crypto currency so we decided to search for an API that gives us information about top crypto currency and we found [Coincap API](https://docs.coincap.io/).

### Day 1 :
- We test if the API works and what kind of information it provides 
- ![Screenshot 2022-02-21 at 17 39 24](https://user-images.githubusercontent.com/94930059/155004341-2a46a43d-623b-4fc4-a605-0bf02df43ec6.png)
- We began by chatting through the idea and creating a wireframe of our app design and components, given the limited time we had.
- We decided what kind of information we want to display on our website and how we can access it using Insomnia
- We saved time by scaffolding a basic React app from a template.
- We then built our file structure as below.
- <img width="287" alt="Screenshot 2022-02-21 at 18 41 35" src="https://user-images.githubusercontent.com/94930059/155011209-7d3d029c-3dd7-4c15-96e1-c417d4d0b96c.png">
- Next, we used react-router-dom to set up our App.js as the router for the site.
- <img width="869" alt="Screenshot 2022-02-21 at 17 36 08" src="https://user-images.githubusercontent.com/94930059/155003796-ea817e6c-6450-432d-8902-7d153e14096e.png">
- <img width="869" alt="Screenshot 2022-02-21 at 17 36 32" src="https://user-images.githubusercontent.com/94930059/155003862-d8ec6481-ce24-4d86-b439-5ffed0952979.png">

#### Challenges for day 1
- Toward the end of Day 1 we realised that the API that we chose was faulty and we had to find a way to fix it or eventually look for another API and test it again which was time consuming and we had only 48 hours to finalise our project.
- The issue was that after a few requests the API was sending us the error below. To get the information needed the users had to refresh the page multiple times until the information was received, which probably would lead the users to leave our website.
- ![Screenshot 2022-02-21 at 17 53 38](https://user-images.githubusercontent.com/94930059/155006037-cfe96a9a-536b-4612-8376-a686a9e7253a.png)
- We wrote this function in case our get request is not successful, to run up to 10 attempts and until we get the information.
- <img width="785" alt="Screenshot 2022-02-21 at 18 11 51" src="https://user-images.githubusercontent.com/94930059/155007911-c4567252-5a75-470a-8e08-5dd55965cd40.png">
- <img width="822" alt="Screenshot 2022-02-21 at 17 50 15" src="https://user-images.githubusercontent.com/94930059/155007923-ab38e05e-5103-4f2f-86dd-e3744baf33e7.png">

[Back to the top ⬆️](#idtext)

### Day 2 :
- After fixing the issue with our API we started looking into how to display all available currencies and how to fit single crypto information into separate cards.
- We used array method to map through all the currencies and create separate containers for each crypto and display their Name and Symbol depending on their Id.
- <img width="1190" alt="Screenshot 2022-02-21 at 18 35 12" src="https://user-images.githubusercontent.com/94930059/155010498-1fd77724-af41-4d06-8f02-d35468ee9c6b.png">
- After having all the currencies displayed separately on our page we moved to getting a single crypto currency and displaying it in a card. We had to use the same if statement in order to fulfil our get request without any issues.
- <img width="1190" alt="Screenshot 2022-02-21 at 18 38 12" src="https://user-images.githubusercontent.com/94930059/155010831-37cf56c8-6dc4-4265-aa8a-c62e62f53bad.png">
- Our API did not have lots of information or any kind of logos to display so we had to make the most of it and style a bit in order not to look too empty or boring.

#### Challenges for day 2
- When we request a certain information from the API, like for example the price, current market cap or supply, we were receiving a huge long number which we had to round and add commas in order to be more understandable.
- After some Google-ing we found the following (function below) that helped us display our large numbers properly.
- <img width="451" alt="Screenshot 2022-02-21 at 18 51 36" src="https://user-images.githubusercontent.com/94930059/155012238-4fd27ebf-2e42-4f32-a8d8-565b8b1bcc02.png">
- We then used the .toFixed() method that formats a number using fixed-point notation.
- <img width="896" alt="Screenshot 2022-02-21 at 18 55 10" src="https://user-images.githubusercontent.com/94930059/155012587-6ab56061-d9a8-4c02-931d-01db9d356dcf.png">
- We applied some styling using React Bootstrap to all the pages and made our website mobile friendly.
- ![Screenshot 2022-02-21 at 18 59 35](https://user-images.githubusercontent.com/94930059/155013022-55eff287-7b14-4cf2-9ff1-547bf49785b1.png)

[Back to the top ⬆️](#idtext)

## Wins 
- Learned to use React for the first time to build an app from scratch and to set up an application with multiple components.
- It was my first time pair coding on any project and I learnt a lot about collaborating, communicating and planning.
- First time doing a hackathon-style project and working under time pressure.

## Future wish list 
 ##### Because we chose a faulty API we spend a lot of time trying to figure out how to fix the error and how to always have a successful axios request ,our website is quite simple. I am happy with the results but here are the things I would improve or add if we had more time :
- Adding a Login and Register options where user can create an account and save their favourite crypto currencies and access them faster at any time
- Add more content and visuals to keep the users engaged 

## Author info
- LinkedIn - [Ali Ali](https://www.linkedin.com/in/alibeniaminali/)

[Back to the top ⬆️](#idtext)
