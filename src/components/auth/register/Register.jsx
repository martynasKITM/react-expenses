import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import {register} from "../../../services/authServices";

const Register = ()=>{
    const [userData, setUserData]=useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        register(userData.name,userData.email,userData.password)
    }
    console.log(userData)
    return(
        <>
            <h2 className="mt-3 text-center">Registruotis</h2>
            <Form className="col-sm-6 mx-auto" onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="text"
                    placeholder="Įveskite vardą"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                    type="email"
                    name="email"
                    placeholder="Įveskite el. pašto adresą"
                    value={userData.email}
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Jūsų slaptažodis"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Registruotis
                </Button>
                <div>
                    Turite paskyrą? Galite <Link to="/login">prisijungti</Link>
                </div>
            </Form>
        </>
    )
}

export default Register