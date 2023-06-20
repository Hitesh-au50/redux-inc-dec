import './App.css';
import { Increment , Decrement } from './Action/Action';
import { useSelector , useDispatch , Provider } from 'react-redux';
import store from './Store/Store';

function App() {

  const Inc = useSelector(props => props.increment)
  const Dec = useSelector(props => props.decrement)

  const dispatch = useDispatch()
  return (
    <div className="App">
    <Provider store={store}>
      <h1>Counter Increment : {Inc}</h1>
      <h1>Counter Decrement : {Dec}</h1>
      <button onClick={() => dispatch(Increment)}>Add</button>
      <button onClick={() => dispatch(Decrement)}>Subtract</button>
      </Provider>
    </div>
  );
}

export default App;
