import getEntityManagerMock from "../__mocks__/getEntityManagerMock";
import { getMockUser } from "../__mocks__/mockUser";
import { User } from "./../entities/User";
import { UserRepository } from "./UserRepository";

describe("Userrepository", () => {
  const mockUser: User = getMockUser();

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
