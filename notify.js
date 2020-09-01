javascript:(function(){

		browserTitle = document.title
		timeoutId  = 0 ;
		message = 'Neue Nachricht';
		currentlength = 0;

		function init() {
			currentlength = $(".message").length;
			$('.scroller').unbind("DOMSubtreeModified").bind('DOMSubtreeModified', function(){
				if ($(".message").length != currentlength) {
					notify();
					currentlength = $(".message").length;
				}
			});
			window.addEventListener("focus", function(event) { 
                stopBlinking();
            });

		};
			
		function notify() {
			if (!document.hasFocus()) {
				timeoutId = setInterval(startBlinking, 500);
				console.log(currentlength + " - " + $(".message").length);
			} else {
				currentlength = $(".message").length;
			}
		};
		
		function stopBlinking() {
            document.title = browserTitle;
            clearInterval(timeoutId);
        };

        function startBlinking() {
            document.title = document.title  === message ? browserTitle : message;
        };
		
		init();
	}
)();




