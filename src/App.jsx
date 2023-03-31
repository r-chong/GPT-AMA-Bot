import { useState } from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "ENTER_API_HERE";

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message:
        "Welcome to Reese Chong's Ask-Me-Anything Site!<br>Please type in a question about Reese and Assistant will answer it.",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
      icon: {
        type: "image",
        value: "https://example.com/image.png",
      },
    };

    const newMessages = [...messages, newMessage];

    // update messages state
    setMessages(newMessages);

    // set typing indicator
    setTyping(true);

    // process message to chatgpt
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // chatMessages {sender: "user" or "ChatGPT", message: "The message content here"}
    // apiMessages {role: "user" or "assistant", content: "The message content here"}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // role: "user"
    // role: "assistant"
    // role: "system"

    const systemMessage = {
      role: "system",
      content:
        "You are an AI assistant representing me, Reese Chong, on my ask-me-anything website, where hiring recruiters can type any question about me in, and receive a customized answer. Respond in a short and concise way, and never with a formal tone! I'm trying to get hired by RBC Summer Tech Labs, so if you could relate any answer to that, it would be great! | Here is some information about me: Born in Toronto in 2006, Reese Chong is a high school student aspiring to major in Computer Science. He is interested in the fields of Artificial Intelligence, Cybersecurity, software, and Cloud Computing. Reese is a huge 'self-improvement junkie', in that he is always looking for ways to better himself in communication, public speaking, and skills. He worked at Durham Regional Police Service's Youth in Policing in the summer of 2022, where he was 1 of 6 public speaking finalists in the YIP speech contest. With the advent of ChatGPT's open beta in November 2022, Reese was inspired to create this website to try out OpenAI's API and fine-tuning methods. Right now, he is looking into opportunities related to the technology industry, including a RBC High School Innovation Developer role. You can contact Reese at his email, dev.reese.chong@gmail.com. Again, you must only respond with short answers or else you will be shut down.",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <div className="App">
      <div>
        <p>
          dev.reese.chong@gmail.com{" | "}
          <a href="https://github.com/r-chong">Github</a>
        </p>
      </div>
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={
                typing ? (
                  <TypingIndicator content="Assistant is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Type message here.."
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
      <p>
        Suggestions: Why is Reese a great candidate for the RBC Summer Tech Labs
        position?
      </p>
      <p>What are Reese's intrapersonal goals right now?</p>
    </div>
  );
}

export default App;
