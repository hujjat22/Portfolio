(function () {
  "use strict";

  var $ = function (s, r) {
    return (r || document).querySelector(s);
  };

  var $$ = function (s, r) {
    return [].slice.call((r || document).querySelectorAll(s));
  };

  var reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;

  var P = [
    {
      t: "Speak Up",
      tag: "In development",
      h: 260,
      url: "Private repository",
      problem: "Many students get nervous before presentations, project defences and vivas, and rarely get to practise out loud.",
      built: "A practice website for English, Bangla or mixed-language sessions, with a virtual audience and follow-up questions. Planning is done and the shared homepage header and sidebar are built. Quick Practice, focused practice modes, voice or text answers, image-to-text for study notes, and AI follow-up feedback are planned.",
      stack: ["HTML", "CSS", "JavaScript"],
      links: [],
      note: "Private for now. Demo on request."
    },
    {
      t: "Cox’s Bazar Unfiltered",
      tag: "Live",
      h: 170,
      url: "cox-s-bazar-unfiltered.vercel.app",
      problem: "Visitors to Cox’s Bazar can overpay for rides and rooms, or miss basic sea-safety information.",
      built: "A travel guide with filterable places you can save, local food, 1 to 3 day plans, a trip budget calculator, a fair price guide, emergency contacts, and a sea-safety section with live weather from the Open-Meteo API.",
      stack: ["HTML", "Tailwind CSS", "JavaScript", "API", "localStorage"],
      links: [
        ["Open the live site", "https://cox-s-bazar-unfiltered.vercel.app/"],
        ["View repository", "https://github.com/hujjat22/Cox-s-Bazar-unfiltered"]
      ]
    },
    {
      t: "Anime Index",
      tag: "Live",
      h: 170,
      url: "anime-index-rose.vercel.app",
      problem: "Finding a show to watch means scrolling through long lists, and it’s hard to keep track of the ones you like.",
      built: "An anime explorer built with React and Vite that loads shows from the public TVMaze API. You can browse and load more results, search by title, and save favorites that stay in your browser with localStorage. It shows loading and error messages while data arrives.",
      stack: ["React", "Vite", "JavaScript", "TVMaze API", "localStorage"],
      links: [
        ["Open the live site", "https://anime-index-rose.vercel.app/"],
        ["View repository", "https://github.com/hujjat22/Anime-Index"]
      ]
    },
    {
      t: "Everyday",
      tag: "Live",
      h: 18,
      url: "everyday-hazel-seven.vercel.app",
      problem: "A good message can lighten a hard day, but it’s easy to scroll past one.",
      built: "A mobile-friendly site that greets you by name and shows exactly one message per day: quotes from well-known people, plus an original thought of mine.",
      stack: ["HTML", "CSS", "JavaScript"],
      links: [
        ["Open the live site", "https://everyday-hazel-seven.vercel.app/"],
        ["View repository", "https://github.com/hujjat22/Everyday"]
      ]
    },
    {
      t: "Auto Car Parking Gate",
      tag: "Hardware",
      h: 170,
      url: "EEE project, no public repository",
      problem: "Parking gates need a person standing there to let every car in and out.",
      built: "A smart parking system that automatically controls vehicle entry and exit using sensors and automation.",
      stack: ["Sensors", "Automation"],
      links: [],
      note: "Ask me and I’ll explain how it works."
    },
    {
      t: "Traffic Dodge",
      tag: "C",
      h: 260,
      url: "Console game written in C",
      problem: "Loops, arrays and logic feel abstract when you first learn C.",
      built: "A console car-dodging game that gave my first lessons something to aim at, and where my programming journey started.",
      stack: ["C", "Console"],
      links: [
        ["View repository", "https://github.com/hujjat22/Traffic-Dodge"]
      ]
    },
    {
      t: "Mini Project 1",
      tag: "Live",
      h: 18,
      url: "mini-project-1-orcin.vercel.app",
      problem: "Every developer needs a first home on the web, and I needed mine.",
      built: "My first personal profile site, built with HTML and CSS, showing my skills, projects and contact details.",
      stack: ["HTML", "CSS"],
      links: [
        ["Open the live site", "https://mini-project-1-orcin.vercel.app/"],
        ["View repository", "https://github.com/hujjat22/mini-project-1"]
      ]
    }
  ];

  /* Animate the name one letter at a time. */
  (function () {
    var el = $("#name");
    var words = el.textContent.trim().split(" ");
    var i = 0;
    var out = "";

    words.forEach(function (w, wi) {
      var hot = wi === words.length - 1;
      var k = 0;

      out += '<span class="w' + (hot ? " hot" : "") + '" aria-hidden="true">' +
        w.split("").map(function (c) {
          return '<span class="ch" style="--i:' + (i++) + ";--k:" + (k++) + '">' + c + "</span>";
        }).join("") +
        "</span> ";
    });

    el.innerHTML = out;
  })();

  /* Subtle particle background. */
  (function () {
    var cv = $("#bg");
    var cx = cv.getContext("2d");
    var pts = [];
    var m = { x: -999, y: -999 };
    var W;
    var H;

    function size() {
      W = cv.width = innerWidth;
      H = cv.height = innerHeight;
      pts = [];

      for (var i = 0; i < (W < 700 ? 34 : 80); i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - .5) * .5,
          vy: (Math.random() - .5) * .5,
          c: i % 3 ? "112,214,189" : "215,243,106"
        });
      }
    }

    size();
    addEventListener("resize", size);
    addEventListener("mousemove", function (e) {
      m.x = e.clientX;
      m.y = e.clientY;
    });

    function frame() {
      cx.clearRect(0, 0, W, H);

      pts.forEach(function (p, i) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;

          var dx = p.x - m.x;
          var dy = p.y - m.y;
          var d = Math.hypot(dx, dy);

          if (d < 140 && d > 0) {
            p.x += dx / d * 1.6;
            p.y += dy / d * 1.6;
          }
        }

        cx.fillStyle = "rgba(" + p.c + ",.85)";
        cx.beginPath();
        cx.arc(p.x, p.y, 2, 0, 6.3);
        cx.fill();

        for (var j = i + 1; j < pts.length; j++) {
          var q = pts[j];
          var dd = Math.hypot(p.x - q.x, p.y - q.y);

          if (dd < 125) {
            cx.strokeStyle = "rgba(" + p.c + "," + (.22 * (1 - dd / 125)) + ")";
            cx.beginPath();
            cx.moveTo(p.x, p.y);
            cx.lineTo(q.x, q.y);
            cx.stroke();
          }
        }

        var md = Math.hypot(p.x - m.x, p.y - m.y);

        if (md < 170) {
          cx.strokeStyle = "rgba(215,243,106," + (.3 * (1 - md / 170)) + ")";
          cx.beginPath();
          cx.moveTo(p.x, p.y);
          cx.lineTo(m.x, m.y);
          cx.stroke();
        }
      });

      if (!reduce) requestAnimationFrame(frame);
    }

    frame();
  })();

  /* Marquee text. */
  $$(".mt").forEach(function (m) {
    var html = m.textContent
      .replace(/\s*—\s*$/, "")
      .split(" — ")
      .filter(Boolean)
      .map(function (w) {
        return "<span>" + w + "</span>";
      })
      .join("");

    m.innerHTML = html + html + html + html;
  });

  /* Light up About text as you scroll. */
  var wd = $("#words");

  wd.innerHTML = wd.textContent.trim().split(/\s+/).map(function (w) {
    return "<span>" + w + "</span>";
  }).join(" ");

  var ws = $$("span", wd);

  var detailData = {
    "Speak Up": {summary:"A presentation and viva practice space for students, designed around low-pressure rehearsal in English, Bangla, or a mix of both.",features:["Practise with a virtual audience and follow-up questions.","Choose focused practice modes and answer by voice or text.","The project is in development; planned features remain identified as planned."]},
    "Cox’s Bazar Unfiltered": {summary:"A visitor-focused guide to Cox’s Bazar, pairing practical trip planning with local information and sea-safety resources.",features:["Filter and save places to visit.","Build one to three day itineraries and estimate a trip budget.","See fair-price guidance, emergency contacts, and sea conditions with Open-Meteo weather data."]},
    "Anime Index": {summary:"A React and Vite anime explorer using the TVMaze API to make browsing and saving shows simple.",features:["Search titles and load more results.","Save favorites in localStorage so they remain after refresh.","Show loading and error states while API data is requested."]},
    "Everyday": {summary:"A small daily-message site that gives visitors one encouraging thought at a time.",features:["Personal greeting and a daily message.","A mix of selected quotes and original writing.","Responsive layout for phones and larger screens."]},
    "Auto Car Parking Gate": {summary:"A hardware prototype that uses sensors and automation to control vehicle entry and exit.",features:["Detect vehicle movement with sensors.","Raise and lower the gate automatically.","Course project combining electronics and automation."]},
    "Traffic Dodge": {summary:"A console game written in C that turns early programming concepts into a simple driving challenge.",features:["Move a car between lanes to avoid traffic.","Use input, conditions, loops, and score tracking.","First-semester programming project."]},
    "Mini Project 1": {summary:"A first personal website introducing its creator, skills, and early project work.",features:["Built with HTML and CSS.","Introduces background, skills, and contact details.","First step into publishing work on the web."]}
  };
  function visual(p) {
    if(p.t==="Speak Up") return '<div class="project-visual pv-speak" aria-hidden="true"><div class="visual-screen"><small>practice room · 01</small><b>Find your<br>speaking rhythm.</b><div class="visual-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span>ENGLISH　বাংলা　MIXED</span></div><em class="visual-orb"></em></div>';
    if(p.t==="Cox’s Bazar Unfiltered") return '<div class="project-visual pv-coast" aria-hidden="true"><div class="sun"></div><div class="coast-title">COX’S BAZAR<br><span>plan a better day by the sea</span></div><div class="sea-line"></div><small>TRAVEL · WEATHER · LOCAL GUIDE</small></div>';
    if(p.t==="Anime Index") return '<div class="project-visual pv-anime" aria-hidden="true"><div class="anime-cover"><b>ANIME<br>INDEX</b><span>discover your next story</span></div><div class="poster p1"></div><div class="poster p2"></div><div class="poster p3"></div><div class="poster p4"></div><small>SEARCH · EXPLORE · SAVE</small></div>';
    if(p.t==="Everyday") return '<div class="project-visual pv-daily" aria-hidden="true"><div class="quote-card"><small>A NOTE FOR TODAY</small><b>Let the small<br>steps count.</b><span>take what you need · 01</span></div><i></i></div>';
    if(p.t==="Auto Car Parking Gate") return '<div class="project-visual pv-gate" aria-hidden="true"><div class="gate-scene"><span class="sensor s1"></span><span class="sensor s2"></span><div class="gate-post"></div><div class="gate-arm"></div><div class="lane-mark"></div></div><small>SENSOR → CONTROL → GATE</small></div>';
    if(p.t==="Traffic Dodge") return '<div class="project-visual pv-traffic" aria-hidden="true"><div class="road"><i class="lane l1"></i><i class="lane l2"></i><span class="car c1">▰</span><span class="car c2">▰</span><span class="car player">▲</span></div><small>C:// TRAFFIC_DODGE.EXE　 SCORE 120</small></div>';
    return '<div class="project-visual pv-mini" aria-hidden="true"><div class="browser-mock"><div class="browser-bar"><i></i><i></i><i></i></div><div class="browser-body"><span>HELLO, I’M</span><b>Hujjat<br>Bin Maswood</b><em>PORTFOLIO · FIRST BUILD</em></div></div><small>FIRST WEBSITE</small></div>';
  }
  var dialog=document.getElementById("project-dialog"), dialogFeatures=document.getElementById("dialog-features");
  function openDetails(p){var d=detailData[p.t]||{summary:p.built,features:[]};document.getElementById("dialog-kicker").textContent=p.tag+" · PROJECT DETAILS";document.getElementById("dialog-title").textContent=p.t;document.getElementById("dialog-summary").textContent=d.summary;dialogFeatures.replaceChildren();d.features.forEach(function(item){var li=document.createElement("li");li.textContent=item;dialogFeatures.appendChild(li);});var chips=document.getElementById("dialog-stack");chips.replaceChildren();p.stack.forEach(function(item){var chip=document.createElement("span");chip.textContent=item;chips.appendChild(chip);});var links=document.getElementById("dialog-links");links.replaceChildren();p.links.forEach(function(link){var a=document.createElement("a");a.href=link[1];a.textContent=link[0]+" ↗";a.target="_blank";a.rel="noopener";links.appendChild(a);});dialog.showModal();}

  /* Create the stacking project cards. */
  var stack = $("#stack");
  var cards = [];
  var tops = [];

  P.forEach(function (p, i) {
    var c = document.createElement("article");
    c.className = "sc";
    c.id = "project-card-" + i;
    c._projectData = p;
    c.dataset.kind = p.tag === "C" ? "code" : p.tag === "Hardware" ? "hardware" : "web";
    c.style.setProperty("--i", i);
    c.style.setProperty("--h", p.h);

    c.innerHTML =
      '<span class="no" aria-hidden="true">0' + (i + 1) + '</span>' +
      '<div class="l">' + visual(p) + '<span class="ptag">' + p.tag + "</span>" +
      "<h3>" + p.t + '</h3><p class="u">' + p.url + '</p><div class="chips2">' +
      p.stack.map(function (s) {
        return "<em>" + s + "</em>";
      }).join("") +
      '</div></div><div class="r">' +
      "<p><b>The problem.</b> " + p.problem + "</p>" +
      "<p><b>What I built.</b> " + p.built + "</p>" +
      (p.links.length
        ? '<div class="plinks">' + p.links.map(function (l) {
            return '<a href="' + l[1] + '" target="_blank" rel="noopener">' + l[0] + "</a>";
          }).join("") + "</div>"
        : "") +
      (p.note ? '<p class="note">' + p.note + "</p>" : "") +
      '<div class="project-actions"><button class="details-trigger" type="button">Project details <span>↗</span></button></div>' +
      "</div>";

    var repoLink = p.links.filter(function (l) {
      return l[1].indexOf("github.com/") !== -1;
    })[0];

    if (repoLink) {
      var cloneButton=document.createElement("button");
      cloneButton.type="button";cloneButton.className="clone-command";cloneButton.textContent="Copy clone command";
      cloneButton.setAttribute("aria-label","Copy clone command for "+p.t);
      cloneButton.addEventListener("click",function(){var command="git clone "+repoLink[1]+".git";if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(command).then(function(){cloneButton.textContent="Clone command copied";setTimeout(function(){cloneButton.textContent="Copy clone command";},1800);}).catch(function(){cloneButton.textContent=command;});}else{cloneButton.textContent=command;}});
      c.querySelector(".project-actions").appendChild(cloneButton);
      var stats = document.createElement("div");
      stats.className = "repo-metrics";
      stats.innerHTML =
        '<span class="live">GitHub</span>' +
        "<span>★ <b>—</b> stars</span>" +
        "<span>⑂ <b>—</b> forks</span>" +
        "<span>Branch <b>—</b></span>" +
        "<span>Updated <b>—</b></span>";

      c.querySelector(".r").insertBefore(stats, c.querySelector(".plinks"));

      var repo = repoLink[1]
        .replace("https://github.com/", "")
        .replace(/\/$/, "");

      fetch("https://api.github.com/repos/" + repo)
        .then(function (r) {
          return r.ok ? r.json() : null;
        })
        .then(function (d) {
          if (!d) return;

          var vals = [
            "★ <b>" + d.stargazers_count + "</b> stars",
            "⑂ <b>" + d.forks_count + "</b> forks",
            "Branch <b>" + d.default_branch + "</b>",
            "Updated <b>" +
              new Date(d.pushed_at).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short"
              }) +
              "</b>"
          ];

          stats.querySelectorAll("span:not(.live)").forEach(function (el, i) {
            el.innerHTML = vals[i];
          });
        })
        .catch(function () {});
    }

    stack.appendChild(c);
    cards.push(c);
  });

  var carousel=document.getElementById("project-carousel"), tabs=document.getElementById("project-tabs"), count=document.getElementById("project-count"), previousButton=document.getElementById("project-prev"), nextButton=document.getElementById("project-next");
  var category="all", current=0, touchStartX=0, touchStartY=0, enterDirection=1;
  var stageResize=new ResizeObserver(function(){syncStageHeight();});
  function filteredCards(){return cards.filter(function(card){return category==="all"||card.dataset.kind===category;});}
  function syncStageHeight(){var active=cards[current];if(active){stack.style.height=Math.ceil(active.getBoundingClientRect().height)+"px";}}
  function wrapIndex(index,length){return (index%length+length)%length;}
  function selectProject(index,direction,animate){
    var shown=filteredCards();if(!shown.length)return;
    var selected=shown[wrapIndex(index,shown.length)];current=cards.indexOf(selected);enterDirection=direction||1;
    cards.forEach(function(card){card.classList.remove("is-active","is-previous","is-next","is-away","entering","filtered-out");var hidden=category!=="all"&&card.dataset.kind!==category;if(hidden){card.classList.add("filtered-out");card.setAttribute("aria-hidden","true");card.inert=true;return;}
      var pos=shown.indexOf(card),total=shown.length,dist=pos-shown.indexOf(selected);if(total>2){if(dist>total/2)dist-=total;if(dist<-total/2)dist+=total;}
      if(dist===0){card.classList.add("is-active");card.setAttribute("aria-hidden","false");card.inert=false;if(animate&&!reduce){card.style.setProperty("--enter-x",(enterDirection>0?"86px":"-86px"));void card.offsetWidth;card.classList.add("entering");}}
      else if(dist===-1||dist===total-1){card.classList.add("is-previous");card.setAttribute("aria-hidden","true");card.inert=true;}
      else if(dist===1||dist===-(total-1)){card.classList.add("is-next");card.setAttribute("aria-hidden","true");card.inert=true;}
      else{card.classList.add("is-away");card.setAttribute("aria-hidden","true");card.inert=true;}
    });
    tabs.replaceChildren();shown.forEach(function(card,i){var tab=document.createElement("button");tab.type="button";tab.className="project-tab";tab.setAttribute("role","tab");tab.setAttribute("aria-selected",String(card===selected));tab.setAttribute("aria-controls",card.id);tab.setAttribute("aria-label",String(i+1)+" of "+shown.length+": "+card._projectData.t);tab.textContent=String(i+1).padStart(2,"0");tab.addEventListener("click",function(){selectProject(i,i>=shown.indexOf(selected)?1:-1,true);});tabs.appendChild(tab);});
    count.textContent=String(shown.indexOf(selected)+1).padStart(2,"0")+" / "+String(shown.length).padStart(2,"0");
    stageResize.disconnect();stageResize.observe(selected);syncStageHeight();requestAnimationFrame(syncStageHeight);
    var activeCard=selected;activeCard.addEventListener("animationend",function done(e){if(e.animationName.indexOf("carousel-enter")===0){activeCard.classList.remove("entering");activeCard.removeEventListener("animationend",done);}});
  }
  function moveProject(direction){var shown=filteredCards();if(!shown.length)return;var at=shown.indexOf(cards[current]);selectProject(at+direction,direction,true);}
  cards.forEach(function(card){card.classList.add("carousel-card");card.addEventListener("click",function(e){if(card.classList.contains("is-previous"))selectProject(filteredCards().indexOf(card),-1,true);else if(card.classList.contains("is-next"))selectProject(filteredCards().indexOf(card),1,true);});});
  previousButton.addEventListener("click",function(){moveProject(-1);});nextButton.addEventListener("click",function(){moveProject(1);});
  $$(".project-filters button").forEach(function(button){button.addEventListener("click",function(){category=button.dataset.filter;var active=$(".project-filters .active");if(active)active.classList.remove("active");button.classList.add("active");selectProject(0,1,true);});});
  carousel.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){e.preventDefault();moveProject(1);}else if(e.key==="ArrowLeft"){e.preventDefault();moveProject(-1);}});
  carousel.addEventListener("pointerdown",function(e){if(e.target.closest("button,a"))return;touchStartX=e.clientX;touchStartY=e.clientY;});
  carousel.addEventListener("pointerup",function(e){var dx=e.clientX-touchStartX,dy=e.clientY-touchStartY;if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.25)moveProject(dx<0?1:-1);});
  addEventListener("resize",syncStageHeight);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(syncStageHeight);selectProject(0,1,false);

  /* Scroll progress, text reveal and timeline. */
  var prog = $("#prog");
  var tl = $("#tl");
  var fill = $("#tlfill");

  function onScroll() {
    var h = document.documentElement;

    prog.style.width =
      h.scrollTop / Math.max(1, h.scrollHeight - innerHeight) * 100 + "%";

    var r = wd.getBoundingClientRect();
    var p = Math.max(0, Math.min(1,
      (innerHeight * .88 - r.top) / (r.height + innerHeight * .35)
    ));

    var upto = reduce ? ws.length : Math.round(p * ws.length);
    ws.forEach(function (s, i) {
      s.classList.toggle("lit", i < upto);
    });

    var t = tl.getBoundingClientRect();
    var q = Math.max(0, Math.min(1, (innerHeight * .6 - t.top) / t.height));
    fill.style.height = q * 100 + "%";

    /* Cards use a responsive grid; no scroll-stacking transform is needed. */
  }

  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  /* Reveal sections when they enter view. */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: .18 });

  $$(".rv,.ti").forEach(function (el) {
    io.observe(el);
  });

  /* Group skills into responsive cards with a staggered pop-in. */
  (function(){
    var f=$("#field");
    var groups=[["Programming",["C","C++","Java","JavaScript"]],["Web",["HTML","CSS","Tailwind CSS","React","Vite"]],["Data & APIs",["Public APIs","TVMaze","Open-Meteo","localStorage"]],["Tools",["Git","GitHub","VS Code","Vercel"]]];
    var grid=document.createElement("div");grid.className="skills-grid";f.classList.add("static");
    groups.forEach(function(g){var card=document.createElement("article");card.className="skill-group";var title=document.createElement("h3");title.textContent=g[0];var tags=document.createElement("div");tags.className="skill-tags";g[1].forEach(function(label){var tag=document.createElement("span");tag.textContent=label;tags.appendChild(tag);});card.appendChild(title);card.appendChild(tags);grid.appendChild(card);});
    f.appendChild(grid);
    var skillObserver=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add("visible");skillObserver.unobserve(e.target);}});},{threshold:.15});
    $$(".skill-group",grid).forEach(function(el,i){el.style.transitionDelay=(i*75)+"ms";skillObserver.observe(el);});
  })();

  /* Cursor follower: one dot and a delayed ring on mouse devices. */
  if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!reduce){
    document.body.classList.add("has-custom-cursor");var dot=$("#cursor-dot"),ring=$("#cursor-ring");var mx=-100,my=-100,rx=-100,ry=-100;
    addEventListener("mousemove",function(e){mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px";});
    (function follow(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(follow);})();
  }
  dialog.querySelector(".dialog-close").addEventListener("click",function(){dialog.close();});
  dialog.addEventListener("click",function(e){if(e.target===dialog)dialog.close();});

  /* Contact form opens an email app with the message filled in. */
  $("#cform").addEventListener("submit", function (e) {
    e.preventDefault();

    var n = $("#fn").value.trim();
    var em = $("#fe").value.trim();
    var msg = $("#fm").value.trim();

    location.href =
      "mailto:hujjat07@gmail.com?subject=" +
      encodeURIComponent("Portfolio message from " + n) +
      "&body=" +
      encodeURIComponent(msg + "\n\nFrom: " + n + " (" + em + ")");

    $("#fstat").textContent =
      "Opening your email app. If nothing opens, write to hujjat07@gmail.com directly.";
  });
})();