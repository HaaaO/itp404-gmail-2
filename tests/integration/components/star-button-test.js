import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);
/*
  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{star-button}}`);

    assert.equal(this.element.textContent.trim(), 'not starred');

    // Template block usage:
    await render(hbs`
      {{#star-button}}
        not starred
      {{/star-button}}
    `);

    assert.equal(this.element.textContent.trim(), 'not starred');
  });
*/
test('the star is empty when starred is false', async function(assert) {
    await render(hbs`<StarButton
@starred={{false}}
@onClick={{star}}
/>`);
    assert.dom('starred').exists({ count: 0 });
  });

  test('the star is filled when starred is true', async function(assert) {
    await render(hbs`<StarButton data-test = "starred"
@starred={{true}}
@onClick={{star}}
/>`);
    assert.dom('[data-test="starred"]').exists({ count: 1 });
  });


});
