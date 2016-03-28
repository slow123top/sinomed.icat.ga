/**
 * Created by Hu_2015 on 2016/3/24.
 */
var xmlHttp;

function createXMLHttp(){
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }else{
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function checkUsername(){
    var username=document.getElementById("sigusername").value;
    createXMLHttp();
    xmlHttp.onreadystatechange=checkUsernameCallback;
    xmlHttp.open("post","regiServlet?sigusername="+username);

    xmlHttp.send(null);
    document.getElementById("info").innerHTML="正在验证...";
}

function checkUsernameCallback(){
    if(xmlHttp.readyState==4){
        if(xmlHttp.status==200){
            var flag=xmlHttp.responseText;

            if(flag==1){

                document.getElementById("info").innerHTML="用户已经存在";
            }else{
                document.getElementById("info").innerHTML="账户可以使用";
            }

        }
    }
}


