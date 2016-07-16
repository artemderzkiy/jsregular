
(function () {

	function secondUdal(str) {
			var masDel= str.replace( /\s|\.|\,|\?|\!|\:|\;/g , ''); 
	
	
	return masDel;
	}

	
		console.log(secondUdal("Чего-с изволите-с?Барин-с!"))
		console.log(secondUdal("!??слово!плов олово$$$!"))
		console.log(secondUdal("!!!"))
	})();

