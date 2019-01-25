var Sequencer = require('../libs/CallbackSequencer').Sequencer;
var crudTester= require('../libs/CrudRunner').CrudRunner;  

/*
{"user_id":"125","name":"CMXNOVIP","region_id":"441","active":"1","tenant_id":"2","required_email":"1"}
*/

var Test = function() {
	var url2="http://dev.adm.dlatv.net/services/products/user_types?&region=argentina&tenant_code=claromusica"
	var url="http://dev.adm.dlatv.net/services/rates";
	 
	// localStorage.setItem("token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDgwODczNjAsImV4cCI6MTU0ODA4Nzk2MCwiZGF0YSI6eyJpZCI6IjgxIn19.a-xW6ZV9Rok-epxDAWT5iNVQ0bQHbjzFS_-XgdibiUk")
	var tokenParam=localStorage.getItem("token")
	var sequencer=new Sequencer();
	var crud=new crudTester();
	
	


	var filter=JSON.stringify( {
			"conditions": [
				{
					"where": [
						[
							"user_id",
							125
						]
					]
				}
			],
			
		})

/*
"result": {
        "get": "toSql"
    }
*/


		
	var fnGetAll=function(){
		 var token=localStorage.getItem("token");
		 console.log("token: ",token)
		 crud.setToken(token)
		 crud.post(url2,'post', filter,function(result){
				console.log(result)
				print();
				next(); 
			})
	}
 
	this.run=function(){
		sequencer.execute();
	}
	var next=function(){
		if(sequencer.getLength()==0){
			setTimeout(function(){ phantom.exit()}, 3000);
		}else{
			sequencer.execute();	
		}
	}
	var print=function(p){
		console.log('\n',"----------",sequencer.getLength(),"---------------------------------\n");	
	}
	// Calls
	sequencer.addFunction(fnGetAll);

}

var test=new Test();
 	test.run();
 

 