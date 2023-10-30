const { log } = console;

const TOKEN = "7wp2czbzp3d39onuss407c4q7opmedaubhormioh";
const URL = "https://sheetdb.io/api/v1/pxwkunda9j04r";

let developers = document.querySelector("body > main > developers");

const devRender = (datos_dev) => {
    let div = document.getElementById("developers");
    //div.style.backgroundColor = datos_dev.color_status;
    //div.style.color = "white";
    //div.style.display = 'grid';
    
    let name = document.createElement("p");
    let picture = document.createElement("img");
    var tag = datos_dev.name + "\n"+ datos_dev.email;
    let div_dev = document.createElement("div");

    name.innerText = tag;
    picture.src = datos_dev.picture;
    div_dev.appendChild(picture);
    div_dev.appendChild(name);
   
    div.appendChild(div_dev);
    return div;
  };

const getData = () => {
	fetch(URL, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${TOKEN}`,
		
		},
	})
	.then((res) => res.json())
	.then((data) => {
       const devs = data.map((datos_dev) => devRender(datos_dev));
       devs.forEach((datos_dev) => developers.appendChild(datos_dev));
    }
    
    )
	.catch((error) => log({error}));
};


getData();