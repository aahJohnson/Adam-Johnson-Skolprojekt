<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<form>
<label for="firstName">First name:</label>
<input type="text" id="firstName"><br>
<label for="lastName">Last name:</label>
<input type="text" id="lastName"><br><br>

<input type="radio" id="male" value="male">
<label for="male">Male</label><br>
<input type="radio" id="female" value="female">
<label for="female">Female</label><br>
<input type="radio" id="non-binary" value="non-binary">
<label for="non-binary">Non-Binary</label><br>
<input type="radio" id="other" value="other">
<label for="other">Other</label><br><br>

<label for="pokemon">Choose your Pokémon:</label><br>
<select id="pokemon">
<option value="bulbasaur">Bulbasaur</option>
<option value="charmander">Charmander</option>
<option value="squirtle">Squirtle</option>
</select><br><br>

<input type="submit">
</form>

</body>
</html>