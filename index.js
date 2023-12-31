const redux=require('redux')
const createStore=redux.createStore
const combineReducers=redux.combineReducers
// import redux from"redux";

// creating action

const BUY_CAKE="BUY_CAKE";
const BUY_ICE_CREAM="BUY_ICE_CREAM";

function buyCake(){
    return{
        type:BUY_CAKE
    }
}

function buyIceCream(){
    return{
        type:BUY_ICE_CREAM
    }
}
// making reducer using previous state and action to create a new state

const cakeInitialState={
    numOfCakes:10
}
const iceCreamInitialState={
    numOfIceCream:20
}

const cakeReducer=(state=cakeInitialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}
const iceCreamReducer=(state=iceCreamInitialState,action)=>{
    switch(action.type){
        case BUY_ICE_CREAM: return{
            ...state,
            numOfIceCream:state.numOfIceCream-1
        }
        default:return state
    }
}


// creating store
const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store= createStore(rootReducer)
console.log('Initial state : ', store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated state : ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsubscribe();