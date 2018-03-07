<!DOCTYPE html>
<html>
<head>
	<title>Freight</title>
</head>
<body>
	<table border="0" cellpadding="3">
			<tr>
				<td bgcolor="#cccccc" align="center">Distance</td>
				<td bgcolor="#cccccc" align="center">Cost</td>
			</tr>
			<?php

			for($distance = 50; $distance <= 250; $distance += 50) {
				echo "<tr>
				<td align=\"right\">".$distance."</td>
				<td align=\"right\">".($distance / 10)."</td>
				</tr>\n";
			}

			// $distance = 50;
			// while($distance <= 250) {
			// 	echo "<tr>
			// 	<td align=\"right\">".$distance."</td>
			// 	<td align=\"right\">".($distance / 10)."</td>
			// 	</tr>\n";

			// 	$distance += 50;
			// }

			$num = 20;
			do{
				echo $num."<br/>";
			} while ($num < 1);

			?>

		</table>
</body>
</html>