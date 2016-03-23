
import Ember from 'ember';

export default Ember.Component.extend({

  dimensions: { height: 8, width: 8 },

  get tileMatrix() {
    let { height, width } = this.dimensions,
        matrix = [];

    for( let y = height; y >= 0; y-- ) {
      let row = [];

      for( let x = 0; x < width; x++ ) {
        let tile = { x, y };
        row.push(tile);
      }

      matrix.push(row);
    }

    return matrix;
  }

});
