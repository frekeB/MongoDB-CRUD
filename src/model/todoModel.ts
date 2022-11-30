import mongoose,{Schema, Document}  from 'mongoose';


interface todoInstance{
    _id: string;
    description: string;
    status: boolean;
}

const todoSchema = new Schema({
    description: {type: String, required: true},
    status: {type: String, required: true},

},
{
    timestamps: true,
}

)

const Todo = mongoose.model<todoInstance>("Todo", todoSchema);

export default Todo;