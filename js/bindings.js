window.onload = function()
{
	const btnPageMap = new Map();
	btnPageMap.set("#btnHome","home.html");

	for (let [key, value] of btnPageMap) 
	{
		$(key).button().click(function(){
			document.getElementById('content').innerHTML = '<object width="100%" type="text/html" data="'+value+'"</object>';
    	});
	}
	 
};