
var api = "https://pokeapi.co/api/v2/pokemon/PKMNID/";

function search(id) {
  var call = api.replace(/PKMNID/, id);
  $.get(call, function(info) {
    $('figure>img').attr('src', 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+ ('00' + id).slice(-3) +'.png')
    $('#pkmn-name').text(info.name);     
  });
}

$('button').click(function(){
  var shuffler = Math.floor((Math.random() * 802) + 1);  
  search(shuffler);   
});