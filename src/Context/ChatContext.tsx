import React, { createContext, useState } from "react";

type ChatContextProviderProps = {
  children: React.ReactNode;
};

type ChatContextType = {
  searchView: boolean;
  showAudio: boolean;
  setShowAudio:React.Dispatch<React.SetStateAction<boolean>>;
  setSearchView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const [searchView, setSearchView] = useState<boolean>(false);
  const [showAudio, setShowAudio] = useState<boolean>(false);

  return (
    <ChatContext.Provider value={{ searchView, setSearchView, showAudio, setShowAudio }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
