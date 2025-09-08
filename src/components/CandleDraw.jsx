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

        const data_mock = [{'Open': 208.79, 'High': 213.06, 'Low': 206.17, 'Close': 211.98, 'Volume': 52286500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-04-30'}, {'Open': 208.57, 'High': 214.04, 'Low': 208.39, 'Close': 212.8, 'Volume': 57365700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-01'}, {'Open': 205.59, 'High': 206.48, 'Low': 201.67, 'Close': 204.85, 'Volume': 101010600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-02'}, {'Open': 202.6, 'High': 203.6, 'Low': 197.73, 'Close': 198.4, 'Volume': 69018500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-05'}, {'Open': 197.73, 'High': 200.16, 'Low': 196.54, 'Close': 198.03, 'Volume': 51216500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-06'}, {'Open': 198.68, 'High': 198.95, 'Low': 192.78, 'Close': 195.77, 'Volume': 68536700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-07'}, {'Open': 197.24, 'High': 199.56, 'Low': 194.2, 'Close': 197.01, 'Volume': 50478900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-08'}, {'Open': 198.51, 'High': 200.05, 'Low': 197.06, 'Close': 198.05, 'Volume': 36453900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-09'}, {'Open': 210.73, 'High': 211.03, 'Low': 206.52, 'Close': 210.55, 'Volume': 63775800, 'Dividends': 0.26, 'Stock Splits': 0.0, 'Time': '2025-05-12'}, {'Open': 210.19, 'High': 213.16, 'Low': 208.76, 'Close': 212.69, 'Volume': 51909300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-13'}, {'Open': 212.19, 'High': 213.7, 'Low': 210.34, 'Close': 212.09, 'Volume': 49325800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-14'}, {'Open': 210.71, 'High': 212.72, 'Low': 209.3, 'Close': 211.21, 'Volume': 45029500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-15'}, {'Open': 212.12, 'High': 212.33, 'Low': 209.53, 'Close': 211.02, 'Volume': 54737900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-16'}, {'Open': 207.67, 'High': 209.24, 'Low': 204.03, 'Close': 208.54, 'Volume': 46140500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-19'}, {'Open': 207.43, 'High': 208.23, 'Low': 204.8, 'Close': 206.63, 'Volume': 42496600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-20'}, {'Open': 204.94, 'High': 206.81, 'Low': 200.48, 'Close': 201.86, 'Volume': 59211800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-21'}, {'Open': 200.48, 'High': 202.52, 'Low': 199.47, 'Close': 201.13, 'Volume': 46742400, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-22'}, {'Open': 193.45, 'High': 197.48, 'Low': 193.24, 'Close': 195.05, 'Volume': 78432900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-23'}, {'Open': 198.08, 'High': 200.51, 'Low': 197.21, 'Close': 199.98, 'Volume': 56288500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-27'}, {'Open': 200.36, 'High': 202.5, 'Low': 199.67, 'Close': 200.19, 'Volume': 45339700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-28'}, {'Open': 203.35, 'High': 203.58, 'Low': 198.28, 'Close': 199.72, 'Volume': 51396800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-29'}, {'Open': 199.14, 'High': 201.73, 'Low': 196.56, 'Close': 200.62, 'Volume': 70819900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-05-30'}, {'Open': 200.05, 'High': 201.9, 'Low': 199.89, 'Close': 201.47, 'Volume': 35423300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-02'}, {'Open': 201.12, 'High': 203.54, 'Low': 200.73, 'Close': 203.04, 'Volume': 46381600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-03'}, {'Open': 202.68, 'High': 206.01, 'Low': 201.87, 'Close': 202.59, 'Volume': 43604000, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-04'}, {'Open': 203.27, 'High': 204.52, 'Low': 199.92, 'Close': 200.4, 'Volume': 55126100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-05'}, {'Open': 202.77, 'High': 205.47, 'Low': 201.82, 'Close': 203.69, 'Volume': 46607700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-06'}, {'Open': 204.16, 'High': 205.77, 'Low': 199.79, 'Close': 201.22, 'Volume': 72862600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-09'}, {'Open': 200.37, 'High': 204.12, 'Low': 200.34, 'Close': 202.44, 'Volume': 54672600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-10'}, {'Open': 203.27, 'High': 204.27, 'Low': 198.19, 'Close': 198.55, 'Volume': 60989900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-11'}, {'Open': 198.85, 'High': 199.45, 'Low': 197.14, 'Close': 198.97, 'Volume': 43904600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-12'}, {'Open': 199.5, 'High': 200.14, 'Low': 195.48, 'Close': 196.23, 'Volume': 51447300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-13'}, {'Open': 197.08, 'High': 198.46, 'Low': 196.34, 'Close': 198.2, 'Volume': 43020700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-16'}, {'Open': 196.98, 'High': 198.17, 'Low': 194.99, 'Close': 195.42, 'Volume': 38856200, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-17'}, {'Open': 195.72, 'High': 197.35, 'Low': 194.85, 'Close': 196.36, 'Volume': 45394700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-18'}, {'Open': 198.02, 'High': 201.47, 'Low': 196.64, 'Close': 200.77, 'Volume': 96813500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-20'}, {'Open': 201.4, 'High': 202.07, 'Low': 198.73, 'Close': 201.27, 'Volume': 55814300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-23'}, {'Open': 202.36, 'High': 203.21, 'Low': 199.97, 'Close': 200.07, 'Volume': 54064000, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-24'}, {'Open': 201.22, 'High': 203.44, 'Low': 200.39, 'Close': 201.33, 'Volume': 39525700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-25'}, {'Open': 201.2, 'High': 202.41, 'Low': 199.23, 'Close': 200.77, 'Volume': 50799100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-26'}, {'Open': 201.66, 'High': 202.99, 'Low': 199.77, 'Close': 200.85, 'Volume': 73188600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-27'}, {'Open': 201.78, 'High': 207.15, 'Low': 199.03, 'Close': 204.94, 'Volume': 91912800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-06-30'}, {'Open': 206.44, 'High': 209.95, 'Low': 205.91, 'Close': 207.58, 'Volume': 78788900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-01'}, {'Open': 208.67, 'High': 213.1, 'Low': 207.9, 'Close': 212.2, 'Volume': 67941800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-02'}, {'Open': 211.91, 'High': 214.41, 'Low': 211.57, 'Close': 213.31, 'Volume': 34955800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-03'}, {'Open': 212.44, 'High': 215.98, 'Low': 208.56, 'Close': 209.71, 'Volume': 50229000, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-07'}, {'Open': 209.86, 'High': 211.19, 'Low': 208.21, 'Close': 209.77, 'Volume': 42848900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-08'}, {'Open': 209.29, 'High': 211.09, 'Low': 206.99, 'Close': 210.9, 'Volume': 48749400, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-09'}, {'Open': 210.27, 'High': 213.24, 'Low': 209.79, 'Close': 212.17, 'Volume': 44443600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-10'}, {'Open': 210.33, 'High': 211.89, 'Low': 209.62, 'Close': 210.92, 'Volume': 39765800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-11'}, {'Open': 209.69, 'High': 210.67, 'Low': 207.3, 'Close': 208.38, 'Volume': 38840100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-14'}, {'Open': 208.98, 'High': 211.65, 'Low': 208.68, 'Close': 208.87, 'Volume': 42296300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-15'}, {'Open': 210.06, 'High': 212.16, 'Low': 208.4, 'Close': 209.92, 'Volume': 47490500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-16'}, {'Open': 210.33, 'High': 211.56, 'Low': 209.35, 'Close': 209.78, 'Volume': 48068100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-17'}, {'Open': 210.63, 'High': 211.55, 'Low': 209.46, 'Close': 210.94, 'Volume': 48974600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-18'}, {'Open': 211.86, 'High': 215.54, 'Low': 211.39, 'Close': 212.24, 'Volume': 51377400, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-21'}, {'Open': 212.9, 'High': 214.71, 'Low': 211.99, 'Close': 214.16, 'Volume': 46404100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-22'}, {'Open': 214.76, 'High': 214.91, 'Low': 212.17, 'Close': 213.91, 'Volume': 46989300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-23'}, {'Open': 213.66, 'High': 215.45, 'Low': 213.29, 'Close': 213.52, 'Volume': 46022600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-24'}, {'Open': 214.46, 'High': 215.0, 'Low': 213.16, 'Close': 213.64, 'Volume': 40268800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-25'}, {'Open': 213.79, 'High': 214.61, 'Low': 212.82, 'Close': 213.81, 'Volume': 37858000, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-28'}, {'Open': 213.94, 'High': 214.57, 'Low': 210.58, 'Close': 211.03, 'Volume': 51411700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-29'}, {'Open': 211.66, 'High': 212.15, 'Low': 207.48, 'Close': 208.81, 'Volume': 45512500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-30'}, {'Open': 208.25, 'High': 209.6, 'Low': 206.93, 'Close': 207.33, 'Volume': 80698400, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-07-31'}, {'Open': 210.63, 'High': 213.34, 'Low': 201.27, 'Close': 202.15, 'Volume': 104434500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-01'}, {'Open': 204.28, 'High': 207.64, 'Low': 201.45, 'Close': 203.12, 'Volume': 75109300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-04'}, {'Open': 203.17, 'High': 205.11, 'Low': 201.93, 'Close': 202.69, 'Volume': 44155100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-05'}, {'Open': 205.4, 'High': 215.14, 'Low': 205.36, 'Close': 213.01, 'Volume': 108483100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-06'}, {'Open': 218.63, 'High': 220.6, 'Low': 216.33, 'Close': 219.78, 'Volume': 90224800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-07'}, {'Open': 220.58, 'High': 230.74, 'Low': 219.0, 'Close': 229.09, 'Volume': 113854000, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-08'}, {'Open': 227.92, 'High': 229.56, 'Low': 224.76, 'Close': 227.18, 'Volume': 61806100, 'Dividends': 0.26, 'Stock Splits': 0.0, 'Time': '2025-08-11'}, {'Open': 228.01, 'High': 230.8, 'Low': 227.07, 'Close': 229.65, 'Volume': 55626200, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-12'}, {'Open': 231.07, 'High': 235.0, 'Low': 230.43, 'Close': 233.33, 'Volume': 69878500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-13'}, {'Open': 234.06, 'High': 235.12, 'Low': 230.85, 'Close': 232.78, 'Volume': 51916300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-14'}, {'Open': 234.0, 'High': 234.28, 'Low': 229.34, 'Close': 231.59, 'Volume': 56038700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-15'}, {'Open': 231.7, 'High': 233.12, 'Low': 230.11, 'Close': 230.89, 'Volume': 37476200, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-18'}, {'Open': 231.28, 'High': 232.87, 'Low': 229.35, 'Close': 230.56, 'Volume': 39402600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-19'}, {'Open': 229.98, 'High': 230.47, 'Low': 225.77, 'Close': 226.01, 'Volume': 42263900, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-20'}, {'Open': 226.27, 'High': 226.52, 'Low': 223.78, 'Close': 224.9, 'Volume': 30621200, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-21'}, {'Open': 226.17, 'High': 229.09, 'Low': 225.41, 'Close': 227.76, 'Volume': 42477800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-22'}, {'Open': 226.48, 'High': 229.3, 'Low': 226.23, 'Close': 227.16, 'Volume': 30983100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-25'}, {'Open': 226.87, 'High': 229.49, 'Low': 224.69, 'Close': 229.31, 'Volume': 54575100, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-26'}, {'Open': 228.61, 'High': 230.9, 'Low': 228.26, 'Close': 230.49, 'Volume': 31259500, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-27'}, {'Open': 230.82, 'High': 233.41, 'Low': 229.34, 'Close': 232.56, 'Volume': 38074700, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-28'}, {'Open': 232.51, 'High': 233.38, 'Low': 231.37, 'Close': 232.14, 'Volume': 39418400, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-08-29'}, {'Open': 229.25, 'High': 230.85, 'Low': 226.97, 'Close': 229.72, 'Volume': 44075600, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-09-02'}, {'Open': 237.21, 'High': 238.85, 'Low': 234.36, 'Close': 238.47, 'Volume': 66427800, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-09-03'}, {'Open': 238.45, 'High': 239.9, 'Low': 236.74, 'Close': 239.78, 'Volume': 47549400, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-09-04'}, {'Open': 240.0, 'High': 241.32, 'Low': 238.49, 'Close': 239.69, 'Volume': 54837300, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-09-05'}, {'Open': 239.3, 'High': 240.15, 'Low': 237.74, 'Close': 237.77, 'Volume': 20148118, 'Dividends': 0.0, 'Stock Splits': 0.0, 'Time': '2025-09-08'}]

        chart.data(data_mock).encode('x', 'Time')
            .encode('color', (d) => {
                const trend = Math.sign(d.Open - d.Close);
                return trend > 0 ? '下跌' : trend === 0 ? '不变' : '上涨';
            })
            .scale('x', {
                compare: (a, b) => new Date(a).getTime() - new Date(b).getTime(),
            })
            .scale('color', {
                domain: ['下跌', '不变', '上涨'],
                range: ['#4daf4a', '#999999', '#e41a1c'],
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