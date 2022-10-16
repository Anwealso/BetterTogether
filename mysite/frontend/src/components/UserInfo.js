import jwt_decode from "jwt-decode";

function UserInfo() {
    return (
      localStorage.getItem("authTokens")
        ? jwt_decode(localStorage.getItem("authTokens"))
        : null
    );
  }
  
  export default UserInfo;