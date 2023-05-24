import React, { useState } from 'react'


const Validations = () => {
    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [nameError, setNameError] = useState(false)
    let [emailError, setEmailError] = useState(false)
    let regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const handleName = (e) => {

        let name = e.target.value
        if (name.length < 3) {
            setNameError(true)
        }
        else {
            setNameError(false)
        }
        setName(name)
    }

    const handleEmail = (e) => {

        let email = e.target.value
        if (!email.match(regx)) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
        setEmail(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // alert(e.target[0].value + " : " + e.target[1].value)
        let name = e.target[0].value
        if (name.length < 3) {
            setNameError(true)
        }
        else {
            setNameError(false)
        }

        let email = e.target[1].value
        if (!email.match(regx)) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }

        if((!name.length < 3) && (email.match(regx))) {
            alert("Form has been submitted sucessfully")
            alert(`Name ${name} and email ${email}`)
        }
    }
    return (
        <>
            <h1>Form Validations Demo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Enter Name :</label><br />
                    <input type="text" name="name" id="" value={name} onChange={handleName} /> <br />

                    {nameError ? <span style={{ color: 'red' }}>Name length must be greather than 2 charachers</span> : ""}
                </div>
                <div>
                    <label htmlFor="">Enter Email :</label><br />
                    <input type="text" name="email" id="" value={email} onChange={handleEmail} /> <br />
                    {emailError ? <span style={{ color: 'red' }}>Email Error </span> : ''}
                </div>

                <input type="submit" value='Submit' />


            </form>
        </>
    )
}

export default Validations