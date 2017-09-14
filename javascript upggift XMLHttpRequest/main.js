let table_nummer;
let isTableSet = false;
let tablesArray = [];


function get_table_number(){
  table_nummer = document.getElementById("table").value;
  if(table_nummer != ''){
    let main1 = document.getElementById("first_p");
    main1.style.animation = "main1Up 1.5s";
    main1.addEventListener("animationend", main1Anim);
    isTableSet = true;
    take_queue();
    get_queue();
    setInterval(function() { get_queue(); }, 2000);
  }else{}
}

function take_queue(){
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8082');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {}
  }
  xhr.send(table_nummer);
}

function main1Anim(){
  document.getElementById('first_p').style.transform = "translateY(-100vh)";
}

function get_queue(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8082');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {

        tablesArray = JSON.parse(xhr.response);
        if(tablesArray.indexOf(table_nummer) + 1 === 1){
            document.getElementById("plats").innerHTML = "You will now be helped";
            document.getElementById("pos").innerHTML = "";
            document.getElementById("gotHelp").style.visibility = "visible";
        }else if(tablesArray.indexOf(table_nummer) + 1 === 0){
            table_nummer = "";
            location.reload(true);
        }else{
            document.getElementById("plats").innerHTML = "#" + (tablesArray.indexOf(table_nummer) + 1);
        }

    }
  }
  xhr.send();
}


function done(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8082/shift');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {}
  }
  xhr.send();
}
