
import Ember from 'ember';
import Point from '../mixins/point';

export default Ember.Component.extend( Point, {

  classNames: ['tile'],
  classNameBindings: ['background'],

  background: Ember.computed( function() {
    let { x, y } = this.coords,
        isEven = ( x + y ) % 2 === 0;
    return `tile-${isEven ? 'white' : 'black'}`;
  })

});
