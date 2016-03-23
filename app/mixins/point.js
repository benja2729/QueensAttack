
import Ember from 'ember';

export default Ember.Mixin.create({

  get coords() {
    return { x: this.x, y: this.y };
  },

  set coords( hash ) {
    throw "Property coords is read-only";
  },

  constructor( hash ) {
    let { x, y } = hash;
    Object.assign(this, { x, y });
  },

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
    let { x, y } = point.coords;

    x -= this.x, y -= this.y;
    return { x, y };
  }

});

