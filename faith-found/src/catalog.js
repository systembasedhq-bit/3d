/* =====================================================================================
   FAITH FOUND — CATALOG (single source of truth)
   The website, the 3D engine, the cinematic studio and the docs all read this file.
   Every product has the SAME structure, so adding a product = adding one object here.

   Units: inches unless the field name ends in "Cm". Prices in USD.
   Values marked TBC are concept values to confirm with the manufacturer.
   ===================================================================================== */
var FF_CATALOG = (function () {

  /* ---- Drops: the 12-month plan. "date" is when the drop goes live (ISO with UTC offset).
          The site counts down to the next drop whose date is in the future. ---- */
  var DROPS = [
    { id: 'd01', no: '01', name: 'Foundation', date: '2027-01-01T00:00:00-05:00', label: 'J1',
      blurb: 'The first six pieces: one Foundation and one Emblem in each line. Every order ships with a Flight Tag.',
      products: ['cap-foundation', 'cap-emblem', 'hoodie-foundation', 'hoodie-emblem', 'wall-foundation', 'wall-emblem'] },
    { id: 'd02', no: '02', name: 'Flight Tag & first colourways', date: '2027-03-01T00:00:00-05:00',
      blurb: 'The Flight Tag on its own, plus the first new colourways chosen from launch feedback.', products: ['flight-tag'] },
    { id: 'd03', no: '03', name: 'Your pick, round one', date: '2027-05-01T00:00:00-04:00',
      blurb: 'The most-requested piece from the first vote, made properly.', products: [], vote: true },
    { id: 'd04', no: '04', name: 'Summer weight', date: '2027-07-01T00:00:00-04:00',
      blurb: 'A heavyweight tee in Foundation and Emblem, for the warm months.', products: [] },
    { id: 'd05', no: '05', name: 'The Nameplate', date: '2027-09-01T00:00:00-04:00',
      blurb: 'The cross-and-nameplate piece for desks and walls, and the second vote winner.', products: [], vote: true },
    { id: 'd06', no: '06', name: 'Gather', date: '2027-11-01T00:00:00-04:00',
      blurb: 'Gift sets for the holidays: cap and tag, hoodie and cap, wall piece in a gift box.', products: [] },
    { id: 'd07', no: '07', name: 'Year two', date: '2028-01-01T00:00:00-05:00', label: 'J1',
      blurb: 'One year in. What you asked for most, and what comes next.', products: [] }
  ];

  /* ---- What people can vote for on the Drops page. Add or remove freely. ---- */
  var REQUESTS = [
    { id: 'tee', name: 'Heavyweight tee' }, { id: 'crew', name: 'Crewneck' }, { id: 'beanie', name: 'Beanie' },
    { id: 'rope', name: 'Rope cap' }, { id: 'nameplate', name: 'Desk nameplate' }, { id: 'youth', name: 'Youth sizes' },
    { id: 'patch', name: 'Patch set' }, { id: 'group', name: 'Church & team orders' }, { id: 'colours', name: 'More colours' }
  ];

  /* ---- Products. Structure (identical for every product):
     id, sku, line, cat, level, name, model (3D builder), art (lockup | emblem | tag), drop, status,
     price, sizes[{id,label,price?,...dims}], colors[{id,name,hex,...parts}], addons[], blurb, story,
     details[], deco[], care, inBox[], images[] (optional photos), buyUrl{} (GoHighLevel links per size or 'default') ---- */
  var PRODUCTS = [
    {
      id: 'cap-foundation', sku: 'FF-TRK-FDN', line: 'Trucker', cat: 'hats', level: 'Foundation', name: 'Foundation Trucker',
      model: 'cap', art: 'lockup', drop: 'd01', status: 'auto', price: 38,
      blank: 'Richardson 112',
      sizes: [
        { id: 'youth', label: 'Youth', fit: 'about 20½–22½ in (52–57 cm)', scale: 0.94, note: 'Youth trucker blank, TBC with supplier' },
        { id: 'osfa', label: 'Adult', fit: 'about 21¾–24 in (55–61 cm)', scale: 1.0, note: 'Richardson 112, one size, snapback' },
        { id: 'xl', label: 'Adult L–XL', fit: 'about 22¾–24¾ in (58–63 cm)', scale: 1.045, note: 'Larger-fit trucker blank, TBC with supplier' }
      ],
      colors: [
        { id: 'black', name: 'Black', hex: '#151515', front: '#161616', mesh: '#121212', visor: '#161616', thread: '#f1ede6' },
        { id: 'charcoal', name: 'Charcoal / Black', hex: '#3c3c3e', front: '#3d3d3f', mesh: '#131313', visor: '#3d3d3f', thread: '#f1ede6' },
        { id: 'loden', name: 'Loden / Black', hex: '#4a4c3a', front: '#4b4d3b', mesh: '#131313', visor: '#4b4d3b', thread: '#ebe2cc' }
      ],
      blurb: 'The full name across the front of a Richardson 112.',
      story: 'FAITH, the cross, FOUND. The whole mark across the front of the trucker you already reach for: structured front, breathable mesh back, snapback strap.',
      details: ['Richardson 112 trucker: structured mid-profile 6-panel, pre-curved visor', 'Cotton-poly twill front, polyester mesh back (per Richardson spec)', 'Adjustable plastic snapback', 'Cross in raised 3D puff; FAITH FOUND in flat satin stitch'],
      deco: [{ where: 'Front, centred on the seam', art: 'Foundation lockup', w: 4.5, h: 1.41, method: '3D puff cross + flat satin lettering', note: 'Centred about 2 in above the visor seam' }],
      dims: { crown: 4.4, visor: 2.9, visorW: 7.1 },
      care: 'Spot clean with cool water. Do not machine wash or tumble dry. Reshape the crown while damp.',
      inBox: ['Cap', 'Flight Tag (Drop 01 orders)'],
      images: [], buyUrl: {}
    },
    {
      id: 'cap-emblem', sku: 'FF-TRK-EMB', line: 'Trucker', cat: 'hats', level: 'Emblem', name: 'Emblem Trucker',
      model: 'cap', art: 'emblem', drop: 'd01', status: 'auto', price: 36,
      blank: 'Richardson 112',
      sizes: [
        { id: 'youth', label: 'Youth', fit: 'about 20½–22½ in (52–57 cm)', scale: 0.94, note: 'Youth trucker blank, TBC with supplier' },
        { id: 'osfa', label: 'Adult', fit: 'about 21¾–24 in (55–61 cm)', scale: 1.0, note: 'Richardson 112, one size, snapback' },
        { id: 'xl', label: 'Adult L–XL', fit: 'about 22¾–24¾ in (58–63 cm)', scale: 1.045, note: 'Larger-fit trucker blank, TBC with supplier' }
      ],
      colors: [
        { id: 'black', name: 'Black', hex: '#151515', front: '#161616', mesh: '#121212', visor: '#161616', thread: '#f1ede6' },
        { id: 'charcoal', name: 'Charcoal / Black', hex: '#3c3c3e', front: '#3d3d3f', mesh: '#131313', visor: '#3d3d3f', thread: '#f1ede6' },
        { id: 'loden', name: 'Loden / Black', hex: '#4a4c3a', front: '#4b4d3b', mesh: '#131313', visor: '#4b4d3b', thread: '#ebe2cc' }
      ],
      blurb: 'The cross alone, raised, on a Richardson 112.',
      story: 'Just the mark. A raised outline cross on the front panel, nothing else to read. The quieter of the two.',
      details: ['Richardson 112 trucker: structured mid-profile 6-panel, pre-curved visor', 'Cotton-poly twill front, polyester mesh back (per Richardson spec)', 'Adjustable plastic snapback', 'Outline cross in raised 3D puff embroidery'],
      deco: [{ where: 'Front, centred on the seam', art: 'Emblem cross', w: 1.79, h: 2.5, method: '3D puff, outline', note: 'Centred about 2⅛ in above the visor seam' }],
      dims: { crown: 4.4, visor: 2.9, visorW: 7.1 },
      care: 'Spot clean with cool water. Do not machine wash or tumble dry. Reshape the crown while damp.',
      inBox: ['Cap', 'Flight Tag (Drop 01 orders)'],
      images: [], buyUrl: {}
    },
    {
      id: 'hoodie-foundation', sku: 'FF-HOD-FDN', line: 'Hoodie', cat: 'apparel', level: 'Foundation', name: 'Foundation Hoodie',
      model: 'hoodie', art: 'lockup', drop: 'd01', status: 'auto', price: 88,
      blank: 'Heavyweight pullover hoodie, TBC',
      sizes: [
        { id: 'M', label: 'M', chest: 23.5, length: 27.5, sleeve: 34.5 },
        { id: 'L', label: 'L', chest: 24.5, length: 28.5, sleeve: 35.5 },
        { id: 'XL', label: 'XL', chest: 25.75, length: 29.5, sleeve: 36.5 }
      ],
      colors: [
        { id: 'black', name: 'Black', hex: '#141414', body: '#161616', thread: '#f1ede6', label: '#0f0e0d', labelThread: '#f1ede6' },
        { id: 'olive', name: 'Deep Olive', hex: '#3f4231', body: '#40432f', thread: '#ebe2cc', label: '#0f0e0d', labelThread: '#ebe2cc' },
        { id: 'bone', name: 'Bone', hex: '#d8d0c0', body: '#d6cebd', thread: '#1a1816', label: '#0f0e0d', labelThread: '#f1ede6' }
      ],
      blurb: 'The full name across the chest of a heavyweight hoodie.',
      story: 'FAITH ✝ FOUND embroidered across the chest, a woven label on the left cuff, and nothing on the back. Heavy fleece that holds its shape.',
      details: ['Heavyweight cotton fleece, about 13–14½ oz (450–500 gsm), brushed inside (TBC)', 'Relaxed fit, dropped shoulder', 'Double-layer hood, flat drawcords with metal tips', 'Kangaroo pocket, 2×1 rib cuffs and hem', 'Woven FAITH FOUND label on the left sleeve'],
      deco: [
        { where: 'Centre chest', art: 'Foundation lockup', w: 9.0, h: 2.82, method: 'Flat satin embroidery', note: 'Top of cross 3½ in below the front neck seam' },
        { where: 'Left sleeve (wearer’s left), outer side', art: 'Woven label', w: 2.75, h: 1.0, method: 'Damask woven label, sewn on 4 sides', note: '2 in above the cuff seam' }
      ],
      care: 'Machine wash cold, inside out. Tumble dry low or hang dry. Do not iron the embroidery.',
      inBox: ['Hoodie', 'Flight Tag (Drop 01 orders)'],
      images: [], buyUrl: {}
    },
    {
      id: 'hoodie-emblem', sku: 'FF-HOD-EMB', line: 'Hoodie', cat: 'apparel', level: 'Emblem', name: 'Emblem Hoodie',
      model: 'hoodie', art: 'emblem', drop: 'd01', status: 'auto', price: 84,
      blank: 'Heavyweight pullover hoodie, TBC',
      sizes: [
        { id: 'M', label: 'M', chest: 23.5, length: 27.5, sleeve: 34.5 },
        { id: 'L', label: 'L', chest: 24.5, length: 28.5, sleeve: 35.5 },
        { id: 'XL', label: 'XL', chest: 25.75, length: 29.5, sleeve: 36.5 }
      ],
      colors: [
        { id: 'black', name: 'Black', hex: '#141414', body: '#161616', thread: '#f1ede6', label: '#0f0e0d', labelThread: '#f1ede6' },
        { id: 'olive', name: 'Deep Olive', hex: '#3f4231', body: '#40432f', thread: '#ebe2cc', label: '#0f0e0d', labelThread: '#ebe2cc' },
        { id: 'bone', name: 'Bone', hex: '#d8d0c0', body: '#d6cebd', thread: '#1a1816', label: '#0f0e0d', labelThread: '#f1ede6' }
      ],
      blurb: 'The cross on the left chest of a heavyweight hoodie.',
      story: 'A single outline cross over the heart, a woven label on the left cuff. The one you wear every day.',
      details: ['Heavyweight cotton fleece, about 13–14½ oz (450–500 gsm), brushed inside (TBC)', 'Relaxed fit, dropped shoulder', 'Double-layer hood, flat drawcords with metal tips', 'Kangaroo pocket, 2×1 rib cuffs and hem', 'Woven FAITH FOUND label on the left sleeve'],
      deco: [
        { where: 'Left chest (wearer’s left)', art: 'Emblem cross', w: 2.33, h: 3.25, method: 'Flat satin embroidery, outline', note: 'Centre 4 in from the centre front; top 7½ in below the high point of the shoulder' },
        { where: 'Left sleeve (wearer’s left), outer side', art: 'Woven label', w: 2.75, h: 1.0, method: 'Damask woven label, sewn on 4 sides', note: '2 in above the cuff seam' }
      ],
      care: 'Machine wash cold, inside out. Tumble dry low or hang dry. Do not iron the embroidery.',
      inBox: ['Hoodie', 'Flight Tag (Drop 01 orders)'],
      images: [], buyUrl: {}
    },
    {
      id: 'wall-foundation', sku: 'FF-WAL-FDN', line: 'Wall piece', cat: 'home', level: 'Foundation', name: 'Foundation Wall Piece',
      model: 'wall', art: 'lockup', drop: 'd01', status: 'auto', price: 340,
      blank: 'Laser-cut steel, TBC',
      sizes: [
        { id: '36', label: '36 in', w: 36, h: 12.2, depth: 1.96, lb: 2.6, price: 340 },
        { id: '48', label: '48 in', w: 48, h: 16.3, depth: 1.96, lb: 4.6, price: 460 },
        { id: '60', label: '60 in', w: 60, h: 20.3, depth: 1.96, lb: 7.2, price: 620 }
      ],
      colors: [
        { id: 'black', name: 'Matte Black', hex: '#161514', body: 'black', accent: 'black' },
        { id: 'gunmetal', name: 'Gunmetal', hex: '#3a3936', body: 'gunmetal', accent: 'gunmetal' },
        { id: 'brass', name: 'Black & Brass', hex: '#b48c52', body: 'black', accent: 'brass' }
      ],
      addons: [{ id: 'halo', name: 'LED halo backlight', price: 60, note: 'Warm 3000K strip behind the piece, plug-in driver (TBC)' }],
      blurb: 'FAITH ✝ FOUND in cut steel, floated off the wall.',
      story: 'The full mark, cut in steel and set off the wall in two layers: the lettering and its rails behind, the cross in front. With the halo on, the light falls around every edge.',
      details: ['Two layers of laser-cut steel, powder coated (TBC 11 ga / 3 mm)', 'Rails tie the letters into one piece, so it hangs straight', 'Cross on 1¾ in stand-offs, lettering on 1 in', 'Optional warm LED halo behind', 'Drilling template and hardware included'],
      deco: [],
      care: 'Dust with a dry microfibre cloth. Indoor use only.',
      inBox: ['Lettering & rails panel', 'Cross', 'Stand-offs and wall anchors', 'Paper drilling template', 'Flight Tag (Drop 01 orders)'],
      images: [], buyUrl: {}
    },
    {
      id: 'wall-emblem', sku: 'FF-WAL-EMB', line: 'Wall piece', cat: 'home', level: 'Emblem', name: 'Emblem Wall Piece',
      model: 'wall', art: 'emblem', drop: 'd01', status: 'auto', price: 220,
      blank: 'Laser-cut steel, TBC',
      sizes: [
        { id: '30', label: '30 in', w: 30, h: 12.0, depth: 1.96, lb: 2.5, price: 220 },
        { id: '40', label: '40 in', w: 40, h: 16.0, depth: 1.96, lb: 4.4, price: 290 },
        { id: '50', label: '50 in', w: 50, h: 20.0, depth: 1.96, lb: 6.8, price: 380 }
      ],
      colors: [
        { id: 'black', name: 'Matte Black', hex: '#161514', body: 'black', accent: 'black' },
        { id: 'gunmetal', name: 'Gunmetal', hex: '#3a3936', body: 'gunmetal', accent: 'gunmetal' },
        { id: 'brass', name: 'Black & Brass', hex: '#b48c52', body: 'black', accent: 'brass' }
      ],
      addons: [{ id: 'halo', name: 'LED halo backlight', price: 60, note: 'Warm 3000K strip behind the piece, plug-in driver (TBC)' }],
      blurb: 'The cross with three lines either side, in cut steel.',
      story: 'The mark alone, with three lines running out from it like a horizon. Cut in steel and floated in two layers so the shadow does half the work.',
      details: ['Two layers of laser-cut steel, powder coated (TBC 11 ga / 3 mm)', 'The six lines are one piece, joined behind the cross', 'Cross on 1¾ in stand-offs, lines on 1 in', 'Optional warm LED halo behind', 'Drilling template and hardware included'],
      deco: [],
      care: 'Dust with a dry microfibre cloth. Indoor use only.',
      inBox: ['Lines panel', 'Cross', 'Stand-offs and wall anchors', 'Paper drilling template', 'Flight Tag (Drop 01 orders)'],
      images: [], buyUrl: {}
    },
    {
      id: 'flight-tag', sku: 'FF-TAG-STD', line: 'Flight Tag', cat: 'accessories', level: 'Accessory', name: 'Flight Tag',
      model: 'tag', art: 'tag', drop: 'd02', status: 'auto', price: 14, included: 'd01',
      blank: 'Embroidered twill key tag, TBC',
      sizes: [
        { id: 'mini', label: 'Mini', w: 4.0, h: 0.75, price: 12 },
        { id: 'std', label: 'Standard', w: 5.5, h: 1.0, price: 14 },
        { id: 'lg', label: 'Large', w: 7.0, h: 1.25, price: 16 }
      ],
      colors: [
        { id: 'black', name: 'Black / White', hex: '#121212', ground: '#121212', thread: '#f1ede6', edge: '#0d0d0d' },
        { id: 'olive', name: 'Olive / Bone', hex: '#3f4231', ground: '#3d402f', thread: '#ebe2cc', edge: '#2c2e22' },
        { id: 'bone', name: 'Bone / Black', hex: '#d8d0c0', ground: '#d6cebd', thread: '#151413', edge: '#bfb6a4' }
      ],
      back: 'REMOVE BEFORE FLIGHT',
      blurb: 'FAITH ✝ FOUND on one side, REMOVE BEFORE FLIGHT on the other.',
      story: 'The classic flight tag, made ours. Embroidered on both sides with a merrowed edge and a metal grommet. In every Drop 01 box; on its own from Drop 02.',
      details: ['Embroidered twill, both sides, merrowed edge', 'Metal grommet and 1 in (25 mm) split ring', 'Front: FAITH ✝ FOUND. Back: REMOVE BEFORE FLIGHT'],
      deco: [{ where: 'Front', art: 'Wide lockup', w: 4.1, h: 0.62, method: 'Flat embroidery', note: 'Standard size; scales with the tag' }, { where: 'Back', art: 'REMOVE BEFORE FLIGHT', w: 4.1, h: 0.42, method: 'Flat embroidery', note: 'Standard size; condensed sans' }],
      care: 'Hand wash if needed. Air dry.',
      inBox: ['Tag with split ring'],
      images: [], buyUrl: {}
    }
  ];

  var LINES = [
    { id: 'Trucker', cat: 'hats', name: 'Trucker', products: ['cap-foundation', 'cap-emblem'] },
    { id: 'Hoodie', cat: 'apparel', name: 'Hoodie', products: ['hoodie-foundation', 'hoodie-emblem'] },
    { id: 'Wall piece', cat: 'home', name: 'Wall piece', products: ['wall-foundation', 'wall-emblem'] }
  ];
  var CATS = [
    { id: 'hats', name: 'Hats', blurb: 'The Richardson 112 trucker, in Foundation and Emblem.' },
    { id: 'apparel', name: 'Apparel', blurb: 'Heavyweight hoodies, embroidered, not printed.' },
    { id: 'home', name: 'Home', blurb: 'Cut steel for the walls you live with.' },
    { id: 'accessories', name: 'Accessories', blurb: 'Small things that go everywhere with you.' }
  ];
  return { DROPS: DROPS, REQUESTS: REQUESTS, PRODUCTS: PRODUCTS, LINES: LINES, CATS: CATS };
})();
if (typeof window !== 'undefined') window.FF_CATALOG = FF_CATALOG;
