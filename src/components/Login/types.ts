export interface LoginProps {
  onLogin: (loginPayload: LoginPayload) => void;
}

export interface LoginPayload {
  username: string;
  password: string;
}
