export interface LoginForm {
  username: string;
  password: string;
}

export interface LoginProps {
  onLogin: () => void;
}
