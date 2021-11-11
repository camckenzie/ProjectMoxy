import React from 'react';
import { useHistory } from "react-router-dom";

function EngagementManagement() {
    let history = useHistory();
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
        </div>
    )
}

export default EngagementManagement;