
import DS from 'ember-data';
import Point from '../mixins/point';

export default DS.Model.extend( Point, {
  type:     DS.attr('string'),
  position: DS.attr()
});

