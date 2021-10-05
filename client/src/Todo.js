import React from "react";
import Tasks from "./Tasks";
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./App.css";

class Todo extends Tasks {
    state = { tasks: [], currentTask: "" };
    render() {
        const { tasks } = this.state;
        return (
            <div className="App flex">
                <Paper elevation={3} className="container" style={{width: '50vw'}}>
                    <div className="heading">Sayantan's TO-DO List</div>
                    <form
                        onSubmit={this.handleSubmit}
                        className="flex"
                        style={{ margin: "15px 0" }}
                    >
                        <TextField
                            variant="outlined"
                            size="small"
                            style={{ width: "80%" }}
                            value={this.state.currentTask}
                            required={true}
                            onChange={this.handleChange}
                            placeholder="Add New TO-DO"
                        />
                        <Button
                            style={{ height: "40px", borderColor: '#38a1f3' }}
                            color="primary"
                            variant="outlined"
                            type="submit"
                        >
                            Add 
                        </Button>
                    </form>
                    <div>
                        {tasks.slice(0).reverse().map((task) => {
                            let date =  new Date(task.date)
                            return (
                            <Paper
                                key={task._id}
                                className="flex task_container"
                            >
                                <Checkbox
                                    checked={task.completed}
                                    onClick={() => this.handleUpdate(task._id)}
                                    color="primary"
                                />
                                <div
                                    className={
                                        task.completed
                                            ? "task line_through"
                                            : "task"
                                    }
                                >
                                    {task.task}
                                    
                                </div>
                                <p style={{color: 'GrayText'}}>[ {date.toDateString()} ]</p>
                                <Button
                                    onClick={() => this.handleDelete(task._id)}
                                    color="secondary"
                                >
                                    delete
                                </Button>
                            </Paper>
                        )})}
                    </div>
                </Paper>
            </div>
        );
    }
}

export default Todo;
