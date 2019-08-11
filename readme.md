This is a simple starter with typescript, react and webpack.

## build for development

```bash
$ npm install
```

```bash
$ npm run dev
```

## build for production

```bash
$ npm run build:(dev/prod)
```

## primary packages

-   webpack-4.x
-   babel-7.x
-   typescript-3.x
-   react-16.x

## characteristics

-   import .(s)css auto generate .(s)css.d.ts by `css-modules-typescript-loader`
-   import svg icon as a component by `@svgr/webpack`
-   use [ant design](https://ant.design/index-cn) as UI framework

## component example

```javascript
import React from 'react'
import { Button } from 'antd'

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
            <Button onClick={testFn} type="primary">
                test
            </Button>
        </div>
    )
}

export default Test
```

## extensions ( vscode )

-   [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
