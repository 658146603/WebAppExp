<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="demo" uri="http://www.mydomain.com/sample" %>
<html>
<meta charset="UTF-8">
<head>
<title>Using Custom Tag</title></head>
<body>
<h2>Hello Tag Example</h2>
<demo:hello />
<br>
<demo:hello />
<br>
<br>
<demo:marker count="3">she sells sea shells on the sea shore!</demo:marker>
<%--<demo:marker count="3">she sells sea sh097 shells on the sea shore90!</demo:marker>--%>
<%--<demo:marker count="2">she sells sea shells on the sea shore!</demo:marker>--%>
<%--<demo:marker count="0">she sells sea shells on the sea shore!</demo:marker>--%>
</body>
</html>
