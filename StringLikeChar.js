// const str = [1, 2, 3];

const str = 'pizza';

String.prototype.map = function (fn) {
  const strArr = this.split('');
  return strArr.map((elem) => fn(elem)).join('');
};

const testMap = (elem) => elem + 'a';

String.prototype.filter = function (fn) {
  const strArr = this.split('');
  return strArr.filter((elem) => fn(elem)).join('');
};

const testFilter = (elem) => elem === 'a';

String.prototype.join = function (symb) {
  const strArr = this.split('');
  const strArr2 = [];
  for (i in strArr) {
    strArr2.push(strArr[i] + symb);
  }
  return strArr2.join('');
};

String.prototype.reduce = function (fn) {
  const strArr = this.split('');
  let ret = 0;
  for (i in strArr) {
    ret = fn(ret, strArr[i]);
  }
  return ret;
};

const testReduce1 = (a, b) => {
  return a + b;
};

const testReduce2 = (a, b) => {
  return a * b;
};

const str2 = 'pizza';
