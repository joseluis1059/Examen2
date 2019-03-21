// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    BOOM:"BOOM"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
 
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const boom = saludo =>({
    type: Types.BOOM,
    payload:saludo
  });
 
  export default {
    createItem,
    deleteItem,
    boom,
    Types
  };