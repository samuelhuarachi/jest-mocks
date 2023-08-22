import { ReadingBRHtml } from "../../../src/services/GatewaysService/ReadingBRHtml";
jest.mock("../../../src/services/GatewaysService/ReadingBRHtml");

const MercadoPagoNotification = require("../../../../source/services/Payment/MercadoPago/Notification");
jest.mock("../../../../source/services/Payment/MercadoPago/Notification");

describe("onerfapi.js", () => {
    test("callbackGateway_1 com os parametros corretos", async () => {

        ReadingBRHtml.mockImplementation(() => {
            return {
                reading: () => {
                    return Promise.resolve(`<html>
                    <head>
                        <title>OneRF BR - Mock</title>
                    </head>
                    <body>
                        Neighbors
                        <ul>
                            <li>fe80::212:4b00:2b4d:d92a</li>
                            <li>fe80::212:4b00:2b4d:e32b</li>
                            <li>fe80::212:4b00:2b4d:df46</li>
                        </ul>
                        Routing links
                        <ul>
                            <li>aaaa:7558:9102:296:212:4b00:2b4d:e32b (parent: aaaa:7558:9102:296:212:4b00:2b4d:d5a8) 420s</li>
                            <li>aaaa:7558:9102:296:212:4b00:2b4d:d92a (parent: aaaa:7558:9102:296:212:4b00:2b4d:d5a8) 420s</li>
                            <li>aaaa:7558:9102:296:212:4b00:2b4d:df46 (parent: aaaa:7558:9102:296:212:4b00:2b4d:e32b) 360s</li>
                        </ul>
                    </body>
                </html>`);
                },
            };
        });

        let spy = jest.spyOn(MercadoPagoNotification.prototype, "getUserEmailByNotificationId").mockImplementation(() => {
            return Promise.resolve("some_email@mail.com");
        });

    });
})
