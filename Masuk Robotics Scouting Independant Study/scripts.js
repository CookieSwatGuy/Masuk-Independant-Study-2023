const teamArr = new Array();

//creates function creates team object and returns object to be inserted into array
function team(n, loc, w, l, t, s){
    const teams = {
        name: n,
        location: loc,
        wins: w,
        losses: l,
        ties: t,
        skills: s,
    }
    return teams;
}

//for loops adds as many teams as there are in database, taking data from each one and inserting the returned object into array
function arrayGen(teamCount){
    for(var i = 0; i < teamCount; i++){
        teamArr.push(team("1234B", "Testville", 10, 2, 0, 192));
    }
}

function tableGen(){
    const t = document.getElementById("table1");
    for(let i = 1; i<=2; i++){
        let r = document.createElement("tr");
        r.setAttribute("id", "row"+i);
        for(let j = 1; j<=6; j++){
            let c = document.createElement("td");
            c.setAttribute("id", "col"+(i*10+j))
            r.appendChild(c);
        }
        t.appendChild(r);
    }
    for(let i = 1; i<=2; i++){
        document.getElementById("col" + (i*10 + 1)).innerHTML = teamArr[i-1].name;
        document.getElementById("col" + (i*10 + 2)).innerHTML = teamArr[i-1].location;
        document.getElementById("col" + (i*10 + 3)).innerHTML = teamArr[i-1].wins;
        document.getElementById("col" + (i*10 + 4)).innerHTML = teamArr[i-1].losses;
        document.getElementById("col" + (i*10 + 5)).innerHTML = teamArr[i-1].ties;
        document.getElementById("col" + (i*10 + 6)).innerHTML = teamArr[i-1].skills;
    }
}