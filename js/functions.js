
let url = 'https://tt905-2021-mensagens-bruno.herokuapp.com/database'

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

async function callFetchWithPost(pokemon, type, about){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : pokemon,
            'type' : type,
            'about' : about
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, novopokemon, novotype, novoabout){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            'name' : novopokemon,
            'type' : novotype,
            'about' : novoabout
        })
    }
    await fetch(`${url}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}/${id}`, options);
}

/*
    Formulários
*/

function submitPost(){
    console.log("entrei na função");
    const form = document.forms['postForm'];    
    const poke = form["pokemon"].value;
    const typ= form["type"].value;
    const abou = form["about"].value;
    
    callFetchWithPost(poke, typ, abou);
    return false; // Evitar o reload da tela.
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const novpokemon = form["pokemon"].value;
    const novtype = form["type"].value;
    const novabout = form["about"].value;
    
    callFetchWithPut(id, novpokemon, novtype, novabout);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const identidade= form["id"].value;  
    callFetchWithDelete(identidade);
    return false; // Evitar o reload da tela.
}