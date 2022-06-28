import { User } from "../entities/User";
import { makeMockRequest } from "../__mocks__/mockRequest";
import { makeMockResponse } from "../__mocks__/mockResponse";
import { getMockUser } from "../__mocks__/mockUser";
import { UserController } from "./UserController";

const mockUser: User = getMockUser();

jest.mock("../services/UserService", () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return {
        createUser: jest
          .fn()
          .mockImplementation(() => Promise.resolve(mockUser)),
      };
    }),
  };
});

describe("UserController", () => {
  const userController = new UserController();

  it("Deve retornar status 201 e usuário criado", async () => {
    const request = makeMockRequest({
      body: {
        name: "valdir",
        email: "valdir@alves.com",
      },
    });

    const response = makeMockResponse();
    await userController.createUser(request, response);
    expect(response.state.status).toBe(201);
  });
});
