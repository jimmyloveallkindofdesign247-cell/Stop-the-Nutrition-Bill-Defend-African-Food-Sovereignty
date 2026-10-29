/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  formatNumberWithCommas,
  generateSocialShareUrl,
  PRIMARY_HASHTAG,
  BASE_SIGNATURE_COUNT,
  CAMPAIGN_HASHTAGS,
} from './campaign';

test('validateEmail correctly identifies valid and invalid emails', () => {
  assert.equal(validateEmail('citizen@example.com'), true);
  assert.equal(validateEmail('activist.africa@movement.org.ng'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('no@domain'), false);
  assert.equal(validateEmail('   '), false);
});

test('formatNumberWithCommas formats thousands properly', () => {
  assert.equal(formatNumberWithCommas(12400), '12,400');
  assert.equal(formatNumberWithCommas(12401), '12,401');
  assert.equal(formatNumberWithCommas(1000000), '1,000,000');
});

test('generateSocialShareUrl constructs valid share URLs with hashtags', () => {
  const xUrl = generateSocialShareUrl('x', 'Stand for Africa #StoptheNutritionBill');
  assert.ok(xUrl.includes('twitter.com/intent/tweet'));
  assert.ok(xUrl.includes(encodeURIComponent('Stand for Africa #StoptheNutritionBill')));

  const waUrl = generateSocialShareUrl('whatsapp', 'Reject HB 2659');
  assert.ok(waUrl.includes('api.whatsapp.com/send'));
  assert.ok(waUrl.includes('Reject%20HB%202659'));

  const tgUrl = generateSocialShareUrl('telegram', 'Save Food Sovereignty');
  assert.ok(tgUrl.includes('t.me/share/url'));

  const redditUrl = generateSocialShareUrl('reddit', 'Free Africa Petition');
  assert.ok(redditUrl.includes('reddit.com/submit'));
});

test('campaign constants are properly configured', () => {
  assert.equal(PRIMARY_HASHTAG, '#StoptheNutritionBill');
  assert.equal(BASE_SIGNATURE_COUNT, 12400);
  assert.ok(CAMPAIGN_HASHTAGS.includes('#StoptheNutritionBill'));
  assert.ok(CAMPAIGN_HASHTAGS.includes('#FreeAfrica'));
});
