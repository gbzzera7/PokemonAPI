var divConteudo = document.getElementById("conteudo");
var divAbilities = document.getElementById("abilities")
function renderizaPokedex(data) {
    divConteudo.innerHTML = `
    <h1>${data.name}</h1> <br/>
    <img src='${data.sprites.front_default}'></img>
    <h2>Habilidades</h2>
    `
    divAbilities.innerHTML = ""
}

function renderizaHabilidades(abilities){
    console.log(abilities.ability.name)
    divAbilities.innerHTML += 
    `
    <div class = descricao>
       <h3> ${abilities.ability.name} </h3>
    </div>
    `   
}

function RenderizaErro(){
    divConteudo.innerHTML = `
    <h1>ERRO</h1><br/>
    <h2>Não encontramos seu Pokemon</h2>`
    divAbilities.innerHTML = ""
}

var inputNomePokemon = document.getElementById("pokemon")
var btnProcurar = document.getElementById("btnProcurar");
btnProcurar.onclick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputNomePokemon.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderizaPokedex(data)
        data.abilities.forEach(renderizaHabilidades);
    })
    .catch(exception =>{
        console.error(exception)
        RenderizaErro();
    })
}
document.getElementById("pokemon")
.addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
        document.getElementById("btnProcurar").click();
    }
});