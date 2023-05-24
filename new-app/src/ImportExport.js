import React from 'react'

const ImportExport = () => {
    return (
        <>
            <h1>ImportExport 1</h1>
            <ImportExport2/>
        </>
    )
}

const ImportExport2 = () => {
    return (
        <>
            <h1>ImportExport 2</h1>
        </>
    )
}

// export {ImportExport, ImportExport2}
// export {ImportExport2}
export default ImportExport