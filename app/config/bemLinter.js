/**
 *
 * this is the only allowed component classes:
 *
 * block:                  .name
 * element                 .block__element
 * modifier:               .block--modifier
 * block-element modifier: .block__element--modifier
 *
 */

const NAME_REGEXP = '[a-z]+(?:-[a-z]+)*';

export default {
  componentName: new RegExp(NAME_REGEXP),
  componentSelectors: function(block) {
    const element = '(?:__' + NAME_REGEXP + ')?';
    const modifier = '(?:--' + NAME_REGEXP + ')?';

    return new RegExp('^\\.' + block + element + modifier + '$');
  },
  utilitySelectors: /[a-z]+(?:-[a-z]+)*/
}
