// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    BOOM:"BOOM",
    check:"CHECK"
    
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const check =( month, day) => ({
    type: Types.DELETE_ITEM,
    mon:month,
    da:day
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
    check,
    Types
  };