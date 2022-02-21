# 📈 Crypto Updates 📉 
- Developed by [Ali Ali](https://github.com/alibeniaminali) and [Neil Mcfayden](https://github.com/Spurs129)
- I deployed this website on Netlify and it is available here 👉 [Crypto Updates](https://crypto-updates-aliali-neilmcfayden.netlify.app/) 👈

## Overview 
- A React app build during a 48 hours hackathon. My first pair project for General Assembly's Software Engineering Immersive Course.
- Crypto Updates is a website that requests the top 100 crypto currencies from Coincap API and users can see detailed live updates of the selected currency.

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
- <img width="474" alt="Screenshot 2022-02-21 at 17 33 07" src="https://user-images.githubusercontent.com/94930059/155003440-c6da62d7-d0ec-474a-9617-317c2359d278.png">
- Next, we used react-router-dom to set up our App.js as the router for the site.
- <img width="869" alt="Screenshot 2022-02-21 at 17 36 08" src="https://user-images.githubusercontent.com/94930059/155003796-ea817e6c-6450-432d-8902-7d153e14096e.png">
- <img width="869" alt="Screenshot 2022-02-21 at 17 36 32" src="https://user-images.githubusercontent.com/94930059/155003862-d8ec6481-ce24-4d86-b439-5ffed0952979.png">

#### Challenges for day 1
- Toward the end of Day 1 we realised that the API that we chose was faulty and we had to find a way to fix it or eventually look for another API and test it again which was time consuming and we had only 48 hours to finalise our project.
- The issue was that after a few requests the API was sending us the error below. To get the information needed the users had to refresh the page multiple times until the information is received, which probably would lead the users to leave our website.
- ![Screenshot 2022-02-21 at 17 53 38](https://user-images.githubusercontent.com/94930059/155006037-cfe96a9a-536b-4612-8376-a686a9e7253a.png)
- We wrote this function in case our get request is not successful, to run up to 10 attempts and until we get the information.
- <img width="785" alt="Screenshot 2022-02-21 at 18 11 51" src="https://user-images.githubusercontent.com/94930059/155007911-c4567252-5a75-470a-8e08-5dd55965cd40.png">
- <img width="822" alt="Screenshot 2022-02-21 at 17 50 15" src="https://user-images.githubusercontent.com/94930059/155007923-ab38e05e-5103-4f2f-86dd-e3744baf33e7.png">

### Day 2 :
- After fixing the issue with our API we started looking into how to display and fit single crypto information into separate cards.

## Author info
- LinkedIn - [Ali Ali](https://www.linkedin.com/in/alibeniaminali/)
