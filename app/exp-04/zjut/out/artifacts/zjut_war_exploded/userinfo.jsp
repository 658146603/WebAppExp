<%--
  Created by IntelliJ IDEA.
  User: WCF
  Date: 2020/4/16
  Time: 20:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="user" class="servlet.beans.User" scope="session"/>
<%
    if (user.getSession() == null || !user.getSession().equals(session.getId())) {
        response.getWriter().println("<script>alert('请先登录');window.location.href='controller?action=login';</script>");
//        response.sendRedirect("controller?action=login");
    }
%>

<html>
<head>
    <title>用户信息</title>
</head>
<body>
    <table>
    <tr>
    <td>姓名</td>
    <td><jsp:getProperty name="user" property="username"/></td>
    </tr>
    <tr>
    <td>年龄</td>
    <td><jsp:getProperty name="user" property="age"/></td>
    </tr>
    <tr>
    <td>性别</td>
    <td><jsp:getProperty name="user" property="sex"/></td>
    </tr>
    <tr>
    <td>地址</td>
    <td><jsp:getProperty name="user" property="address"/></td>
    </tr>
    </table>
</body>
</html>
