import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('team', { path: ':color' }, function() {
    this.route('piece', function() {
      this.route('position');
    });
  });
});

export default Router;
