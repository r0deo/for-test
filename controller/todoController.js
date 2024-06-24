import User from ('../models/userModel');
import Task from ('../models/taskModel');

//create a task for a user
// exports.createTask = async(req, res)=> {
//     try{
//         const userId = req.body;
//         const task = req.body;
//         const newTask = await Task.createTask({userId}, {new: true})
//         if(!newTask){
//             res.status(401)
//         }
//     }
// }