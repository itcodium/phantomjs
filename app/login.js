var Sequencer = require('../libs/CallbackSequencer').Sequencer;
var crudTester= require('../libs/CrudRunner').CrudRunner; 




// Log out http://dev.adm.dlatv.net/services/auth/logout?region=argentina&tenant_code=claromusica

var Test = function() {
	var sequencer=new Sequencer();
	var crud=new crudTester();
	localStorage.setItem("url","http://dev.adm.dlatv.net/services/auth/login")
	localStorage.getItem("url")
 
 var urlLogin=localStorage.getItem("url")
	var urlLogOut="http://dev.adm.dlatv.net/services/auth/logout?region=argentina&tenant_code=claromusica"
	var print=function(){
		console.log("-----------------------------",sequencer.getLength(),"---------------------------------\n");	
	}

	var callback_login=function(result){
		var data=JSON.parse(result)
			if(data.error=="auth_invalid_login" || data.error=="auth_session_exist"){
				localStorage.setItem("error", data.error);
				console.log("Login Error: ", data.error)
			}
			else{
				localStorage.setItem("token", data.token);
				console.log("Token: ", data.token)	
			}
		 	print();
			next(); 
	}
 
	var callback_logout=function(result){
		console.log("Token: ", result)
		var data=JSON.parse(result)
			print();
			next(); 
	}
	
	var fnLogin=function(result){
		var data = new FormData();
			data.append("email", "phaddad@amco.mx");
			data.append("plain", "Clavi123$");
		crud.post(urlLogin, 'POST',data,callback_login) 
	}
 
 	var fnLogout=function(result){
		 var token=localStorage.getItem("token");
		 crud.setToken(token)
		 crud.post(urlLogOut,'POST', {},callback_logout)
	}
 	sequencer.addFunction(fnLogin);
    //sequencer.addFunction(fnLogout);

	this.run=function(){
		sequencer.execute();
	}
	var next=function(){
		console.log("sequencer.getLength()",sequencer.getLength())
		if(sequencer.getLength()==0){
			setTimeout(function(){ phantom.exit()}, 3000);
		 
		}else{
			sequencer.execute();	
		}
	}
}
 
var test=new Test();
    test.run();
	
 

 
 
  
 	
	
 
 


