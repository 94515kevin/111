var colors = "ffbe0b-fb5607-ff006e-8338ec-3a86ff".split("-").map(a=>"#"+a)
var line_colors = "ffbe0b-fb5607-ff006e-8338ec-3a86ff".split("-").map(a=>"#"+a)
// 宣告一個球的物件，為一個陣列，陣列內可以放很多球的資訊
var balls = []  //所有球的資料內容
var ball  //正在處理的球
class ball_class{  //宣告一個ball_class物件，
  constructor(args){  //描述物件的初始值，只有設定物件的資料內容
    this.p = args.p || {x:width/2,y:height/2}; //球的位置
    this.r = args.r || random(50,60)  //球的大小
    this.color = args.color || random(colors)  //球的顏色，color函數為顏色設定值
    this.v = args.v || {x:random(-2,2),y:random(-2,2)}   //球的移動速度，有兩個屬性(x,y)，移動的速度
    this.line_color = args.line_color || random(line_colors)  //圓的框線顏色
    this.a = args.a || {x:0,y:random(0.7,1.2)}  //加速度
    this.mode =random(["happy","bad"])
    this.rid = random(10000)
  }
  draw(){   //畫出物件畫面的程式碼，一個物件繪出的程式碼
    push()
      translate(this.p.x,this.p.y) //把圓點(0,0)設定到圓心上
      stroke(this.line_color)
      fill(this.color)
      
      noStroke()
{
      fill(179,139,109)
      rect(0, 60, 400, 400) //the brown background
    
    
      fill(61,43,31)
      rect(0, 0, 50, 50) //green squares 
    
      fill(61,43,31)
      rect(50, 0, 50, 50) //greensquares
    
      fill(61,43,31)
      rect(100, 0, 50, 50) //green
    
      fill(61,43,31)
      rect(150, 0, 50, 50) //green
    
      fill(61,43,31)
      rect(200, 0, 50, 50) //green
    
      fill(61,43,31)
      rect(250, 0, 50, 50) //green
    
      fill(61,43,31)
      rect(300, 0, 50, 50) //green
    
      fill(61,43,31)
      rect(350, 0, 50, 50)
    
      fill(61,43,31)
      rect(0, 50, 50, 50) //first row of brown starts here 
    
    
    fill(61,43,31)
    rect(40,50,50,50) 
      
    fill(61,43,31)
    rect(70,50,50,50) 
    
    fill(61,43,31)
    rect(110,50,50,50) 
    
    fill(61,43,31)
    rect(150,50,50,50) 
    
    fill(61,43,31)
    rect(200,50,50,50) 
      
    fill(61,43,31)
    rect(250,50,50,50) 
      
    fill(61,43,31)
    rect(300,50,50,50) 
    
    fill(61,43,31)
    rect(350,50,50,50) //brown ends here 
      
      fill(61,43,31)
      rect(0, 100, 50, 50) //side burns 
    
    fill(61,43,31)
      rect(350, 100, 50, 50) //side burns 
      
    fill("white")
      rect(50, 200, 50, 50) 	//eyes
      
    fill("white")
      rect(100, 200, 50, 50) //eyes
      
    fill("white")
      rect(250, 200, 50, 50) //eyes
      
    fill("white")
      rect(300, 200, 50, 50) //eyes
    
    
      
      fill(112,66,20)
      rect(150, 250, 50, 50) //nose
      
      fill(112,66,20)
      rect(200, 250, 50, 50) //nose
      
      fill(160,120,90)
      rect(0, 250, 50, 50) //face row 4 
      
      fill(152,116,86)
      rect(50, 250, 50, 50) //face row 4 
      
      fill(165,113,100)
      rect(100, 250, 50, 50) //face row 4 
      
      fill(205,149,117)
      rect(250, 250, 50, 50) //face row 4 
      
      fill(160,120,90)
      rect(300, 250, 50, 50) //face row 4 
      
      fill(152,116,86)
      rect(350, 250, 50, 50) //face row 4 
    
    fill(193,154,107)
      rect(0, 200, 50, 50) //face row 3
      
    fill(166,123,91)
      rect(150, 200, 50, 50) //face row 3
    
    fill(193,154,107)
      rect(200, 200, 50, 50) //face row 3
    
    fill(160,120,90)
      rect(350, 200, 50, 50) //face row 3
      
      
      
    fill(179,139,109)
      rect(0, 150, 50, 50) //face row 2
        
    fill(188,152,126)
      rect(50, 150, 50, 50) //face row 2
      
    fill(210,180,140)
      rect(100, 150, 50, 50) //face row 2
      
    fill(169,154,134)
      rect(150, 150, 50, 50) //face row 2
      
    fill(195,176,145)
      rect(200, 150, 50, 50) //face row 2
      
    fill(193,154,107)
      rect(250, 150, 50, 50) //face row 2
      
    fill(188,152,126)
      rect(300, 150, 50, 50) //face row 2
      
    fill(160,120,90)
      rect(350, 150, 50, 50) //face row 2
      
      
      fill(160,120,90)
      rect(50, 100, 50, 50) //face row 1
      
      fill(159,129,112)
      rect(100, 100, 50, 50) //face row 1
      
        fill(160,120,90)
      rect(150, 100, 50, 50) //face row 1
      
        fill(222,184,135)
      rect(200, 100, 50, 50) //face row 1
      
        fill(210,180,140)
      rect(250, 100, 50, 50) //face row 1
      
        fill(160,120,90)
      rect(300, 100, 50, 50) //face row 1
      
      
      
      
      
        
      
      
      
      fill(121,68,59)
      rect(150, 300, 50, 50) //mof
      
      fill(121,68,59)
      rect(200, 300, 50, 50) //mof
      
    fill(50,0,0)
      rect(100, 300, 50, 50) //beard
      
    fill(50,0,0)
      rect(100, 350, 50, 50) //beard
    
    fill(50,0,0)
      rect(150, 350, 50, 50) //beard
      
      fill(50,0,0)
      rect(200, 350, 50, 50)  //beard
      
      
      fill(50,0,0)
      rect(250, 350, 50, 50)  //beard
    
    fill(50,0,0)
      rect(250, 300, 50, 50)  
      
    fill(186,135,89)
      rect(0, 300, 50, 50) //face row 5 
      
      fill(131,105,83)
      rect(50, 300, 50, 50) //face row 5
      
      
      fill(102,76,40)
      rect(300, 300, 50, 50) //face row 5
      
      fill(107,68,35)
      rect(350, 300, 50, 50) //face row 5
      
    
    
      fill(107,68,35)
      rect(0, 350, 50, 50) //face row 6 
      
      fill(120,66,20)
      rect(50, 350, 50, 50) //face row 6
      
      
      fill(100,65,23)
      rect(300, 350, 50, 50) //face row 6
      
      fill(101,67,33)
      rect(350, 350, 50, 50) //face row 6
    
    }
      for(var k=0;k<3;k=k+1)
      {
        
       
        //line(this.r/2,0,this.r,0)
        noFill()
        beginShape()
        for(i=0;i<(this.r/2);i=i+5){
          vertex(this.r/2+i,sin(i/10+frameCount/10+this.rid)*15) //
        }
        endShape()
      }
      pop()  //把圓點恢復到左上角
    
  }
  update(){  //物件移動更新後的程式碼
    if(this.mode == "happy"){
      this.p.y = this.p.y + sin(frameCount/10+this.r) *(this.r/10)
    }
    else{
      this.p.x = this.p.x + this.v.x   //x軸
      this.p.y = this.p.y + this.v.y   //y軸
    }
    
    // this.v.y = this.v.y + this.a.y   //把往下的速度，每次加一個a的值
    //a值為正，this.v.y碰到地時，會變成負值，如果兩數相加，this.v.y就會慢慢變成0
    //發現越跳越高，使用*0.99產生一個摩擦力
    // this.v.x = this.v.x * 0.99
    // this.v.y = this.v.y * 0.99
    if(this.p.x<0){  //碰到視窗左邊
      this.v.x = -this.v.x
    }
    if(this.p.x>width){  //碰到視窗右邊
      this.v.x = -this.v.x
    }
    if(this.p.y<0){   //碰到視窗上邊
      this.v.y = -this.v.y
    }
    if(this.p.y>height){  //碰到視窗下邊
      this.v.y= -this.v.y
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i=0;i<20;i=i+1){  //產生多個球資料(20顆球)
    ball = new ball_class({  //傳一串參數值到class內
    v:{x:random(-2,2),y:random(-2,2)},
    p:{x:random(0,width),y:random(0,height)},
    a:{x:0,y:0}
    })
    balls.push(ball)
  }
  // print(balls)
}

function draw() {
  background(220);
  for(j=0;j<balls.length;j=j+1){
    ball = balls[j]
    ball.draw()   //繪出球的樣子
    ball.update()  //更改球的位置
  }
}

function mousePressed(){
  ball = new ball_class({  //傳一串參數值到class內
    v:{x:random(-2,2),y:random(-2,2)},
    p:{x:mouseX,y:mouseY},
    a:{x:0,y:0}
    })
    balls.push(ball)
}
	