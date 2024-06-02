"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Higher order function to avoid try-catch: Implementing DRY principle
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};
exports.default = catchAsync;
