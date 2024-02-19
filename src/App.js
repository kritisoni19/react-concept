import './App.css';
import UseMemoHooks from './components/hooksConcept/UseMemoHooks';
import UseCallbackHooks from './components/hooksConcept/UseCallbackHooks';
import Parent from './components/ContextEg/Parent';
import Parentlif from './components/lliftingStateUp/Parentlif';
function App() {
  return (
    <div className="App">
        <UseMemoHooks/>
        <h2>======================================</h2>
        <UseCallbackHooks/>
        <h2>======================================</h2>
        <Parent/>
        <h1>===========Data Pass Child to parent===================</h1>
        <Parentlif/>
    </div>
  );
}

export default App;
