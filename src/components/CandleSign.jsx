import {Button, Table, Tag, Tooltip} from "antd";
import {useRequest} from "ahooks";
import {DatePicker} from "antd/lib";
import {SearchOutlined} from '@ant-design/icons';
import {getCandleStickSign} from '../api/CandleStickSign.js'
import {useState} from "react";
import dayjs from "dayjs";


function CandleStickSign() {

    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))

    const { data, run } = useRequest(() => getCandleStickSign((date)))

    const columns = [{
        title: 'Symbol',
        dataIndex: 'symbol'
    }, {
        title: 'CandleStick_Signs',
        dataIndex: 'candlestick_sign',
        render: (_, { candlestick_sign }) => (
            <>
                {JSON.parse(candlestick_sign).map((sign) => {
                    console.log(sign)
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
        dataIndex: 'candlestick_draw'
    }, {
        title: 'Date',
        dataIndex: 'date'
    }]

    function datePick(date, dateString) {
        setDate(dateString)
    }

    return (
        <div>
            <DatePicker onChange={datePick}/>

            <Tooltip title={'search'}>
                <Button type={'primary'} icon={<SearchOutlined />} onClick={run}>查詢</Button>
            </Tooltip>
            <Table columns={columns} dataSource={data}>

            </Table>
        </div>
    )
}

export default CandleStickSign;