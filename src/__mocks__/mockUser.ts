import { randomUUID } from "crypto";
import { User } from "../entities/User";

export const getMockUser = (): User => ({
  user_id: randomUUID(),
  name: "valdir",
  email: "valdir@alves.com",
});
