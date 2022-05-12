var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;
hole_x=400;
hole_y=800;

block_image_width = 30;
block_image_height = 30;



block_image_width = 5;
block_image_height = 5;

function player_update(){
	fabric.Image.fromURL("golf-h.png", function (Img) {

		player_object = Img;
  
		player_object.scaleToWidth(150);
		player_object.scaleToHeight(140);
		player_object.set({
		   top: player_y,
		   left: player_x
		});
  
		canvas.add(player_object);
  
	 });
  
	new_image();
	}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img) {

		player_object = Img;
  
		player_object.scaleToWidth(150);
		player_object.scaleToHeight(140);
		player_object.set({
		   top: player_y,
		   left: player_x
		});
  
		canvas.add(player_object);
  
	 });
  }


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((player_x==hole_x)&&(player_y==hole_y)){
		canvas.remove(ball_obj);
		console.log("You have Hit the Goal!!!");
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
	    document.getElementById("myCanvas").style.borderColor="red";
	}
 

	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (player_y >= 0) {
 
			player_y = player_y - block_image_height;
	  
	  
			canvas.remove(player_object);
	  
			player_update();
		}
	 }
	}

	function down()
	{
		if (player_y <=500 ) {
 
			player_y = player_y +block_image_height;
	  
	  
			canvas.remove(player_object);
	  
			player_update();
		}
	 }	 
	

	function right()
	{
		if(ball_x >5)
		{
			player_x = player_x + block_image_width;
 
 
			canvas.remove(player_object);
	  
			player_update();
		}
	 }
		
	

	function left()
	{
		if(ball_x <=1050)
		{
			player_x = player_x - block_image_width;
 
 
			canvas.remove(player_object);
	  
			player_update();
		}
	}
	


