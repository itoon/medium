$(document).ready(function(){
	// check mobile device
	if(is.mobile()) {
		// is true do something
	}else{
		// do something
	}

	console.log(is.email('itoon.sit@gmail.com')); // return true
	console.log(is.url('http://www.medium.com')); // return true
});