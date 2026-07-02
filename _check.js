const fs = require('fs');
const c = fs.readFileSync('C:/Users/user/game-dashboard-cn/index.html', 'utf8');
const searches = ['수집된 영상 없음', '게시글', '긍정', '부정', '여론 데이터 없음', '데이터 부족', '수집된 여론 데이터가 없습니다', '총 조회'];
for (const s of searches) {
  const idx = c.indexOf(s);
  if (idx >= 0) {
    const ctx = c.substring(Math.max(0, idx - 20), idx + s.length + 20).replace(/\r?\n/g, '\\n');
    console.log(`FOUND "${s}" at ${idx}: ...${ctx}...`);
  } else {
    console.log(`NOT FOUND: "${s}"`);
  }
}
// Also search for 조회 and 좋아요 in JS context
const matches = c.match(/'조회 [^']*'/g);
if (matches) console.log('조회 matches:', matches);
const matches2 = c.match(/'좋아요 [^']*'/g);
if (matches2) console.log('좋아요 matches:', matches2);
