const test = require('node:test');
const assert = require('node:assert');

test('Dashboard message should be correct', () => {
    const message = 'Welcome to Abhi DevOps Dashboard!';

    assert.strictEqual(
        message,
        'Welcome to Abhi DevOps Dashboard!'
    );
});
