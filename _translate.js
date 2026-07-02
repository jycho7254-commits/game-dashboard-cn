// Korean → Chinese UI text translator for game-dashboard
const fs = require('fs');

const src = 'C:\\Users\\user\\game-dashboard\\index.html';
const dst = 'C:\\Users\\user\\game-dashboard-cn\\index.html';

let content = fs.readFileSync(src, 'utf8');
let changes = 0;

function repl(from, to) {
  const idx = content.indexOf(from);
  if (idx >= 0) {
    const count = content.split(from).length - 1;
    content = content.split(from).join(to);
    changes += count;
    console.log(`[${count}x] "${from}" → "${to}"`);
  }
}

// ============ lang + title ============
repl('lang="ko"', 'lang="zh-CN"');
repl('<title>한국 모바일 게임 대시보드</title>', '<title>韩国手游综合分析仪表板</title>');

// ============ Header title (h1) ============
repl('<h1>한국 모바일 게임 대시보드</h1>', '<h1>韩国手游综合分析仪表板</h1>');

// ============ Sidebar (use the span anchor pattern to be safe) ============
repl('<span>🏆</span> 매출 순위', '<span>🏆</span> 收入排名');
repl('<span>🎮</span> 인플루언서', '<span>🎮</span> 网红');
repl('<span>💬</span> 여론 분석', '<span>💬</span> 舆论分析');
repl('<span>📈</span> 매출 추이', '<span>📈</span> 收入趋势');
repl('<span>📋</span> 기준 가이드', '<span>📋</span> 基准指南');
repl('<span>🎬</span> 유튜브 영상', '<span>🎬</span> YouTube视频');
repl('<span>🔄</span> 업데이트', '<span>🔄</span> 更新');
repl('<span>📢</span> 마케팅', '<span>📢</span> 营销');
repl('<span>📅</span> 캘린더', '<span>📅</span> 日程');
repl('<span>📰</span> 뉴스', '<span>📰</span> 新闻');

// ============ Tab-rank KPI cards ============
repl('<div class="l">매출 게임</div>', '<div class="l">收入游戏</div>');
repl('<div class="v">50개</div>', '<div class="v">50款</div>');
repl('<div class="l">개발사</div>', '<div class="l">开发商</div>');
repl('<div class="v">34개</div>', '<div class="v">34家</div>');
repl('<div class="l">평균 평점</div>', '<div class="l">平均评分</div>');
repl('<div class="l">인플루언서</div>', '<div class="l">网红</div>');
repl('<div class="v">105명</div>', '<div class="v">105位</div>');
repl('<div class="l">데이터 기간</div>', '<div class="l">数据周期</div>');
repl('<div class="v">7일</div>', '<div class="v">7天</div>');

// ============ Tab-rank section header & elements ============
repl('<div class="st">🏆 Google Play 매출 Top 50</div>', '<div class="st">🏆 Google Play 收入 Top 50</div>');
repl('placeholder="게임명/개발사 검색..."', 'placeholder="搜索游戏名/开发商..."');

// ============ Table headers ============
repl('<th>변동</th>', '<th>变动</th>');
repl('<th>게임</th>', '<th>游戏</th>');
repl('<th>개발사</th>', '<th>开发商</th>');
repl('<th>퍼블리셔</th>', '<th>发行商</th>');
repl('<th>장르</th>', '<th>类型</th>');
repl('<th>⭐ 평점</th>', '<th>⭐ 评分</th>');

// ============ Tab-inf ============
repl('<div class="st">🎮 인플루언서 105명</div>', '<div class="st">🎮 网红 105位</div>');
repl('placeholder="인플루언서 검색..."', 'placeholder="搜索网红..."');

repl('<th>채널명</th>', '<th>频道名</th>');
repl('<th>플랫폼</th>', '<th>平台</th>');
repl('<th>카테고리</th>', '<th>分类</th>');
repl('<th>구독자</th>', '<th>订阅数</th>');
repl('<th>시청자</th>', '<th>观众</th>');
repl('<th>영상</th>', '<th>视频</th>');
repl('<th>총 조회</th>', '<th>总播放</th>');

// ============ Tab-sent ============
repl('<b>실시간 커뮤니티 크롤링 데이터</b> — DC인사이드 갤러리에서 수집', '<b>实时社区爬取数据</b> — 收集自DC Inside Gallery');
repl('<div class="st">💬 게임별 커뮤니티 여론</div>', '<div class="st">💬 各游戏社区舆论</div>');

// ============ Tab-rev ============
repl('<div class="st">📈 매출 랭킹 추이 <span style="font-size:12px;color:var(--t2)">— 최근 7일</span></div>', '<div class="st">📈 收入排名趋势 <span style="font-size:12px;color:var(--t2)">— 最近7天</span></div>');
repl('⚠️ 데이터 수집 시작일 이후 실제 랭킹만 표시 (현재 7일 수집됨)', '⚠️ 仅显示数据采集开始后的实际排名（当前已采集7天）');
repl('<label>표시:</label>', '<label>显示：</label>');
repl('<option value="all">전체 50개</option>', '<option value="all">全部50款</option>');
repl('<option value="sel">게임 선택</option>', '<option value="sel">选择游戏</option>');

// ============ Tab-cri ============
repl('<div class="st">📋 기준 가이드</div>', '<div class="st">📋 基准指南</div>');

// ============ Tab-ads ============
repl('<div class="wb i">📺 YouTube에서 "게임명" 관련 영상 — 최근 7일 + 최신 영상</div>', '<div class="wb i">📺 YouTube上关于"游戏名"的视频 — 最近7天 + 最新视频</div>');
repl('<div class="st">🎬 유튜브 영상</div>', '<div class="st">🎬 YouTube视频</div>');

// ============ Tab-upd ============
repl('<div class="wb i">📱 최신 업데이트 트래커 — Google Play changelog</div>', '<div class="wb i">📱 最新更新追踪器 — Google Play changelog</div>');
repl('<div class="st">🔄 최근 업데이트</div>', '<div class="st">🔄 最近更新</div>');

// ============ Tab-mkt ============
repl('<div class="wb i">📢 마케팅 액션 트래커 — 유튜브 영상 · 인플루언서 협업 · UA 활동</div>', '<div class="wb i">📢 营销活动追踪器 — YouTube视频 · 网红合作 · UA活动</div>');
repl('<div class="st">📢 마케팅 활동</div>', '<div class="st">📢 营销活动</div>');

// ============ Tab-cal ============
repl('<div class="wb i">📅 게임업계 캘린더 — 신작 런칭 · CBT · OBT · 주요 업데이트</div>', '<div class="wb i">📅 游戏行业日程 — 新作发布 · CBT · OBT · 主要更新</div>');
repl('<div class="st">📅 업계 캘린더</div>', '<div class="st">📅 行业日程</div>');

// ============ Tab-nws ============
repl('<div class="wb i">📰 최근 게임 뉴스 — 인벤 · 게임메카 · 중국 게임웹진 (최근 7일)</div>', '<div class="wb i">📰 最新游戏新闻 — Inven · GameMeca · 中国游戏网媒（最近7天）</div>');
repl('<div class="st">📰 게임 뉴스</div>', '<div class="st">📰 游戏新闻</div>');

// ============ Modal ============
repl('<h3>🎬 유튜브 영상</h3>', '<h3>🎬 YouTube视频</h3>');
repl('<h3>💬 커뮤니티 반응</h3>', '<h3>💬 社区反响</h3>');

// ============ JS-generated strings ============
repl("'수집된 영상 없음'", "'暂无采集视频'");
repl("'게시글'", "'帖子'");
repl("'긍정'", "'好评'");
repl("'부정'", "'差评'");
repl("'여론 데이터 없음'", "'暂无舆论数据'");
repl("ch.textContent=cat==='all'?'전체':cat", "ch.textContent=cat==='all'?'全部':cat");
repl("'조회 '", "'播放 '");
repl("'좋아요 '", "'点赞 '");
repl("'데이터 부족'", "'数据不足'");
repl("'7일'", "'7天'");

// Write output
fs.writeFileSync(dst, content, 'utf8');
console.log(`\n✅ Done! ${changes} replacements made.`);
console.log(`Written to: ${dst}`);
