let result=document.getElementById("inputText");


let calculate=(number)=>
{
    result.value =result.value+number;

}

let Result=()=>
{
    try{
        result.value=eval(result.value)
    }
    catch(error)
    {
        alert("Please Enter a valid Input.")
    }
    

}

function clearall()
{
    result.value=" ";
}
 

function cut()
{
    result.value =  result.value.slice(0,-1);
}