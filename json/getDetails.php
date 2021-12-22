<?php
$id = $_POST['id'];
$json = json_decode(file_get_contents('special_picks.json'), true);
foreach ($json['items'] as $item){
	if ($item['id'] === $id){
		$item['shortdesc'] = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";
		echo json_encode($item);
		exit(0);
	}
}
?>