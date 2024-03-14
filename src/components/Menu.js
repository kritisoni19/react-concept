
import { Link } from "react-router-dom";
import Counter1 from "./HOC/Counter1";
import Counter2 from "./HOC/Counter2";

function Menu(){



    return <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                
                <li>
                    <Link to='/refhookeg'>
                        Use Ref Eg
                    </Link>
                </li>

                <li>
                    <Link to='/search'>
                      Search
                    </Link>
                </li>

                <li>
                    <Link to='/toggle_and_hideShow'>
                      Toggle btn and hide and show
                    </Link>
                </li>

                <li>
                    <Link to='/fetchdata'>
                      Fetch Data
                    </Link>
                </li>

                <li>
                    <Link to='/questions'>
                     Json questions
                    </Link>
                </li>

                <li>
                    <Link to='/alert'>
                    Alert
                    </Link>
                </li>

                <li>
                    <Link to='/hoc'>
                        HOC
                    </Link>
                </li>
                
            </ul>
        </nav>

        <h1>HOC examples</h1>
        <Counter1/>
        <Counter2/>
    </>
}
export default Menu;