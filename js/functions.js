
let url = 'https://tt905-2021-mensagens-bruno.herokuapp.com/pokedex'

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost(pokemon){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'pokedexs' : pokemon
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
}

async function callFetchWithDelete(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
}