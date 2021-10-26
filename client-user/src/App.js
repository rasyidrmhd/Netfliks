import React from "react";
import "./assets/css/fontfamily.css";
import "./assets/css/sb-admin-2.min.css";
import "./assets/vendor/fontawesome-free/css/all.css";
import HomePage from "./components/HomePage";

// export default class App extends React.Component {
//   render() {
//     return (
//       <div style={{ minHeight: "100vh", backgroundColor: "#212121", color: "white" }}>
//         <HomePage></HomePage>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#212121", color: "white" }}>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
