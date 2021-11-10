import Button from '@restart/ui/esm/Button';
import React, { Component, useState } from 'react'
import { useHistory } from "react-router-dom";


function Engagement() {
    let history= useHistory();
    //Details for form
    
    const [details, setDetails] = useState({
        desc: "",
        cost: "",
        risk: "",
        complexity: "",
        fte: "",
    })
    
    return (
    <form>
        <div className="App">
            <div className="form-inner">
                <h2>Engagement Creation</h2>
                <div className="form-group">
                    <label htmlFor="desc">Description: </label>
                    
                    <input type="text" name="desc" id="desc" onChange={() => setDetails({...details, desc: details.desc})} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Computed Cost: </label>
                    
                    <input type="text" pattern="[0-9]*" name="cost" id="cost" onChange={() => setDetails({...details, cost: details.cost})} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Risk: </label>
                    
                    <input type="text" pattern="[0-9]*" name="risk" id="risk" onChange={() => setDetails({...details, risk: details.risk})} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Complexity: </label>
                    
                    <input type="text" pattern="[0-9]*" name="complexity" id="complexity" onChange={() => setDetails({...details, complexity: details.complexity})} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Total FTE: </label>
                    
                    <input type="text" pattern="[0-9]*" name="fte" id="fte" onChange={() => setDetails({...details, fte: details.fte})} />
                </div>
                <input type="submit" value="SUBMIT" />
            </div>
        </div>
    </form>

    );
}

export default Engagement;
