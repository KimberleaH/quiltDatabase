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
        <a id="addPattern" class="link" href="" >+ Add a Pattern</a>
    </nav>

    <main>
        <section class="pattern-section">
          <p class="text">A little database to keep track of the patterns I have purchased or am interested in.</p>
          <p class="text">Most of these can also be found on Etsy.</p>


          <?php 
              $ownedPatterns = [
                ["title" => "Whirlpool",
                 "thumbnail" => "patterns/image11.jpg",
                 "url" => "https://www.shabbyfabrics.com/p137388/whirlpool-quilt-pattern/"],

                ["title" => "Sparrows",
                 "thumbnail" => "patterns/image1.jpg",
                 "url" => "https://penandpaperpatterns.com/products/printed-sparrows-quilt-pattern/"],

                ["title" => "Squares",
                 "thumbnail" => "patterns/image16.jpg",
                 "url" => ""],

                ["title" => "Adventureland",
                 "thumbnail" => "patterns/image7.jpg",
                 "url" => "https://suzyquilts.com/shop/adventureland-quilt-pattern-download/"]
              ];

              $freePatterns = [
                ["title" => "Spectrum",
                 "thumbnail" => "patterns/image2.jpg",
                 "url" => "https://liveartgalleryfabrics.com/wp-content/uploads/2016/04/Sprectrum_Instructions.pdf"],

                ["title" => "Simple Strips",
                 "thumbnail" => "patterns/image4.jpg",
                 "url" => "https://www.polkadotchair.com/how-to-make-a-simple-strip-quilt/"],
                  
                ["title" => "Supernova",
                 "thumbnail" => "patterns/image22.jpg",
                 "url" => "https://confessionsofafabricaddict.blogspot.com/2017/02/stunning-stars-4-supernova.html"],
              
                ["title" => "Comet",
                 "thumbnail" => "patterns/image12.jpg",
                 "url" => "https://my.modafabrics.com/sites/default/files/fp_rss_comet-quilt.pdf"],
                  
                ["title" => "Pattern",
                 "thumbnail" => "patterns/image25.jpg",
                 "url" => ""],

                ["title" => "Love",
                 "thumbnail" => "patterns/image9.jpg",
                 "url" => "https://designsbyktgreen.com/hst-love-quilt-finale/"],
                  
                ["title" => "Squash Blossom",
                 "thumbnail" => "patterns/image8.jpg",
                 "url" => "https://quietplaydesigns.com/blogs/blog/no-hst-squash-blossom-block"],
                  
                ["title" => "Water Waves",
                 "thumbnail" => "patterns/image3.jpg",
                 "url" => "https://mustlovequilts.com/2013/10/24/waterwaves-tutorial/comment-page-1/#comment-60"],

                ["title" => "Dragon Scale",
                 "thumbnail" => "patterns/image6.jpg",
                 "url" => "https://www.instructables.com/Dragon-Scale-Quilt/"],

                ["title" => "Houndstooth",
                 "thumbnail" => "",
                 "url" => "https://awonderfulthought.com/houndstooth-quilt-pattern/"],

                ["title" => "Scrappy Rainbow",
                 "thumbnail" => "",
                 "url" => "https://theflemingsnine.blogspot.com/2021/06/scrappy-rainbow-quilt.html"],
              
                ["title" => "Valley Song",
                 "thumbnail" => "patterns/image5.jpg",
                 "url" => "https://www.loandbeholdstitchery.com/blogs/lo-and-behold/valley-song-quilt-pattern-all-the-details"]
              ];
                  
              $paidPatterns = [
                ["title" => "Carbide",
                "thumbnail" => "patterns/image13.jpg",
                "url" => "https://modernmoonquiltstudio.com/the-ultimate-modern-art-deco-quilt-pattern/"],

                ["title" => "Lucky Star",
                 "thumbnail" => "patterns/image46.jpg",
                 "url" => "https://simple-simon-and-company.myshopify.com/products/pattern-pdf-the-lucky-star-quilt-pattern"],

                ["title" => "Entropy",
                 "thumbnail" => "patterns/image10.jpg",
                 "url" => "https://www.etsy.com/listing/1433438935/entropy-bed-sizes-quilt-pattern-pdf"],

                ["title" => "Molinos",
                 "thumbnail" => "patterns/image29.jpg",
                 "url" => "https://www.etsy.com/listing/1722643287/molinos-modern-quilt-pattern-pdf-digital"],

                ["title" => "Night Sky",
                 "thumbnail" => "patterns/image33.jpg",
                 "url" => "https://www.etsy.com/listing/710000999/nightsky-quilt-tutorial"],

                ["title" => "Pathways",
                 "thumbnail" => "patterns/image28.jpg",
                 "url" => "https://www.etsy.com/listing/1389942696/pathways-2023-queen-grey-blue-colourway"],

                ["title" => "Diamond Tides",
                 "thumbnail" => "patterns/image31.jpg",
                 "url" => "https://www.etsy.com/listing/1386982678/diamond-tides-quilt-pattern"],
                
                ["title" => "River Rapids",
                 "thumbnail" => "patterns/image19.jpg",
                 "url" => "https://www.etsy.com/listing/695431351/jelly-roll-quilt-pattern-riding-the"],

                ["title" => "Bass Boogie",
                 "thumbnail" => "patterns/image24.jpg",
                 "url" => "https://www.etsy.com/listing/1644478800/bass-boogie-jelly-roll-quilt-pattern"],
 
                ["title" => "Treble Tango",
                 "thumbnail" => "patterns/image30.jpg",
                 "url" => "https://www.etsy.com/listing/1726483270/treble-tango-jelly-roll-quilt-pattern"],
 
                ["title" => "Low Tide",
                 "thumbnail" => "patterns/image36.jpg",
                 "url" => "https://www.etsy.com/listing/774261972/low-tide-jelly-roll-quilt-pattern"],

                ["title" => "Funny Crows",
                 "thumbnail" => "patterns/image52.jpg",
                 "url" => "https://www.etsy.com/listing/1727887093/funny-crows-quilt-blanket-pattern-pdf"],
  
                ["title" => "Modern Baby Quilt",
                 "thumbnail" => "patterns/image34.jpg",
                 "url" => "https://www.etsy.com/listing/1230778653/modern-baby-boy-quilt-pattern-only"],
 
                ["title" => "The Escapist",
                 "thumbnail" => "patterns/image17.jpg",
                 "url" => "https://www.etsy.com/listing/1217061086/the-escapist-quilt-pattern-pdf-digital"],

                ["title" => "Pine Falls",
                 "thumbnail" => "patterns/image41.jpg",
                 "url" => "https://www.etsy.com/listing/696200758/pine-falls-quilt-pattern-pdf-download"],

                ["title" => "Cross Track",
                 "thumbnail" => "patterns/image20.jpg",
                 "url" => "https://www.etsy.com/listing/1442788064/cross-track-quilt-pattern-pdf-download"],
                
                ["title" => "Name",
                 "thumbnail" => "patterns/image18.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image15.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image40.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image21.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image26.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image35.jpg",
                 "url" => ""],
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image23.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image39.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image43.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image57.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image42.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image50.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image45.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image49.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image27.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image54.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image37.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image51.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image63.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image32.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image44.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image38.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image48.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image58.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image47.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image74.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image69.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image66.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image78.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image60.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image61.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image67.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image62.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image59.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image71.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image72.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image76.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image68.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image53.jpg",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "",
                 "url" => ""],

                ["title" => "Name",
                 "thumbnail" => "patterns/image55.jpg",
                 "url" => ""],
              ];

              $withNoPatterns = [
                ["title" => "Name",
                 "thumbnail" => "patterns/image79.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image77.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image75.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image65.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image64.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image70.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image56.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image80.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image73.jpg",
                 "url" => ""],
  
              
                ["title" => "Name",
                 "thumbnail" => "patterns/image82.png",
                 "url" => ""],
                
                ["title" => "Name",
                 "thumbnail" => "patterns/image81.png",
                 "url" => ""]
              ];

          ?>
          <!------------ END PHP ------------>



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
            

          </div>
        </section>
    </main>

    <footer>
        Kimberlea Heili
    </footer>
</body>
</html>