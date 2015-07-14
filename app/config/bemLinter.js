export default {
  componentName: /[a-z]+(?:-[a-z]+)*/,
  componentSelectors: function(block) {
    const element = '(?:__' + block + ')?';
    const modifier = '(?:--[a-z]+)?';

    return new RegExp('^\\.' + block + element + modifier + '$');
  }
}
