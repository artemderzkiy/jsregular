(function () {

 "use strict";
	function secondUdal(str) {

         //var masDel= str.replace( /\s|\.|\,|\?|\!|\:|\;/g , ''); 
         var masWord = str.match(/[а-я\w\-]+\B/gi),
          seekReq='',
          razbiv=[],
          counter =0;
         if (masWord===null)
         	{return str;}
         var oneWord = masWord[0].toLowerCase();
         for (var i=0; i<oneWord.length; i++)
         {
         	razbiv.push(masWord[0].charAt(i));
         }

         for(var i = 0; i < oneWord.length; i++) {
         	for(var j = 0; j < masWord.length; j++) {
         		if(~masWord[j].indexOf(razbiv[i])) 
         			counter++;
         	}
         	if(counter == masWord.length) {
         		seekReq= new RegExp(razbiv[i], 'ig');
         		str = str.replace(seekReq, '');
         	}
         	counter = 0;
         } 
         return str;
      }


      console.log(secondUdal("Чего-с изволите-с?Барин-с!"));
      console.log(secondUdal("!??слово!плов олово$$$!"));
      console.log(secondUdal("!!!"));


   })();



