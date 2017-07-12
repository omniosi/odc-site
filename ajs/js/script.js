angular.module('omnious',['ngSanitize'])
.controller('mainCntrl',function($scope){
	$scope.entries = [{
		"skill":"3D Modeling & Printing"
		,"image":"grey-trophy_3d-print_600W.jpg"
		,"title":"GREY trophy 3D print"
		,"description":{
			"brief":"<span class='title'>Brief:</span> 3D model and print an object to be the trophy for an <a href='http://www.psfk.com/2014/10/marriot-makerbot-grey-new-york-contest.html' target='_blank'>internal design competition</a>."
			,"process":"<span class='title'>Process:</span> Using a series of photos from various angles of an existing art piece for reference, model a series of 3D objects in <a href='https://tinkercad.com/' target='_blank'>Autodesk Tinkercad</a>. Export each object seperately to insure proper 3D printing. Convert the file for 3D printing using the <a href='http://www.makerbot.com/' target='_blank'>Makerbot</a> Replicator 2. Assemble the 3D printetd pieces into the final trophy and house in a clear plexiglass case."
		}
		,"link":"work/pkboo/index.html"
	}];
})
;