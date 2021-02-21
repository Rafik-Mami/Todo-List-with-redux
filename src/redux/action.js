export const ADD_TODO="ADD_TODO"
export const UPDATE_TODO="UPDATE_TODO"
export function AddTodo(todo){
return {
  type:ADD_TODO,
  payload:todo

}

}

export function updateTodo(todo){
    return {
      type:UPDATE_TODO,
      payload:todo
    
    }
    
    }