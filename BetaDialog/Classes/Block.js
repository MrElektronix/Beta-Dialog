class Block {
	constructor(x, y, width, height, innerhtml) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.innerhtml = innerhtml;
		
		
		this.div = document.createElement('div');
		this.node_background;
		this.init();
	}
	
	
	init() {
		let xString  = this.x.toString();
		let yString = this.y.toString();
		let widthString = this.width.toString();
		let heightString = this.height.toString();
		
		this.div.innerHTML = this.innerhtml;
		this.div.style.textAlign = "center";
		this.div.style.position = "absolute";
		this.div.style.border = "solid black 4px";
		this.div.style.width = widthString + "px";
		this.div.style.height = heightString + "px";
		this.div.style.top = yString + "px";
		this.div.style.left = xString + "px";
	}
	
	
	
}