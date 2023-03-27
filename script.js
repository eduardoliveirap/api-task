function buscarRegioes()
{
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then(resposta => resposta.json())
    .then(resposta => {
        resposta.forEach(function(regiao){
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`
            });
    })
}buscarRegioes();


function buscarEstados()
{
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados?orderBy?=nome`)
    .then(resposta => resposta.json())
    .then(resposta => {
        estados.innerHTML = "";
        estados.innerHTML = "<option disabled selected>Escolha um estado</option>";
        resposta.forEach(function(estado){
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        });
    })
} 
function buscarCidades()
{
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios?orderBy?=nome`)
    .then(resposta => resposta.json())
    .then(resposta => {
        cidades.innerHTML = "";
        cidades.innerHTML = "<option disabled selected>Escolha sua cidade</option>";
        resposta.forEach(function(cidade){
            cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`
        });
    })
} 
