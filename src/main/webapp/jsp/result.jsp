<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<% 
	String name = request.getParameter("name");
	String pass = request.getParameter("pwd");
	
	out.print(name+"�� �ݰ����ϴ�."+", "+pass);
%>
</body>
</html>