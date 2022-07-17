"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// =================================================================================================
//                                     ROUTING CONFIGURATION
// =================================================================================================
// CREATE THE ROUTER
const route = (0, express_1.Router)();
// ALL ROUTES
// TODO : Create routes
route.get('/', (req, res) => res.sendStatus(200));
// =================================================================================================
//                                            OTHERS
// =================================================================================================
exports.default = route;
