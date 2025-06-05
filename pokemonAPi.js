fetch('https://pokeapi.co/api/v2/pokemon/' ,{})



// .then(response =>console.log(response))


.then(response=>response.json())

// .then(data=>console.log(data))    -->whole api data

.then(data =>{
    data.results.forEach(pokemon=>{
        console.log(pokemon.name);
    })
})

.catch( error=>console.log(error));