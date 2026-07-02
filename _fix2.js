const fs = require('fs');
const path = 'C:/Users/user/game-dashboard-cn/index.html';
let c = fs.readFileSync(path, 'utf8');

// ============ Marketing tab table headers & KPIs ============
c = c.split('마케팅 점수').join('营销分数');
c = c.split('총 조회수').join('总播放量');
c = c.split('광고 영상').join('广告视频');
c = c.split('최근 마케팅 액션').join('最近营销动作');
c = c.split(`'🔥 최고 마케팅 점수'`).join(`'🔥 最高营销分数'`);
c = c.split(`'📢 활발한 마케팅'`).join(`'📢 活跃营销'`);
c = c.split(`'총 조회'`).join(`'总播放'`);

// ============ JS video stats in concatenation ============
c = c.split(`+'조회 '+`).join(`+'播放 '+`);
c = c.split(`+'좋아요 '+`).join(`+'点赞 '+`);

// ============ JS empty state strings ============
c = c.split(`'데이터 없음'`).join(`'暂无数据'`);
c = c.split(`'<b>데이터 출처:</b><br>'`).join(`'<b>数据来源：</b><br>'`);

// ============ Modal field labels ============
c = c.split(`'<b>퍼블리셔</b>'`).join(`'<b>发行商</b>'`);
c = c.split(`'<b>플랫폼</b>'`).join(`'<b>平台</b>'`);
c = c.split(`'<div class="l">플랫폼</div>'`).join(`'<div class="l">平台</div>'`);

// ============ Benchmark guide table headers ============
c = c.split(`'<th>등급</th><th>평점</th><th>여론</th><th>의미</th>'`).join(`'<th>等级</th><th>评分</th><th>舆论</th><th>含义</th>'`);

// ============ Data source descriptions ============
c = c.split(`'• 랭킹: Google Play (google-play-scraper) — 매일 새벽 2시 수집<br>'+`)
     .join(`'• 排名：Google Play（google-play-scraper）— 每日凌晨2点采集<br>'+`);

c = c.split(`'  '• 여론: DC인사이드 갤러리 크롤링 (curl_cffi)<br>'+`)
     .join(`'  '• 舆论：DC Inside Gallery 爬取（curl_cffi）<br>'+`);

c = c.split(`'• 장르 분류: Google Play 카테고리 + 수동 매핑'`)
     .join(`'• 类型分类：Google Play 类别 + 手动映射'`);

// ============ Score bar labels ============
c = c.split(`'상위권'`).join(`'上位圈'`);
c = c.split(`'중위권'`).join(`'中位圈'`);
c = c.split(`'하위권'`).join(`'下位圈'`);

// The word "개발사" only appeared once in data ("중국 개발사 청두...") — that's data, DON'T touch
// But our earlier replacement of `<th>개발사</th>` → `<th>开发商</th>` should be fine

// The word "장르" appeared 3 times — all in data (video titles), DON'T touch

console.log('All remaining JS UI strings translated.');
fs.writeFileSync(path, c, 'utf8');
