let url="http://universities.hipolabs.com/search?country=India";
let btn =document.querySelector("button");

btn.addEventListener("click",async()=>{
    let state=document.querySelector("input").value.trim();
    console.log(state);
    let college=await getcollege(state);
    console.log(college);
    show(college);
});

function show(college){
    let list=document.querySelector("#list");
    list.innerText="";
    if (college.length === 0) {
        let li = document.createElement("li");
        li.innerText = "No universities found in this state.";
        list.appendChild(li);
        return;
    }
    for(let col of college){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getcollege(state) {
    try{
        let res = await axios.get(url);
        let filtered =res.data.filter(college=>college['state-province']?.toLowerCase()===state.toLowerCase());
        return filtered;
    }catch(e){
        console.log("error");
        return [];
    }
    
}