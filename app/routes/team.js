import Ember from 'ember';

export default Ember.Route.extend({
  gameEngine: Ember.inject.service('game-engine'),

  model( params ) {
    this.get('gameEngine').set('currentTeam', params.color);
    return params.color;
  }

});
