//检查文本是否为utf8编码类型的js实现
/*原理：常用汉字的unicode编码范围为4E00-9FA5，此范围被包含于UTF-8 3字节编码范围内。
	故若文本由UTF-8编码时，一个汉字将由三个字节组成。
	而这三个字节的第一个的范围将为：1110 0100 - 1110 1001。
	使用FileReader.readAsBinaryString()读取文件，结果为由每个字节的二进制数据转换为unicode组成的字符串。
	所以只需要检查结果中含有1110 0100 - 1110 1001这个范围内的字符的比例就可以判断文本编码类型是否为UTF-8。
*/
function isUtf8(s) {
	var lastnames = new Array("ä", "å", "æ", "ç", "è", "é");
	var count=0;
	for (var i = 0; i < lastnames.length; i++) {
		count+=s.split(lastnames[i]).length;
	}
	if(count>s.length/5){
		return true;
	}else{
		return false;
	}
}
