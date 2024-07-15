import inquirer from "inquirer";

let todos : string[] = ["bilal", "umer"];

async function createTodo(todos:string[]){
    do{
        let answer = await inquirer.prompt({
            type: "list",
            message: "Select an operation",
            name: "Operation",
            choices: ["add", "update", "view", "delete"]
        })
        if(answer.Operation === "add"){
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in todos",
                name: "todo"
            })
            todos.push(addTodo.todo)
            console.log(todos)
        }
        if(answer.Operation === "update"){
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Select item that you want to update",
                name:"todo",
                choices:todos.map(item => item)
            })
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add item in todos",
                name: "todo"
            })
            let newTodos = todos.filter(val => val !== updateTodo.todo)
            todos=[...newTodos, addTodo.todo]
            console.log(todos)
        }
        if(answer.Operation === "view"){
            console.log(todos)
        }
        if(answer.Operation === "delete"){
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Select item that you want to update",
                name:"todo",
                choices:todos.map(item => item)
            })
            let newTodos = todos.filter(val => val !== deleteTodo.todo)
            todos = [...newTodos]
            console.log(todos)
        }
    }while(true)
}
createTodo(todos)