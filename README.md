# GPT-Interview-Bot
GPT-3.5 App that answers personalized questions on behalf of myself!

## <a>DEMO LINK COMING SOON!</a>

# What is this?
Welcome to my Ask-me-anything interview chatbot! 

This is a custom chatbot buit on GPT-3.5 that is designed to answer questions on my behalf and provide a modern version of a bio. Ask any question about me, and the AI Assistant will answer, in real time!

# Story

On November 30, 2022, ChatGPT's open beta was officially released to the public for mass-use. I had heard of it through my friends and through popular coding forum HackerNews, and I knew that this was something special. With great products come strong word-of-mouth, and so inevitably came the tutorials on youtube, the medium articles, and the LinkedIn posts about ChatGPT. It was a unanimous agreement: AI is no longer a science fiction topic; it is here to stay.

As an aspiring young developer, naturally I wanted to try my hand at making something with this cool new piece of tech! At the same time, I had started preparing for the RBC Summer Tech Labs position, with applications opening up a few months away. Thinking ahead, I knew that I would need to make a portfolio website, and of course, I would want it to be original, because if you know anything about me, I will not settle for the default 😄. Thus came my idea: What if, instead of having a static webpage talking about myself, viewers could just ASK me? Before, I would have had to sit at my computer and answer each and every question, but with AI, this could be automated, I thought.

Over the next few months, I brainstormed how I could accomplish this. ChatGPT is very interesting in that everyone knows how to use it, but hardly anyone knows how it works internally. I had to learn a ton about tokenization, API calling, and whether or not I would need to build my own AI model. Thankfully, I stumbled upon a video from Hugging Face AI, talking about "pre-prompting" and how you could give the AI context through system messages, instead of going through and fine-tuning an entire new algorithm. This revolutionized everything. I wouldn't need to train my computer on a bazillion different questions about myself, I could use OpenAI's base product, which is DaVinci 003, and build upon it with futher pre-prompting. This is the story of GPT-Interview-Bot.

## How it works
![ReadmeGPTInterviewBotAnnotated](https://user-images.githubusercontent.com/75395781/229025816-c2d3176a-8862-4dc6-ba35-8067c45e7b04.png)


The chatbot is built using the GPT-3 language model by OpenAI. When a user asks a question, the chatbot processes the message, and adds on a custom "pre-prompted" message that I have programmed into the API request (see `apiRequestBody`), and generates a response that is displayed in the chat window.

To make the chatbot more interactive and engaging, I've added various features such as icons, typing indicators, and animations. These features help to create a more natural and conversational experience for the user.

# Future work
In the near future, I plan to embed this proof-of-concept into my future portfolio site and upgrade the AI model to GPT-4.

# Some hiccups along the way 😂
![image](https://user-images.githubusercontent.com/75395781/229016675-7e484234-e088-4259-8094-442144955441.png)
