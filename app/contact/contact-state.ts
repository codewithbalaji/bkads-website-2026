export type ContactState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  message?: string;
};

export const initialContactState: ContactState = { status: "idle" };
