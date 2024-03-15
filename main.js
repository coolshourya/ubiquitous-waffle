
// Create canvas variable
var canvas=new fabric.canvas('myCanvas'); 
//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800;
  
block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
    hole_obj = Img;
    hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
	hole_obj.set({
    top:hole_y,
	left:hole_x
	});
	canvas.add(hole_obj)
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_obj)
		});
		new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
console.log(keyPressed);

	if((ball_x==hole_x)&&(ball_y==ball_y)){
		canvas.remove(ball_obj);
	}}
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	document.getElementById("hd3").innerHTML="you have hit the goal!!!";
	document.getElementById("myCanvas").style.bordercolor=red;

	
	

	function up(){
		if(ball_y >=0)
		{
			ball_y=ball_y-block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When up arrow is pressed, x= " + ball_x + " , y = "+ball_y);
			canvas.remove(ball_obj);
		}  new_image();
	}
	
	function down(){
		if(ball_y <=500)
		{
			ball_y=ball_y+block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When down arrow is pressed, x= " + ball_x + " , y = "+ball_y);
			canvas.remove(ball_obj);
		}   new_image();
	}
	
	function left(){
		if(ball_x >=0)
		{
			ball_x=ball_x-block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When left arrow is pressed, x= " + ball_x + " , y = "+ball_y);
			canvas.remove(ball_obj);
		}   new_image();
	}
	
	function right(){
		if(ball_x <=850)
		{
			ball_x=ball_x+block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When right arrow is pressed, x= " + ball_x + " , y = "+ball_y);
			canvas.remove(ball_obj);
		}   new_image();
	}
	
