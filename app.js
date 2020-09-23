document.addEventListener("DOMContentLoaded", function () {
  Typed.new(".type", {
    strings: ["Compositor", "Ing  de Sonido ", "Musicologo", "Guitarrista"],
    stringsElement: null,
    // typing speed
    typeSpeed: 60,
    // time before typing starts
    startDelay: 600,
    // backspacing speed
    backSpeed: 1,
    // time before backspacing
    backDelay: 900,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
  });
});

var audio;
var playlist;
var tracks;
var current;

init();
function init() {
  current = 0;
  audio = $("audio");
  playlist = $("#playlist");
  tracks = playlist.find("li a");
  len = tracks.length - 1;
  audio[0].volume = 0.1;
  audio[0].play();
  playlist.find("a").click(function (e) {
    e.preventDefault();
    link = $(this);
    current = link.parent().index();
    run(link, audio[0]);
  });
  audio[0].addEventListener("ended", function (e) {
    current++;
    if (current == len) {
      current = 0;
      link = playlist.find("a")[0];
    } else {
      link = playlist.find("a")[current];
    }
    run($(link), audio[0]);
  });
}
function run(link, player) {
  player.src = link.attr("href");
  par = link.parent();
  par.addClass("active").siblings().removeClass("active");
  audio[0].load();
  audio[0].play();
}
document.addEventListener("touchstart", function () {}, true);

document.addEventListener("DOMContentLoaded", function () {
  Typed.new(".type2", {
    strings: ["Composiciones"],
    stringsElement: null,
    // typing speed
    typeSpeed: 60,
    // time before typing starts
    startDelay: 600,
    // backspacing speed
    backSpeed: 1,
    // time before backspacing
    backDelay: 900,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  Typed.new(".type3", {
    strings: ["Bio"],
    stringsElement: null,
    // typing speed
    typeSpeed: 60,
    // time before typing starts
    startDelay: 600,
    // backspacing speed
    backSpeed: 1,
    // time before backspacing
    backDelay: 900,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  Typed.new(".type4", {
    strings: ["Contacto"],
    stringsElement: null,
    // typing speed
    typeSpeed: 60,
    // time before typing starts
    startDelay: 600,
    // backspacing speed
    backSpeed: 1,
    // time before backspacing
    backDelay: 900,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
  });
});
