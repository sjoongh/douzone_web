<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>�Է� ��� â </title>
</head>
<body>
<% 
	request.setCharacterEncoding("UTF-8");
	String name = request.getParameter("name");
	String pass = request.getParameter("pwd");
	
	out.print(name+"�� �ݰ����ϴ�."+", "+pass);
%>
</body>
</html>