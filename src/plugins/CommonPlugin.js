let commonPlugin = {};

const MY_NAME = 'yuanjie';
const XOR = '123';
const HEX = 16;


let common = {

  /**
   * 将CST格式日期格式化
   * @param date CST日期
   * @param format
   * @returns {*}
   */
  dateFormat: function (date, format) {
    date = new Date(date);

    var o = {
      'M+': date.getMonth() + 1, //month
      'd+': date.getDate(), //day
      'H+': date.getHours(), //hour
      'm+': date.getMinutes(), //minute
      's+': date.getSeconds(), //second
      'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
      'S': date.getMilliseconds() //millisecond
    };

    if (/(y+)/.test(format))
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

    for (var k in o)
      if (new RegExp('(' + k + ')').test(format))
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));

    return format;
  },




  /**
   * encrypto 加密程序
   * @param {Strng} str 待加密字符串
   * @param {Number} xor 异或值
   * @param {Number} hex 加密后的进制数
   * @return {Strng} 加密后的字符串
   */
  encrypto: function (str) {

    str = str + MY_NAME;
    var xor = XOR;
    var hex = HEX;
    
    let resultList = [];
    hex = hex <= 25 ? hex : hex % 25;

    for (let i = 0; i < str.length; i++) {
      // 提取字符串每个字符的ascll码
      let charCode = str.charCodeAt(i);
      // 进行异或加密
      charCode = (charCode * 1) ^ xor;
      // 异或加密后的字符转成 hex 位数的字符串
      charCode = charCode.toString(hex);
      resultList.push(charCode);
    }

    let splitStr = String.fromCharCode(hex + 97);
    let resultStr = resultList.join(splitStr);
    return resultStr;
  },


  /**
   * decrypto 解密程序
   * @param {Strng} str 待加密字符串
   * @param {Number} xor 异或值
   * @param {Number} hex 加密后的进制数
   * @return {Strng} 加密后的字符串
   */
  decrypto: function (str) {
  
    str = str + MY_NAME;
    var xor = XOR;
    var hex = HEX;

    let strCharList = [];
    let resultList = [];
    hex = hex <= 25 ? hex : hex % 25;
    // 解析出分割字符
    let splitStr = String.fromCharCode(hex + 97);
    // 分割出加密字符串的加密后的每个字符
    strCharList = str.split(splitStr);

    for (let i = 0; i < strCharList.length; i++) {
      // 将加密后的每个字符转成加密后的ascll码
      let charCode = parseInt(strCharList[i], hex);
      // 异或解密出原字符的ascll码
      charCode = (charCode * 1) ^ xor;
      let strChar = String.fromCharCode(charCode);
      resultList.push(strChar);
    }
    let resultStr = resultList.join('');
    return resultStr.replace(MY_NAME, "");
  }

}


commonPlugin.install = function (vue, option) {
  vue.prototype.$com = common;
}

export default commonPlugin;
