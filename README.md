# Crypto Updates

### Overview

This is a pair coded project built with Ali Ali built during a 48 hour hackathon, during week 6 of our General assembly course. The brief was to build a front-end app using React, which accessed information from an external API using Axios requests.

Myself and Ali decided to build an app that shows live price updates of the 100 most popular crypto currencies. 


### Deployment Link

https://crypto-updates-aliali-neilmcfayden.netlify.app/


### Technologies Used

HTML5, React.js, React Bootstrap, React Router Dom, Axios, VS Code, Insomnia, Netlify, External API: Coincap API


### Building the Crypto Updates App 

After brainstorming different ideas, including a sports app, we decided to investigate the crypto currency API’s and found CoinCap. CoinCap displays live price information and the latest trade information such as pricing trends and volume traded. Below is what we could access through the API when sending an Insomnia request for bitcoin. 


![alt text](/assets/project1-1.png)


We decided to go with the API as we had a clear idea of what we wanted to do in the limited time we had. We made a basic wireframe outlining the pages we needed, and then began building the app. 

We used a basic background image for the homepage using a simple navigation bar. We then had 2 further pages. Crypto index page lists all 100 cryptocurrencies with a clickable link to each cryptocurrency. 

This link would then open to our crypto details page which would show the information for each crypto currency pulled from the API. 


![alt text](/assets/project2-2.png)


So our main app consisted of 3 routes paths using React. 


![alt text](/assets/project2-3.png)


### Axios requests to the API

We used React UseState to store the information from our Axios requests. We used async await to store the information once it arrived. 

We had to use data.data to go dig down one further level into the API to access the data we wanted. This is because the data was stored in an object inside or an array that was nested inside of an object. 


![alt text](/assets/project2-5.png)


We decided to use the JavaScript setInterval feature to make our app update prices every 30 minutes. This could be easily altered to provide more up-to-date pricing. 


![alt text](/assets/project2-6.png)


### Bugs and Challenges


CoinCap API turned out to be unreliable/ intermittent. We therefore had to build in a for loop to make the Axios request up to 10 times, so that if the request broke it would try again. You can see this in the code above. This was a hack to get the API working for us in the limited time that we had to build the App. 

We made the Axios request to retrieve price information every 30 minutes using Set Interval. This can be altered easily to get more regular price updates. 


![alt text](/assets/project2-7.png)


One interesting improvement we made was improving the readability of very large numbers for the total market cap and total supply of each currency. We wanted to display these numbers with commas to make them more readable, however, the API did not provide the numbers with commas.

We were able to import the function below, from a Google search, which insert commas into numbers. Again, this was a quick fix given the limited time we had. We were able to use this function with market cap, max supply and current supply. The function is below. This improves the readability and user experience for our site. 


![alt text](/assets/project2-8.png)


The numbersWithCommas function was then inserted into our crypto details page, as seen below, to deal with the large numbers. This was our completed code for the crypto details page. 


![alt text](/assets/project2-9.png)


The card for bitcoin is displayed below. The large numbers are now separated by commas. We believe this improved the user experience for our site. 


![alt text](/assets/project2-10.png)


### Key Learnings and Wins

I believe that getting a working functioning APP using React for the first time within the 48 hour timeframe was a big success. We also had to improvise a shaky API by integrating a for loop, and importing a function that would improve readability. 

I was also pleased with how the site looked visually, the site looks clean and easy to use. Finally I think our pair coding and teamwork were good, and it was a pleasure working with Ali. I regularly use the APP on my phone to check crypto currency prices.

Future Improvements

We could use a more reliable API and also import more information from other API’s to expand our site and include more information from each crypto currency. The idea of the App was to allow access to price information easily and quickly, therefore I wouldn't change too much else. 


