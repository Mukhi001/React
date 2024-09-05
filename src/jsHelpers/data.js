export const createTodo=()=>{
    const todos=[];

    for(let i=1;i<=100;i++){
     const myObject={
        id:i,
        text:`Item ${i}`
    };
    todos.push(myObject)
    }
    console.log(todos);
    return todos
}
