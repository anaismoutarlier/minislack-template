import { RaisedButton, Message } from "@/components";

export default function Chat() {
  return (
    <div className="chat container">
      <div className="sider">
        <div>
          <img
            src="/avatar.png"
            alt="Anais Moutarlier"
            className="sider-avatar"
          />
          <h2>Anais Moutarlier</h2>
          <h3>anaismoutarlier@gmail.com</h3>
        </div>
        <RaisedButton>LOGOUT</RaisedButton>
      </div>
      <div className="content">
        <div className="message-container">
          <Message
            message={{
              content: "Hello there",
              sentAt: Date.now() - 400000,
              user: {
                id: 1,
                displayName: "Anais Moutarlier",
                photoURL: "",
              },
            }}
            isOwnMessage={true}
          />
          <Message
            message={{
              content: "Welcome to MiniSlack",
              sentAt: Date.now() - 2000,
              user: {
                id: 1,
                displayName: "Anais Moutarlier",
                photoURL: "",
              },
            }}
            isOwnMessage={false}
          />
        </div>
        <form className="input-container">
          <input placeholder="Enter your message here" />
          <RaisedButton type="submit">SEND</RaisedButton>
        </form>
      </div>
    </div>
  );
}
