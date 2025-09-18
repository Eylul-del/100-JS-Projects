document.addEventListener('DOMContentLoaded', function () {
    let homeBtns = document.querySelectorAll(".homeBtn");
    let aboutBtns = document.querySelectorAll(".aboutBtn");
    let projectBtns = document.querySelectorAll(".projectBtn");
    let contctBtns = document.querySelectorAll(".contctBtn");
    let cookiesBtns = document.querySelectorAll(".cookiesBtn");
    let privacyBtns = document.querySelectorAll(".privacybtn");
    let termsBtns = document.querySelectorAll(".termsBtn");
    // let similarProjectsBtn = document.querySelectorAll(".similarProjectCard");

  
    homeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = './index.html';
    });
  });

  aboutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = './about.html';
    });
  });

  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = './allProjects.html';
    });
  });

  contctBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = './contact.html';
    });
  });

  cookiesBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = './cookies.html';
    });
  });

  privacyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = './privacy.html';
    });
  });

  termsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = './terms.html';
    });
  });
});





//for projects
// document.addEventListener('DOMContentLoaded', () => {
//   let projectBtns = document.querySelectorAll('.project[data-project]');

//   projectBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       let projectNum = btn.getAttribute('data-project');
//       // Always load from /projects/ folder
//       window.location.href = `projects/project${projectNum}.html`;
//     });
//   });
// });

// console.log("hwllo");

document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js loaded');

  let explanationBtns = Array.from(document.querySelectorAll('.project[data-project]'));
  let similarBtns    = Array.from(document.querySelectorAll('.similarProject[data-similar]'));

  console.log('explanationBtns found:', explanationBtns.length);
  console.log('similarBtns found:', similarBtns.length);

  // Try to detect repo base for GitHub Pages (e.g. /your-repo-name/)
  function detectRepoBase() {
    let parts = location.pathname.split('/').filter(Boolean);
    if (location.hostname.endsWith('github.io') && parts.length > 0) {
      // assume first path segment is the repo name (unless it's a filename)
      if (!parts[0].includes('.')) return `/${parts[0]}/`;
    }
    return '/';
  }
  let repoBase = detectRepoBase();
  console.log('detected repoBase:', repoBase);

  function buildCandidates(n) {
    // Order: same folder, ./, projects/, parent, repo-root/project, fallback
    return [
      `project${n}.html`,
      `./project${n}.html`,
      `projects/project${n}.html`,
      `./projects/project${n}.html`,
      `../projects/project${n}.html`,
      `../project${n}.html`,
      `${repoBase}projects/project${n}.html`,
      `${repoBase}project${n}.html`
    ];
  }

  // Check which candidate exists using HEAD (only works on http/https)
  async function findExistingUrl(candidates) {
    if (!location.protocol.startsWith('http')) {
      // file:// fallback: just log resolved URLs and return null
      console.warn('Not using HTTP(S) (file://). HEAD checks skipped — will fallback to first candidate.');
      candidates.forEach(c => console.log('resolved candidate:', new URL(c, location.href).href));
      return null;
    }

    for (let c of candidates) {
      let resolved = new URL(c, location.href).href;
      try {
        let res = await fetch(resolved, { method: 'HEAD' });
        console.log('HEAD', resolved, res.status);
        if (res.ok) return resolved;
      } catch (err) {
        console.warn('HEAD failed for', resolved, err);
      }
    }
    return null;
  }

  // generic attach function for buttons
  function attachHandlers(buttons, attributeName) {
    buttons.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        let num = btn.getAttribute(attributeName);
        console.log('clicked', attributeName, num);

        if (!num) {
          console.error('No number found in', attributeName, 'for element:', btn);
          return;
        }

        let candidates = buildCandidates(num);
        console.log('candidate URLs (resolved):', candidates.map(c => new URL(c, location.href).href));

        let good = await findExistingUrl(candidates);
        if (good) {
          console.log('navigating to existing URL:', good);
          window.location.href = good;
        } else {
          // fallback: navigate to the first candidate (resolved)
          let fallback = new URL(candidates[0], location.href).href;
          console.warn('No existing candidate found; navigating to fallback:', fallback);
          window.location.href = fallback;
        }
      });
    });
  }

  attachHandlers(explanationBtns, 'data-project');
  attachHandlers(similarBtns, 'data-similar');
});



// document.addEventListener('DOMContentLoaded', () => {
//   let projectBtns = document.querySelectorAll('.project[data-project]');
//   projectBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       let projectNum = btn.getAttribute('data-project');
//       window.location.href = `../projects/project${projectNum}.html`;
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', () => {
//   let similarProjectsBtn = document.querySelectorAll('.project[data-project]');
//   similarProjectsBtn.forEach(btn => {
//     btn.addEventListener('click', () => {
//       let projectNum = btn.getAttribute('data-project');
//       window.location.href = `../projects/project${projectNum}.html`;
//     });
//   });
// });



//back to top
let backToTop = document.querySelector(".backToTop");

window.addEventListener("scroll", () =>{
  if(window.scrollY > 400){
    backToTop.classList.add("show");
  }else{
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () =>{
  window.scrollTo({top: 0, behavior: "smooth"});
})
