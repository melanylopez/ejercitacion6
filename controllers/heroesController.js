const fs = require ('fs')

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
module.exports = {
  

heroes : (req,res) =>{
    res.send(heroes);
},
detalle : (req,res)=>{
    
let id = req.params.idHeroe

let heroe = heroes.filter((heroe) => {
	return heroe.id == id
})  ;
	heroeSeleccionado = heroe[0];

	if(heroeSeleccionado == undefined ){
		res.send ("Este heroe no fue encontrado :( pruebe con otro id.")
	}else {
		res.send (`hola, mi nombre es ${heroeSeleccionado.nombre}y soy ${heroeSeleccionado.profesion}`)
	}
	
	
},
bio : (req, res)=>{
        let id = req.params.id
        
        let ok = req.params.ok
    
        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        }) ;
        heroeSeleccionado = heroe[0];
    
        if (heroeSeleccionado == undefined){
            return	res.send ("No encontramos un héroe para mostrarte su biografía")
        }
        if (ok == "ok"){
         return	res.send (`${heroeSeleccionado.nombre}: ${heroeSeleccionado.resenia}`)
    
        }else{
            return res.send (`${heroeSeleccionado.nombre}: Lamento que no desees saber mas de mi :(`)
        }
    
    
        },
}
 