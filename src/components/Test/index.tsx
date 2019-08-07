import React from 'react'
import { Button, DatePicker, Switch, Checkbox } from 'antd'

import * as styles from './index.scss'
import { test } from '@services/api'

const Test = () => {
    const testFn = async () => {
        const res = await test()
        console.log(res)
    }

    return (
        <div>
            <div className={styles.test}>test</div>
            测试123cxzczxczxc
            <Button onClick={testFn} type="primary">
                123奥术大师多
            </Button>
            <DatePicker />
            <Switch />
            <Checkbox />
        </div>
    )
}

export default Test
