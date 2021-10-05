function submitBy()
{
        num1 = document.getElementById("Name").value;
        num2 = document.getElementById("email").value;
        num3 = document.getElementById("Password").value;
        display=document.write("Your Detailes: <br>",num1,"<br>",num2,"<br>",num3);
        document.getElementById("result").innerHTML =(display);
        num4 = document.getElementById("psw-repeat").value;
        if(num3!=num4)
        {
                alert("password does't match")
        }
}
function match()
{
        num3 = document.getElementById("Password").value;
        num4 = document.getElementById("psw-repeat").value;
       
}
function resetBy() 
{ 
       alert("Reset Succesful")
}
