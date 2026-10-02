async function loadPatterns() {
   const madePatterns = await fetch('data/made.json').then(r => r.json()); 
   const ownedPatterns = await fetch('data/owned.json').then(r => r.json()); 
   const freePatterns = await fetch('data/free.json').then(r => r.json()); 
   const paidPatterns = await fetch('data/paid.json').then(r => r.json()); 
   const noPatterns = await fetch('data/nopattern.json').then(r => r.json()); 


   /* assigns an element to a variable */
   let madeQuilts = document.getElementById("made");
   let ownedQuilts = document.getElementById("owned");
   let freeQuilts = document.getElementById("free");
   let paidQuilts = document.getElementById("paid");
   let noPatternQuilts = document.getElementById("noPattern");





   /* -------------------------- MADE QUILTS -------------------------- */
   madePatterns.forEach(quiltPattern => {
      let html =
      `<div class="made pattern">
         <img src="${quiltPattern.thumbnail}">
      </div>`;
      madeQuilts.innerHTML += html;
   });




   /* -------------------------- OWNED PATTERNS -------------------------- */
   ownedPatterns.forEach(quiltPattern => { // This loops through the array and is a function
   if (quiltPattern.thumbnail !== "") { // Has thumbnail
      let html =
      `<div class="pattern">
         <img src="${quiltPattern.thumbnail}">
         <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
      </div>`;
      ownedQuilts.innerHTML += html;

   } else { // Has no thumbnail
      let html =
      `<div class="pattern">
         <div class="placeholder">No Image Yet</div>
         <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
      </div>`;
      ownedQuilts.innerHTML += html;
   };
   });




   /* -------------------------- FREE PATTERNS -------------------------- */
   freePatterns.forEach(quiltPattern => {
   if (quiltPattern.thumbnail !== "") { // Has thumbnail
      let html =
      `<div class="pattern">
         <img src="${quiltPattern.thumbnail}">
         <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
      </div>`;
      freeQuilts.innerHTML += html;
      
   } else { // Has no thumbnail
      let html =
      `<div class="pattern">
         <div class="placeholder">No Image Yet</div>
         <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
      </div>`;
      freeQuilts.innerHTML += html;
   };
   });




   /* -------------------------- PAID PATTERNS -------------------------- */
   paidPatterns.forEach(quiltPattern => {
   if (quiltPattern.thumbnail !== "") {// Has thumbnail
      let html =
      `<div class="pattern">
         <img src="${quiltPattern.thumbnail}">
         <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
      </div>`;
      paidQuilts.innerHTML += html;

   } else { // Has no thumbnail
      let html =
      `<div class="pattern">
         <div class="placeholder">No Image Yet</div>
         <a class="pattern-link link" href="${quiltPattern.url}" target="_blank">${quiltPattern.title}</a>
      </div>`;
      paidQuilts.innerHTML += html;
   };
   });




   /* -------------------------- QUILTS W/ NO PATTERN -------------------------- */
   noPatterns.forEach(quiltPattern => {
      let html =
      `<div class="no-pattern pattern">
         <img src="${quiltPattern.thumbnail}">
      </div>`;
      noPatternQuilts.innerHTML += html;
   });

};


loadPatterns();