<?php 

// ПРВА ЗАДАЧА - АНАЛИЗА НА СТРИНГ

$analiza = explode(" ", $_POST['analiziraj']);

$zborovi = count($analiza);

echo 'Анализа на внесениот текст:'.'<br>'.'<br>';

echo 'Внесени се '.$zborovi.' зборови.'.'<br>';

$karakteri = strlen($_POST['analiziraj']);

echo 'Внесени се '.$karakteri.' карактери.'.'<br>';

$recenici = explode(". ", $_POST['analiziraj']);

echo 'Внесени се '.count($recenici).' реченици.'.'<br>';

$pogolemOd7 = 0;

foreach ($analiza as $zbor) {

	if(strlen($zbor) > 7) {

	$pogolemOd7++; }

};

echo 'Има '.$pogolemOd7.' зборови со повеќе од 7 карактери.'.'<br>';

$ednakovNa7 = 0;

foreach ($analiza as $zbor) {

	if(strlen($zbor) == 7) {

	$ednakovNa7++; }

};

echo 'Има '.$ednakovNa7.' зборови со 7 карактери.'.'<br>';

$pomalOd7 = 0;

foreach ($analiza as $zbor) {

	if(strlen($zbor) < 7) {

	$pomalOd7++; }

};

echo 'Има '.$pomalOd7.' зборови со помалку од 7 карактери.'.'<br>';

// ВТОРА ЗАДАЧА - КОНВЕРТОР

echo '<br>';

$text = $_POST['prevedi'];

echo 'Внесениот текст е:'.'<br>'.'<br>'.$text;

echo '<br>'.'<br>';

echo 'Конвертираниот текст so strtr е:'.'<br>'.'<br>'.strtr($text, array('a' => 'а', 'b' => 'б', 'c' => 'ц', 'd' => 'д', 'e' => 'е', 'f' => 'ф', 'g' => 'г', 'h' => 'х', 'i' => 'и', 'j' => 'ј', 'k' => 'к', 'l' => 'л', 'm' => 'м', 'n' => 'н', 'o' => 'о', 'p' => 'п', 'q' => 'љ', 'r' => 'р', 's' => 'с', 't' => 'т', 'u' => 'у', 'v' => 'в', 'w' => 'њ', 'x' => 'џ', 'y' => 'ѕ', 'z' => 'з', '[' => 'ш', ']' => 'ѓ', ';' => 'ч', '\'' => 'ќ', '\\' => 'ж', 'A' => 'А', 'B' => 'Б', 'C' => 'Ц', 'D' => 'Д', 'E' => 'Е', 'F' => 'Ф', 'G' => 'Г', 'H' => 'Х', 'I' => 'И', 'J' => 'Ј', 'K' => 'К', 'L' => 'Л', 'M' => 'М', 'N' => 'Н', 'O' => 'О', 'P' => 'П', 'Q' => 'Љ', 'R' => 'Р', 'S' => 'С', 'T' => 'Т', 'U' => 'У', 'V' => 'В', 'W' => 'Њ', 'X' => 'Џ', 'Y' => 'Ѕ', 'Z' => 'З', '{' => 'Ш', '}' => 'Ѓ', ':' => 'Ч', '"' => 'Ќ', '|' => 'Ж'));

echo '<br>'.'<br>';

$textZamena = $_POST['zameni'];

$latinica = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '[', ']', ';', '\'', '\\', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '{', '}', ':', '"', '|'];

$kirilica = ['а', 'б', 'ц', 'д', 'е', 'ф', 'г', 'х', 'и', 'ј', 'к', 'л', 'м', 'н', 'о', 'п', 'љ',  'р', 'с', 'т', 'у', 'в', 'њ', 'џ', 'ѕ', 'з', 'ш', 'ѓ', 'ч', 'ќ', 'ж', 'А', 'Б', 'Ц', 'Д', 'Е', 'Ф', 'Г', 'Х', 'И', 'Ј', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Љ', 'Р', 'С', 'Т', 'У', 'В', 'Њ', 'Џ', 'Ѕ', 'З', 'Ш', 'Ѓ', 'Ч', 'Ќ', 'Ж'];

echo 'Внесениот текст е:'.'<br>'.'<br>'.$textZamena;

echo '<br>'.'<br>';

$konverzija = $_POST['konverzija'];


if ($_POST['konverzija'] === 'C2L') {
	echo 'Конвертираниот текст со str_replace е:'.'<br>'.'<br>'.str_replace($kirilica, $latinica, $textZamena);
} elseif (($_POST['konverzija'] === 'L2C')) {
	echo 'Конвертираниот текст со str_replace е:'.'<br>'.'<br>'.str_replace($latinica, $kirilica, $textZamena);
}

// echo 'Конвертираниот текст со str_replace е:'.'<br>'.'<br>'.str_replace($latinica, $kirilica, $textZamena);

// echo '<br>'.'<br>';

// echo 'Конвертираниот текст со str_replace е:'.'<br>'.'<br>'.str_replace($kirilica, $latinica, $textZamena);
