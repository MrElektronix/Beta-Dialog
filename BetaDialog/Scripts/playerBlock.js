class playerBlock {
	constructor(){
		this.block;
		this.lockplayerinput;
		this.qablockinput;
		this.QABlock;
		
		this.loadingbutton;
		
		this.Player = {
			questions: []
		};
		
	}
	
	init(){
		this.block = new Block(80, 120, 300, 400, '<select id="selection" style="margin-top:10px;">' +
								'<option value="spiderman">Spiderman</option>' +
								'<option value="pinguin">Pinguin</option>' +
                 			'</select>' + 
							'<form style="margin-top:20px;">' +
								'<input type="button" value="Lock Player" id="lockplayer"/>' +
							   '<input type="button" value="add block" id="qablock"/>' +
							 
							'</form>');
 
		this.block.node_background = document.getElementById("node_background");
		this.block.node_background.appendChild(this.block.div);
		
		this.lockplayerinput = document.getElementById("lockplayer");
		this.lockplayerinput.addEventListener('click', ()=>{
			this.lockPlayer();
		})
		
		this.qablockinput = document.getElementById("qablock");
		this.qablockinput.style.visibility = "hidden";
		this.qablockinput.addEventListener('click', ()=>{
			this.makeQABlock();
		})
		
		this.loadingbutton = document.getElementById("loading");
		this.loadingbutton.addEventListener('click', ()=>{
			this.getSave();
		})
	}
	
	lockPlayer() {
		let selection = document.getElementById("selection");
		selection.disabled = "disabled";
		
		this.lockplayerinput.disabled = "disabled";
		this.qablockinput.style.visibility = "visible";
	}
	
	makeQABlock(){
		this.QABlock = new QA_Block();
	}
	
	getSave() {
		let q1 = document.getElementById("q1");
		let an1 = document.getElementById("an1");
		let an2 = document.getElementById("an2");
		let an3 = document.getElementById("an3");
		
		q1.innerHTML = "question: " + this.Player.questions[0].question;
		an1.innerHTML = "answer 1: " + this.Player.questions[0].answers[0];
		an2.innerHTML = "answer 2: " + this.Player.questions[0].answers[1];
		an3.innerHTML = "answer 3: " + this.Player.questions[0].answers[2];
	}
}