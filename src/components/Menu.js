import { Link } from "react-router-dom";
import Counter1 from "./HOC/Counter1";
import Counter2 from "./HOC/Counter2";
function Menu() {



  // here is the primary change!!
  // we simply tell setCounter to add 1 to the old counter value
 




  return (
    <>
      <nav>
        <ul className="ulList">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/refhookeg">Use Ref Eg</Link>
          </li>

          <li>
            <Link to="/search">Search</Link>
          </li>

          <li>
            <Link to="/toggle_and_hideShow">Toggle btn and hide and show</Link>
          </li>

          <li>
            <Link to="/fetchdata">Fetch Data</Link>
          </li>

          <li>
            <Link to="/questions">Json questions</Link>
          </li>

          <li>
            <Link to="/alert">Alert</Link>
          </li>

          <li>
            <Link to="/hoc">HOC</Link>
          </li>
          <li>
            <Link to="/stopwatch">Stop Watch</Link>
          </li>
          <li>
            <Link to="/practice">Practice</Link>
          </li>

          <li>
            <Link to='/accordion'>
            Accordion
            </Link>
          </li>

          <li>
            <Link to='/contexteg'>
              Context Api eg
            </Link>
          </li>
          <li>
            <Link to='/debounce'>
              Debounce page
            </Link>
          </li>
        </ul>
      </nav>

      <h1>HOC examples</h1>
      <Counter1 />
      <Counter2 /><br></br>
      <h2>===============================</h2>

     
     
    </>
  );
}
export default Menu;
