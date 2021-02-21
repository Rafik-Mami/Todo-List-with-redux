import {UPDATE_TODO,ADD_TODO} from './action'
import {todos} from './state'
export let reducer=(state=todos,action)=>
{
    switch(action.type){
        case ADD_TODO:
        const newTodos=[...state]
        newTodos.push(action.payload)
        console.log(action.payload)
        return newTodos;
        case UPDATE_TODO:
         const newTod=[...state]
       let index=-1
        for(let i=0;i<newTod.length;i++)
        {            index++
            
            if(newTod[i].id===action.payload.id)
            {break;}
        }
        console.log(index)
        if(index!=-1){
            newTod[index]=action.payload
        return newTod
        }
        

           
    }
                return state
    
}