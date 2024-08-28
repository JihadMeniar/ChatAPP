import { useContext } from "react";
import {Button,Form,Row,Col,Stack} from "react-bootstrap"
import { AuthContext } from "../context/AuthContext.jsx";

const Register = () => {
    
    const {registerInfo, updateRegisterInfo, registerUser, registerError, isregisterLoading} = useContext(AuthContext);

    // const {user} = useContext(AuthContext)
    return (<>
    <Form onSubmit={registerUser}>
        <Row style={{
            height:"100vh",
            justifyContent:"center"
        }}
        >
            <Col xs={6}>
            <Stack gap="3">
            <h2>Inscription</h2>
            {/* <h2>{user.name}</h2> */}
            <Form.Control type="text" placeholder="Nom utilisateur" onChange={(e)=>updateRegisterInfo({...registerInfo,name: e.target.value})} />
            <Form.Control type="email" placeholder="Email" onChange={(e)=>updateRegisterInfo({...registerInfo,email: e.target.value})}/>
            <Form.Control type="password" placeholder="Mot de passe" onChange={(e)=>updateRegisterInfo({...registerInfo,password: e.target.value})}/>
            <Button variant="primary" type="submit">
                {isregisterLoading ? "Création de votre compte" : "Connexion"}
            </Button>
            {
                registerError?.error && <Alert variant="danger" >
                    <p>{registerError?.message}</p>
                    </Alert>
            }
                
            
            </Stack>
            </Col>
        </Row>
    </Form>
    
    </>) ;
}
 
export default Register;