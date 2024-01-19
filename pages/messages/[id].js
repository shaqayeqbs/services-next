import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import BackButton from "../../src/@core/utils/back-button";
import { Telephone } from "react-bootstrap-icons";
import MessageInput from "../../src/components/messages/message-input";
const Message = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dummy data for messages
  const messages = [
    {
      user: "Kaley",
      text: "Hello YOu. This is Lorem Ipsum. Nice to meet you. :)",
      time: "01:06",
    },
    {
      user: "You",
      text: "Hello Kaley. This is Lorem Ipsum. Nice to meet you. This is Lorem Ipsum. Nice to meet you.",
      time: "01:06",
    },
    {
      user: "Kaley",
      text: "Hello YOU. This is Lorem Ipsum. Nice to meet you. :)",
      time: "04:52",
    },
    {
      user: "You",
      text: "Hello Kaley. This is Lorem Ipsum. Nice to meet you. This is Lorem Ipsum. Nice to meet you.",
      time: "04:52",
    },
    { user: "You", text: "Ok then...", time: "04:59" },
  ];

  // Dummy data for user background color
  const userColors = {
    Kaley: "bg-[white]",
    You: "bg-primary/60 text-white",
  };

  const sendMessage = (message) => {
    // Implement the logic to send the message (e.g., through WebSocket, API, etc.)
    console.log("Sending message:", message);
  };
  const [userMessages, setUserMessages] = useState([]);

  useEffect(() => {
    // Filter messages based on the user
    setUserMessages(messages);
  }, [id]);

  return (
    <div className="p-5 relative min-h-screen ">
      <div className="flex items-center mb-10 justify-between">
        <BackButton title="username" />
        <Link href="call-screen">
          <Telephone size={24} />
        </Link>
      </div>
      <div className="flex   ">
        <div className="max-w-md w-full">
          <div className="flex flex-col  w-full ">
            {userMessages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 p-4 w-fit text-left max-w-[80%] rounded-xl ${
                  message.user === "You"
                    ? "!text-[white] rounded-tr-none "
                    : "rounded-tl-none"
                } ${userColors[message.user]}`}
                style={{
                  alignSelf:
                    message.user === "Kaley" ? "flex-start" : "flex-end ",
                }}
              >
                <p className="text-left text">{message.text}</p>
                <div className="text-right mt-2  text-s opacity-50">
                  {message.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        {" "}
        <MessageInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Message;
