*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
background:black;
color:white;
font-family:'Poppins',sans-serif;
overflow-x:hidden;
}

/* INTRO */
.intro{
position:fixed;
top:0;
left:0;
width:100%;
height:100vh;
background:black;
display:flex;
justify-content:center;
align-items:center;
z-index:1000;
animation:introFade 3s forwards;
}

.intro-text{
font-family:'Montserrat',sans-serif;
font-size:3rem;
font-weight:900;
letter-spacing:5px;
color:#ff0000;
text-shadow:0 0 20px red;
}

@keyframes introFade{
0%{opacity:1;}
80%{opacity:1;}
100%{opacity:0;visibility:hidden;}
}

/* HERO */
.hero{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
}

.hero h1{
font-size:3rem;
font-family:'Montserrat',sans-serif;
font-weight:900;
}

.hero h2{
margin:15px 0;
color:#ff0000;
}

.glow-btn{
margin-top:30px;
padding:15px 40px;
background:red;
color:white;
text-decoration:none;
font-weight:bold;
border-radius:40px;
box-shadow:0 0 20px red;
transition:0.3s;
}

.glow-btn:hover{
box-shadow:0 0 40px red,0 0 80px red;
transform:scale(1.05);
}

/* STATS */
.stats{
margin-top:20px;
}

.stats h3{
font-size:2rem;
color:#ff0000;
}

/* SLIDER */
.slider-section{
padding:80px 20px;
text-align:center;
}

.slider{
display:flex;
overflow:hidden;
width:90%;
margin:auto;
}

.slide{
min-width:100%;
transition:0.5s;
}

video,img{
width:100%;
border-radius:15px;
}

/* FADE */
.fade{
opacity:0;
transform:translateY(40px);
transition:1s;
}

.fade.show{
opacity:1;
transform:translateY(0);
}

footer{
padding:30px;
text-align:center;
opacity:0.6;
}