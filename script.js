console.log("connected");
let main = document.querySelector(".content");



async function file(){
    let response =  await fetch("./data.json");
    let data = await response.json();
    console.log(data);

    let reaction = `<div class="item item1">
          <p><img src="${data[0].icon}">${data[0].category}</p>
          <p>${data[0].score}/100</p>
        </div>`;

    let memory = `<div class="item item2">
          <p><img src="${data[1].icon}">${data[1].category}</p>
          <p>${data[1].score}/100</p>
        </div>`;

    let verbal  = `<div class="item item3">
          <p><img src="${data[2].icon}">${data[2].category}</p>
          <p>${data[2].score}/100</p>
        </div>`;

    let Visual  = `<div class="item item4">
        <p><img src="${data[3].icon}">${data[3].category}</p>
        <p>${data[3].score}/100</p>
       </div>`;

        main.innerHTML += reaction;
        main.innerHTML += memory;
        main.innerHTML += verbal;
        main.innerHTML += Visual;
}
file();