package servlet.controller;

import servlet.beans.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;

@WebServlet(name = "ControllerServlet", urlPatterns = {"/controller"})
public class ControllerServlet extends HttpServlet {
    public static ArrayList<User> users = new ArrayList<>();

    @Override
    public void init() throws ServletException {
        super.init();
        users.add(new User("wcf", "123456", "wcf", 12, '男', "浙江省XX市XX县"));
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        request.setCharacterEncoding("utf-8");
        String uri = request.getRequestURI();
        System.out.println(uri);
        String action = request.getParameter("action");
        if (action==null) {
            response.getWriter().println("请求非法");
            return;
        }
        switch (action) {
            case "login":
                request.getRequestDispatcher("/login.jsp").forward(request, response);
                break;
            case "userinfo":
                request.getRequestDispatcher("/userinfo.jsp").forward(request, response);
                break;
            default:
                response.getWriter().println("请求非法");
                break;
        }
    }
}
