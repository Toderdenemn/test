import "./form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
  const signIn = (e) => {
    console.log("signin", e);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log("logged in");
        history.push("/logged");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(password);

  return (
    <>
      <Form className="sign-in-container">
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          // onSubmit={signIn}
        >
          <h1>Log In to your Account</h1>
          <br />
          <Form.Label>nuuts@gmail.comnpm i react-router-dom</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>nuutsug</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={signIn}>
          Log in
        </Button>
      </Form>
    </>
  );
};

export default SignIn;

// *****************************************************************************

// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "../../firebase";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="sign-in-container">
//       <form onSubmit={signIn}>
//         <h1>Log In to your Account</h1>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         ></input>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>
//         <button type="submit">Log In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
