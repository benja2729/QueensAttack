
import Ember from 'ember';

export default Ember.Mixin.create({

  position: Ember.computed({
    get() {
      return { x: this.x, y: this.y };
    },
    set( key, value ) {
      this.setProperties(value);
      return value;
    }
  }),

  compare( point ) {
    let { x, y }  = this.delta(point);

    if( x === 0 && y === 0 ) { return 0; }
    return y >= -x ? 1 : -1;
  },

  compareQuadrant( point ) {
    let { x, y }  = this.delta(point),
        product   = x * y,
        sum       = x + y;

    if( product === 0 && sum === 0 ) {
      return 0;
    }

    if( product >= 0 ) {

      // First quadrant
      if( sum > 0 ) { return 1; }
      // if( sum > 0 ) { return -2; }

      // Third quadrant
      if( sum < 0 ) { return 3; }
      // if( sum < 0 ) { return  2; }
    } else {

      // Second quadrant
      if( y > 0 ) { return 2; }
      // if( y > 0 ) { return -1; }

      // Fourth quadrant
      if( y < 0 ) { return 4; }
      // if( y < 0 ) { return  1; }
    }

    throw new Error(`Could not compare ${this} with ${point}`);
  },

  delta( point ) {
    let { x, y } = Ember.get(point, 'position') || point;

    x -= this.get('position.x');
    y -= this.get('position.y');
    return { x, y };
  }

});

