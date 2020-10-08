// const str = [1, 2, 3];

const str = 'pizza';

String.prototype.map = function (fn) {
  const strArr = this.split('');
  return strArr.map((elem) => fn(elem)).join('');
};

const testMap = (elem) => elem + 'a';

// String.prototype.filter = function (fn) {
//   const strArr = this.split('');
//   return Array.prototype.filter.apply(strArr, fn);
// };

String.prototype.filter = function (fn) {
  const strArr = this.split('');
  return strArr.filter((elem) => fn(elem)).join('');
};

const testFilter = (elem) => elem === 'a';

String.prototype.join = function (symb) {
  const strArr = this.split('');
  const strArr2 = [];
  if (typeof symb !== String) {
    const symb2 = symb.toString();
  } else symb2 = symb;
  for (i in strArr) {
    strArr2.push(i + symb);
  }
  return strArr2.join('');
};
