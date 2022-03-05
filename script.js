function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const check = (val)=> {
    if (val.path[0].style.backgroundColor==document.getElementById("flex").innerText) {
        document.getElementById("result").innerText="Correct Tile selected!";
        document.getElementById('notice').style.display="block";
    }
    else{
        val.path[0].style.backgroundColor="black";
        val.path[0].style.border="none";
        val.path[0].style.cursor="default";
        val.path[0].removeEventListener("click", check);
        document.getElementById("result").innerText="Try Again!";
        setTimeout(()=>{
            document.getElementById("result").innerText="Select the tile with given color!";
        },1000);
    }
}

const levelChange=(level)=>{
    if (document.getElementById('notice').style.display=='block') {
        document.getElementById('notice').style.display="none";
        document.getElementById("result").innerText="Select the tile with given color!";
    }
    document.getElementById('card').innerHTML='';
    if (level=='same') {
        buildGame();
    }
    else if (level=='easy') {
        num=1;
        buildGame();
    }
    else{
        num=2;
        buildGame();
    }
}

num=1;

const buildGame = () => {
    val = Math.floor(Math.random()*(3*num-1))+1;
    for (let i = 0; i<num; i++) {
        table=document.getElementById("card")
        row=table.insertRow(0);
        for (let j = 1; j <=3; j++) {
            cell=row.insertCell();
            cell.addEventListener("click", check);
            cell.style.backgroundColor=getRandomColor();
            if (3*i+j==val) {
                document.getElementById("flex").innerText=cell.style.backgroundColor;
            }
        }
    }
}

buildGame();