"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = exports.getTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
// app.get("/todoModel", async (request, response) => {
//     try {
//     const todo = await Todo.find({});
//   response.send(todo);
// } catch (error) {
//   response.status(500).send(error);
// }
//   });
//   app.post("/todomodel", async (request, response) => {
//     const todo = new Todo(request.body);
//     try {
//       await todo.save();
//       response.send(todo);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });
// export const createTodo = (req: Request, res: Response) => {
//     const body = req.body;
//     }
const getTodo = async (req, res) => {
    try {
        const todo = await todoModel_1.default.find();
        return res.status(200).json({ todo });
    }
    catch (err) {
        return res.status(500).json({
            message: 'internal server error',
            routes: "todo/get-todo"
        });
    }
};
exports.getTodo = getTodo;
const createTodo = async (req, res) => {
    try {
        const { description, status } = req.body;
        const todo = await todoModel_1.default.find();
        if (todo) {
            const todos = await todoModel_1.default.create({
                description,
                status
            });
            return res.status(201).json({
                status: 'success',
                data: todos
            });
        }
        return res.status(400).json({
            todo
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'internal server error',
            routes: "todo/create"
        });
    }
};
exports.createTodo = createTodo;
