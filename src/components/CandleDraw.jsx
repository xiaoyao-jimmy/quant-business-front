import { useEffect, useRef } from "react";
import { Chart } from '@antv/g2';

function CandleDraw() {

    const container = useRef(null);
    const chart = useRef(null);

    useEffect(() => {
        if (!chart.current) {
            chart.current = renderBarChart(container.current);
        }

        return () => {
            if (chart.current) {
                chart.current.destroy();
                chart.current = null;
            }
        }
    }, []);

    function renderBarChart(container) {
        const chart = new Chart({
            container,
        })

        chart.render();
        return chart;
    }

    return (
        <div ref={container} />
    )
}

export default CandleDraw;