import React, { Suspense, lazy } from 'react'
import Axiosapp from './Axios'

import Formik1 from './Formik1'
import Validations from './Validations'

const Comp1 = lazy(() => import('./Comp1'))
const Comp2 = lazy(() => import('./Comp2'))

const App = () => {
  return (
    <>
      <Suspense fallback='LOADING compoent 1'>
        <Comp1 />
      </Suspense>

      {/* <Suspense fallback={<h1>LOADING.....</h1>}>
        <Comp2 />
      </Suspense> */}

        {/* <Validations/> */}
        {/* <Formik1/> */}
        <Axiosapp/>


    </>
  )
}

export default App