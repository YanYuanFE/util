const expect = require('chai').expect;
import ParsePadding from '../../src/parse-padding';

describe('parsePadding', () => {
  it('1', () => {
    expect(ParsePadding(1)).to.eql([ 1, 1, 1, 1 ]);
  });

  it('[1, 2]', () => {
    expect(ParsePadding([ 1, 2 ])).to.eql([ 1, 2, 1, 2 ]);
  });

  it('[1, 2, 3]', () => {
    expect(ParsePadding([ 1, 2, 3 ])).to.eql([ 1, 2, 3, 2 ]);
  });

  it('[1, 2, 3, 4]', () => {
    expect(ParsePadding([ 1, 2, 3, 4 ])).to.eql([ 1, 2, 3, 4 ]);
  });
});
