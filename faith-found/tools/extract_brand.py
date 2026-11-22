"""Extract the brand vector paths (cross emblem, wordmark glyphs, tagline) from the
original FAITH FOUND website file and write src/brand.js.
Usage: python3 tools/extract_brand.py <path-to-original-site.html>"""
import re, sys, json, pathlib
src = pathlib.Path(sys.argv[1]).read_text(encoding="utf-8")
out = pathlib.Path(__file__).resolve().parent.parent / "src" / "brand.js"

# cross emblem: viewBox 71.6 x 100, x centred on 0, y 0 (top) .. 100 (bottom)
emb = re.search(r'var EMBLEM = "(.*?)";\n', src).group(1).encode().decode("unicode_escape")
cross_d = re.search(r'fill-rule=\\?"evenodd\\?" d=\\?"([^"\\]+)', emb) or re.search(r'd="([^"]+)"', emb)
cross_d = cross_d.group(1)

# wordmark: <symbol id="ff-wm"> paths, each translate(x); font units, cap height 770, baseline 0
sym = re.search(r'<symbol id="ff-wm".*?</symbol>', src, re.S).group(0)
wm = [(float(x), d) for x, d in re.findall(r'<path transform="translate\(([\d.]+)\)" d="([^"]+)"', sym)]
letters = "FAITHFOUND"
assert len(wm) == len(letters), len(wm)
faith = [{"x": x, "d": d} for (x, d) in wm[:5]]
found_x0 = wm[5][0]
found = [{"x": x - found_x0, "d": d} for (x, d) in wm[5:]]

tag = re.search(r'var TAGLINE = "(.*?)";\n', src).group(1).encode().decode("unicode_escape")
tl = [{"x": float(x), "d": d} for x, d in re.findall(r'<path transform="translate\(([\d.]+)\)" d="([^"]+)"', tag)]
tl_width = float(re.search(r'viewBox="0 0 ([\d.]+) 100"', tag).group(1)) / 0.12987

js = f"""/* FAITH FOUND brand vectors, extracted from the original site by tools/extract_brand.py. Do not edit by hand.
   CROSS: the emblem, 71.6 wide x 100 tall, x centred on 0, y down from the top. Two contours: outer edge and inner edge (outline cross).
   WORD: Libre Baskerville Bold glyphs in font units (cap height 770, baseline y = 0, y negative = up), x = glyph origin.
   TAGLINE: "LOVE - INTEGRITY - PURPOSE" glyphs, same units. */
const BRAND = {{
  CROSS: {json.dumps(cross_d)},
  CROSS_W: 71.6, CROSS_H: 100,
  CAP: 770,
  FAITH: {json.dumps(faith)}, FAITH_W: {wm[4][0] + 945:.0f},
  FOUND: {json.dumps(found)}, FOUND_W: {9636 - found_x0:.0f},
  TAGLINE: {json.dumps(tl)}, TAGLINE_W: {tl_width:.0f}
}};
"""
out.write_text(js, encoding="utf-8")
print("wrote", out, len(js), "bytes; faith", len(faith), "found", len(found), "tagline glyphs", len(tl), "tagline width", round(tl_width))
