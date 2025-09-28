const assert = require('assert');
const { analyzeRepository } = require('./index');

describe('Version Control Analyse Tests', function() {
    it('sollte ein nicht-leeres Repository analysieren', function() {
        const result = analyzeRepository('/pfad/zum/test-repo'); // Dummy-Path
        assert.notStrictEqual(result, null);
    });
});