import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import {Navigate, useNavigate} from "react-router-dom";
import {auth, logout} from "../../../services/authServices";
import {useEffect, useState} from "react";
import * as userServices from "../../../services/userServices";
const User = ()=>{

    const [user,loading,error] = useAuthState(auth);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    useEffect(()=> {
        if (loading) return;
        if(!user){
        navigate('/')
        }else{
            userServices.getUserData(user,setUserData)
        }


    },[user, loading])


    return(
        <>
        {(user) ?  //Ar turim prisijungusi vartotoja ?
        <Navbar.Collapse className="justify-content-end">
            <NavDropdown title={userData.name} id="basic-nav-dropdown">
                <NavDropdown.Item>{userData.email}</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={logout}>Atsijungti</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
            : <Navbar.Collapse className="justify-content-end">
                   <p>Prisijungti</p>
                </Navbar.Collapse>
        }
        </>
    )

}

export default User