const onearfapi = require("../../../src/onerfapi");

describe("test describe", () => {
    test("test description", async () => {
        jest.spyOn(onearfapi, "callback_3");
        onearfapi.callback_3.mockImplementation(() => {
            return ".................";
        });
    });
});


