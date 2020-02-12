//Global variable Declarations
const team_name=['CHENNAI SUPER KINGS','ROYAL CHALLENGE BANGALORE']
const players_name=[['MS DHONI','SURESH RAINA','SHANE WATSON','DU PLESSIS','RAVINDRA JADEJA','DWAYNE BRAVO','AMBATI RAYUDU','MURALI VIJAY','DEEPAK CHAHAR','HARBHAJAN SINGH'],
    ['VIRAT KOHLI','AB DEVILLERS','DALE STEYN','AARON FINCH','MOEEN ALI','PARTHIV PATEL','PAWAN NEGI','CHAHAL','CHRIS GAYLE','MARCUS STONIS']]
var player_id=0;
var team_id=0;
var player_balls=0;
var player_score=0;
var player_fours=0;
var player_sixes=0;
var total_balls=0;
var total_score=0;
var total_fours=0;
var total_sixes=0;
var inn_totalballs=0;
var team_obj={}
//Creating HTML elements using Javascript using DOM create element method
var division1=document.createElement("DIV");
//Creating HTML BUTTON using Javascript using DOM create element method
var btn1=document.createElement("BUTTON");
//appending div tags and button tags in html page
document.body.appendChild(btn1);
document.body.appendChild(division1);
btn1.innerHTML="CLICK ME";
btn1.addEventListener("click",function random()
{
//Generating Random number when HTML button is pressed
var score=Math.floor(Math.random()*7);
division1.innerHTML="My score is "+ score;
//Calling player class 
var player1=new player(score)
});
//Creating a class named player
class player
    {
    constructor(score)
    { 
    player_balls=player_balls+1;
    total_balls=total_balls+1;
    inn_totalballs=inn_totalballs+1;
    if(inn_totalballs==61)
    {
        document.body.removeChild(btn1);
        division1.innerHTML="Second team innings ended";
        division1.innerHTML="Match ended";
        document.body.removeChild(division1);
    }
    



// What if total balls exceeds 30    
    if(total_balls>29)
    {
        var players=[]
        players.push(player_score,player_balls,player_fours,player_sixes)
        team_obj[players_name[team_id][player_id]]=players;
        var team1=new team();
        division1.innerHTML="First team innings ended"
        player_id=0;
        player_balls=0;
        player_score=0;
        player_fours=0;
        player_sixes=0;
        total_balls=0;
        total_score=0;
        total_fours=0;
        total_sixes=0;
        team_id=1;
    }
    else{
        if(score==0)
            {
            var players=[]
            players.push(player_score,player_balls,player_fours,player_sixes)
            team_obj[players_name[team_id][player_id]]=players;
            reset();
            player_id=player_id+1;
            }

            else
            {
            if(score==4){player_fours=player_fours+1;total_fours=total_fours+1}
            if(score==6){player_sixes=player_sixes+1;total_sixes=total_sixes+1}
            player_score=player_score+score;
            total_score=total_score+score;
            }
        }
    }
}
// creating a class named team
    class team{
        constructor()
        {
        var newteam={}
        newteam["NAME"]=team_name[team_id];
        newteam["PLAYERS"]=team_obj;
        newteam["TOTAL-SCORE"]=total_score;
        newteam["WICKETS"]=Object.keys(team_obj).length;
        newteam["FOURS"]=total_fours;
        newteam["SIXES"]=total_sixes;
        console.log(newteam)
        }
    }
    //reset new player details
    function reset()
    {
    player_balls=0;
    player_score=0;
    player_fours=0;
    player_sixes=0;
    }
//creating other HTML elements
var division2=document.createElement("DIV");
document.body.appendChild(division2);
var csk=document.createElement("IMG");
csk.setAttribute("src","csk.jpg");
document.body.appendChild(csk);
var sample=document.createElement("SPAN");
sample.innerHTML="VS";
document.body.appendChild(sample);
var rcb=document.createElement("IMG");
rcb.setAttribute("src","rcb.png");
document.body.appendChild(rcb);
var division3=document.createElement("DIV");
document.body.appendChild(division3);
var btn2=document.createElement("BUTTON");
btn2.innerHTML="RESULT";
document.body.appendChild(btn2);
//Result view newpage
btn2.addEventListener("click",result());
function result()
{
    if(inn_totalballs==60)
    {
        
    }
}
