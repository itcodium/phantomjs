var Sequencer = require('../libs/CallbackSequencer').Sequencer;
var crudTester= require('../libs/CrudRunner').CrudRunner;  


var Test = function() {
	
	var url="http://dev.adm.dlatv.net/services/filters";
	var tokenParam=localStorage.getItem("token")
	
	var sequencer=new Sequencer();
	var crud=new crudTester();
		
	var fnGetAll=function(){
		 var token=localStorage.getItem("token");
		 crud.setToken(token)
		 crud.post(url,'GET', {},function(result){
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
 

 