package sampleLib;

import javax.servlet.jsp.*;
import javax.servlet.jsp.tagext.*;
import java.io.*;

public class MarkerTag extends SimpleTagSupport {
    private String count = null;

    public void setCount(String count) {
        this.count = count;
    }

    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        StringWriter sw = new StringWriter();
        getJspBody().invoke(sw);
        String text = sw.toString();
        String[] words = text.split(" ");

        int len = 0;
        try {
            len = Integer.parseInt(count);
        } catch (Exception ignore) {
        }

        out.println(text);
        out.println("<br>");
        out.println("count=" + count);
        out.println("<br>");
        for (String word : words) {
            if (len <= 0) {
                break;
            }
            if (word.startsWith("sh")) {
                out.println(word.replaceAll("[^a-zA-Z]", "")+"<br>");
                len--;
            }
        }

    }
}

