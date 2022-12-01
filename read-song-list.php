<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <table border="1" cellpadding="10" cellspacing="0">
      <?php 
        $handle = fopen(__DIR__.'/songlist.csv', 'r');

        while(($line = fgetcsv($handle)) !== false){
          echo "<tr>";
          foreach ($line as $cell) {
            echo "<td>".htmlspecialchars($cell)."</td>";
          }
          echo "</tr>\n";
        }

        fclose($handle);
       ?>
    </table>
  </body>
</html>