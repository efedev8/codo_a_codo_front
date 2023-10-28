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
    let email = document.createElement("p");
    let picture = document.createElement("img");
    name.innerText = datos_dev.name;
    email.innerText = datos_dev.email;
    picture.src = datos_dev.picture;
    picture.width = 60;
  
    div.appendChild(name);
    div.appendChild(email);
    div.appendChild(picture);
  
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