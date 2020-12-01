String.prototype.lastIndexOf = function (value, fromIndex = 0) {
  const that = this;
  for (let i = that.length - 1 - fromIndex; i >= 0; i--) {
    const subStr = that.substring(i, that.length - fromIndex);
    // console.log('Substring:', subStr);
    const matchVal = subStr.search(value);
    if (matchVal !== -1) {
      return i;
    }
  }
  return -1;
};

String.prototype.lastIndexOf = function (value, fromIndex = 0) {
  const that = this;
  for (let i = that.length - fromIndex; i >= 0; i--) {
    const subStr = that.substring(i);
    const matchVal = subStr.search(value);
    if (matchVal !== -1) {
      return i;
    }
  }
  return -1;
};

String.prototype.lastIndexOf = function (value, fromIndex) {
  fromIndex = fromIndex || this.length - 1;
  for (let i = fromIndex; i >= 0; i--) {
    const subStr = this.substring(i);
    const valMatch = subStr.search(value);
    if (valMatch !== -1) {
      return valMatch;
    }
  }
  return -1;
};
