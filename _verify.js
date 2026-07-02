const fs = require('fs');
const c = fs.readFileSync('C:/Users/user/game-dashboard-cn/index.html', 'utf8');

// Search for common Korean UI terms that should be gone
const checks = ['개발사', '퍼블리셔', '인플루언서', '여론', '뉴스', '업데이트', '마케팅', '캘린더', 
                '매출', '평점', '게임명', '검색', '변동', '장르', '채널명', '플랫폼', '구독자', 
                '시청자', '조회', '좋아요', '게시글', '긍정', '부정', '표시:', '전체 50',
                '총 조회', '영상 없음', '데이터 없음', '한국 모바일'];

for (const term of checks) {
  const count = c.split(term).length - 1;
  if (count > 0) {
    // Show context for each occurrence
    let idx = -1;
    const contexts = [];
    for (let i = 0; i < Math.min(count, 5); i++) {
      idx = c.indexOf(term, idx + 1);
      const ctx = c.substring(Math.max(0, idx - 30), idx + term.length + 30).replace(/\r?\n/g, '↵');
      contexts.push(ctx);
    }
    console.log(`[${count}x] "${term}"`);
    contexts.forEach(ctx => console.log('  ...' + ctx + '...'));
  }
}

console.log('\n--- Checking JS context Korean strings remaining ---');
// Check specific patterns
const patterns = [
  /'[^']*조회[^']*'/g,
  /'[^']*좋아요[^']*'/g,
  /'[^']*수집[^']*'/g,
  /'[^']*데이터[^']*'/g,
];
for (const re of patterns) {
  const m = c.match(re);
  if (m && m.length > 0) {
    console.log(`Pattern ${re}:`, [...new Set(m)]);
  }
}
