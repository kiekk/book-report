<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" content="text/html" http-equiv="Content-Type">
<title>�� �� ���</title>
</head>
<body>
	<center>
		<h3>�� �� ����ϱ�</h3>
		<form action="insertBoard" method="post">
			<table border="1" cellpadding="0" cellspacing="0">
				<tr>
					<td bgcolor="orange" width="70">����</td>
					<td aling="left"><input type="text" name="title" /></td>
				</tr>
				<tr>
					<td bgcolor="orange">�ۼ���</td>
					<td aling="left"><input type="text" name="writer" size="10" /></td>
				</tr>
				<tr>
					<td bgcolor="orange">����</td>
					<td aling="left"><textarea name="content" cols="40" rows="10"></textarea></td>
				</tr>
				<tr>
					<td colspan="2" align="center">
						<input type="submit" value="�� �� ���"/>
					</td>
				</tr>
			</table>
		</form>
		<hr />
	</center>
</body>
</html>