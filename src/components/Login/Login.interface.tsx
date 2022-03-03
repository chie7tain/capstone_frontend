export interface UserData {
  email: string;
  password: string;
}

export interface LoginProps {
  spinner: React.Dispatch<React.SetStateAction<boolean>>;
}
