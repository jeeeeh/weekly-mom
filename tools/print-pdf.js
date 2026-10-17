// 사용법: node tools/print-pdf.js tiger/YYYY-MM-DD-print.html
// → 같은 폴더에 YYYY-MM-DD-print.pdf (A4) 생성, 확인용 미리보기는 /tmp/print-preview-N.png (커밋하지 않음)
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const src = path.resolve(process.argv[2]);
  const pdf = src.replace(/\.html$/, '.pdf');
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 794, height: 1123 } });
  await p.goto('file://' + src, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  await p.waitForTimeout(800);
  await p.pdf({ path: pdf, format: 'A4', printBackground: true, margin: { top: 0, bottom: 0, left: 0, right: 0 } });
  const over = await p.evaluate(() => [...document.querySelectorAll('.page')].map((e, i) => e.scrollHeight > e.clientHeight + 1 ? `${i + 1}쪽 넘침 ${e.scrollHeight - e.clientHeight}px` : '').filter(Boolean));
  if (over.length) console.log('⚠️ 내용이 A4를 넘쳐요:', over.join(', '));
  const pages = await p.locator('.page').count();
  for (let i = 0; i < pages; i++) await p.locator('.page').nth(i).screenshot({ path: `/tmp/print-preview-${i + 1}.png` });
  console.log('saved', pdf, 'pages', pages);
  await b.close();
})();
