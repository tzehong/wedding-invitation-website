import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidRsvpUrl } from '../src/wedding.js';

test('RSVP accepts secure forms and email destinations', () => {
  assert.equal(isValidRsvpUrl('https://example.com/rsvp'), true);
  assert.equal(isValidRsvpUrl('mailto:couple@example.com'), true);
});
test('RSVP stays unavailable for missing, malformed, or unsafe links', () => {
  for (const url of ['', 'not a url', 'http://example.com', 'javascript:alert(1)', 'mailto:', 'mailto:invalid']) {
    assert.equal(isValidRsvpUrl(url), false, url);
  }
});
