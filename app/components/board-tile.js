
import Ember from 'ember';
import Point from '../mixins/point';

export default Ember.Component.extend( Point, {
  gameEngine: Ember.inject.service('game-engine'),

  classNames: ['tile'],
  classNameBindings: ['background'],

  piece: null,
  _piecePosessionObserver: Ember.observer('piece.position', function() {
    let position = this.get('piece.position');
    if( position && this.compare(position) !== 0 ) {
      this.set('piece', null);
    }
  }),

  background: Ember.computed( function() {
    let { x, y } = this.get('position'),
        isEven = ( x + y ) % 2 === 0;
    return `tile-${isEven ? 'white' : 'black'}`;
  }),

  click() {
    let engine    = this.get('gameEngine'),
        position  = this.get('position'),
        team      = engine.get('currentTeam'),
        piece     = engine.movePiece(`${team}-queen`, position);

    this.set('piece', piece);
    engine.toggleTeam();
  }

});

