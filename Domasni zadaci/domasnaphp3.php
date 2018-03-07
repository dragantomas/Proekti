<?php 

$filename = $_FILES['text']['name'];

$type = $_FILES['text']['type'];
$tmp = $_FILES['text']['tmp_name'];
$err = $_FILES['text']['error'];
$size = $_FILES['text']['size'];

echo '<h3>Го додаде фајлот '.$filename.'</h3>';

$allowed = ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/msword'];

if($err > 0) {
	echo "Грешка при upload";
}

if(!in_array($type, $allowed)) {
	echo "<h2>Фајлот не е текстуален</h2>";
	exit();
}
if($size >= 1 * 1024 * 1024) {
	echo "Фајлот е преголем!";
	exit();
} 

echo 'Фајлот '.$filename.' е со големина од '.round($size / 1024, 2).' Kb';

echo '<br/>';
echo '<br/>';

$filename = $_FILES['text']['name'];
// $filename = $_FILES['text'];

echo 'Содржината на фајлот '.$filename.' e:';

echo '<br/>';
echo '<br/>';

move_uploaded_file($tmp, ''.$filename);

$fh = fopen($filename, 'r');

$text = fread($fh, filesize($filename));

echo $text;

echo '<br/>';

$analiza = explode(" ", $text);

$zborovi = count($analiza);

echo '<h3>Анализа на внесениот фајл:</h3>';

echo 'Во фајлот има '.$zborovi.' зборови.'.'<br>'.'<br>';

$karakteri = strlen($text);

echo 'Има вкупно '.$karakteri.' карактери.'.'<br>'.'<br>';

$recenici = explode(". ", $text);

echo 'Има вкупно '.count($recenici).' реченици.'.'<br>'.'<br>';

$pogolemOd7 = 0;

foreach ($analiza as $zbor) {

	if(strlen($zbor) > 7) {

	$pogolemOd7++; }

};

echo 'Има '.$pogolemOd7.' зборови со повеќе од 7 карактери.'.'<br>'.'<br>';

$ednakovNa7 = 0;

foreach ($analiza as $zbor) {

	if(strlen($zbor) == 7) {

	$ednakovNa7++; }

};

echo 'Има '.$ednakovNa7.' зборови со 7 карактери.'.'<br>'.'<br>';

$pomalOd7 = 0;

foreach ($analiza as $zbor) {

	if(strlen($zbor) < 7) {

	$pomalOd7++; }

};

echo 'Има '.$pomalOd7.' зборови со помалку од 7 карактери.'.'<br>'.'<br>';

 ?>