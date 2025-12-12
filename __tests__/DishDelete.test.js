const app = require("../app");
const request = require("supertest");

it("Delete a specific dish.", async () => {
  const dishName = "Pizza";

  const response = await request(app).delete(`/dishes/${dishName}`);
  expect(response.statusCode).toBe(200);
});
