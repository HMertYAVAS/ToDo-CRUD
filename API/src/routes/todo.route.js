import express, { Router } from "express";
import { createTodoItem, deleteTodoItem, getTodoItems, test, updateTodoItem } from "../controller/todo.controller.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/test", test);
router.post("/createTodoItem",verifyToken,createTodoItem)
router.get("/getTodoItems",verifyToken,getTodoItems)
router.delete("/deleteTodoItem/:todoId/:userId",verifyToken,deleteTodoItem)
router.put('/updateTodoItem/:todoId/:userId', verifyToken, updateTodoItem)


export default router;
