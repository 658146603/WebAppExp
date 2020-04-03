package servlet;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/GuessNumberServlet")
public class GuessNumberServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int magic = (int) (Math.random() * 101);
        HttpSession session = request.getSession();
        session.setMaxInactiveInterval(30);
        session.setAttribute("num", magic);
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("我想出一个0到100之间的数，请你猜！");
        out.println("<br>");
        out.println("输入这个数, 就可以猜对: " + magic);
        out.println("<br>");
        out.println("SESSION_ID: " + session.getId());
        if (session.isNew()) {
            out.println(", 是新的");
        } else {
            out.println(", 不是新的");
        }
        out.println("<form action='GuessNumberServlet' method='post'>");
        out.println("<input required='required' max='100' min='0' type='number' name='guess' />");
        out.println("<input type='submit' value='确定'/>");
        out.println("</form>");
        out.println("</body></html>");
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int guess = Integer.parseInt(request.getParameter("guess"));
        HttpSession session = request.getSession();
        int magic = 0;
        try {
            magic = (Integer) session.getAttribute("num");
        } catch (NullPointerException e) {
            doGet(request, response);
            e.printStackTrace();
            return;
        }
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        if (System.currentTimeMillis() - session.getCreationTime() >= 30000) {
            session.invalidate();
            out.println("超时了, 你已经没机会了");
            out.println("<a href = 'GuessNumberServlet'> 再猜一次.</a>");
        } else if (guess == magic) {
            session.invalidate(); // 销毁会话对象
            out.println("祝贺你，答对了!");
            out.println("<a href = 'GuessNumberServlet'> 再猜一次.</a>");
        } else if (guess > magic) {
            out.println("太大了! 请重猜!");
        } else {
            out.println("太小了! 请重猜!");
        }
        out.println("<br>");
        out.println("要猜的数: " + magic + ", 用户猜测: " + guess);
        out.println("<br>");
        out.println("SESSION_ID: " + session.getId());
        try {
            if (session.isNew()) {
                out.println(", 是新的");
            } else {
                out.println(", 不是新的");
            }
        } catch (IllegalStateException e) {
            out.println(", SESSION被销毁了");
            e.printStackTrace();
        }

        out.println("<form action='GuessNumberServlet' method='post'>");
        out.println("<input required='required' max='100' min='0' type='number' name='guess' />");
        out.println("<input type='submit' value='确定'/>");
        out.println("</form>");
        out.println("</body></html>");
    }
}
