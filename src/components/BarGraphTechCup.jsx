import React from 'react';
import { Bar } from 'react-chartjs-2';
import {state,options} from '../techcup';

function BarGraph() {
    return (
        <div style={{ padding: "0 20%" }}>
            <h1 style={{ textAlign: "center" }}> Tech Cup Scores 2020-21 </h1>
            <Bar
                data={state}
                options={options}
            />
        </div>
    )
}


export default BarGraph;