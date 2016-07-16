
(function () {
					"use strict";
	function podshet(str) {
		
			var inp = str;
			var answer=0;
			var masChis= str.match( /\d\.*\d*/g );
			var masOper=str.match(/\-|\+|\*|\//g);
			var masRes=[];
			var strRes="";
			var res=Number(masChis[0]);
			//var res =0;
			console.log(masChis);
			console.log(masOper);
	
		for(var i=0,s=0;i<masChis.length || s<masOper.length;i++,s++) 
		{
				masRes.push(masChis[i],masOper[s]);
				//console.log(masRes);
				var str = masRes.join('');
				console.log(str);
				switch(masOper[s])
				{
					case '+' : res = res + Number(masChis[i+1]);break;
					case '-' : res = res - Number(masChis[i+1]);break;
					case '*' : res = res * Number(masChis[i+1]);break;
					case '/' : res = res / Number(masChis[i+1]);break;
				}
				console.log(res);

		}
		//res=eval(str);

	return res;
	}	
		console.log(podshet ("3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек ="))
	
	})();

