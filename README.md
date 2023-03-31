# GPT-Interview-Bot
GPT-3.5 App that answers personalized questions on behalf of myself!

# What is this?
Welcome to my Ask-me-anything interview chatbot! 

This chatbot is designed to answer questions on my behalf and provide a modern version of a bio. It's a great way to showcase my personality and expertise while engaging with potential employers, clients, or collaborators.

# Story

November 30, 2022. ChatGPT's open beta was officially released to the public for mass-use. I had heard of it relatively quickly through my friends and through popular coding form HackerNews. This was something special. With great products come strong word-of-mouth, and so inevitably came the tutorials on youtube, the medium articles, and the LinkedIn posts about ChatGPT. It was a unanimous agreement: AI is no longer a science fiction topic; it is here to stay.

As an aspiring young developer, naturally I wanted to try my hand at making something with this cool new piece of tech! At the same time, I had started preparing for the RBC Summer Tech Labs position, with applications opening up a few months away. I would need a portfolio, and I would want it to be original. Thus came my idea: What if, instead of having a static webpage talking about myself, what if viewers could just ASK? This could certainly be done with ChatGPT, though I would have to figure out how to give it information about myself to talk about.

Over the next few months, I brainstormed how I could accomplish this, and after seeing a large number of youtube videos on GPT, I stumbled upon a video from Hugging Face AI, talking about "pre-prompting" and how you could give the AI context through system messages, instead of going through and fine-tuning an entire new algorithm. Thus, GPT-Interview-Bot was born.

## How it works
![ReadmeGPTInterviewBotAnnotated](https://user-images.githubusercontent.com/75395781/229025816-c2d3176a-8862-4dc6-ba35-8067c45e7b04.png)

The chatbot is built using the GPT-3 language model by OpenAI. When a user asks a question, the chatbot processes the message, and adds on a custom "pre-prompted" message that I have programmed into the API request (see `apiRequestBody`), and generates a response that is displayed in the chat window.

To make the chatbot more interactive and engaging, I've added various features such as icons, typing indicators, and animations. These features help to create a more natural and conversational experience for the user.

## DEMO LINK COMING SOON!

# Some hiccups along the way 😂
![image](https://user-images.githubusercontent.com/75395781/229016675-7e484234-e088-4259-8094-442144955441.png)
