import React from 'react';
import { Pie } from 'react-chartjs-2';
import data from '../pie';
function PieChart() {
    return (
        <div style={{ padding: "0 10%" }}>
            <h1 style={{ textAlign: "center" }}> Individual GC's </h1>
            <div class = "row">
            {data.map(gc => (
                                <div className = "col-lg-6 col-md-12" style={{ padding: "2% 2%" }}>
                                <Pie
                                    data={gc.state}
                                    options = {gc.options}
                        	         />
                                     </div>
                            ))}
                            </div>

        </div>
    )
}

export default PieChart;