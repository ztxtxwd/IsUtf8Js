# 判断中文文本是否为utf8编码类型的JavaScript实现



## 原理

常用汉字的unicode编码范围为4E00-9FA5，此范围被包含于UTF-8 3字节编码范围内。
	故若文本由UTF-8编码时，一个汉字将由三个字节组成。
	而这三个字节的第一个的范围将为：1110 0100 - 1110 1001。
	使用FileReader.readAsBinaryString()读取文件，结果为由每个字节的二进制数据转换为unicode组成的字符串。
	所以只需要检查结果是否含有1110 0100 - 1110 1001这个范围内的字符就可以判断文本编码类型是否为UTF-8。
```javascript
function isUtf8(s) {
	var lastnames = new Array("ä", "å", "æ", "ç", "è", "é");
	for (var i = 0; i < lastnames.length; i++) {
		if (s.indexOf(lastnames[i]) > -1) {
			return true;
		}
	}
	return false;
}
```



## 参考资料

 - [如何判断一个文本文件内容的编码格式 UTF-8 ? ANSI(GBK)](https://blog.csdn.net/jiangqin115/article/details/42684017)
 - [字符编码笔记：ASCII，Unicode 和 UTF-8（阮一峰的网络日志）](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
 - [汉字 Unicode 编码范围](https://www.qqxiuzi.cn/zh/hanzi-unicode-bianma.php)
