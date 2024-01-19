/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TopNav from "../../src/components/navbar/top-nav";
import Card from "../../src/components/ui/Card";
import Link from "next/link";
import {
  TelephoneInbound,
  TelephoneOutbound,
  TelephoneX,
} from "react-bootstrap-icons";
import BackButton from "../../src/@core/utils/back-button";

const dummyChatsData = [
  {
    id: 1,
    user: "User 1",
    message: "Hello!",
    unreadMessages: 2,
    time: "12:30 PM",
    image: "/assets/profile.png",
  },
  {
    id: 2,
    user: "User 2",
    message: "How are you?",
    unreadMessages: 1,
    time: "1:45 PM",
    image: "/assets/profile.png", // Add the path to the user image
  },
  {
    id: 3,
    user: "User 2",
    message: "How are you?",
    unreadMessages: 1,
    time: "1:45 PM",
    image: "/assets/profile.png", // Add the path to the user image
  },
];

const dummyCallsData = [
  {
    id: 1,
    user: "User 1",
    direction: "incoming",
    day: "Monday",
    time: "10:00 AM",
    image: "/assets/profile.png",
  },
  {
    id: 2,
    user: "User 2",
    direction: "outgoing",
    day: "Wednesday",
    time: "3:30 PM",
    image: "/assets/profile.png",
  },
  {
    id: 3,
    user: "User 3",
    direction: "rejected",
    day: "Friday",
    time: "5:45 PM",
    image: "/assets/profile.png",
  },
];

function Messages() {
  const router = useRouter();
  const [currentView, setCurrentView] = useState("chats"); // Default to "chats"

  useEffect(() => {
    // Check the query parameters in the URL
    const { view } = router.query;

    // Update the currentView state based on the query parameter
    if (view === "calls") {
      setCurrentView("calls");
    } else {
      setCurrentView("chats");
    }
  }, [router.query]);

  return (
    <div className=" p-5">
      <BackButton title="Inbox" />
      <div className="w-full flex mt-10">
        {/* Toggle buttons for chats and calls */}
        <button
          className={`w-full font-bold border-b-2 pb-5 border-b-mutedText ${
            currentView === "chats"
              ? "text-primary border-b-2 !border-b-4 !border-primary"
              : ""
          }`}
          onClick={() => setCurrentView("chats")}
        >
          Chats
        </button>
        <button
          className={`w-full font-bold border-b-2 pb-5 border-b-mutedText ${
            currentView === "calls"
              ? "text-primary !border-b-4 !border-primary"
              : "border-gray-300"
          }`}
          onClick={() => setCurrentView("calls")}
        >
          Calls
        </button>
      </div>

      <div className="mt-10">
        {/* Display content based on the current view */}
        {currentView === "chats" && (
          <div>
            {dummyChatsData.map((chat) => (
              <Card key={chat.id} className="my-3">
                <Link
                  href={`/messages/${chat.id}`}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <img
                      src={chat.image}
                      alt={`User ${chat.id}`}
                      className="w-13 h-14 rounded-lg mr-2"
                    />
                    <div>
                      <p className="font-bold text-left mb-1">{chat.user}</p>
                      <p className="text-mutedText ">{chat.message}</p>
                    </div>
                  </div>
                  <div className="!text-right">
                    <p className="bg-primary mx-auto mb-1 text-right rounded-full w-min px-2 !h-min text-white">
                      {chat.unreadMessages}{" "}
                    </p>
                    <p className="block text-s text-mutedText">{chat.time}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        )}

        {currentView === "calls" && (
          <div>
            {/* Render list of calls using Card component */}
            {dummyCallsData.map((call) => (
              <Card key={call.id} className="my-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center w-full">
                    <img
                      src={call.image}
                      alt={`User ${call.id}`}
                      className="w-14 h-14 rounded-lg mr-2"
                    />
                    <div className="w-full ">
                      <p className="text-left mb-3 font-bold">{call.user}</p>
                      <div className="w-fit flex items-center  text ">
                        {call.direction === "incoming" && (
                          <div className="flex items-center">
                            <TelephoneInbound
                              size={16}
                              className="mr-1 text-[#69DC22]"
                            />
                            Incoming
                          </div>
                        )}
                        {call.direction === "outgoing" && (
                          <div className="flex items-center">
                            <TelephoneOutbound
                              size={16}
                              className="mr-1 text-[#16E7E7]"
                            />
                            Outgoing
                          </div>
                        )}
                        {call.direction === "rejected" && (
                          <div className="flex items-center ">
                            <div className="text-error">
                              <TelephoneX size={16} className="mr-1" />
                            </div>
                            Rejected
                          </div>
                        )}
                        <span className="mx-1">|</span>
                        <span>{call.day}</span>
                        <span className="mx-1">{call.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-min">
                    {/* Display different icons based on the call direction */}
                    {call.direction === "incoming" && (
                      <div className="">
                        {" "}
                        <TelephoneInbound size={24} />
                      </div>
                    )}
                    {call.direction === "outgoing" && (
                      <TelephoneOutbound
                        color="rgb(111 56 197 / var(--tw-text-opacity))"
                        size={24}
                      />
                    )}
                    {call.direction === "rejected" && (
                      <TelephoneX
                        color="rgb(111 56 197 / var(--tw-text-opacity))"
                        size={24}
                      />
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;
