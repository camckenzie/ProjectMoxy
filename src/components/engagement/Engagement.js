import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Engagement() {

    // const LogsContainer = () => {
    //     const [logs, setLogs] = useState([])
      
    //     // run once!
    //     useEffect(() => {
    //       Hook(
    //         window.console,
    //         (log) => setLogs((currLogs) => [...currLogs, log]),
    //         false
    //       )
    //       return () => Unhook(window.console)
    //     }, [])
      
    //     return <Console logs={logs} variant="dark" />
    //   }

    let history= useHistory();
    
    //Details for form
    const [details, setDetails] = useState({
        desc: "",
        cost: "",
        risk: "",
        complexity: "",
        fte: "",
    })
    //Catch if else errors
    const [error, setError] = useState("");
    
    const logHandler = e => {
        //e.preventDefault();
        console.log(e.target[0].value)

    }
    const Record = details => {
        // console.log(details);
        
        //Need an if else statement here but haven't done yet
        setDetails({
            desc: details.desc,
            cost: details.cost,
            risk: details.risk,
            complexity: details.complexity,
            fte: details.fte,
        })


        //working on this - steven
        // let i = 2;

        // let template = `
        //     <h1>Your details:
        //         <span id="yourdesc"> </span>
        //         <span id="yourcost"> </span>
        //         <span id="yourrisk"> </span>
        //         <span id="yourcomplexity"> </span>
        //         <span id="yourfte"> </span>
        //     </h1>
        // `;



        console.log(details);
        document.getElementById("yourdesc").innerHTML += details.desc;
        document.getElementById("yourcost").innerHTML += details.cost;
        document.getElementById("yourrisk").innerHTML += details.risk;
        document.getElementById("yourcomplexity").innerHTML += details.complexity;
        document.getElementById("yourfte").innerHTML += details.fte;

        // setError(console.log(details));
    }
    
    //Handles errors like missing information or wrong information
    const submitHandler = e => {
        e.preventDefault();

        Record(details);

        // console.log("Test");
        // setError("Test");
        //LogsContainer(details);
    }

    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="App">
                    <div className="form-inner">
                        <h2>Engagement Creation</h2>
                        {(error!="") ? ( <div className="error">{error}</div> ) : ""}
                        <div className="form-group">
                            <label htmlFor="desc">Description: </label>
                            
                            <input type="text" name="desc" id="desc" onChange={e => setDetails({...details, desc: e.target.value})} value={details.desc} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Computed Cost: </label>
                            
                            <input type="text" pattern="[0-9]*" name="cost" id="cost" onChange={e => setDetails({...details, cost: e.target.value})} value={details.cost}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Risk: </label>
                            
                            <input type="text" pattern="[0-9]*" name="risk" id="risk" onChange={e => setDetails({...details, risk: e.target.value})} value={details.risk}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Complexity: </label>
                            
                            <input type="text" pattern="[0-9]*" name="complexity" id="complexity" onChange={e => setDetails({...details, complexity: e.target.value})} value={details.complexity}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Total FTE: </label>
                            
                            <input type="text" pattern="[0-9]*" name="fte" id="fte" onChange={e => setDetails({...details, fte: e.target.value})} value={details.fte}  />
                        </div>
                        <input type="submit" value="SUBMIT" />
                    </div>
                    <div>
                    </div>
                </div>
            </form>
            <div id="yourdetails">
                <h1>Your details:
                    <span id="yourdesc"> </span>
                    <span id="yourcost"> </span>
                    <span id="yourrisk"> </span>
                    <span id="yourcomplexity"> </span>
                    <span id="yourfte"> </span>
                </h1>
            </div>

        </div>

    );
}

export default Engagement;