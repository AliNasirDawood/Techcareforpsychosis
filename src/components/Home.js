import React from "react";
import {useState} from "react";
import Axios from "axios";

function Home () {

  const [ListOfUsers,setListOfUser] = useState([])

    const [Val1, setVal1] = useState(""); //We have use react hook to call each value in seperate event
    const [Val2, setVal2] = useState("");
    const [Val3, setVal3] = useState("");
    const [Val4, setVal4] = useState("");
    
    const updateValue1 = (e, item) => {
    setVal1(item);
  };
    const updateValue2 = (e, item) => {
    setVal2(item);
  };
  const updateValue3 = (e, item) => {
    setVal3(item);
  };
    const updateValue4 = (e, item) => {
    setVal4(item);
  };
    const createUser = (e) => 
  {
    e.preventDefault() //perform only this task 
    Axios.post("http://localhost:3003/createUser", {
      Val1,
      Val2,
      Val3,
      Val4,
    }).then((response) => {
      alert("User Created");
      ListOfUsers(response.data);
      // console.log("done");
    });
  };


    return(
        <>
      <div class="container-fluid">
        <form
          className="mb-3"
         // method="post"
        //   onSubmit={createUser}
          style={{ width: "auto", maxWidth: 1000 }}
        >

          <div class="mb-3">
            <label className="form-label">
            میں اداس ہوں           
             </label>
            <div className="slideContainer">
              <input
              name = 'question1'
                type="range"
                min="1"
                max="7"
                // value="1"
                id="myRange"
                class="slider"
                onChange={(event) => {
                  setVal1(event.target.value);
                }}
              />
              <p>
                Value:{Val1}
                <span id="value"></span>
              </p>
            </div>
          </div>

          
          <div class="mb-3">
            <label className="form-label">
            کیا آپ کو بھوک لگ رہہی ہے            
            </label>
            <div className="slideContainer">
              <input
                name="question2"
                type="range"
                min="1"
                max="7"
                // value="1"
                id="myRange"
                class="slider"
                onChange={(event) => {
                  setVal2(event.target.value);
                }}
              />
              <p>
                Value:{Val2}
                <span id="value"></span>
              </p>
            </div>
          </div>
          <div class="mb-3">
            <label className="form-label">
            یں نے چیزوں کو کرنے کے لئے حوصلہ افزائی محسوس کی۔           
            </label>
            <div className="slideContainer">
              <input
                name="question3"
                type="range"
                min="1"
                max="7"
                // value="1"
                id="myRange"
                class="slider"
                onChange={(event) => {
                  setVal3(event.target.value);
                }}
              />
              <p>
                Value:{Val3}
                <span id="value"></span>
              </p>
            </div>
          </div>
          <div class="mb-3">
            <label className="form-label">
            میرے موڈ نے میری بھوک یا نیند کو متاثر کیا ہے۔           
            </label>
            <div className="slideContainer">
              <input
                name="question4"
                type="range"
                min="1"
                max="7"
                // value="1"
                id="myRange"
                class="slider"
                onChange={(event) => {
                  setVal4(event.target.value);
                }}
              />
              <p>
                Value:{Val4}
                <span id="value"></span>
              </p>
            </div>
          </div>

          {/* next question */}

          <button
           // type="submit"
            value="save"
            className="btn btn-primary"
            onClick={createUser}
          >
          Submit
          </button>
        </form>
        {/* <button className="btn btn-primary" onClick={home}>
          Home
        </button>
        <button className="btn btn-primary" onClick={summary}>
          See the report
        </button> */}
      </div>
    </>
    )

}

export default Home;