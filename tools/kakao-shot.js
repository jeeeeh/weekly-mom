// 사용법: node tools/kakao-shot.js tiger/YYYY-MM-DD-kakao.html
// → 같은 폴더에 YYYY-MM-DD-1.png, YYYY-MM-DD-2.png (가로 1080px) 생성
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const src = path.resolve(process.argv[2]);
  const base = src.replace(/-kakao\.html$/, '');
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 560, height: 900 }, deviceScaleFactor: 2 });
  await p.goto('file://' + src); await p.waitForTimeout(800);
  await p.locator('#c1').screenshot({ path: base + '-1.png' });
  await p.locator('#c2').screenshot({ path: base + '-2.png' });
  await b.close(); console.log('saved', base + '-1.png', base + '-2.png');
})();
