var p1 = localStorage.getItem("p1");
var p2 = localStorage.getItem("p2");
var point1 = 0;
var point2 = 0;
document.getElementById("player1").innerHTML = p1 + ": ";
document.getElementById("player2").innerHTML = p2 + ": ";
document.getElementById("score1").innerHTML = point1;
document.getElementById("score2").innerHTML = point2;
function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();

    l1 = word.charAt(1);
    dividt = Math.floor(word.length / 2);
    l2 = word.charAt(dividt);
    u = word.length - 1;
    l3 = word.charAt(u);
    remove1 = word.replace(l1, "_");
    remove2 = remove1.replace(l2, "_");
    remove3 = remove2.replace(l3, "_");
    questionword = "<h4 id='wd'>P. " + remove3 + '</h4>';
    input_box = "<br> Resposta : <input type=text id='inputresult'>";
    checkb = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = questionword + input_box + checkb;
    document.getElementById('output').innerHTML = row;
    document.getElementById('word').value = "";

}
pq = "p1";
pr = "p2";
function check() {
    gr = document.getElementById("inputresult").value;
    resposta = gr.toLowerCase();
    if (resposta == word) {
        if (pr == "p1") {
            point1 = point1 + 1;
            document.getElementById("score1").innerHTML = point1;
        }
        else {
            point2 = point2 + 1;
            document.getElementById("score2").innerHTML = point2;

        }
    }
    if(pq =="p1"){
        pq="p2";
        document.getElementById("playerquestion").innerHTML="Turno Da Pergunta- "+p2;

    }
    else {  pq="p1";
    document.getElementById("playerquestion").innerHTML="Turno Da Pergunta- "+p1;


    }
    if(pr =="p1"){
        pr="p2";
        document.getElementById("playeranswer").innerHTML="Turno Da Resposta- "+p2;

    }
    else {  pr="p1";
    document.getElementById("playeranswer").innerHTML="Turno Da Resposta- "+p1;


    }

}
