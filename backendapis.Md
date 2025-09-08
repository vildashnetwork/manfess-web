# Note i have hosted the backend already

# admins api 

# admin login: this api is use by admins to login into thier account
# api end piont: https://manfess-backend.onrender.com/api/adminlogin
# please use axios for api request (PS$ npm i axios)
# sample integration in react
# const [name, setname] = useState("")
# const [password, setpassword] = useState("")
# make sure this state variables are getting velues from the inputs
# use an onsubmit function in the form call it Login
const Login = async()=>{
    try{
  const res = await axios.post("https://manfess-backend.onrender.com/api/adminlogin",
   {
  username: name,
  password: password
   });
   if(res.status == 200){
    alert(res.data.message)
   }
   localStorage.setItem("token", res.data.token)
    }catch(error){

    }
}

# getting admins credentials after login
# afterlogin in you will need to display admins nameson thier dashboard after the login
# the admin profile will be the first letter of thier name
# api end point: https://manfess-backend.onrender.com/api/admin/me
# use this at the header or anywere to display admin credentials

# sample integration
# const [admin, setadmin] = useState([])

const token = localStorage.getItem("token")

useEffect(()=>{
    const fetchadmin = async ()=>{
        try{
 const res = await axios.get(`https://manfess-backend.onrender.com/api/admin/me`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      setadmin(res.data)
    });
        }catch(err)
        {
    console.log(error)
        }
    }
},[token])

# now if you want admins name use  = admin.Name if id then = admin.id if password = admin.password