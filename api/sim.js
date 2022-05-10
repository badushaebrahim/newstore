const md5 = require("md5");
var name= "12345";
const hash = md5(name);
var ch = "827ccb0eea8a706c4c34a16891f84e7b"
if(hash == ch){
	console.log("true");
}
else{
	console.log("false");
}
/*var crypto = require('crypto');
var name = '12345';
var hash = crypto.createHash('md5').update(name).digest('hex');
console.log(hash);*/