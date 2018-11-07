import { module, test } from 'qunit';
import { visit, currentURL, pauseTest, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | gmail', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);


  test('deleting a single email ', async function(assert) {
    server.create('email', {
      from: 'test',
      to: 'test',
      subject: 'test',
      message: 'test',
      starred: false
    });
    server.create('email', {
      from: 'test2',
      to: 'test2',
      subject: 'test2',
      message: 'test2',
      starred: false
    });

    await visit('/emails/1');
    await click('#delete');

    assert.equal(currentURL(), '/');

    assert.dom('[data-test="email"]').exists({ count: 1 });
  });


  test('creating an email', async function(assert) {
  await visit('/create');
  await fillIn('#to', 'test');
  await fillIn('#from', 'test');
  await fillIn('#message', 'test');
  await fillIn('#subject', 'test');
  await click('[data-test="send"]');

  assert.equal(currentURL(), '/');
  assert.dom('[data-test="not-starred"]').exists({ count: 1 });

});

  test('viewing a single email ', async function(assert) {
  server.create('email', {
    from: 'from',
    to: 'to',
    subject: 'subject',
    message: 'message',
    starred: false
  });

  await visit('/emails/1');

  assert.dom('[data-test="to"]').hasText('to: to');
  assert.dom('[data-test="from"]').hasText('from: from');
  assert.dom('[data-test="subject"]').hasText('subject: subject');
  assert.dom('[data-test="message"]').hasText('message: message');
});

  test('the inbox displays starred and unstarred emails', async function(assert) {
    server.create('email', {
      from: 'starred ',
      to: 'starred ',
      subject: 'starred ',
      message: 'starred ',
      starred: true
    });
    server.create('email', {
      from: 'starred ',
      to: 'starred ',
      subject: 'starred ',
      message: 'starred ',
      starred: true
    });
    server.create('email', {
      from: 'not starred ',
      to: 'not starred',
      subject: 'not starred ',
      message: 'not starred ',
      starred: false
    });
    server.create('email', {
      from: 'not starred ',
      to: 'not starred ',
      subject: 'not starred ',
      message: 'not starred ',
      starred: false
    });
    server.create('email', {
      from: 'not starred ',
      to: 'not starred ',
      subject: 'not starred ',
      message: 'not starred ',
      starred: false
    });

    await visit('/');

    assert.equal(currentURL(), '/');

    assert.dom('[data-test="email"]').exists({ count: 5 });
    assert.dom('[data-test="starred"]').exists({ count: 2 });
    assert.dom('[data-test="not-starred"]').exists({ count: 3 });
  });
});
