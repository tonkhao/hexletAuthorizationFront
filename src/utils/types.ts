export type IdType = string | undefined;

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  userId: string;
}

export interface VerifyCodePayload {
    code: string
}