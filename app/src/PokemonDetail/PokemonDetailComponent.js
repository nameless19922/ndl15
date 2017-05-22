'use strict';

pokemonApp.component('pokemonDetail', {

    controller: function PokemonDetailCtrl($routeParams, PokemonsService) {
        var self = this;

        self.pokemonLoaded = false;

        self.pokemon = PokemonsService.get({
            pokemonId: $routeParams['pokemonId']
        }, function(successResult) {
            self.notfoundError = false;
            self.pokemonLoaded = true;

            self.activeTab = 1;
            self.disableControlTab = true;
            console.log(self);
        }, function(errorResult) {
            self.notfoundError = true;
            self.pokemonLoaded = true;
        });

        self.pokemon.$promise.then(function(result) {

        });

        self.deletePokemon = function(pokemonId) {
            self.pokemon.$delete({
                pokemonId: pokemonId
            }, function(successResult) {
                self.deletionSuccess = true;
            }, function(errorResult) {
                self.deletionError = true;
            });
        }
    },

    templateUrl: './src/PokemonDetail/PokemonDetail.html'
});