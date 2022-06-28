import { randomUUID } from "crypto";
import getEntityManagerMock from "../__mocks__/getEntityManagerMock";
import { User } from "./../entities/User";
import { UserRepository } from "./UserRepository";

describe("Userrepository", () => {
  const mockUser: User = {
    user_id: randomUUID(),
    name: "valdir",
    email: "valdir@alves.com",
  };

  it("Deve retornar o usuário salvo, quando chamar a função save", async () => {
    const managerMock = await getEntityManagerMock({
      saveReturn: mockUser,
    });

    const userRepository = new UserRepository(managerMock);
    const user = await userRepository.save(mockUser);

    expect(user).toHaveProperty("user_id");
    expect(user).toMatchObject({
      name: "valdir",
      email: "valdir@alves.com",
    });
  });
});
