import { errorHandler } from "../utils/error.js";
import Todo from "../models/todo.model.js";

export const test = (req, res) => {
    res.json({ message: "Working this Todo API!" });
  };

  export const createTodoItem = async (req, res, next) => {
    if (!req.user) {
      return next(errorHandler(403, "You are not allowed to create a post"));
    }
    if (!req.body.title) {
      return next(errorHandler(400, "Please provide all required fields"));
    }
    
    const newTodo = new Todo({
      ...req.body,
      userId: req.user.id,
    });
  
    try {
      const savedTodo = await newTodo.save();
      res.status(200).json(savedTodo);
    } catch (error) {
      next(error);
    }
  };

  export const getTodoItems = async (req, res, next) => {
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === "asc" ? 1 : -1;
  
      //querry
      const todo = await Todo.find({
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.priorityId && { priorityId: req.query.priorityId }),
        ...(req.query.finish && { finish: req.query.finish }),
        ...(req.query.starred && { starred: req.query.starred }),
        ...(req.query.postId && { _id: req.query.postId }),
        ...(req.query.searchTerm && {
          $or: [
            { title: { $regex: req.query.searchTerm, $options: "i" } },
          ],
        }),
      })
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const totalTodos = await Todo.countDocuments();
  
 
      res.status(200).json({
        todo,
        totalTodos
      });
    } catch (error) {
      next(error);
    }
  };

  export const deleteTodoItem = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
      return next(errorHandler(403, "You are not allowed delete this post" + req.params.userId));
    }
    try {
      await Todo.findOneAndDelete(req.params.todoId);
      res.status(200).json("this post has been deleted");
    } catch (error) {
      next(error);
    }
  };

  export const updateTodoItem = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
      return next(errorHandler(403, 'You are not allowed to update this post'));
    }
    try {
      const updatedTodoItem = await Todo.findOneAndUpdate(
        req.params.postId,
        {
          $set: {
            title: req.body.title,
            comment: req.body.comment,
            priorityId: req.body.priorityId,
            starred:req.body.starred,
            finish:req.body.finish
          },
        },
        { new: true }
      );
      res.status(200).json(updatedTodoItem);
    } catch (error) {
      next(error);
    }
  };
  