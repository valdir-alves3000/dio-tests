import { User } from "../entities/User";
import { getMockUser } from "./../__mocks__/mockUser";
import { UserService } from "./UserService";

jest.mock("../repositories/UserRepository");
const mockUserRepository = require("../repositories/UserRepository");

describe("UserService", () => {
  const mockUser: User = getMockUser();

  const userService = new UserService({
    userRepository: mockUserRepository,
    name: "valdir",
    email: "valdir@alves.com",
  });

  it("Deve retornar o usuário, quando for salvo", async () => {
    mockUserRepository.save = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockUser));

    const user = await userService.createUser();
    expect(user).toHaveProperty("user_id");
    expect(user).toMatchObject({
      name: "valdir",
      email: "valdir@alves.com",
    });
  });
});
