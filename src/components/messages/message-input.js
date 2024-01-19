import { useState } from "react";
import { MicFill } from "react-bootstrap-icons";

const MessageInput = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputValue.trim() !== "") {
      // Call the parent component's function to handle sending the message
      onSendMessage(inputValue);

      // Clear the input after sending the message
      setInputValue("");
    }
  };

  return (
    <div className="flex justify-between items-center ">
      <input
        type="text"
        placeholder="Type here..."
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="input mr-3  rounded-lg py-5 focus:outline-none"
      />
      <button
        onClick={sendMessage}
        className="p-3 mr-5 bg-primary/60 text-[white] rounded-full hover:bg-blue-600 focus:outline-none"
      >
        <MicFill size={28} />
      </button>
    </div>
  );
};

export default MessageInput;
