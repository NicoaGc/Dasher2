

const scriptsInEvents = {

	async Dasherev_Event24_Act1(runtime, localVars)
	{
		let vidas = runtime.globalVars.vidas;
		
		vidas --;
		
		runtime.globalVars.vidas = vidas;
		
		if(vidas <= 0){
			console.log("Game Over");
			runtime.goToLayout("Game Over")
			}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
