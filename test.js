const assert = require('assert');
const { analyzeRepository } = require('./index');

describe('Version Control Analyze Tests', function() {
    it('should analyze a non-empty repository', function() {
        const result = analyzeRepository('/pfad/zum/test-repo'); // Dummy-Path
        assert.notStrictEqual(result, null);
    });
});