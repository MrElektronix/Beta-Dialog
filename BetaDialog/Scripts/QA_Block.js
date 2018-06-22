class QA_Block{
	constructor() {
		this.block;
		this.savebutton;
		
		this.init();
	}
	
	
	init() {
		this.block = new Block(100, 200, 250, 200,
							'<form style="margin-top:20px;">' +
								'Question:' + '<input type="text" value="" id="question1"/>' +
							   'Answer: ' +'<input type="text" value="" id="answer1"/>' +
							   'Answer: ' +'<input type="text" value="" id="answer2"/>' +
							   'Answer: ' +'<input type="text" value="" id="answer3"/>' +
							   '<br/>' +
							   '<input type="button" value="Save" id="save_button"/>' +
							'</form>');
		this.block.node_background = document.getElementById("node_background");
		this.block.node_background.appendChild(this.block.div);
		
		this.savebutton = document.getElementById("save_button");
		this.savebutton.addEventListener('click', ()=>{
			this.saveQA()
		})
		
	}
	
	saveQA() {
		let question1 = document.getElementById("question1");
		let answer_1 = document.getElementById("answer1");
		let answer_2 = document.getElementById("answer2");
		let answer_3 = document.getElementById("answer3");
		
		playerblock.Player.questions.push({
			question: question1.value,
			answers: [answer_1.value, answer_2.value, answer_3.value],
			correctAnswer: 1
		})
		
		console.log(playerblock.Player);
	}
	
}