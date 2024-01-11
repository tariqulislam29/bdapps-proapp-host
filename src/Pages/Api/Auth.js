import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const Auth = () => {
   const token = Cookies.get("data");
    const decoded = jwtDecode(token);
    
    return decoded;

};

export default Auth;