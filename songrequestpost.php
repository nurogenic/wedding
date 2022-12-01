<?php 
$input = file_get_contents('php://input');
if($input){
  $vals = json_decode($input);
  var_dump($vals);
  $handle = fopen(__DIR__.'/songlist.csv', 'a');
  fputcsv($handle, "\n");
  fputcsv($handle, [$vals->name,$vals->email,$vals->song,$vals->ip]);
  fclose($handle);
}
