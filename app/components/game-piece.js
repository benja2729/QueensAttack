
import Ember from 'ember';
import Point from '../mixins/point';

export default Ember.Component.extend( Point, {
  model: null,

  tagName: 'img',
  classNames: ['game-piece'],
  attributeBindings: ['src'],

  src: Ember.computed('model', function() {
    let type = this.get('model.type');

    Ember.assert("Attr 'type' not defined on GamePiece", type);
    return `assets/images/chess_pieces_sprite.svg#${type}`;
  })

});

