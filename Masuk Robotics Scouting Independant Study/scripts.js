function tableGen(){
    const t = document.getElementById("table1");
    for(let i = 1; i<=10; i++){
        let r = document.createElement("tr");
        r.setAttribute("id", "row"+i);
        for(let j = 1; j<=6; j++){
            let c = document.createElement("td");
            c.setAttribute("id", "col"+(i*10+j))
            r.appendChild(c);
        }
        t.appendChild(r);
    }
    for(let i = 1; i<=10; i++){
        document.getElementById("col" + (i*10 + 1)).innerHTML = "name";
        document.getElementById("col" + (i*10 + 2)).innerHTML = "loc";
        document.getElementById("col" + (i*10 + 3)).innerHTML = "wins";
        document.getElementById("col" + (i*10 + 4)).innerHTML = "losses";
        document.getElementById("col" + (i*10 + 5)).innerHTML = "ties";
        document.getElementById("col" + (i*10 + 6)).innerHTML = "skills";
    }
}