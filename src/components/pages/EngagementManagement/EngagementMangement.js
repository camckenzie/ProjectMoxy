import React from 'react';
import { useHistory } from "react-router-dom";
import CreateEM from "../CreateEM/CreateEM";

function EngagementManagement() {
    let history = useHistory();
    const pull_data = (data) => {
        console.log(data);
    }
    return (
        <div className="App">
            <h1>HELLO I AM ENGAGEMENT MANAGEMENT</h1>
            <div className="buttons">
                <button className="buttonsW" onClick={() => {history.push("/createem")}}>
                    Create Engagement
                </button>
                <button className="buttonsW" onClick={() => {history.push("/modifyem")}}>
                    Modify Engagement
                </button>
                <button className="buttonsW" onClick={() => {history.push("/launchem")}}>
                    Launch Engagement
                </button>
            </div>
            <CreateEM func={pull_data}/>
        </div>
    )
}

export default EngagementManagement;