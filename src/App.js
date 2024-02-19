import './App.css';
import UseMemoHooks from './components/hooksConcept/UseMemoHooks';
import UseCallbackHooks from './components/hooksConcept/UseCallbackHooks';
import Parent from './components/ContextEg/Parent';
import Parentlif from './components/lliftingStateUp/Parentlif';
import Search from './components/Search';
import RefHook from './components/RefHook';
import EffectHook from './components/EffectHook';
import AddDelete from './components/AddDelete';

function App() {
  return (
    <div className="App">
        <UseMemoHooks/>
        <h1>======================================</h1>
        <UseCallbackHooks/>
        <h1>======================================</h1>
        <Parent/>
        <h1>===========Data Pass Child to parent===================</h1>
        <Parentlif/>
        <h1>=================Search Filter===========================</h1>
        <Search/>
        <h1> -=====================Use Ref Example =====================</h1>
        <RefHook/>
        <h1>============== Use Effect Hook===================</h1>
        <EffectHook/>
        <h1> ==================Add Delete ==================</h1>
        <AddDelete/>
    </div>
  );
}

export default App;
