(function ($) {


	//инициализацичя плагина

//
//	$.fn._ = function (options) {
//
//		console.log("Initialize me");
//
//	}






})(jQuery);



var myHandler = function (){
	var i = 0;
    console.log("first " + i)
	var counter = function() {
        console.log("third " + i)

        return i++;
	}
    console.log("second " + i)

    return counter;

}

