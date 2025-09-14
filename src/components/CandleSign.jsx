import {Button, Empty, Table, Tag, Tooltip} from "antd";
import {useRequest} from "ahooks";
import {DatePicker} from "antd/lib";
import {SearchOutlined} from '@ant-design/icons';
import {getCandleStickSign} from '../api/CandleStickSign.js'
import {useState} from "react";
import dayjs from "dayjs";
import CandleDraw from "./CandleDraw.jsx";


function CandleStickSign() {

    const [date, setDate] = useState(dayjs().subtract(1, 'day').format('YYYY-MM-DD'))

    const { data, run , loading} = useRequest(() => getCandleStickSign((date)), {
        manual: true
    })

    const columns = [{
        title: 'Symbol',
        dataIndex: 'symbol'
    }, {
        title: 'CandleStick_Signs',
        dataIndex: 'candlestick_sign',
        render: (_, { candlestick_sign }) => (
            <>
                {JSON.parse(candlestick_sign).map((sign) => {
                    return (
                        <Tag key={sign}>
                            {sign}
                        </Tag>
                    )
                })}
            </>
        )
    }, {
        title: 'CandleStick_Draw',
        dataIndex: 'candlestick_draw',
        render: (_, { candlestick_draw }) => (
            <>
                <CandleDraw candlestick_draw={candlestick_draw}/>
            </>
        )
    }, {
        title: 'Date',
        dataIndex: 'date'
    }]

    function datePick(date, dateString) {
        setDate(dateString)
    }

    return (
        <div>
            <DatePicker onChange={datePick} defaultValue={dayjs().subtract(1, 'day')}/>

            <Tooltip title={'search'}>
                <Button type={'primary'} icon={<SearchOutlined />} onClick={run}>查詢</Button>
            </Tooltip>
            <Table columns={columns} dataSource={data} pagination={false} loading={loading}
                   locale={{ emptyText: <Empty description={'选择日期点击查询'} />}}>
            </Table>
        </div>
    )
}

export default CandleStickSign;