import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@WebServlet(name = "ShowInfoServlet", urlPatterns = {"/show_info"})
public class ShowInfoServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        Map<String, String[]> map = request.getParameterMap();
        String username = map.get("username")[0];
        String[] interests = map.get("interest");
        String zz = map.get("zz")[0];
        Map<String, String> interestMap = new HashMap<>();
        interestMap.put("basketball", "篮球");
        interestMap.put("football", "足球");
        interestMap.put("writing", "书法");
        interestMap.put("music", "音乐");
        interestMap.put("drawing", "绘画");
        interestMap.put("beating", "散打");
        interestMap.put("yoga", "瑜伽");
        interestMap.put("other", "其他");
        Map<String, String> zzMap = new HashMap<>();
        zzMap.put("party", "党员");
        zzMap.put("league", "团员");
        zzMap.put("group", "群众");
        writer.write("用户名: " + username + "<br>");
        writer.write("兴趣爱好: ");
        for (String interest : interests) {
            writer.write(interestMap.get(interest) + " ");
        }
        writer.write("<br>");
        writer.write("政治面貌: " + zzMap.get(zz) + "<br>");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
