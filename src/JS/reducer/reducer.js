// 1          import

import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../action_types/action_Types";



// 2 INIT STATE
const initialState = {
    listTasks : [{id : Math.random() , text :"text1", isDone:false,},
                {id : Math.random() , text :"text2", isDone:false,},
    ],
}; 

// 3 pure function

const listReducer = (state =initialState, {type, payLoad}) => {
    switch (type) {
        case ADD_TASK:
            return{...state, listTasks : [...state.listTasks, payLoad]};
        case DELETE_TASK:
            return {...state, listTasks: state.listTasks.filter((el) => el.id !== payLoad),}

        case DONE_TASK:
            return{...state, listTasks: state.listTasks.map( (el) => el.id === payLoad ? {...el , isDone:!el.isDone }: el
                ),
        };

        case EDIT_TASK:
            return { ...state, listTasks: state.listTasks.map((el) => el.id === payLoad.id ? {...el, text : payLoad.newTask} : el
                ),
            };
    
        default:
            return state ;
    };
};

export default listReducer;

