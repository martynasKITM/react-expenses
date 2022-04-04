import {Form, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {login, auth} from "../../../services/authServices";
import {useAuthState} from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
const Login = ()=>{
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })
    const [user,loading,error] = useAuthState(auth)

    useEffect(()=>{
        if(loading) return
        if(user) navigate("/expenses")

    },[user,loading])

    const handleChange = (event)=>{
        setCredentials({
            ...credentials,
            [event.target.name]:event.target.value
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        login(credentials.email, credentials.password)

    }
    return(
        <>
            <h2 className="text-center mt-3">Prisijungti</h2>
            <Form className="col-sm-6 mx-auto" onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder="Jusu el. pasto adresas"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Iveskite slaptazodi"
                    />
                </Form.Group>
                <Button type="submit">Prisijungti</Button>
                <div>
                    <ul>
                        <li>Neturite paskyros? <Link to="/register">Registruokitės</Link></li>
                        <li>Pamiršote slaptažodį? <Link to="/reset">Atstatykite</Link></li>
                    </ul>
                </div>
            </Form>
        </>
    )
}

export default Login