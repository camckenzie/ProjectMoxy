import React from 'react';
import { useHistory } from 'react-router-dom';

function Dashboard() {
    let history = useHistory();
    return (
        <div className="App">
            <h1>I AM DASHBOARD</h1>
        </div>
    )

}

export default Dashboard;