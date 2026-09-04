function clickRequestButton()
{
	var textElement = document.getElementById("request_message_text");
	textElement.value = textElement.value.replace(/[\r\n]/g," ");
	if(!validateLength(textElement,32,"理由は32文字以内で入力してください")){
		return;
	}
	var form = document.getElementById('cancelRequestForm');
	form.submit();
}

function validateLength(target,max,msg)
{
	if(target.value == undefined){
		return false;
	}
	if(target.value.length > max){
		if(msg != ""){
			alert(msg)
		}
		target.value = target.value.substr(0,max);
		return false;
	}
	return true;
}
function clickPasswordButton()
{
	var passwordElement = document.getElementById("password_text");
	if (passwordElement.value != ""){
		location.href = "jp.co.daj.consumer.ifilter.action.auth:?" + passwordElement.value;
	}
}

function submitStop(e){
	if (!e) var e = window.event;
	if(e.keyCode == 13)
		return false;
}
