import calculate , { isNumber } from '../../logic/calculate';

const testingObject = {
  total: null,
  next: null,
  operation: null,
};

describe.each([
  '1', '3', '10.3', '0.5555', '501',
])('.isNumber(%i)', (input) => {
  test('Can input be converted to number ?', () => {
    expect(isNumber(input)).toBe(true);
  });
});

describe.each([
  [{},'AC', testingObject],
  [{next: '0'},'0', {}],
  [{next: '4',operation: '+'},'4',{next: '44',operation: '+'}],
  [{next: '0',operation: '+'},'4',{next: '4', operation: '+'}],
  [{operation: '+'},'8',{next: '8',operation: '+'}],
  [{next: '3'},'0',{next: '30',total: null}],
  [{next: '10.'},'.',{next: '10.'}],
  [{next: '10'},'.',{next: '10.'}],
  [{operation: '-',next: null},'.',{next: '0.', operation: '-'}],
  [{total: '52.'},'.',{}],
  [{total: '52'},'.',{next: '52.',total: '52'}],
  [{},'.',{next: '0.'}],
  [{next:'20',operation: 'x',total: '10'},'=',{total: '200',operation: null,next: null}],
  [{operation: null},'=',{}],
  [{next: '10.3'},'+/-',{next: '-10.3'}],
  [{next: '-1.3'},'+/-',{next: '1.3'}],
  [{total: '24'},'+/-',{total: '-24'}],
  [{total: '-24'},'+/-',{total: '24'}],
  [{},'+/-',{}],
  [{total: '100'},'-',{operation: '-',total: '100'}],
  [{total: '100',operation: '-'},'÷',{total:'100',operation: '÷'}],
  [{operation: '+'},'÷',{total:0,operation: '÷'}],
  [{total:'2.5', operation: '+', next: '3.5'},'÷',{total:"6",operation: '÷',next: null}],
])('.calculate(%i, %i)', (obj, buttonName, expected) => {
  test('returns ', () => {
    expect(calculate(obj,buttonName)).toEqual(expected);
  });
});
