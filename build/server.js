"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Routing_1 = __importDefault(require("./Routing"));
// =================================================================================================
//                                      SERVER CONFIGURATION
// =================================================================================================
// INITIATE THE SERVER APP
const app = (0, express_1.default)();
// SERVER ACCEPT JSON & URLENCODED REQUEST
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// ALLOW CORS
app.use((0, cors_1.default)({ origin: '*' }));
// =================================================================================================
//                                        SERVER ROUTING
// =================================================================================================
// CONNECT THE ROUTING TO THE SERVER
app.use(Routing_1.default);
// =================================================================================================
//                                       RUNNING THE SERVER
// =================================================================================================
// RUN THE SERVER ACCORDING TO MODE
app.listen(process.env.PORT || 2828, () => {
    console.log(`Server running on 'http://localhost:${process.env.PORT || 2828}' !`);
});
