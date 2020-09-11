import React, {useState,createContext,useReducer} from 'react';
import './App.css';
// import Counter from './components/Counter'
// import CounterHook from './components/CounterHook'
// import FormHook from './components/FomrHook'
// import ItemHook from './components/ItemHook'
// import ClassEffect from './components/ClassEffect'
// import EffectHook from './components/EffectHook'
// import MouseEventEffect from './components/MouseEventEffect' 
// import DataFetch from './components/DataFetch'
// import DataFetchById from './components/DataFetchById'
// import ComponentC from './components/ComponentC'
// import CounterReducer from './components/CounterReducer'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

// export const UserContext = createContext()
// export const LanguageContext = createContext()

export const CountContext = createContext()

const initialState = {
  firstCounter:0,
  secondCounter:10
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'increment1':
      return { ...state ,firstCounter: state.firstCounter + action.value}
    case 'decrement1':
      return { ...state ,firstCounter: state.firstCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}


function App() {
  // const [user, setUser] = useState({name:'yamada',age:'32'})
  // const [language,setLanguage] = useState('日本語')
  const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="App">
      <h1>count:{count.firstCounter}</h1>
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <FormHook />
      <ItemHook /> */}
      {/* <ClassEffect/> */}
      {/* <EffectHook /> */}
      {/* <MouseEventEffect/> */}
      {/* <DataFetch /> */}
      {/* <DataFetchById /> */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterReducer /> */}
      <CountContext.Provider value = {{countState:count,countDispatch:dispatch}}>
        <ComponentA />
        <ComponentB />
      </CountContext.Provider>
    </div>
  );
}

export default App;
