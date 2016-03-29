
import Ember from 'ember';

const ATTACK_MATRIX = {
  queen: ['diagonal', 'vertical', 'horizontal']
}

export default Ember.Namespace.create({

  attack( attacker, defender ) {
    let type = attacker.get('type').replace(/black-|white-/, ''),
        attacks = ATTACK_MATRIX[type];

    return attacks.any( ( attackType ) => {
      return this.get(attackType)(attacker, defender);
    });
  },

  diagonal( attacker, defender ) {
    let { x, y }  = attacker.delta(defender);
    return Math.abs(x) === Math.abs(y);
  },

  horizontal( attacker, defender ) {
    return attacker.get('position.y') == defender.get('position.y');
  },

  vertical( attacker, defender ) {
    return attacker.get('position.x') == defender.get('position.x');
  },

});

