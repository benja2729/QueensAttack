
import Ember from 'ember';

export default Ember.Component.extend({
  gameEngine: Ember.inject.service('game-engine'),

  classNames: ['well'],
  classNameBindings: ['message::hidden'],
  message: Ember.computed.alias('gameEngine.message')
});

