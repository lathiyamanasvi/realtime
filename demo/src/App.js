import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const subm = async () => {
    try {
      let { data } = await axios.post(
        `https://p-realtime-default-rtdb.firebaseio.com/:users.json`,
        {
          name: name,
          phone: phone,
        }
      );
      alert("succes");
      setName("");
      setPhone("");
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  return (
    <center>
      <form>
        <table border={1}>
          <thead>
            <tr>
              <td>Name :- </td>
              <td>
                <input onChange={(e) => setName(e.target.value)} value={name} />

              </td>
            </tr>
            <tr>
              <td>Phone :- </td>
              <td>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="button" onClick={subm}>
                  Submit
                </button>
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </center>
  );
}

export default App;
