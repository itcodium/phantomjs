
exports.CrudRunner = function() {
	
	var req = new XMLHttpRequest();
	var token="";

	var page = require('webpage').create(),
		url = '',
		urlId = '',
		data = '',
		data_update = '',
		data_search='';
		PAGE_ERROR=0;	
		
		/*
		page.onConsoleMessage = function(msg) {
			// console.log("*",msg);
		};
		
		page.onResourceReceived = function(res) {
		  if (res.stage === 'end') {
		    	 console.log('Status code: ',res.status,res.statusText,res.url);
		    	if(res.status!=200 && res.status!=401){
		    		PAGE_ERROR=1;
		    	}
		  }
		};
		var settings = {
		  operation: "POST",
		  encoding: "utf8",
		  headers: {
			"Content-Type": "multipart/form-data"
		  },
		  data: {}
		};

	 

		this.setDataSearch = function (value) {
			data_search=value;
		};
		this.getDataSearch = function (value) {
			return data_search;
		};
		this.setIdValue = function (value) {
			urlId=urlId+'/'+value
		};	
		
		this.setUrl = function (value) {
			url=value;
			urlId=value;
		};
		this.setData = function (value) {
			data=value;
		};
		this.setDataUpdate = function (value) {
			data_update=value;
		};
		
		this.delete = function (callback) {
			send(urlId,'DELETE','',callback,"- ERROR  CHECK DELETE-");
		};
		
		this.checkUpdate = function (callback) {
			send(urlId,'GET','',callback,"- ERROR  CHECK UPDATE-");
		};
		
		this.update = function (callback) {
			page.customHeaders = {"Content-Type": "application/x-www-form-urlencoded"};
			send(urlId,'PUT',data_update,callback,"- ERROR UPDATE -");
		};
		
		this.getById = function (callback) {
			send(urlId,'GET','',callback,"ERROR GetById");
		};
		
		this.get = function (callback) {
			send(url,'GET','',callback,"- ERROR GetAll - ");
		};
		
		this.post = function (callback) {
			page.customHeaders = {"Content-Type": "multipart/form-data"};
			send(url,'POST',data,callback,"POST Error ");
		};
		this.print = function (msg, value) {
			console.log(msg, value);
			console.log("--------------------------------------------------------");	
		};
		*/
		
		this.setToken=function(value){
			token=value;
		}
	
		this.post = function (url,operation,data,callback) {
			console.log(operation+" - "+url);
		 	req.open(operation, url, false); 
			req.setRequestHeader("Content-type", "application/json;charset=utf-8");
			req.setRequestHeader("Authorization", "Bearer "+token)
			
			
			req.send(data);
			
			if (req.status == 200){
				callback( req.responseText)
			}else{
				callback( req.responseText)
			}
		};
		
		/*
		function send(pUrl,pMethod,pData,pCallback,pError){
			console.log(pUrl,"-",pMethod,"...");	
			settings.data=pData;
			settings.operation=pMethod;
			page.open(pUrl, settings,function(status) {
				page.injectJs('./js/jquery.min.js');
				if (status === "success") {
						res=page.evaluate(function() {
							console.log("2. Evaluate: ",$("body").text());	
							return  $("body").text();
						})
						pCallback(res);	
					} else{
						console.log("res",res)
					}
				phantom.exit(1);
			});
			
		}
		*/
}
 