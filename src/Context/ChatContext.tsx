import React, { createContext, useState } from "react";

type ChatContextProviderProps = {
  children: React.ReactNode;
};

type ChatContextType = {
  searchView: boolean;
  isProfile: boolean;
  hide: boolean;
  setSearchView: React.Dispatch<React.SetStateAction<boolean>>;
  setIsProfile: React.Dispatch<React.SetStateAction<boolean>>;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatContextProvider = ({ children }: ChatContextProviderProps) => {
  const [searchView, setSearchView] = useState<boolean>(false);
  const [isProfile, setIsProfile] = useState<boolean>(false);
  const [hide, setHide] = useState(true);

  return (
    <ChatContext.Provider
      value={{
        searchView,
        setSearchView,
        isProfile,
        setIsProfile,
        hide,
        setHide,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
