$(function(){
   
    server = {
       url:"http://sbta.in/websites/hassan/gifts/service/",
            request: function(options) {
                return $.post(server.url+"index.php", options).promise();
            },
            debug: function(options) {
                return $.post(server.url+"debug.php", options).promise();
            }
       
       
       };
        
var mas= server.request({route:{app:'load'}});
mas.done(function(data){
	
			var source   = $("#country").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#n").html( html );
            
            
            
   			var source   = $("#sexs").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#sex").html( html );
            
             var source   = $("#rag").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#r").html( html );
            
            var source   = $("#iqm").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#Iqama").html( html );
            
            
             var source   = $("#stat").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#m").html( html );
            
            
                        
             var source   = $("#lvl").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#level").html( html );
            
            var source   = $("#inter").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#interest").html( html );
            
            
            var source   = $("#jobs").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#job").html( html );
            
            

	
	
	console.log(data);
	
});


         $("body").delegate("#r","change", function(){

            var id=$(this).val();




            var mas= server.request({route:{app:'loadcity',id:id}});
            mas.done(function(data){
	
	
	         var source   = $("#city").html();
            var template = Handlebars.compile(source);
            var html    = template(data);

            $("#c").html( html );
	
     console.log(data);	
	
});

});  


 $("body").delegate("#fill","submit", function(event){
 	
 	
 	
 	
 	var count = $("#n").val();
 	var sex = $("#sex").val();
 	var rag =$("#r").val();
 	var iqm =$("#Iqama").val();
 	var stat=$("#m").val();
 	var lvl =$("#level").val();
 	var inter=$("#interest").val();
 	var jobs=$("#job").val();
 	var email=$("#email").val();
 	var year=$("#y").val();
 	var m=$("#m").val();
 	var fname=$("#Fname").val();
 	var lname=$("#Lname").val();
 	var citys=$("#c").val();
 	var phone=$("#p").val();
 	
 
  
 
    var string = count +""+sex +""+rag +""+iqm +""+stat +""+lvl +""+inter +""+jobs +""+year +""+m+""+ fname +""+lname +""+citys+""+ phone;
    var vip="null"


    if(string.includes(vip) || !(document.getElementById("agree").checked)){
    	
    	alert("fill all the form");
    	
    }
 	
 else{
 	
 	
 	var mas= server.request({route:{app:'sub',count:count,sex:sex,rag:rag,iqm:iqm,stat:stat,lvl:lvl,inter:inter,jobs:jobs,email:email,year:year,m:m,fname:fname,lname:lname,citys:citys,phone:phone}});
            mas.done(function(data){
	
	        alert("thank you");
           document.getElementById("fill").reset();
	
});}

 		

 		
 	
 	
 });




});

function myFunction (e) {
	
	 var phoneno = /^\(?([966]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{5})$/;
  if(e.value.match(phoneno))
     {
	   return true;      
	 }
   else
     {
	   alert("Not a valid Phone Number");
	   $("#p").val("");
	   return false;
     }
  
}
