Vicki Wong website redesign — files to upload to GitHub
=========================================================

This package contains the rebuilt site (converted from the Claude Design
export into plain HTML/CSS/JS), ready to add to the
vickiwongrealtor-coder/vicki.wong repo on the claude/design-to-code-export-dut93e
branch (or wherever you'd like).

Contents (mirrors the repo's folder structure — keep these paths):

  index.html            replaces the current homepage with the new design
  assets/site.css        shared stylesheet (colors, layout, buttons, forms)
  assets/main.js          mobile nav toggle + buyer/seller contact form toggle
  cities/*.html (14)      new city guide pages (Cupertino, Palo Alto, San Jose,
                          Mountain View, Castro Valley, Fremont, Hayward, Dublin,
                          Union City, Daly City, San Leandro, San Lorenzo,
                          Alameda, San Francisco)

How to upload on github.com:

1. Go to your repo -> the branch you want (e.g. claude/design-to-code-export-dut93e)
2. Click "Add file" -> "Upload files"
3. Drag in this whole extracted folder (or its contents) — modern browsers
   preserve the assets/ and cities/ subfolders when you drag folders in.
   If drag-and-drop of folders doesn't work in your browser, upload the
   assets/ and cities/ files in separate batches, using "Add file" inside
   each existing/created folder so the paths stay correct.
4. index.html should overwrite the existing file at the repo root — GitHub
   will show it as a modification if the path matches exactly.
5. Commit directly to the branch (or open a PR if you prefer to review first).

Notes:
- The logo is embedded directly in index.html as a base64 data URI, so
  there's no separate logo.png to upload.
- Contact info used throughout (vicki-wong.com domain, vicki.wong@exprealty.com)
  matches what you confirmed earlier — the design mockup's info, not the
  previous live site's vickiwongrealty.com / gmail address. Update the
  <head> meta tags and JSON-LD block in index.html if you change your mind.
