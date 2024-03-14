import { useRef, useState } from "react";

function RefHook() {
  const email = useRef("");
  const password = useRef("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password.current.value);
    setShow(true);
  };

  return (
    <>
      <h2>Forms Using useRef</h2>
      <form onSubmit={handleSubmit}>
        <input type="name" ref={email} />
        <input type="password" ref={password} />
        <button type="submit">Submit</button>

        {show && <p>{email.current.value}</p>}
      </form>
    </>
  );
}

export default RefHook;
