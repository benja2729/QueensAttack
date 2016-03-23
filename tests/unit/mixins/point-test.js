import Ember from 'ember';
import PointMixin from 'queens-attack/mixins/point';
import { module, test } from 'qunit';

module('Unit | Mixin | point');

// Replace this with your real tests.
test('it works', function(assert) {
  let PointObject = Ember.Object.extend(PointMixin);
  let subject = PointObject.create();
  assert.ok(subject);
});
