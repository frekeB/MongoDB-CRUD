import {Request, Response} from 'express';
import app from '../app';
import Todo from '../model/todoModel';




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

export const getTodo = async (req:Request, res:Response) => {
    try{
        const todo = await Todo.find()
        return res.status(200).json({todo})
    }catch(err){
        return res.status(500).json({
            message:'internal server error',
            routes:"todo/get-todo"
        })
    }
}
export const createTodo = async (req: Request, res: Response) => {
    try{
        const {description, status} = req.body;
        const todo = await Todo.find();
        if(todo){
            const todos = await Todo.create({
                description,
                status
            })
            return res.status(201).json({
                status: 'success',
                data: todos
            })
        }
        return res.status(400).json({
            todo
        })
    }catch(err){
        return res.status(500).json({
            message:'internal server error',
            routes:"todo/create"
        })
    }
}
export const updateTodo = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
 const {description, status} = req.body;
 const updatetodo = await Todo.findOne({"_id": id});
 if(updatetodo){
    const todo = await Todo.updateOne({"_id": id},{
        description, status
    })
    return res.status(200).json({
        status: 'updated successfully',
        data: todo
    })
    }
    return res.status(400).json({
        message: "unidentified data"
     }) 
}catch(err){
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/update-todo/:id'
         })  
    }
}
export const removeTodo = async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
        
        const deletetodo = await Todo.findOneAndDelete({"_id": id})

        return res.status(200).json({
           message: "deleted successfully"
        })
    
        return res.status(400).json({
            message: "unidentified data"
         }) 
    }catch(err){
        return res.status(500).json({
            message: 'internal server error',
            routes: 'todo/remove-todo/:id'
         })
    }
}