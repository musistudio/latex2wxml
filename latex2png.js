// 图片会居中显示Latex


var mjAPI = require("mathjax-node-svg2png");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

var yourMath = `在\\Delta ABC中，a,b,c分别为角A,B,C所对的边，且\\\\4\\sin^{2}  \\frac{B+C}{2} - \\cos 2A = \\frac{7}{2}.(参考公式: \\sin ^{2} \\frac{\\alpha}{2}=\\frac{1-\\cos \\alpha}{2},\\cos 2\\alpha=2\\cos^{2} \\alpha-1)\\\\(1)求角A的度数;\\\\(2)若a=\\sqrt{3},b+c=3,求b和c的值.`;

mjAPI.typeset({
  math: yourMath,
  format: "TeX", // or "inline-TeX", "MathML"
  png: true,
  pngWidth: 300,
  scale: 1
}, function (data) {
  if (!data.errors) {console.log(data.mml)}
  console.log(data);
});
