import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'

// import Test from '@components/Test'
// import Test2 from '@components/Test2'

const loading = () => <div>loading</div>

const Test = Loadable({
    loader: () => import(/* webpackChunkName: "test" */ '@components/Test'),
    loading
})

const Test2 = Loadable({
    loader: () => import(/* webpackChunkName: "test2" */ '@components/Test2'),
    loading
})

const render = () => {
    ReactDOM.render(
        <div>
            <Test />
            <Test2 />
        </div>,
        document.querySelector('#app')
    )
}

render()
