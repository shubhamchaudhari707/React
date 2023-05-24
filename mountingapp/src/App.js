import React, { Suspense, lazy } from 'react'
// import Comp1 from './Comp1'


const Comp1 = lazy(() => import("./Comp1"))
const Comp2 = lazy(() => import("./Comp2"))

const App = () => {
    return (
        <>  
            <h1>Lazy Loading Demo</h1>
            <Suspense fallback='LOADING compoent 1'>
                <Comp1 />
            </Suspense>

            <Suspense fallback={<h1>LOADING.....</h1>}>
                <Comp2 />
            </Suspense>
        </>
    )
}

export default App