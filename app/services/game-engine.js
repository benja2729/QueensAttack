
import Ember from 'ember';
import AttackPatterns from '../modules/attack-patterns';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  pieces: Ember.computed(function() {
    return this.get('store').peekAll('piece');
  }),
  activePieces: Ember.computed.filterBy('pieces', 'position'),

  init() {
    this._super();
    this.initGamePieces();
  },

  initGamePieces() {
    let teamNames   = ['black', 'white'],
        pieceNames  = ['king', 'queen', 'bishop', 'knight', 'rook', 'pawn'],
        store       = this.get('store');

    for( let team of teamNames ) {
      for( let piece of pieceNames ) {
        let name = `${team}-${piece}`;
        store.createRecord('piece', {
          id:   name,
          type: name
        }).save();
      }
    }
  },

  toggleTeam() {
    let team    = this.get('currentTeam'),
        newTeam = 'white' === team ? 'black' : 'white';
    this.set('currentTeam', newTeam);
    this.container.lookup('route:team').transitionTo('team', newTeam);
  },

  movePiece( id, position ) {
    let store   = this.get('store'),
        pieces  = this.get('activePieces'),
        piece   = store.recordForId('piece', id),

        attacker = piece,
        defender = pieces.without(attacker).get('firstObject');

    this.set('message', null);

    piece.set('position', position);
    piece.save();

    if( defender && AttackPatterns.attack(attacker, defender) ) {
      this.set('message', 'Hit!');
    }

    return piece;
  }

});

