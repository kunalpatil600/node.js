const fs = require("fs")
const express = require("express");
const app = express();
app.use(express.json())
const cors = require('cors');
app.use(cors());
const PORT = 3500;

app.get("/todo", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
            res.send(err)
        }
        else {
            const todo = JSON.parse(data);
            res.send(todo)
            console.log(todo)
        }
    })
})

app.post("/todo", (req, res) => {
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) console.log(err);
        else {
            const todo = JSON.parse(data);
            todo.tasks.push(req.body);
            fs.writeFile("./db.json", JSON.stringify(todo), (err) => {
                if (err) console.log(err);
                else {
                    res.send("Task added");
                }
            })
        }
    })
})

app.put("/todo/:id", (req, res) => {
    const taskId = req.params.id;  // Extract task ID from URL
    console.log(`Updating task with ID: ${taskId}`);

    // Read db.json file
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading db.json:", err);
            return res.status(500).send("Error reading the database");
        }

        // Parse the data
        const todo = JSON.parse(data);
        console.log("Current tasks in db.json:", todo.tasks);

        // Find the index of the task to update
        const taskIndex = todo.tasks.findIndex((task) => task.id == taskId);
        console.log(`Task index for ID ${taskId}:`, taskIndex);

        if (taskIndex === -1) {
            return res.status(404).send("Task not found");
        }

        // Log the current task before updating
        console.log("Task before update:", todo.tasks[taskIndex]);

        // Merge updated data with the existing task
        const updatedTask = { ...todo.tasks[taskIndex], ...req.body };
        console.log("Updated task:", updatedTask);

        // Ensure the ID stays the same after update
        updatedTask.id = taskId;

        // Update the task in the array
        todo.tasks[taskIndex] = updatedTask;

        // Write the updated data back to db.json
        fs.writeFile("./db.json", JSON.stringify(todo, null, 2), (err) => {
            if (err) {
                console.log("Error writing to db.json:", err);
                return res.status(500).send("Error saving the updated task");
            }
            res.send("Task updated successfully");
        });
    });
});



app.delete("/todo/:id", (req, res) => {
    const taskId = req.params.id
    fs.readFile("./db.json", "utf-8", (err, data) => {
        if (err) console.log(err)
        else {

            const todo = JSON.parse(data);
            const taskIndex = todo.tasks.findIndex((task) => task.id == taskId)

            if (taskIndex != -1) {
                todo.tasks = todo.tasks.filter((tasks) => tasks.id != taskId)
                fs.writeFile("./db.json", JSON.stringify(todo), (err) => {
                    if (err) { res.send(err) }
                    else {
                        res.send("Task deleted")
                    }
                })
            }
            else {
                res.send("nothing...");
            }
        }
    })
})


app.listen(8080, () => {
    console.log("Server is running on 8080")
})