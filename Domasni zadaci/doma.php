<?php 
$studenti = [
	['ime' => 'Dragan', 'prezime' => 'Tomovski', 'prosek' => 9.1],
	['ime' => 'Natalija', 'prezime' => 'Tomovska', 'prosek' => 9.2],
	['ime' => 'Petar', 'prezime' => 'Petrovski', 'prosek' => 9],
	['ime' => 'Sime', 'prezime' => 'Simevski', 'prosek' => 8],
	['ime' => 'Vlatko', 'prezime' => 'Stojanov', 'prosek' => 7.8]
];

asort($studenti);

var_dump($studenti);

function sortiraj ($a, $b) {
	if ($a['prosek'] == $b['prosek']) {
		return 0;
	} else if ($a['prosek'] < $b['prosek']) {
		return -1;
	} else {
		return 1;
	}
}

usort($studenti, 'sortiraj');

var_dump($studenti);

echo '<br/>';

echo $studenti[0]['ime'].' ';
echo $studenti[0]['prezime'].' ';
echo $studenti[0]['prosek'];

 ?>
