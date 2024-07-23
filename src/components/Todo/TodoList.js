import { useEffect, useState } from "react"
import TodoItem from "./TodoItem";
import AddTodoForm from './AddTodoForm';
import EditTodoForm from './EditTodoForm';

function TodoList(){
    // data stored in form of array object
    const [todoData, setTodoData] = useState([]);
    // input value print
    const [inputChangeValue, setInputChangeValue] = useState('')
    const [isEditEnable, setIsEditEnable] = useState(false);
    // need another state for updating the current index
    const [currentTodoIndex, setCurrentTodoIndex] = useState('');

  
    const formSubmitHandle =(e)=>{
        e.preventDefault()
        console.log(inputChangeValue);
        let id= new Date().getTime();
        let todotext = inputChangeValue;
        if(todotext === ''){
            alert('Pleas add some task')
        }
        // setTodoData([...todoData,{id:id,text:todotext}])
        // stooring the updated state
        setTodoData((prevState)=>{
            let updateTodo = [...todoData,{id:id,text:todotext}]
            window.localStorage.setItem('todoData',JSON.stringify(updateTodo))
            return updateTodo; 
        })
        console.log(todoData)
    }

    const deleteHandle =(todoItemText)=>{
        console.log(todoItemText)
        // setTodoData([...updateTodo])
        setTodoData((prevState)=>{
            let updateTodo = todoData.filter((item)=>{
                return item.id !== todoItemText.id
            })
            window.localStorage.setItem('todoData',JSON.stringify(updateTodo));
            return updateTodo; 
        })     
    }

    const editHandle = (todoItemText)=>{
        console.log('sdfds')
        setIsEditEnable(true)
        setInputChangeValue(todoItemText.text);
        setCurrentTodoIndex(todoItemText.id);
    }

    const updateHandle =(e)=>{
        e.preventDefault()
        console.log('hh', inputChangeValue);
        // uppdating the input value
        let updatedChangeValue = inputChangeValue;

        let updatedTodos = todoData.map((item)=>{
            if(item.id === currentTodoIndex){
                item.text = updatedChangeValue;
            }
            return item;
        })
        setTodoData([...updatedTodos])
        window.localStorage.setItem('todoData',JSON.stringify(updatedTodos))
        setIsEditEnable(false);
        setInputChangeValue('')

    }
    useEffect(()=>{
        let todoStayPage = JSON.parse(window.localStorage.getItem('todoData'));

        if(todoStayPage){
            setTodoData(todoStayPage)
        }
        else{
            setTodoData([])
        }

    },[])
    return<>
        <div>
            <h1>Hi</h1>
            {
               !isEditEnable &&   <AddTodoForm formSubmitHandle={formSubmitHandle} 
               inputChangeValue={inputChangeValue} 
               setInputChangeValue={setInputChangeValue}
           />
            }
           

            {isEditEnable &&      <EditTodoForm updateHandle={updateHandle} 
                inputChangeValue={inputChangeValue} 
                setInputChangeValue={setInputChangeValue}
                setIsEditEnable ={setIsEditEnable}                />
                
            }
       

            {
              todoData.map((e)=>{
                
                return  <TodoItem key={e.id} todoItemText={e} 
                deleteHandle={deleteHandle} editHandle = {editHandle}/>
                
               
              })  
            }

        </div>
    </>
}

export default TodoList;