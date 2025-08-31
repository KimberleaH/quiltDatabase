/* Available categories:
    Owned
    Free
    Paid
    No Pattern */



const quiltArray = [
   /* -------------- OWNED PATTERNS -------------- */
   {title: "Whirlpool",
    thumbnail: "patterns/image11.jpg",
    url: "https://www.shabbyfabrics.com/p137388/whirlpool-quilt-pattern/",
    category: "Owned"},
   {title: "Sparrows",
    thumbnail: "patterns/image1.jpg",
    url: "https://penandpaperpatterns.com/products/printed-sparrows-quilt-pattern/",
    category: "Owned"},
   {title: "Squares",
    thumbnail: "patterns/image16.jpg",
    url: "#",
    category: "Owned"},
   {title: "Adventureland",
    thumbnail: "patterns/image7.jpg",
    url: "https://suzyquilts.com/shop/adventureland-quilt-pattern-download/",
    category: "Owned"},




   /* -------------- FREE PATTERNS -------------- */
   {title: "Spectrum",
    thumbnail: "patterns/image2.jpg",
    url: "https://liveartgalleryfabrics.com/wp-content/uploads/2016/04/Sprectrum_Instructions.pdf",
    category: "Free"},
   {title: "Simple Strips",
    thumbnail: "patterns/image4.jpg",
    url: "https://www.polkadotchair.com/how-to-make-a-simple-strip-quilt/",
    category: "Free"},    
   {title: "Supernova",
    thumbnail: "patterns/image22.jpg",
    url: "https://confessionsofafabricaddict.blogspot.com/2017/02/stunning-stars-4-supernova.html",
    category: "Free"},
   {title: "Comet",
    thumbnail: "patterns/image12.jpg",
    url: "https://my.modafabrics.com/sites/default/files/fp_rss_comet-quilt.pdf",
    category: "Free"},    
   {title: "Pola",
    thumbnail: "patterns/image25.jpg",
    url: "https://dk.pinterest.com/pin/328692472823825083/",
    category: "Free"},
   {title: "Love",
    thumbnail: "patterns/image9.jpg",
    url: "https://designsbyktgreen.com/hst-love-quilt-finale/",
    category: "Free"},    
   {title: "Squash Blossom",
    thumbnail: "patterns/image8.jpg",
    url: "https://quietplaydesigns.com/blogs/blog/no-hst-squash-blossom-block",
    category: "Free"},    
   {title: "Water Waves",
    thumbnail: "patterns/image3.jpg",
    url: "https://mustlovequilts.com/2013/10/24/waterwaves-tutorial/comment-page-1/#comment-60",
    category: "Free"},
   {title: "Dragon Scale",
    thumbnail: "patterns/image6.jpg",
    url: "https://www.instructables.com/Dragon-Scale-Quilt/",
    category: "Free"},
   {title: "Houndstooth",
    thumbnail: "patterns/image99.jpg",
    url: "https://awonderfulthought.com/houndstooth-quilt-pattern/",
    category: "Free"},
   {title: "Scrappy Rainbow",
    thumbnail: "patterns/image100.jpg",
    url: "https://theflemingsnine.blogspot.com/2021/06/scrappy-rainbow-quilt.html",
    category: "Free"},
   {title: "Valley Song",
    thumbnail: "patterns/image5.jpg",
    url: "https://www.loandbeholdstitchery.com/blogs/lo-and-behold/valley-song-quilt-pattern-all-the-details",
    category: "Free"},




   /* -------------- PAID PATTERNS -------------- */
   {title: "Carbide",
   thumbnail: "patterns/image13.jpg",
   url: "https://modernmoonquiltstudio.com/the-ultimate-modern-art-deco-quilt-pattern/",
    category: "Paid"},
   {title: "Lucky Star",
    thumbnail: "patterns/image46.jpg",
    url: "https://simple-simon-and-company.myshopify.com/products/pattern-pdf-the-lucky-star-quilt-pattern",
    category: "Paid"},
   {title: "Entropy",
    thumbnail: "patterns/image10.jpg",
    url: "https://www.etsy.com/listing/1433438935/entropy-bed-sizes-quilt-pattern-pdf",
    category: "Paid"},
   {title: "Molinos",
    thumbnail: "patterns/image29.jpg",
    url: "https://www.etsy.com/listing/1722643287/molinos-modern-quilt-pattern-pdf-digital",
    category: "Paid"},
   {title: "Night Sky",
    thumbnail: "patterns/image33.jpg",
    url: "https://www.etsy.com/listing/710000999/nightsky-quilt-tutorial",
    category: "Paid"},
   {title: "Pathways",
    thumbnail: "patterns/image28.jpg",
    url: "https://www.etsy.com/listing/1389942696/pathways-2023-queen-grey-blue-colourway",
    category: "Paid"},
   {title: "Diamond Tides",
    thumbnail: "patterns/image31.jpg",
    url: "https://www.etsy.com/listing/1386982678/diamond-tides-quilt-pattern",
    category: "Paid"},  
   {title: "River Rapids",
    thumbnail: "patterns/image19.jpg",
    url: "https://www.etsy.com/listing/695431351/jelly-roll-quilt-pattern-riding-the",
    category: "Paid"},
   {title: "Bass Boogie",
    thumbnail: "patterns/image24.jpg",
    url: "https://www.etsy.com/listing/1644478800/bass-boogie-jelly-roll-quilt-pattern",
    category: "Paid"},
   {title: "Treble Tango",
    thumbnail: "patterns/image30.jpg",
    url: "https://www.etsy.com/listing/1726483270/treble-tango-jelly-roll-quilt-pattern",
    category: "Paid"},
   {title: "Low Tide",
    thumbnail: "patterns/image14.jpg",
    url: "https://www.etsy.com/listing/774261972/low-tide-jelly-roll-quilt-pattern",
    category: "Paid"},
   {title: "Funny Crows",
    thumbnail: "patterns/image36.jpg",
    url: "https://www.etsy.com/listing/1727887093/funny-crows-quilt-blanket-pattern-pdf",
    category: "Paid"},
   {title: "Modern Baby Quilt",
    thumbnail: "patterns/image52.jpg",
    url: "https://www.etsy.com/listing/1230778653/modern-baby-boy-quilt-pattern-only",
    category: "Paid"},
   {title: "The Escapist",
    thumbnail: "patterns/image34.jpg",
    url: "https://www.etsy.com/listing/1217061086/the-escapist-quilt-pattern-pdf-digital",
    category: "Paid"},
   {title: "Pine Falls",
    thumbnail: "patterns/image17.jpg",
    url: "https://www.etsy.com/listing/696200758/pine-falls-quilt-pattern-pdf-download",
    category: "Paid"},
   {title: "Cross Track",
    thumbnail: "patterns/image41.jpg",
    url: "https://www.etsy.com/listing/1442788064/cross-track-quilt-pattern-pdf-download",
    category: "Paid"},
   {title: "Linz Modern Quilt",
    thumbnail: "patterns/image20.jpg",
    url: "https://www.etsy.com/listing/1067286912/linz-quilt-modern-quilt-patterns-pdf",
    category: "Paid"},
   {title: "Herringbone",
    thumbnail: "patterns/image18.jpg",
    url: "https://www.etsy.com/listing/834175839/scrappy-herringbone-pdf-digital-quilt",
    category: "Paid"},
   {title: "Riding Mountain",
    thumbnail: "patterns/image15.jpg",
    url: "https://www.etsy.com/listing/734425720/riding-mountain-quilt-pattern-pdf",
    category: "Paid"},
   {title: "Diamond Cascade",
    thumbnail: "patterns/image40.jpg",
    url: "https://www.etsy.com/listing/632975604/diamond-cascade-modern-quilt-pattern",
    category: "Paid"},
   {title: "Road Trip Redux",
    thumbnail: "patterns/image21.jpg",
    url: "https://www.etsy.com/listing/722328131/road-trip-redux-quilt-pattern",
    category: "Paid"},
   {title: "Misty Mountains",
    thumbnail: "patterns/image26.jpg",
    url: "https://www.etsy.com/listing/1836506501/misty-mountains-pdf-quilt-pattern",
    category: "Paid"},
   {title: "Leading Edge",
    thumbnail: "patterns/image35.jpg",
    url: "https://www.etsy.com/listing/1287632492/leading-edge-quilt-pattern-pdf-download",
    category: "Paid"},
   {title: "Winter Solstice",
    thumbnail: "patterns/image23.jpg",
    url: "https://www.etsy.com/listing/1485442518/winter-solstice-quilt-pattern",
    category: "Paid"},
   {title: "Gander Lake",
    thumbnail: "patterns/image39.jpg",
    url: "https://www.etsy.com/listing/790401224/gander-lake-quilt-patterns-modern-flying",
    category: "Paid"},
   {title: "Urban Park",
    thumbnail: "patterns/image43.jpg",
    url: "https://www.etsy.com/listing/235120486/urban-park-quilt-pattern",
    category: "Paid"},
   {title: "Percussion",
    thumbnail: "patterns/image57.jpg",
    url: "https://www.etsy.com/listing/1726648973/pdf-percussion-quilt-pattern-baby-throw",
    category: "Paid"},
   {title: "Birch Point",
    thumbnail: "patterns/image42.jpg",
    url: "https://www.etsy.com/listing/857873367/birch-point-quilt-pattern-pdf-download",
    category: "Paid"},
   {title: "Folded in Love",
    thumbnail: "patterns/image50.jpg",
    url: "https://www.etsy.com/listing/1170688605/folded-in-love-pdf-quilt-pattern",
    category: "Paid"},
   {title: "Zoe",
    thumbnail: "patterns/image45.jpg",
    url: "https://www.etsy.com/listing/1065687181/the-zoe-quilt-pdf-pattern",
    category: "Paid"},
   {title: "Thunderbolt",
    thumbnail: "patterns/image49.jpg",
    url: "https://www.etsy.com/listing/1723056190/thunderbolt-quilt-pattern-modern-zigzag",
    category: "Paid"},
   {title: "Modern Knot",
    thumbnail: "patterns/image27.jpg",
    url: "https://www.etsy.com/listing/815078243/digital-quilt-pattern-hst-quilt-pattern",
    category: "Paid"},
   {title: "Fall Foliage",
    thumbnail: "patterns/image54.jpg",
    url: "https://www.etsy.com/listing/1562971289/fall-foliage-krista-moser-modern-quilt",
    category: "Paid"},
   {title: "Waterfall",
    thumbnail: "patterns/image37.jpg",
    url: "https://www.etsy.com/listing/872408945/2-sizes-waterfall-quilt-pattern-pdf",
    category: "Paid"},
   {title: "Villager",
    thumbnail: "patterns/image51.jpg",
    url: "https://eudaimoniastudio.com/quilt-patterns/p/villager-quilt-pattern",
    category: "Paid"},
   {title: "Mirror Maze",
    thumbnail: "patterns/image63.jpg",
    url: "https://designedtoquilt.com/product/mirror-maze-pdf-quilt-pattern/",
    category: "Paid"},
   {title: "Tessellating Diamonds",
    thumbnail: "patterns/image32.jpg",
    url: "https://www.anniesattic.com/tessellating-diamonds-quilt-pattern-digital-download",
    category: "Paid"},
   {title: "My Heart to Yours",
    thumbnail: "patterns/image44.jpg",
    url: "https://lynsavenue.com/en-us/products/my-heart-to-yours",
    category: "Paid"},
   {title: "Definite Plus",
    thumbnail: "patterns/image38.jpg",
    url: "https://www.etsy.com/listing/724505300/definite-plus-quilt-pattern-digital-pdf",
    category: "Paid"},
   {title: "Thunder Moon",
    thumbnail: "patterns/image48.jpg",
    url: "https://www.etsy.com/listing/1716544708/digital-pdf-pattern-thunder-moon-quilt",
    category: "Paid"},
   {title: "Glorious Galaxy",
    thumbnail: "patterns/image58.jpg",
    url: "https://www.etsy.com/listing/749663467/glorious-galaxy-pdf-dye-quilt-pattern",
    category: "Paid"},
   {title: "Sliding Geese",
    thumbnail: "patterns/image47.jpg",
    url: "https://www.etsy.com/listing/652713392/sliding-geese-quilt-pattern-modern-quilt",
    category: "Paid"},
   {title: "Broken Arches",
    thumbnail: "patterns/image74.jpg",
    url: "https://www.etsy.com/listing/1121188049/broken-arches-quilt-pattern-easy",
    category: "Paid"},
   {title: "Arctic Feathers",
    thumbnail: "patterns/image69.jpg",
    url: "https://shop.prairiepoint.com/shop/c/p/Elizabeth-Hartman---Arctic-Feathers-Quilt-Pattern-x55113375.htm",
    category: "Paid"},
   {title: "Fractal Patchwork",
    thumbnail: "patterns/image66.jpg",
    url: "https://sewmuchmooreshop.com/collections/patterns/products/fractal-patchwork-quilt-pattern-pdf",
    category: "Paid"},
   {title: "Loose Change",
    thumbnail: "patterns/image78.jpg",
    url: "https://www.etsy.com/listing/705314442/loose-change-quilt-pattern-by-from",
    category: "Paid"},
   {title: "Homecoming",
    thumbnail: "patterns/image60.jpg",
    url: "https://shop.prairiepoint.com/shop/c/p/Lo-Behold-Stitchery---Homecoming-Quilt-Pattern-x89139992.htm",
    category: "Paid"},
   {title: "Rhythm & Blues",
    thumbnail: "patterns/image61.jpg",
    url: "https://www.etsy.com/listing/675965985/rhythm-blues-masculine-quilt-pattern",
    category: "Paid"},
   {title: "Beach Sunset",
    thumbnail: "patterns/image67.jpg",
    url: "https://www.etsy.com/listing/687414976/beach-sunset-quilt-pdf-pattern?ref=collection_page",
    category: "Paid"},
   {title: "Feathers",
    thumbnail: "patterns/image62.jpg",
    url: "https://alisonglass.com/shop-woo/feathers-2021-quilt-pattern-book/",
    category: "Paid"},
   {title: "Leaded Light",
    thumbnail: "patterns/image59.jpg",
    url: "https://www.etsy.com/listing/1077023859/leaded-light-quilt-pattern-pdf-download",
    category: "Paid"},
   {title: "Weighted",
    thumbnail: "patterns/image71.jpg",
    url: "https://www.etsy.com/listing/871440189/weighted-quilt-pattern-pdf",
    category: "Paid"},
   {title: "Icicles",
    thumbnail: "patterns/image72.jpg",
    url: "https://www.etsy.com/listing/1588761846/icicles-quilt-pattern-by-amanda-murphy",
    category: "Paid"},
   {title: "Star Streams",
    thumbnail: "patterns/image76.jpg",
    url: "https://www.etsy.com/listing/819912635/star-stream-quilt-pdf",
    category: "Paid"},
   {title: "Mountainview 2.0",
    thumbnail: "patterns/image68.jpg",
    url: "https://www.etsy.com/listing/1518246521/mountainview-20-digital-pdf-quilt",
    category: "Paid"},
   {title: "Triangle Fade",
    thumbnail: "patterns/image53.jpg",
    url: "https://www.etsy.com/listing/723403756/triangle-fade-quilt-pattern-pdf-download",
    category: "Paid"},
   {title: "Ombre",
    thumbnail: "patterns/image101.png",
    url: "https://www.etsy.com/listing/1799142679/6-sizes-ombre-mountains-quilt-pattern",
    category: "Paid"},
   {title: "Fishscape",
    thumbnail: "patterns/image102.png",
    url: "https://quiltingbookspatternsandnotions.com/products/1108-downloadable-fishscape",
    category: "Paid"},
   {title: "Booths Corner",
    thumbnail: "patterns/image55.jpg",
    url: "https://www.toadandsew.com/products/boothscornerquilt",
    category: "Paid"},
   {title: "Bargello",
    thumbnail: "patterns/image103.jpg",
    url: "https://www.missouriquiltco.com/products/bargello-quilt-pattern-by-missouri-star",
    category: "Paid"},
   {title: "Gatekeeper",
    thumbnail: "patterns/image104.jpg",
    url: "https://www.annemariechany.com/pdf-patterns/gatekeeper-pdf-download?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=342464530_10559330_234169",
    category: "Paid"},
   {title: "Midas Tiles",
    thumbnail: "patterns/image88.png",
    url: "https://www.connectingthreads.com/midas-tiles-pattern-download/p/N2664",
    category: "Paid"},
   {title: "Strip Cocoon",
    thumbnail: "patterns/image105.jpeg",
    url: "https://quiltingbookspatternsandnotions.com/products/strip-cocoon",
    category: "Paid"},
   {title: "Square Off",
    thumbnail: "patterns/image106.jpg",
    url: "https://colorgirlquilts.com/products/square-off-quilt-pattern",
    category: "Paid"},
   {title: "Astra",
    thumbnail: "patterns/image109.jpg",
    url: "https://olliefabrics.com/products/astra-quilt-paper-pattern",
    category: "Paid"},
   {title: "Cut Loose",
    thumbnail: "patterns/image108.jpg",
    url: "https://www.sewingpartsonline.com/products/cut-loose-press-tidepools-quilt-pattern?variant=46900968227103",
    category: "Paid"},
   {title: "Simply Wonderful",
    thumbnail: "patterns/image107.png",
    url: "https://www.etsy.com/listing/1213697203/simply-wonderful-quilt-pattern-pdf-easy",
    category: "Paid"},
   {title: "Pixel Skull",
    thumbnail: "patterns/image85.png",
    url: "https://www.etsy.com/listing/1674614462/pixel-skull-quilt-pattern-pdf-by-simpson",
    category: "Paid"},
   {title: "Cardinals",
    thumbnail: "patterns/image86.png",
    url: "https://www.etsy.com/listing/1001380701/cardinals-quilt-pattern-pdf-the-pattern",
    category: "Paid"},
   {title: "Grow Baby Quilt",
    thumbnail: "patterns/image87.png",
    url: "https://www.etsy.com/listing/1314163267/grow-quilt-pattern-pdf-download-diy",
    category: "Paid"},
   {title: "Chain Link",
    thumbnail: "patterns/image89.png",
    url: "https://www.etsy.com/listing/1732908975/chain-link-quilt-pattern-strip-club",
    category: "Paid"},
   {title: "Simply Serene",
    thumbnail: "patterns/image90.png",
    url: "https://www.etsy.com/listing/998246698/simply-serene-quilt-pattern-from",
    category: "Paid"},
   {title: "Hidden Star",
    thumbnail: "patterns/image91.png",
    url: "https://www.etsy.com/listing/1785116361/hidden-star-multi-size-quilt-pattern",
    category: "Paid"},
   {title: "Pulling Threads",
    thumbnail: "patterns/image92.png",
    url: "https://www.etsy.com/listing/1786234195/pulling-threads-quilt-pattern-yardage-25",
    category: "Paid"},
   {title: "Pop Ups",
    thumbnail: "patterns/image93.png",
    url: "https://www.etsy.com/listing/921055726/pop-ups-quilt-quilting-pattern-from-cozy",
    category: "Paid"},
   {title: "Hens",
    thumbnail: "patterns/image94.png",
    url: "https://www.etsy.com/listing/987390214/hen-quilt-pattern-nesting-quilt-pattern",
    category: "Paid"},
   {title: "Cardinal Birds",
    thumbnail: "patterns/image110.png",
    url: "https://www.etsy.com/listing/1578119253/digital-pdfcardinal-birds-quilt-block",
    category: "Paid"},
   {title: "Tidepools",
    thumbnail: "patterns/image111.png",
    url: "https://www.etsy.com/listing/550660064/tidepools-quilt-pattern-digital-download",
    category: "Paid"},
   {title: "Blue Lily",
    thumbnail: "patterns/image112.png",
    url: "https://www.etsy.com/listing/1195905974/blue-lily-bargello-quilt-pattern-queen",
    category: "Paid"},
   {title: "Midnight Star",
    thumbnail: "patterns/image113.png",
    url: "https://www.etsy.com/listing/4348867906/midnight-star-glow-quilt-for-beginners",
    category: "Paid"},
   {title: "Midnight Frames",
    thumbnail: "patterns/image114.png",
    url: "https://www.etsy.com/listing/4338318138/midnight-framesquilt-for-beginners",
    category: "Paid"},
   {title: "Tall Tale",
    thumbnail: "patterns/image115.png",
    url: "https://www.etsy.com/listing/1233166754/tall-tale-quilt-pattern-pdf",
    category: "Paid"},
   {title: "Stacks",
    thumbnail: "patterns/image116.png",
    url: "https://www.etsy.com/listing/1169332579/stacks-easy-beginner-quilt-pattern-fast",
    category: "Paid"},
   {title: "Mountain Dweller",
    thumbnail: "patterns/image117.png",
    url: "https://www.etsy.com/listing/1414846267/mountain-dweller-quilt-pattern-pdf",
    category: "Paid"},
   {title: "Twisted Knot",
    thumbnail: "patterns/image118.png",
    url: "https://www.etsy.com/listing/1759006774/twisted-knot-quilt-pattern-pdf-4-sizes",
    category: "Paid"},
   {title: "Northwest",
    thumbnail: "patterns/image119.png",
    url: "https://www.etsy.com/listing/1771380392/northwest-quilt-pattern-pdf-digital",
    category: "Paid"},
   {title: "Jelly Maker's Cabin",
    thumbnail: "patterns/image120.png",
    url: "https://www.etsy.com/listing/576453596/the-jelly-makers-cabin-quilt-pattern",
    category: "Paid"},
   {title: "Perfect Placement",
    thumbnail: "patterns/image121.png",
    url: "https://www.etsy.com/listing/1158514734/perfect-placement-quilt-pattern-pdf",
    category: "Paid"},
   {title: "Make It Scrappy",
    thumbnail: "patterns/image122.png",
    url: "https://www.etsy.com/listing/1010590645/6-sizes-make-it-scrappy-quilt-pattern",
    category: "Paid"},
   {title: "RetroBlock",
    thumbnail: "patterns/image123.png",
    url: "https://www.etsy.com/listing/687434204/quilt-pattern-retroblock-pdf-quilt",
    category: "Paid"},
   {title: "Midnight Reflections",
    thumbnail: "patterns/image124.png",
    url: "https://www.etsy.com/listing/79265107/midnite-reflections-quilt-pattern-baby",
    category: "Paid"},
   {title: "Standing on the Corner",
    thumbnail: "patterns/image125.png",
    url: "https://www.etsy.com/listing/1750496780/pattern-standing-on-the-corner-pdf-quilt",
    category: "Paid"},
   {title: "Framed",
    thumbnail: "patterns/image126.png",
    url: "https://www.etsy.com/listing/669181194/digital-pdf-quilt-pattern-for-framed",
    category: "Paid"},
   {title: "Envision",
    thumbnail: "patterns/image127.png",
    url: "https://www.etsy.com/listing/1064209628/6-sizes-envision-quilt-pattern-printed",
    category: "Paid"},
   {title: "Modern Jelly Roll",
    thumbnail: "patterns/image128.png",
    url: "https://www.etsy.com/listing/205802422/modern-quilt-pattern-jelly-roll-quilt",
    category: "Paid"},
   {title: "Simply Stunning",
    thumbnail: "patterns/image129.png",
    url: "https://www.etsy.com/listing/1419934714/simply-stunning-quilt-pattern-451",
    category: "Paid"},
   {title: "Ritournelle",
    thumbnail: "patterns/image130.png",
    url: "https://www.etsy.com/listing/1346801758/ritournelle-quilt-pattern-pdf-english",
    category: "Paid"},
   {title: "Right Angle Rainbow",
    thumbnail: "patterns/image131.png",
    url: "https://www.etsy.com/listing/1331903413/right-angle-rainbow-quilt-pattern",
    category: "Paid"},
   






   /* -------------- NO PATTERNS -------------- */
   {thumbnail: "patterns/image79.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image77.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image75.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image65.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image64.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image70.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image56.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image80.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image73.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image82.png",
    category: "No Pattern"},  
   {thumbnail: "patterns/image81.png",
    category: "No Pattern"},
   {thumbnail: "patterns/image83.png",
    category: "No Pattern"},
   {thumbnail: "patterns/image84.png",
    category: "No Pattern"},
   {thumbnail: "patterns/image95.png",
    category: "No Pattern"},
   {thumbnail: "patterns/image96.jpg",
    category: "No Pattern"},
   {thumbnail: "patterns/image97.png",
    category: "No Pattern"},
   {thumbnail: "patterns/image98.png",
    category: "No Pattern"}
];




    /* assigns an element to a variable */
let ownedQuilts = document.getElementById("owned");
let freeQuilts = document.getElementById("free");
let paidQuilts = document.getElementById("paid");
let noPatternQuilts = document.getElementById("noPattern");



/* ------------ OWNED PATTERNS ------------ */
quiltArray.forEach(quiltPattern => { // This loops through the array and is a function
  if (quiltPattern.category === "Owned" && quiltPattern.thumbnail !== "" && quiltPattern.url !== "#") { // Has thumbnail and url
    let html =
    `<div class="pattern">
       <img src="${quiltPattern.thumbnail}">
       <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
    </div>`;

    ownedQuilts.innerHTML += html;
  } else if (quiltPattern.category === "Owned" && quiltPattern.thumbnail === "" && quiltPattern.url !== "#") { // Has url and no thumbnail
    let html =
    `<div class="pattern">
       <div class="placeholder">No Image Yet</div>
       <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
    </div>`;

    ownedQuilts.innerHTML += html;
  } else if (quiltPattern.category === "Owned" && quiltPattern.url === "#") { // Has thumbnail and no url
    let html =
    `<div class="pattern">
       <img src="${quiltPattern.thumbnail}">
       <p class="pattern-link">${quiltPattern.title}</p>
    </div>`;

    ownedQuilts.innerHTML += html;
  };
});


/* ------------ FREE PATTERNS ------------ */
quiltArray.forEach(quiltPattern => {
  if (quiltPattern.category === "Free" && quiltPattern.thumbnail !== "") {
    let html =
    `<div class="pattern">
       <img src="${quiltPattern.thumbnail}">
       <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
    </div>`;

    freeQuilts.innerHTML += html;
  } else if (quiltPattern.category === "Free" && quiltPattern.thumbnail === "") {
    let html =
    `<div class="pattern">
       <div class="placeholder">No Image Yet</div>
       <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
    </div>`;

    freeQuilts.innerHTML += html;
  };
});


/* ------------ PAID PATTERNS ------------ */
quiltArray.forEach(quiltPattern => {
  if (quiltPattern.category === "Paid" && quiltPattern.thumbnail !== "") {
    let html =
    `<div class="pattern">
       <img src="${quiltPattern.thumbnail}">
       <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
    </div>`;

    paidQuilts.innerHTML += html;
  } else if (quiltPattern.category === "Paid" && quiltPattern.thumbnail === "") {
    let html =
    `<div class="pattern">
       <div class="placeholder">No Image Yet</div>
       <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
    </div>`;

    paidQuilts.innerHTML += html;
  };
});


/* ------------ QUILTS W/ NO PATTERN ------------ */
quiltArray.forEach(quiltPattern => {
  if (quiltPattern.category === "No Pattern" && quiltPattern.thumbnail !== "") {
    let html =
    `<div class="pattern">
       <img src="${quiltPattern.thumbnail}">
    </div>`;

    noPatternQuilts.innerHTML += html;
  };
});