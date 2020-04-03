package servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@WebServlet(name = "ShowMyCookies", urlPatterns = {"/ShowMyCookies"})
public class ShowMyCookies extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String myCookie = null;
        Cookie[] cookies = null;
        try {
            cookies =request.getCookies();
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("myCookie") && !cookie.getValue().isEmpty()){
                    myCookie = cookie.getValue();
                }
            }
        } catch (NullPointerException ignored) {}
        if (myCookie == null) {
            out.println("myCookie 为空，设置新的cookie(The cookie has been set)");
            response.addCookie(new Cookie("myCookie", "Fedor&nbspEmelianenko"));
        } else {
            out.println("myCookie: " + myCookie);
        }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
