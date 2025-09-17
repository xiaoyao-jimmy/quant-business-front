import { useEffect, useRef } from "react";
import { Chart } from '@antv/g2';

// eslint-disable-next-line react/prop-types
function CandleDraw({ candlestick_draw }) {

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

        chart.data(candlestick_draw).encode('x', 'Time')
            .encode('color', (d) => {
                const trend = Math.sign(d.Open - d.Close);
                return trend > 0 ? '下跌' : trend === 0 ? '不变' : '上涨';
            })
            .scale('x', {
                compare: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
            })
            .scale('color', {
                domain: ['下跌', '不变', '上涨'],
                range: ['#e41a1c', '#999999', '#4daf4a'],
            });

        chart.link()
            .encode('y', ['Low', 'High'])
            .tooltip({
                title: 'Time',
                items: [
                    { field: 'Open', name: '开盘价' },
                    { field: 'Close', name: '收盘价' },
                    { field: 'Low', name: '最低价' },
                    { field: 'High', name: '最高价' },
                ],
            });

        chart.interval()
            .encode('y', ['Open', 'Close'])
            .style('fillOpacity', 1)
            .style('stroke', (d) => {
                if (d.Open === d.end) return '#999999';
            })
            .axis('x', {
                title: false,
            })
            .axis('y', {
                title: false,
            })
            .tooltip({
                title: 'Time',
                items: [
                    { field: 'Open', name: '开盘价' },
                    { field: 'Close', name: '收盘价' },
                    { field: 'Low', name: '最低价' },
                    { field: 'High', name: '最高价' },
                ],
            });

        chart.render();
        return chart;
    }

    return (
        <div ref={container} />
    )
}

export default CandleDraw;