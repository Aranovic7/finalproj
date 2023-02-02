1. Write about what the project is all about and introduce it to the reader.

The project is an app in react native which is a quiz app. 
So that you have to answer different questions and collect as many points as possible. 
It's a good app if you want to test your general education. 
The types of questions you get are entirely up to the user. 
I have made it possible to choose one of several different categories instead of having a mixed quiz.
However, I have not made ALL categories work (only sports work) as the purpose is only to show that the app actually works and fulfills its purpose.
I would also like to point out that the app I built on my own is a result of good learning while I myself wanted to test my limits and see what I can achieve as opposed to a simple TO DO list.

2. Provide an ordered list of components (top-down or bottom-up) in your project; like my main component app has component a, b and c. component a and b have d while component c has e, f and g

My ordered list of components:
First of all I have my App.js file which only includes the stack.navigator and navigation.container to be able to navigate within the files in my app.
For example if I wanna log in I want to navigate from home page to a Log-in Screen, or if the user wants to navigate back, etc etc. My homepage however, is my Home.js file, this is where the user will start from and this file contains only “Home” component.
My LoginScreen.js have component LoginScreen and my Category.js file also only contains one component, namely: Category.
My QuizQuestions.js file however, has components “QuizQuestions”, “renderQuestion” and “renderResults”. 

3. Briefly write about the styling, design decisions, libraries that you’ve used (if any) and the APIs / concepts that we’ve been through in this course such as context, navigator, modal etc.

I started designing my project in figma because I didn't really know what the app would look like, so it was a good way for me to experiment with what I felt fit what I was looking for.
I already knew that I would make a quiz app from the beginning and that it wouldn't look gloomy, ideally give the user a feeling of positivity and joy that also suits a quiz app in my opinion.
This is why it mainly became the colors orange and white.
Orange gives many a feeling of welcome, while white symbolizes the feeling of calm, so I thought it was a good mix.
The design is very important to me and that's why I designed it in such a way that it should be simple and look nice so that anyone will have the chance to test their skills, regardless of age or gender, etc. 
In the app, I have also used a lot of things that I learned during the course. 
In fact, almost all the code is from what I learned during the lessons. 
This is noticeable quite clearly in that I used modals, for example, or navigators, arrays, custom components, touchable opacity, etc.
