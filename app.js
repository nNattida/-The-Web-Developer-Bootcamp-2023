let input = prompt('What would you like to do ?');
const todo = [];

while(input!=='quit' && input!=='q'){
    if(input === 'list'){
        console.log('***************');
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('***************');
    } else if(input === 'new'){
        const newTodo = prompt('What is the new to do');
        todo.push(newTodo);
        console.log(`${newTodo} was added to the list`);
    } else if(input === 'delete'){
        const index = parseInt(prompt('What index do you want to delete ?'));
        if(!Number.isNaN(index)){
            console.log(`${todo[index]} was deleted from the list`);
            todo.splice(index, 1);
        } 
        else{
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do ?');
}

console.log('Quit!');
