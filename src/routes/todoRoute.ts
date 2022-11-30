import express from 'express';
import {createTodo, getTodo, updateTodo, removeTodo} from '../controller/todoController';

const router = express.Router();

router.post("/create", createTodo);
router.get("/getTodo", getTodo);
router.patch("/updateTodo/:_id", updateTodo);
router.delete("/delete/:_id", removeTodo);


export default router;

