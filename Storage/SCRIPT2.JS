document.getElementsByClassName("btn2")[0].addEventListener("click",LoginData);
document.getElementsByClassName("btn3")[0].addEventListener("click",SignUp);
var keys="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function LoginData(e){
    e.preventDefault();
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var text='';
    var value=JSON.parse(localStorage.getItem("logindetails"));
    console.log(value);
    for(var i = 0 ; i<value.length; i++){
        console.log(value[i]);
        if(value[i].userName ===  userName && value[i].password === password && value[i].key ===''){
            for (var i = 0; i < 5; i++)
                text += keys.charAt(Math.floor(Math.random() * keys.length));
            document.cookie = "key:"+text;
            value[i]['key'] =text;
            value.push(value[i]);
            localStorage.setItem("logindetails",JSON.stringify(value));  
            break;     
        }
        else{
            if(value[i].userName ===  userName && value[i].password === password && value[i].key !=''){
                alert("You already logged");
            }
            else if(value[i].userName !=  userName && value[i].password != password){
                alert("Sign Up Please...");
            }
        }
        
    }
}
function SignUp(e){
    e.preventDefault();
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
   
    let users ={
        userName : userName,
        password : password,
        key :""
    }
    if(localStorage.getItem("logindetails") === null){
        let logindetails =[]
        logindetails.push(users);
        localStorage.setItem("logindetails",JSON.stringify(logindetails));
        
    }
    else{
        var logindetails =JSON.parse(localStorage.getItem("logindetails"));
        logindetails.push(users);
        localStorage.setItem("logindetails",JSON.stringify(logindetails));        

    }
}