<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

  <?php 
    $items = [
        [   'title' => 'Mistborn',
            'author' => 'Brando Sando',
            'year' => 2017
        ],
        [   'title' => 'Stormlight Archives',
            'author' => 'Brando Sando',
            'year' => 2008
        ],
        [   'title' => 'Iron Widow',
            'author' => 'Xioa Zyxar',
            'year' => 2021
        ]
    ];
  ?>

  <?php
    $filteredItems = array_filter ($items, function($item) {
        return $book['author'] === 'Brando Sando';
    });
  ?>

  <ul>
   <?php foreach($items as $item); ?>
   <li>
    <?= $book['title'];?> (<?= $book['year'];?>) - <?= $book['author']; ?>
   </li>
   <?php end foreach ?>
  </ul>
  

    
</body>
</html>