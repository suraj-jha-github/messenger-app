import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map(doc=>doc.data()));
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <img class="logo__messenger"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/800px-Facebook_Messenger_logo_2020.svg.png?w=10&h=10" alt="mesenger__logo"/>
      <h1>Messenger App</h1>
       <h1>Welcome <span className="userName__style">{username}</span> to the Messenger App</h1>

      <form className="app__form">
        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            send message
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(message=> (
              <Message  username={username} message={message} />
           ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
