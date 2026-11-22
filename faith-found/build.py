"""Build FAITH FOUND single-file pages (no dependencies beyond Python 3).

    python3 build.py

Writes:
  dist/faith-found-site.html    -> paste into ONE GoHighLevel "Custom Code" element (or host as a page).
                                   Photos from assets/photos/*.webp are embedded; drop new photos there and rebuild.
  dist/faith-found-studio.html  -> the product-development / film studio (open in Chrome, Edge or Safari)

Sources: src/catalog.js (products, drops), src/brand.js (vector marks), src/engine.js (3D),
src/site.html and src/studio.html (page templates with /*@CATALOG*/ and /*@ENGINE*/ markers).
"""
import base64, json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
SRC, DIST, PHOTOS = ROOT / "src", ROOT / "dist", ROOT / "assets" / "photos"


def images_js():
    """Embed every photo in assets/photos as a data URI, keyed by file name without extension."""
    imgs = {p.stem: "data:image/webp;base64," + base64.b64encode(p.read_bytes()).decode() for p in sorted(PHOTOS.glob("*.webp"))}
    return "var FF_IMAGES = " + json.dumps(imgs) + ";"


def read(name):
    return (SRC / name).read_text(encoding="utf-8")


def build(template, out):
    html = read(template)
    engine = read("engine.js")                      # uses the global BRAND defined with the catalog
    catalog = read("brand.js") + "\n" + read("catalog.js")
    for marker, value in (("/*@CATALOG*/", catalog), ("/*@ENGINE*/", engine), ("/*@IMAGES*/", None)):
        if marker == "/*@IMAGES*/":
            if marker in html:
                html = html.replace(marker, images_js())
            continue
        assert marker in html, f"{marker} missing in {template}"
        html = html.replace(marker, value)
    assert "</script" not in engine.lower(), "engine must not contain a closing script tag (it is inlined)"
    DIST.mkdir(exist_ok=True)
    (DIST / out).write_text(html, encoding="utf-8")
    print(f"wrote dist/{out}  ({len(html.encode('utf-8')) / 1024:.0f} KB)")


if __name__ == "__main__":
    build("studio.html", "faith-found-studio.html")
    if (SRC / "site.html").exists():
        build("site.html", "faith-found-site.html")
