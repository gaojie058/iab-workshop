import assert from 'node:assert/strict';
import test from 'node:test';

// Exercise the deployed Worker entrypoint, including server-rendered content.
test('serves the workshop content with valid in-page navigation', async () => {
  const { default: worker } = await import('../dist/server/index.js');
  const response = await worker.fetch(
    new Request('https://example.test/', { headers: { accept: 'text/html' } }),
    { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /^text\/html/);
  const html = await response.text();
  assert.match(html, /IAB 2027/);
  assert.match(html, /proposed second IAB workshop/i);
  assert.match(html, /Submissions are not open yet/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/);
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
  for (const [, target] of html.matchAll(/\bhref="#([^"]+)"/g)) {
    assert.ok(ids.has(target), `Broken section link: #${target}`);
  }
});
