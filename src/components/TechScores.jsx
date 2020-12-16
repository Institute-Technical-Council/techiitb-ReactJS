import React from 'react';
import BarGraph from './BarGraphTechCup';
import Pie from './PieChart';
import '../style/techcup.css'

function TechScores() {
    return (
        <div className="techcup">
<section>
<BarGraph />
</section>
<section>
<Pie />
</section>
</div>
    )}

export default TechScores;

