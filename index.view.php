<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="index.css" type="text/css" rel="stylesheet">
    <title>Quilt Thing</title>
</head>

<body>
    <nav id="navbar">
        <a class="link" href="https://tech.kimberleaheili.com" target="_blank" >Kimberlea Heili</a>
        <h1>Quilt Pattern Database</h1>
        <button onclick="toggle()" id="managePattern" class="link button" >Manage Patterns</button>
        <div id="toggleButtons">
          <button onclick="cancel()" id="cancel" class="link button" >Cancel</button>
          <button id="addPattern" class="link button" >+ Add a Pattern</button>
        </div>
    </nav>

    <main>
        <section class="pattern-section">
          <p class="text">A little database to keep track of the patterns I have purchased or am interested in.</p>
          <p class="text">Most of these can also be found on Etsy.</p>

          <div class="pattern-box"> <!------ Owned Patterns ------>
            <h3>Owned Patterns</h3>

            <div class="pattern-flex">
              <!-- "foreach" loops through the selected array -->
              <?php foreach ($ownedPatterns as $ownedPattern) : ?>
              <div class="pattern">
                  <!-- This checks if there is an image -->
                  <?php if ($ownedPattern["thumbnail"] === "") : ?>
                    <div class="placeholder">No Image Yet</div> <!-- << prints placeholder -->
                  <?php else : ?>
                    <img src=<?= $ownedPattern["thumbnail"]; ?>> <!-- << prints image -->
                  <?php endif; ?>

                  <!-- This checks if there is a link -->
                  <?php if ($ownedPattern["url"] === "") : ?> 
                    <p class="pattern-no-link"> <!-- << prints <p> -->
                    <?= $ownedPattern["title"]; ?></p>
                  <?php else : ?>
                    <a class="pattern-link link" href=<?= $ownedPattern["url"]; ?> target="_blank"> <!-- << prints <a> -->
                    <?= $ownedPattern["title"]; ?></a>
                  <?php endif; ?>
              </div>
              <?php endforeach; ?>
            </div>
          </div>

          <div class="pattern-box"> <!------ Free Patterns ------>
            <h3>Free Patterns</h3>

            <div class="pattern-flex">
              <!-- "foreach" loops through the selected array -->
              <?php foreach ($freePatterns as $freePattern) : ?>
                <div class="pattern">
                  <!-- This checks if there is an image -->
                  <?php if ($freePattern["thumbnail"] === "") : ?>
                    <div class="placeholder">No Image Yet</div> <!-- << prints placeholder -->
                  <?php else : ?>
                    <img src=<?= $freePattern["thumbnail"]; ?>> <!-- << prints image -->
                  <?php endif; ?>

                  <!-- This checks if there is a link -->
                  <?php if ($freePattern["url"] === "") : ?> 
                    <p class="pattern-no-link"> <!-- << prints <p> -->
                    <?= $freePattern["title"]; ?></p>
                  <?php else : ?>
                    <a class="pattern-link link" href=<?= $freePattern["url"]; ?> target="_blank"> <!-- << prints <a> -->
                    <?= $freePattern["title"]; ?></a>
                  <?php endif; ?>
                </div>
              <?php endforeach; ?>
            </div>
          </div>

          <div class="pattern-box"> <!------ Paid Patterns ------>
            <h3>Paid Patterns</h3>

            <div class="pattern-flex">
              <!-- "foreach" loops through the selected array -->
              <?php foreach ($paidPatterns as $paidPattern) : ?>
                <div class="pattern">
                  <!-- This checks if there is an image -->
                  <?php if ($paidPattern["thumbnail"] === "") : ?>
                    <div class="placeholder">No Image Yet</div> <!-- << prints placeholder -->
                  <?php else : ?>
                    <img src=<?= $paidPattern["thumbnail"]; ?>> <!-- << prints image -->
                  <?php endif; ?>

                  <!-- This checks if there is a link -->
                  <?php if ($paidPattern["url"] === "") : ?> 
                    <p class="pattern-no-link"> <!-- << prints <p> -->
                    <?= $paidPattern["title"]; ?></p>
                  <?php else : ?>
                    <a class="pattern-link link" href=<?= $paidPattern["url"]; ?> target="_blank"> <!-- << prints <a> -->
                    <?= $paidPattern["title"]; ?></a>
                  <?php endif; ?>
                </div>
              <?php endforeach; ?>
            </div>
          </div>

          <div class="pattern-box"> <!------ Quilts With No Patterns ------>
            <h3>Quilts With No Patterns</h3>

            <div class="pattern-flex">
              <!-- "foreach" loops through the selected array -->
              <?php foreach ($withNoPatterns as $withNoPattern) : ?>
                <div class="pattern">
                  <!-- This checks if there is an image -->
                  <?php if ($withNoPattern["thumbnail"] === "") : ?>
                    <div class="placeholder">No Image Yet</div> <!-- << prints placeholder -->
                  <?php else : ?>
                    <img src=<?= $withNoPattern["thumbnail"]; ?>> <!-- << prints image -->
                  <?php endif; ?>

                  <!-- This checks if there is a link -->
                  <?php if ($withNoPattern["url"] === "") : ?> 
                    <p class="pattern-no-link"> <!-- << prints <p> -->
                    <?= $withNoPattern["title"]; ?></p>
                  <?php else : ?>
                    <a class="pattern-link link" href=<?= $withNoPattern["url"]; ?> target="_blank"> <!-- << prints <a> -->
                    <?= $withNoPattern["title"]; ?></a>
                  <?php endif; ?>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
        </section>
    </main>

    <footer>
        Kimberlea Heili
    </footer>

    <script>
      var manageP = document.getElementById("managePattern");
      var toggleB = document.getElementById("toggleButtons");

      function toggle() {
        manageP.style.display = "none";
        toggleB.style.display = "block";
      };

      function cancel() {
        manageP.style.display = "block";
        toggleB.style.display = "none";
      };

      
    </script>
</body>
</html>