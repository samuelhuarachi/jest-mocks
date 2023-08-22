const Gateway = mongoose.model("Gateways");

describe("test describe", () => {
    test("teste description", async () => {
        jest.spyOn(Gateway, "findOne");
        Gateway.findOne.mockImplementation(() => {
            return Promise.resolve(".........");
        });
    });
});
