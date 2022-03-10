<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>입력 결과 창 </title>
</head>
<body>
<% 
	request.setCharacterEncoding("UTF-8");
	String name = request.getParameter("name");
	String pass = request.getParameter("pwd");
	
	out.print(name+"님 반갑습니다."+", "+pass);
%>
</body>
</html>