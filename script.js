import javax.servlet.*;
import javax.servlet.http.*;
import java.io.IOException;

public class SimpleServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

        // Отправляем HTML страницу клиенту
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Простой Сервлет</title>");
        out.println("<link rel='stylesheet' type='text/css' href='styles.css'>"); // Подключаем CSS
        out.println("</head>");
        out.println("<body>");
        out.println("<script src='script.js'></script>"); // Подключаем JavaScript
        out.println("<h1>Это простой сервлет.</h1>");
        out.println("</body>");
        out.println("</html>");
    }
}


