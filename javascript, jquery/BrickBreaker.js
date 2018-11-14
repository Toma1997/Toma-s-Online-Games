
        stopDraw  = false; // GLOBALNA PROMENJIVA

        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext("2d");
        var ballRadius = 5;
        var x = canvas.width/2;
        var y = canvas.height - 30;
        var dx = 10;
        var dy = -10;
        var paddleHeight = 10;
        var paddleWidth = 100;
        var paddleX = (canvas.width - paddleWidth)/2;
        var rightPressed = false;
        var leftPressed = false;
        var brickRowCount = 22;
        var brickColumnCount = 8;
        var brickWidth = 50;
        var brickHeight = 35;
        var brickPadding = 3;
        var brickOffsetLeft = 16;
        var brickOffsetTop = 30;
        var score = 0;
        var lives = 3;
        var bricks= [];
        for(var c = 0;c<brickColumnCount;c++){
            bricks[c] = [];
            for(var r = 0; r<brickRowCount; r++){
                bricks[c][r] = { // KREIRA OBJEKAT CIGLA
            x: 0, 
            y: 0, 
            status: 1};
            }       
        }

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);

        function keyDownHandler(e){ // FUNKCIJA PRITISKANJA DUGMETA
            if(e.keyCode == 39){  // JS CHAR CODE ZA DESNU STRELICU
                rightPressed = true;
            }
            if(e.keyCode == 37){ // JS CHAR CODE ZA LEVU STRELICU
                leftPressed = true;
            }
        }
        function keyUpHandler(e){ // FUNKCIJA PUSTANJA DUGMETA
            if(e.keyCode == 39){
                rightPressed = false;
            }
            if(e.keyCode == 37){
                leftPressed = false;
            }
        }
        function mouseMoveHandler(e){
            var relX = e.clientX - canvas.offsetLeft;
            if(relX > 0 && relX<canvas.width){
                paddleX = relX - paddleWidth/2;
            }
        }


        function drawScore(){
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Score:" + score, 8, 20);
        }
        function drawLives(){
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Lives:" + lives, canvas.width - 65, 20);
        }

        function drawPaddle(){
            ctx.beginPath();
            ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
            ctx.fillStyle = "#0905BB";
            ctx.fill();
            ctx.closePath();

        }
         function drawBall(){
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.closePath();

         }
         function ballHit(){
          for( var c = 0;c<brickColumnCount;c++){
              for(var r = 0;r<brickRowCount;r++){
                var b = bricks[c][r];
                if(b.status == 1){
                  if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                    dy = -dy;  // LOPTICA UDARA, UNISTAVA CILGU I ODBIJA SE
                    b.status = 0;
                    score += 2;
                    //if(score == 13*5*3) - POBEDA
                    if(score == brickRowCount*brickColumnCount*2){
                      document.getElementById('Gameover2').style.display = 'block';
                      document.getElementById('start_game').style.disabled = true;
                      document.getElementById('reset_game').style.disabled = true;
                      
                      stopDraw = true;
                    }
                  }
                }
             }
           }
         }

         function drawBricks(){
            for(var c = 0;c<brickColumnCount;c++){
                for(var r = 0;r<brickRowCount;r++){
                    if(bricks[c][r].status == 1){
                        var brickX = (r*(brickWidth + brickPadding)) + brickOffsetLeft; // DEFINISANJE CIGLI PO X-OSI
                        var brickY = (c*(brickHeight + brickPadding)) + brickOffsetTop; // DEFINISANJE CIGLI PO Y-OSI
                        bricks[c][r].x = brickX; // REDJANJE PO X-OSI
                        bricks[c][r].y = brickY; // REDJANJE PO Y-OSI
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = "#7128AF";
                        ctx.fill();
                        ctx.closePath(); // UOKVIRUJEMO I BOJIMO CIGLE
                    }
                }
            }
        }
         function draw(){
          document.getElementById("start_game").disabled = true;
          document.getElementById('reset_game').style.disabled = false;


            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawBricks();
            drawBall();
            drawScore();
            drawLives();
            drawPaddle();
            ballHit();

          if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
            dx = -dx;
          }
           if(y + dy < ballRadius){
            dy = -dy;
          }
          // DETEKCIJA SUDARA  LOPTICE I POKRETNE PLOCE
          else if( y + dy > canvas.height - ballRadius){
            if(x > paddleX && x < paddleX + paddleWidth){
              dx = 10*((x - (paddleX + paddleWidth/2))/paddleWidth);
              dy = -dy; // ODBIJANJE PO NEGATIVNOM DIFERENCIJALU
            }
            else {
              lives--; // LOPTICA NIJE UDARILA O PLOCU VEC O DONJU IVICU CANVAS I TIME SE ODUZIMA ZIVOT
              if(!lives){
                document.getElementById('Gameover1').style.display = 'block';
                document.getElementById('start_game').style.disabled = true;
                document.getElementById('reset_game').style.disabled = true;


                stopDraw = true;
              } else{
              x = canvas.width/2; // X KOORDINATA PONOVNOG STVARANJA LOPTICE
              y = canvas.height - 30; // Y KOORDINATA PONOVNOG STVARANJA LOPTICE
              dx = 10; // PENJANJE LOPTICE PO DIFERENCIJALU ZA X
              dy = -10; // PENJANJE LOPTICE PO DIFERENCIJALU ZA Y (KOORD. SISTEM KRECE OD GORNJEG LEVOG UGLA PA JE ZATO -dy)

              }
            } 
          }
            if(rightPressed && paddleX < canvas.width - paddleWidth/2){
                paddleX += 14; // POMERAJ DESNO
            }
            if(leftPressed && paddleX > -paddleWidth/2){
                paddleX -=14; // POMERAJ LEVO
            }
             x += dx;
             y += dy;

             if (stopDraw === false) {
                requestAnimationFrame(draw); 
             }
             
         }
        drawBricks();
        drawBall();
        drawScore();
        drawLives();
        drawPaddle();
        ballHit();
      
       function hideModals() {
              document.getElementById('Gameover1').style.display = 'none';
              document.getElementById('Gameover2').style.display = 'none';
              document.location.reload();
          };

        function exit() {
            window.location.href = "index.html";
        }

      document.getElementById("reset_game").onclick = function(){
           document.location.reload();
       }