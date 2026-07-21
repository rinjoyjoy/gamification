/* ブラウザ（script.js）とサーバー（server.js）の両方から読み込む共有データ。
   file:// で開かれた場合は window.SurveyData、Node の require() では module.exports として使えるようにする。 */
(function (root, factory) {
  const mod = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = mod;
  } else {
    root.SurveyData = mod;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  const HEXAD_ORDER = ['achiever', 'player', 'socialiser', 'freeSpirit', 'philanthropist', 'disruptor'];

  const SURVEY_ITEMS = [
    { id: 1,  type: 'achiever',       text: '難しい課題を達成すると、強い満足感を得る' },
    { id: 2,  type: 'achiever',       text: '自分のスキルや記録を少しずつ伸ばしていくことに惹かれる' },
    { id: 3,  type: 'player',         text: 'ポイントやバッジなどの報酬がもらえると、もっとやる気が出る' },
    { id: 4,  type: 'player',         text: '何かに取り組むとき、得られる見返りを重視するほうだ' },
    { id: 5,  type: 'socialiser',     text: '一人で取り組むより、他の人と一緒に取り組むほうが楽しい' },
    { id: 6,  type: 'socialiser',     text: '友人や仲間と成果を比べたり、つながったりすることに価値を感じる' },
    { id: 7,  type: 'freeSpirit',     text: '決められた手順より、自分なりのやり方で自由に進めたい' },
    { id: 8,  type: 'freeSpirit',     text: '新しいことを自分のペースで探求するのが好きだ' },
    { id: 9,  type: 'philanthropist', text: '見返りがなくても、誰かの役に立てるなら協力したい' },
    { id: 10, type: 'philanthropist', text: '自分の行動が他の人のためになることに喜びを感じる' },
    { id: 11, type: 'disruptor',      text: '既存のルールややり方を変えてみたいと思うことがよくある' },
    { id: 12, type: 'disruptor',      text: '型にはまらない、人と違うやり方を試すのが好きだ' },
  ];

  return { HEXAD_ORDER, SURVEY_ITEMS };
});
