<!DOCTYPE html>
<html>
<head>
	<title>Bob's Auto Parts - Order Results</title>
</head>
<body>
	<h1>Bob's Auto Parts</h1>
	<h2>Order Results</h2>
	<?php

	echo '<p>Order processed at ';
	echo date('H:i, jS F Y');
	echo '.</p>';
	
	$tireqty = $_POST['tireqty'];
	$oilqty = $_POST['oilqty'];
	$sparkqty = $_POST['sparkqty'];

	// echo '<p>Your order is as follows: </p>';
	// echo $tireqty.' tires<br/>';
	// echo $oilqty.' oil<br/>';
	// echo $sparkqty.' spark plugs<br/>';

	// echo '<br/>';

	$totalqty = 0;

	$totalqty = $tireqty + $oilqty + $sparkqty;

		if ($totalqty == 0) {
			echo '<h3 style="color:red">';
			echo 'You did not order anything on the previous page!';
			echo '</h3>';
		} else {
			echo '<h3 style="color:blue">';
			echo 'Your order is as follows: ';
			echo '</h3>';
			echo $tireqty." tires<br/>";
			echo $oilqty." bottles of oil<br/>";
			echo $sparkqty." spark plugs<br/>";
		}

	echo "Items ordered: ".$totalqty.'<br/>';
	
	$totalamount = 0.00;

	define('TIREPRICE', 100);
	define('OILPRICE', 10);
	define('SPARKPRICE', 4);

	$totalamount = $tireqty * TIREPRICE
		+ $oilqty * OILPRICE
		+ $sparkqty * SPARKPRICE;

	echo '<br/>';

	echo "Subtotal: $".number_format($totalamount,2)."<br/>";

	echo '<br/>';

	$taxrate = 0.19; // DDV

	$totalamount = $totalamount * (1 + $taxrate);

	echo "Total including tax: $".number_format($totalamount,2)."<br/>";

	if ($tireqty < 10) {
		$discount = 0;
	} elseif (($tireqty >= 10) && ($tireqty <= 49)) {
		$discount = 5;
	} elseif (($tireqty >= 50) && ($tireqty <= 99)) {
		$discount = 10;
	} elseif ($tireqty >= 100) {
		$discount = 15;
	}

	$find = $_POST['find'];

	switch ($find) {
		case 'a':
			echo '<p>Regular customer.</p>';
			break;
		case 'b':
			echo '<p>Customer reffered by TV advert.</p>';
			break;
		case 'c':
			echo '<p>Customer reffered by phone directory.</p>';
			break;
		case 'd':
			echo '<p>Customer reffered by word of mouth.</p>';
			break;		
	}


	echo '<br/>';
	echo '<br/>';
	echo '<br/>';
	echo '<br/>';
	echo '<br/>';
	echo '<br/>';
	echo '<br/>';
	echo '<br/>';
	echo '<br/>';
	echo '<br/>';
	echo '<br/>';


	

	?>
</body>
</html>