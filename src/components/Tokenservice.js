class Tokenservice
{
     getToken()
  {
    return localStorage.getItem('Password');
  }


  setToken(password){
    localStorage.setItem('Password',password);
}
}

export default Tokenservice