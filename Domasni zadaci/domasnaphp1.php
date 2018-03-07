<?php

$ime1 = $_POST['ime1'];
$prezime1 = $_POST['prezime1'];
$prosek1 = $_POST['prosek1'];

$ime2 = $_POST['ime2'];
$prezime2 = $_POST['prezime2'];
$prosek2 = $_POST['prosek2'];

$ime3 = $_POST['ime3'];
$prezime3 = $_POST['prezime3'];
$prosek3 = $_POST['prosek3'];

$ime4 = $_POST['ime4'];
$prezime4 = $_POST['prezime4'];
$prosek4 = $_POST['prosek4'];

$ime5 = $_POST['ime5'];
$prezime5 = $_POST['prezime5'];
$prosek5 = $_POST['prosek5'];

$studenti = [
	['ime' => $ime1, 'prezime' => $prezime1, 'prosek' => $prosek1],
	['ime' => $ime2, 'prezime' => $prezime2, 'prosek' => $prosek2],
	['ime' => $ime3, 'prezime' => $prezime3, 'prosek' => $prosek3],
	['ime' => $ime4, 'prezime' => $prezime4, 'prosek' => $prosek4],
	['ime' => $ime5, 'prezime' => $prezime5, 'prosek' => $prosek5]
];

function sortiraj($a, $b) { 
	
	if ($a['prosek'] > $b['prosek']) {
		return 1; 
	} elseif ($a['prosek'] == $b['prosek']) {
		return 0;
	} else {
		return -1;
	}
};

usort($studenti, 'sortiraj');

?>

<h2>Студенти</h2>
<table border="1" style="border-collapse: collapse">
	<tr bgcolor="#cccccc">
		<td align="center"width="200" bgcolor="#ffffff"></td>
		<td align="center"width="200">Име</td>
		<td align="center"width="200">Презиме</td>
		<td align="center"width="100">Просек</td>
	</tr>
	<tr>
		<td width="200">Најдобар студент</td>
		<td width="200"><?=$studenti[count($studenti) - 1]['ime']; ?></td>
		<td width="200"><?=$studenti[count($studenti) - 1]['prezime']; ?></td>
		<td width="100"><?=$studenti[count($studenti) - 1]['prosek']; ?></td>
	</tr>
	<tr>
		<td width="200">Најслаб студент</td>
		<td width="200"><?=$studenti[0]['ime']; ?></td>
		<td width="200"><?=$studenti[0]['prezime']; ?></td>
		<td width="100"><?=$studenti[0]['prosek']; ?></td>
	</tr>
</table>