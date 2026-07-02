const fs = require('fs');
const path = 'C:/Users/user/game-dashboard-cn/index.html';
let c = fs.readFileSync(path, 'utf8');

// These are the JS-generated strings that need translation
const reps = [
  // From the check output, these exist in the file:
  ["수집된 영상 없음", "暂无采集视频"],
  ["여론 데이터 없음", "暂无舆论数据"],
  ["수집된 여론 데이터가 없습니다.", "暂无采集的舆论数据。"],
  ["게시글", "帖子"],
  ["긍정", "好评"],
  ["부정", "差评"],
  ["데이터 부족", "数据不足"],
  // Check if these exist too - the search was for string constants
  ["'총 조회수'", "'总播放量'"],
  ["'총 조회'", "'总播放'"],
];

let total = 0;
for (const [from, to] of reps) {
  const count = c.split(from).length - 1;
  if (count > 0) {
    c = c.split(from).join(to);
    total += count;
    console.log(`[${count}x] "${from}" → "${to}"`);
  }
}

// Also fix the 조회 and 좋아요 in template literals
// These appear as '+ 조회 ' and '+ 좋아요 ' in concatenated strings
const vcount1 = c.split("+'조회 '+").length - 1;
if (vcount1 > 0) {
  c = c.split("+'조회 '+").join("+'播放 '+");
  total += vcount1;
  console.log(`[${vcount1}x] +'조회 '+ → +'播放 '+`);
}
const vcount2 = c.split(", '조회 ', (").length - 1;
if (vcount2 > 0) {
  c = c.split(", '조회 ', (").join(", '播放 ', (");
  total += vcount2;
  console.log(`[${vcount2}x] ,'조회 ', → ,'播放 ',`);
}

const lcount1 = c.split("+'좋아요 '+").length - 1;
if (lcount1 > 0) {
  c = c.split("+'좋아요 '+").join("+'点赞 '+");
  total += lcount1;
  console.log(`[${lcount1}x] +'좋아요 '+ → +'点赞 '+`);
}

// Find 조회 in string context: '영상, 조회 '
const vcount3 = c.split("영상, 조회 ").length - 1;
if (vcount3 > 0) {
  c = c.split("영상, 조회 ").join("视频, 播放 ");
  total += vcount3;
  console.log(`[${vcount3}x] 영상, 조회 → 视频, 播放`);
}

// '조회 ' at end of template
const vcount4 = c.split("'조회 '").length - 1;
if (vcount4 > 0) {
  c = c.split("'조회 '").join("'播放 '");
  total += vcount4;
  console.log(`[${vcount4}x] '조회 ' → '播放 '`);
}

const lcount2 = c.split("'좋아요 '").length - 1;
if (lcount2 > 0) {
  c = c.split("'좋아요 '").join("'点赞 '");
  total += lcount2;
  console.log(`[${lcount2}x] '좋아요 ' → '点赞 '`);
}

fs.writeFileSync(path, c, 'utf8');
console.log(`\nDone! ${total} replacements.`);
