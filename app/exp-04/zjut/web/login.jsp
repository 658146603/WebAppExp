<%@ page import="servlet.beans.User" %>
<%@ page import="servlet.controller.ControllerServlet" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.stream.Collectors" %>
<%--
  Created by IntelliJ IDEA.
  User: WCF
  Date: 2020/4/16
  Time: 20:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    String username = "";
    String password = "";
    String login = request.getParameter("login");
    if (login != null) {
        String remember = request.getParameter("remember");
        username = request.getParameter("username");
        password = request.getParameter("password");
        if (username == null) {
            username = "";
        }
        if (password == null) {
            password = "";
        }
        if (remember != null && remember.equals("on")) {
            response.addCookie(new Cookie("username", username));
            response.addCookie(new Cookie("password", password));
        } else if (username.isEmpty() && password.isEmpty()){
            //这个应该不会发生
        } else {
            response.addCookie(new Cookie("username", ""));
            response.addCookie(new Cookie("password", ""));
        }
        //TODO 登陆验证
        String finalUsername = username;
        String finalPassword = password;
        List<User> users = ControllerServlet.users.stream().filter(user -> user.getName().equals(finalUsername) && user.getPassword().equals(finalPassword)).collect(Collectors.toList());
        if (users.isEmpty()) {
            out.write("<script>alert('账号或密码错误');window.location.href='controller?action=login';</script>");
        } else {
            User user = users.get(0);
            synchronized (session) {
                user.setSession(session.getId());
                session.setAttribute("user", user);
            }
            response.sendRedirect("controller?action=userinfo");
        }
    } else {
        try {
            Cookie[] cookies = request.getCookies();
            for (Cookie cookie : cookies) {
                switch (cookie.getName()) {
                    case "username": username = cookie.getValue();break;
                    case "password": password = cookie.getValue();break;
                }
            }
        } catch (Exception ignored) { }
    }
%>
<html>
<head>
    <title>登录</title>
</head>
<body>
<p>用户名: wcf, 密码: 123456</p>
<form action="controller" method="get">
    <input type="hidden" name="action" value="login">
    <input type="hidden" name="login" value="true">
    <label for="username">用户名 </label>
    <input type="text" required="required" id="username" name="username" value="<%=username%>">
    <br>
    <label for="password">密&nbsp;&nbsp;&nbsp;码 </label>
    <input type="password" required="required" id="password" name="password" value="<%=password%>">
    <br>
    <label for="remember">记住密码 </label><input type="checkbox" name="remember" id="remember">
    <input type="submit" value="登录">
</form>
</body>
</html>
