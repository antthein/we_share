/* =============================================
   app.js — we_share  (all pages)
   ============================================= */

// ===== POSTS DATA =====
const POSTS = [
  {
    id: '1',
    title: 'How I reduced our AWS bill by 60% without downtime',
    author: 'Sarah Chen',
    initials: 'SC',
    expertise: 'Cloud Infrastructure · 6 yrs',
    topic: 'Development',
    tags: ['AWS', 'DevOps', 'Cost Optimization', 'Cloud'],
    date: '2026-03-28',
    readTime: 8,
    trustScore: 94,
    vouches: 47,
    upvotes: 312,
    verified: true,
    excerpt: 'After auditing our entire AWS setup, I found four key areas where we were massively overspending — and fixed them without a single minute of downtime.',
    content: `
      <p>Last year our monthly AWS bill hit $28,000. Three months later, we brought it down to $11,200 — a 60% reduction — without a single minute of planned downtime. Here's exactly what we did.</p>
      <h2>Step 1: The audit that changed everything</h2>
      <p>We started with AWS Cost Explorer and immediately found that 40% of our spend was going to EC2 instances running at under 10% average CPU utilization. Classic over-provisioning.</p>
      <p>We used <code>aws cloudwatch get-metric-statistics</code> to pull 90 days of CPU, memory, and network metrics across every instance. The picture was clear: we could safely downsize 70% of our fleet.</p>
      <h2>Step 2: Reserved Instances for predictable workloads</h2>
      <p>We identified our baseline workloads — the services running 24/7 regardless of traffic — and committed to 1-year Reserved Instances. That single change saved us $4,200/month.</p>
      <p>The key insight: don't reserve everything. Reserve only what you can confidently predict at least 12 months ahead. Anything experimental or variable stays On-Demand.</p>
      <h2>Step 3: Spot Instances for batch jobs</h2>
      <p>Our data pipeline and ML training jobs were on On-Demand instances running several hours each day. We switched these to Spot Instances with an On-Demand fallback. Savings: $2,800/month.</p>
      <p>This requires fault-tolerant workloads that checkpoint state and can resume after interruption. If yours aren't, fix that first — the Spot savings won't be worth the operational pain otherwise.</p>
      <h2>Step 4: Cleaning up the forgotten things</h2>
      <p>The final $900/month came from things simply forgotten: unattached EBS volumes, old snapshots, a load balancer pointing at a deleted service, and S3 buckets with expensive storage classes on data not accessed in over a year.</p>
      <h2>Results</h2>
      <p>Total monthly savings: $16,800. The audit took 2 days, implementation took 2 weeks, and ROI was realized in month one.</p>
      <p>The hardest part wasn't technical — it was convincing the team that downsizing wouldn't hurt reliability. We staged every change across dev → staging → production with 48 hours of monitoring at each step.</p>
    `
  },
  {
    id: '2',
    title: 'The compound interest of learning one thing deeply per month',
    author: 'Marcus Webb',
    initials: 'MW',
    expertise: 'Learning Science · 4 yrs',
    topic: 'Productivity',
    tags: ['Learning', 'Deep Work', 'Self-improvement', 'Habits'],
    date: '2026-03-20',
    readTime: 6,
    trustScore: 89,
    vouches: 31,
    upvotes: 247,
    verified: true,
    excerpt: 'For 3 years I committed one month to one topic — deeply. Here\'s what compounded and why breadth-first learning is mostly a trap.',
    content: `
      <p>Three years ago I made a decision that felt slightly crazy: instead of trying to learn many things at once, I'd pick one topic per month and go as deep as I possibly could. Here's what happened.</p>
      <h2>The problem with breadth-first learning</h2>
      <p>Most people learn breadth-first: a bit of React here, some Python there, a few chapters of a business book, a handful of videos on investing. After a year of this, they can talk about many things but execute none of them well.</p>
      <p>Breadth feels productive because you're always consuming something new. But consumption isn't learning. Application is learning.</p>
      <h2>The monthly deep-dive system</h2>
      <p>Week 1: Read the 2–3 best books on the topic. Week 2: Study the best practitioners actively working in the space. Week 3: Build or apply something real. Week 4: Teach it — write a post, give a talk, explain it to someone who knows nothing about it.</p>
      <p>The teaching week is non-negotiable. If you can't explain it simply, you don't understand it yet.</p>
      <h2>What 36 months compounded into</h2>
      <p>After 36 months I have 36 deep domains. More importantly, they cross-pollinate in unexpected ways. My month studying behavioral economics changed how I think about product design. My month on military history changed how I approach strategy and resource allocation.</p>
      <p>Depth in one area accelerates learning in adjacent ones. By your third deep-dive, you've learned how to learn deeply — and each subsequent topic takes less time than the one before.</p>
    `
  },
  {
    id: '3',
    title: 'What nobody tells you about negotiating your first salary',
    author: 'Priya Rajan',
    initials: 'PR',
    expertise: 'Career Development · 8 yrs',
    topic: 'Business',
    tags: ['Career', 'Negotiation', 'Salary', 'Finance'],
    date: '2026-03-15',
    readTime: 5,
    trustScore: 97,
    vouches: 62,
    upvotes: 489,
    verified: true,
    excerpt: 'After coaching 200+ early-career professionals through salary negotiations, I\'ve seen the same avoidable mistakes repeatedly. The conventional advice is mostly wrong.',
    content: `
      <p>I've coached over 200 early-career professionals through salary negotiations over 8 years. The same mistakes come up repeatedly — and almost none are what people typically write about.</p>
      <h2>Mistake 1: Anchoring too early without market data</h2>
      <p>Most articles tell you to name a number first. Sometimes that's right, but first-timers without calibrated market data usually anchor too low before the conversation has given them enough information. You've handed away leverage before you started.</p>
      <p>Better move: get them to share their range first. "I want to make sure we're aligned before going further — could you share the band for this role?" Most companies will. Then you anchor at the top of their range or slightly above.</p>
      <h2>Mistake 2: Only negotiating base salary</h2>
      <p>Base salary is one dimension. Signing bonus, equity, start date, remote flexibility, title, and next review date are often easier to move — and sometimes more valuable over a multi-year horizon.</p>
      <p>If they say base is fixed, pivot immediately: "Is there flexibility on the signing bonus to close the gap?" There is almost always somewhere to move.</p>
      <h2>The two things that actually work</h2>
      <p>First: silence. After you state your number, stop talking. Silence is resolved almost universally by the other party. Most people can't hold it for 10 seconds. Let them fill it.</p>
      <p>Second: competing offers. Use them not as a threat but as market data. "I have another offer at X, and I'd genuinely prefer to be here — is there any flexibility to close that gap?" This almost always works if it's true.</p>
    `
  },
  {
    id: '4',
    title: 'An honest 18-month review of intermittent fasting',
    author: 'James O\'Brien',
    initials: 'JO',
    expertise: 'Nutrition & Health · 5 yrs',
    topic: 'Health',
    tags: ['Nutrition', 'Fasting', 'Wellness', 'Weight Loss'],
    date: '2026-03-10',
    readTime: 7,
    trustScore: 88,
    vouches: 38,
    upvotes: 201,
    verified: false,
    excerpt: 'I tried every variation of IF for 18 months and tracked everything. Here\'s what actually works, what\'s overhyped, and what nobody warns you about.',
    content: `
      <p>I spent 18 months trying every major variation of intermittent fasting — 16:8, 18:6, 20:4, OMAD, 5:2 — tracking everything: weight, energy levels, sleep quality, cognitive performance, and gym results. Here's my honest take.</p>
      <h2>What actually works</h2>
      <p>16:8 (16 hours fasted, 8-hour eating window) is the most sustainable for most people. It aligns naturally with skipping breakfast and eating from noon to 8pm. The real mechanism isn't magical — it's caloric restriction made structurally easier. A smaller window makes it harder to overeat.</p>
      <h2>What's overhyped</h2>
      <p>The autophagy benefits at 16 hours are minimal. Studies showing meaningful autophagy effects typically used fasts of 24–72 hours. If autophagy is your goal, 16:8 probably isn't getting you there.</p>
      <p>The cognitive clarity people report is real, but it's mostly explained by stable blood sugar from not eating processed food in the morning — not fasting itself.</p>
      <h2>What nobody warns you about</h2>
      <p>Social friction is significant and underestimated. Business breakfasts, family brunches, early meetings with food — all become awkward. Have a clear plan for these or you'll break the protocol constantly.</p>
      <p>If you're training hard (5+ days/week), extended fasting will likely hurt performance and recovery. Training fasted for light sessions is fine. Training heavy without adequate fuel is not.</p>
    `
  },
  {
    id: '5',
    title: 'How to give feedback that people actually use',
    author: 'Nadia Volkov',
    initials: 'NV',
    expertise: 'People Management · 10 yrs',
    topic: 'Business',
    tags: ['Management', 'Communication', 'Leadership', 'Teams'],
    date: '2026-03-05',
    readTime: 5,
    trustScore: 92,
    vouches: 44,
    upvotes: 356,
    verified: true,
    excerpt: 'Most feedback fails because of how it\'s delivered, not what it says. After a decade managing teams, I\'ve learned the specific conditions that make feedback land.',
    content: `
      <p>Most feedback fails not because of what it says, but because of the conditions under which it's delivered. After a decade managing teams across three companies, I've learned what actually makes feedback stick.</p>
      <h2>The timing problem nobody talks about</h2>
      <p>Feedback given immediately after an event feels like a reaction. Feedback given 24–48 hours later feels considered. The window matters more than most managers realize. Exception: positive feedback should always be immediate. The delay only helps with corrective feedback.</p>
      <h2>Always private, rarely public</h2>
      <p>Corrective feedback always in private. Positive feedback often in public. Correcting someone in front of peers doesn't just embarrass them — it makes them defensive and adversarial, the opposite of receptive.</p>
      <h2>The frame that changes everything</h2>
      <p>Start with the observation, not the judgment. "In the client meeting, you interrupted her three times" lands very differently than "you were rude in the client meeting." The first is a fact they can engage with. The second is a verdict they'll defend against.</p>
      <p>After the observation, ask a question and stop talking: "What was going on for you in that moment?" You'll often learn something that changes your understanding of the situation entirely.</p>
    `
  },
  {
    id: '6',
    title: 'The mathematics of index funds nobody explains clearly',
    author: 'Diego Fernandez',
    initials: 'DF',
    expertise: 'Personal Finance · 7 yrs',
    topic: 'Finance',
    tags: ['Investing', 'Index Funds', 'Personal Finance', 'Maths'],
    date: '2026-02-28',
    readTime: 9,
    trustScore: 96,
    vouches: 58,
    upvotes: 421,
    verified: true,
    excerpt: 'Everyone says "just buy index funds" but almost nobody explains the actual math of why they work. Let me fix that with real numbers.',
    content: `
      <p>Everyone says "just buy index funds" but almost nobody explains the actual math of why they work over time. Let me fix that.</p>
      <h2>The arithmetic of average returns</h2>
      <p>The S&P 500 has returned roughly 10% annually on average over the past 100 years (about 7% after inflation). This is what passive index funds capture, minus a tiny expense ratio — often 0.03–0.05% for major index funds.</p>
      <p>Active fund managers charge 0.5–2% annually. To justify that fee, they'd need to consistently beat the index by that margin after costs. Fewer than 10% of active managers outperform their benchmark over any 15-year period.</p>
      <h2>The compounding math</h2>
      <p>$10,000 invested at 7% (inflation-adjusted) for 30 years becomes $76,000. The same amount growing at 5.5% (after a 1.5% management fee) becomes $49,000. That 1.5% fee doesn't cost 1.5% per year — it costs you $27,000 over 30 years on a $10,000 investment. On a $100,000 portfolio: $270,000 lost to fees.</p>
      <h2>Why most people still don't do it</h2>
      <p>Passive investing is boring. No stories to tell. No feeling of cleverness or skill. Index funds require you to accept average returns — which is psychologically hard, even though "average" beats most professionals over the long run.</p>
      <p>The other barrier is staying invested during downturns. Watching a 30% drop and holding is genuinely difficult. Most people who "believe in index funds" still sell at the worst time, locking in losses and missing the recovery.</p>
    `
  }
];

// ===== HELPERS =====

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function getBookmarks() {
  try { return JSON.parse(localStorage.getItem('ws-bookmarks') || '[]'); } catch { return []; }
}

function isBookmarked(id) {
  return getBookmarks().includes(String(id));
}

function toggleBookmark(id) {
  const bm = getBookmarks();
  const idx = bm.indexOf(String(id));
  if (idx === -1) bm.push(String(id));
  else bm.splice(idx, 1);
  localStorage.setItem('ws-bookmarks', JSON.stringify(bm));
}

function getVotes(id) {
  try { return JSON.parse(localStorage.getItem(`ws-votes-${id}`) || '{}'); } catch { return {}; }
}

function setVotes(id, votes) {
  localStorage.setItem(`ws-votes-${id}`, JSON.stringify(votes));
}

function showToast(msg) {
  let toast = document.getElementById('ws-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ws-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

function handleSignup(e) {
  e.preventDefault();
  e.target.querySelector('input[type="email"]').value = '';
  showToast("You're on the list! We'll be in touch.");
}

// ===== THEME TOGGLE =====

function showBrightnessWarning(onConfirm) {
  const overlay = document.createElement('div');
  overlay.id = 'brightness-warning';
  overlay.style.cssText = [
    'position:fixed;inset:0;z-index:9999',
    'display:flex;align-items:center;justify-content:center',
    'background:rgba(0,0,0,0.55);backdrop-filter:blur(6px)',
    'animation:fadeInOverlay 0.2s ease'
  ].join(';');

  overlay.innerHTML = `
    <div style="
      background:#1a1a1a;border:1px solid rgba(240,237,232,0.1);
      border-radius:16px;padding:2rem 1.75rem;max-width:320px;width:90%;
      box-shadow:0 32px 80px rgba(0,0,0,0.7);
      font-family:Inter,system-ui,sans-serif;
      animation:popIn 0.25s cubic-bezier(0.34,1.56,0.64,1)
    ">
      <div style="font-size:2.2rem;margin-bottom:0.85rem;line-height:1">🕶️</div>
      <h3 style="color:#f0ede8;font-size:0.95rem;font-weight:800;margin-bottom:0.5rem;letter-spacing:-0.01em">
        warning: extreme brightness ahead
      </h3>
      <p style="color:#787068;font-size:0.78rem;line-height:1.65;margin-bottom:1.4rem">
        you're switching to light mode.<br/>your eyes called. they said no.
      </p>
      <label style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1.4rem;cursor:pointer;user-select:none">
        <input type="checkbox" id="no-warn-again" style="accent-color:#4a9ebb;width:13px;height:13px;cursor:pointer" />
        <span style="color:#787068;font-size:0.72rem">i have sunglasses — don't ask again</span>
      </label>
      <div style="display:flex;gap:0.65rem">
        <button id="warn-cancel" style="
          flex:1;padding:0.6rem 0.75rem;border-radius:8px;
          border:1.5px solid rgba(240,237,232,0.12);
          background:transparent;color:#787068;
          font-size:0.78rem;font-weight:600;cursor:pointer;
          font-family:inherit;transition:border-color 0.15s,color 0.15s
        ">stay dark 🌑</button>
        <button id="warn-confirm" style="
          flex:1;padding:0.6rem 0.75rem;border-radius:8px;
          border:none;background:#4a9ebb;color:#111;
          font-size:0.78rem;font-weight:700;cursor:pointer;
          font-family:inherit;transition:opacity 0.15s
        ">i'm ready 🌞</button>
      </div>
    </div>
    <style>
      @keyframes fadeInOverlay { from { opacity:0 } to { opacity:1 } }
      @keyframes popIn { from { opacity:0; transform:scale(0.88) translateY(12px) } to { opacity:1; transform:scale(1) translateY(0) } }
      #warn-cancel:hover  { border-color:rgba(240,237,232,0.3)!important; color:#f0ede8!important }
      #warn-confirm:hover { opacity:0.85!important }
    </style>`;

  document.body.appendChild(overlay);

  document.getElementById('warn-confirm').addEventListener('click', () => {
    if (document.getElementById('no-warn-again').checked) {
      localStorage.setItem('ws-no-brightness-warn', '1');
    }
    overlay.remove();
    onConfirm();
  });

  document.getElementById('warn-cancel').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

function applyTheme(mode) {
  document.documentElement.classList.toggle('dark', mode === 'dark');
  localStorage.setItem('ws-theme', mode);
  updateThemeIcon(mode);
}

function initTheme() {
  if (document.getElementById('post-content')) return; // post.html uses reading mode instead

  const saved = localStorage.getItem('ws-theme') || 'dark';
  applyTheme(saved);

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const currentlyDark = document.documentElement.classList.contains('dark');

    if (currentlyDark && !localStorage.getItem('ws-no-brightness-warn')) {
      showBrightnessWarning(() => applyTheme('light'));
    } else {
      applyTheme(currentlyDark ? 'light' : 'dark');
    }
  });
}

function updateThemeIcon(mode) {
  // Sun shown in dark mode → click to go light
  // Moon shown in light mode → click to go dark
  document.querySelectorAll('#icon-sun').forEach(el => el.classList.toggle('hidden', mode === 'light'));
  document.querySelectorAll('#icon-moon').forEach(el => el.classList.toggle('hidden', mode === 'dark'));
}

// ===== READING MODE (post page toggle: dark ↔ light paper) =====

function initReadingMode() {
  if (!document.getElementById('post-content')) return; // only on post.html

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const saved = localStorage.getItem('ws-reading') || 'dark';
  if (saved === 'light') {
    document.documentElement.classList.add('reading-mode');
  }
  updateThemeIcon(saved);

  btn.addEventListener('click', () => {
    document.documentElement.classList.add('reading-transition');
    setTimeout(() => document.documentElement.classList.remove('reading-transition'), 350);

    const isLight = document.documentElement.classList.toggle('reading-mode');
    const mode = isLight ? 'light' : 'dark';
    localStorage.setItem('ws-reading', mode);
    updateThemeIcon(mode);
  });
}

// ===== MOBILE NAV =====

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  hamburger?.addEventListener('click', () => menu?.classList.toggle('hidden'));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
}

// ===== SCROLL REVEAL =====

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    io.observe(el);
  });
}

// ===== INDEX PAGE =====

const BOOKMARK_ICON = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`;

function postCardHTML(post) {
  const bookmarked = isBookmarked(post.id) ? 'bookmarked' : '';
  const verifiedHTML = post.verified
    ? `<span style="background:rgba(74,158,187,0.1);color:#4a9ebb" class="inline-flex items-center gap-1 text-[0.6rem] font-semibold px-2 py-0.5 rounded-full ml-auto">&#10003; ${post.trustScore}%</span>`
    : `<span class="text-[0.6rem] text-[#787068] ml-auto">${post.trustScore}%</span>`;

  return `
    <article class="post-card flex flex-col gap-3 p-5 rounded-xl border transition-all duration-200 cursor-pointer
                    bg-[#e8e5e0] border-[#1c1a16]/[0.08] dark:bg-[#1e1e1e] dark:border-[#f0ede8]/[0.08]
                    hover:border-[#4a9ebb]/[0.3] hover:-translate-y-0.5"
             data-id="${post.id}">
      <div class="flex items-start justify-between gap-2">
        <span class="text-[0.6rem] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
              style="background:rgba(74,158,187,0.1);color:#4a9ebb">${post.topic}</span>
        <button class="bookmark-btn ${bookmarked} shrink-0" data-id="${post.id}" aria-label="Bookmark">
          ${BOOKMARK_ICON}
        </button>
      </div>
      <h3 class="text-[0.9rem] font-bold leading-snug text-[#1c1a16] dark:text-[#f0ede8]">${post.title}</h3>
      <p class="text-sm text-[#787068] leading-relaxed"
         style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
        ${post.excerpt}
      </p>
      <div class="flex items-center gap-2 mt-auto pt-3 border-t border-[#1c1a16]/[0.06] dark:border-[#f0ede8]/[0.06]">
        <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[0.6rem] font-bold
                    bg-[#1c1a16]/[0.08] border border-[#1c1a16]/[0.08] text-[#1c1a16]
                    dark:bg-[#f0ede8]/[0.08] dark:border-[#f0ede8]/[0.08] dark:text-[#f0ede8]">${post.initials}</div>
        <span class="text-xs text-[#787068] truncate">${post.author}</span>
        <span class="text-xs text-[#787068] ml-auto shrink-0">${post.readTime} min</span>
        ${verifiedHTML}
      </div>
    </article>`;
}

function renderPosts(posts) {
  const grid = document.getElementById('posts-grid');
  const empty = document.getElementById('no-results');
  if (!grid) return;

  if (posts.length === 0) {
    grid.innerHTML = '';
    empty?.classList.remove('hidden');
    return;
  }
  empty?.classList.add('hidden');
  grid.innerHTML = posts.map(postCardHTML).join('');

  // Bookmark buttons
  grid.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      toggleBookmark(id);
      const bm = isBookmarked(id);
      btn.classList.toggle('bookmarked', bm);
      showToast(bm ? 'Saved to bookmarks' : 'Removed from bookmarks');
    });
  });

  // Card click → post page
  grid.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = `post.html?id=${card.dataset.id}`;
    });
  });
}

function filterPosts() {
  const query  = (document.getElementById('search-input')?.value || '').toLowerCase();
  const topic  = document.querySelector('.topic-filter.active')?.dataset.topic || 'all';

  const filtered = POSTS.filter(p => {
    const topicOk  = topic === 'all' || p.topic === topic;
    const searchOk = !query
      || p.title.toLowerCase().includes(query)
      || p.excerpt.toLowerCase().includes(query)
      || p.author.toLowerCase().includes(query)
      || p.topic.toLowerCase().includes(query)
      || p.tags.some(t => t.toLowerCase().includes(query));
    return topicOk && searchOk;
  });
  renderPosts(filtered);
}

function initIndexPage() {
  if (!document.getElementById('posts-grid')) return;
  if (document.getElementById('result-count')) return; // browse.html handles its own grid

  renderPosts(POSTS);

  // Search input
  document.getElementById('search-input')?.addEventListener('input', filterPosts);

  // Topic filter pills
  document.querySelectorAll('.topic-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.topic-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterPosts();
    });
  });

  // Topic cards in topics section → filter + scroll
  document.querySelectorAll('.topic-card[data-filter]').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const t = card.dataset.filter;
      document.querySelectorAll('.topic-filter').forEach(b => {
        b.classList.toggle('active', b.dataset.topic === t);
      });
      // If no matching pill, fall back to "all"
      const hasMatch = [...document.querySelectorAll('.topic-filter')].some(b => b.classList.contains('active'));
      if (!hasMatch) document.querySelector('.topic-filter[data-topic="all"]')?.classList.add('active');
      filterPosts();
      document.getElementById('browse')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ===== BROWSE PAGE =====

function initBrowsePage() {
  const resultCount = document.getElementById('result-count');
  if (!resultCount) return; // only on browse.html

  // populate sidebar counts
  const topics = ['all', 'Development', 'Productivity', 'Business', 'Health', 'Finance'];
  topics.forEach(t => {
    const el = document.getElementById(`count-${t}`);
    if (!el) return;
    el.textContent = t === 'all'
      ? POSTS.length
      : POSTS.filter(p => p.topic === t).length;
  });

  // stats
  const verified = POSTS.filter(p => p.verified).length;
  const avgTrust = Math.round(POSTS.reduce((s, p) => s + p.trustScore, 0) / POSTS.length);
  const statTotal    = document.getElementById('stat-total');
  const statVerified = document.getElementById('stat-verified');
  const statTrust    = document.getElementById('stat-trust');
  if (statTotal)    statTotal.textContent    = POSTS.length;
  if (statVerified) statVerified.textContent = `${verified} / ${POSTS.length}`;
  if (statTrust)    statTrust.textContent    = `${avgTrust}%`;

  function getActiveTopic() {
    return document.querySelector('.browse-topic-btn.active')?.dataset.topic || 'all';
  }

  function setActiveTopic(topic) {
    document.querySelectorAll('.browse-topic-btn').forEach(b => {
      const isActive = b.dataset.topic === topic;
      b.classList.toggle('active', isActive);
      b.classList.toggle('font-semibold', isActive);
      b.classList.toggle('text-[#4a9ebb]', isActive);
      b.classList.toggle('bg-[rgba(74,158,187,0.1)]', isActive);
      b.classList.toggle('text-[#787068]', !isActive);
    });
    // sync mobile pills
    document.querySelectorAll('#topic-filters-mobile .topic-filter').forEach(b => {
      b.classList.toggle('active', b.dataset.topic === topic);
    });
  }

  function filterAndRender() {
    const query = (document.getElementById('search-input')?.value || '').toLowerCase();
    const topic = getActiveTopic();

    const filtered = POSTS.filter(p => {
      const topicOk  = topic === 'all' || p.topic === topic;
      const searchOk = !query
        || p.title.toLowerCase().includes(query)
        || p.excerpt.toLowerCase().includes(query)
        || p.author.toLowerCase().includes(query)
        || p.topic.toLowerCase().includes(query)
        || p.tags.some(t => t.toLowerCase().includes(query));
      return topicOk && searchOk;
    });

    resultCount.textContent = `${filtered.length} post${filtered.length !== 1 ? 's' : ''}`;
    renderPosts(filtered);
  }

  // sidebar topic buttons
  document.querySelectorAll('.browse-topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveTopic(btn.dataset.topic);
      filterAndRender();
    });
  });

  // mobile topic pills
  document.querySelectorAll('#topic-filters-mobile .topic-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveTopic(btn.dataset.topic);
      filterAndRender();
    });
  });

  // search
  document.getElementById('search-input')?.addEventListener('input', filterAndRender);

  filterAndRender();
}

// ===== POST PAGE =====

function initPostPage() {
  if (!document.getElementById('post-content')) return;

  const id   = new URLSearchParams(window.location.search).get('id');
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    document.getElementById('post-content').innerHTML =
      '<p style="color:rgb(var(--c-muted))">Post not found. <a href="/" style="color:#4a9ebb;text-decoration:underline">Go back home</a></p>';
    return;
  }

  // Meta
  document.title = `${post.title} — we_share`;

  // Header fields
  document.getElementById('post-topic').textContent   = post.topic;
  document.getElementById('post-title').textContent   = post.title;
  document.getElementById('post-date').textContent    = formatDate(post.date);
  document.getElementById('post-readtime').textContent = `${post.readTime} min read`;
  document.getElementById('post-author').textContent  = post.author;
  document.getElementById('post-expertise').textContent = post.expertise;
  document.getElementById('post-avatar').textContent  = post.initials;

  // Verified badge
  const verBadge = document.getElementById('post-verified');
  if (post.verified && verBadge) {
    verBadge.classList.remove('hidden');
    verBadge.textContent = `✓ Peer verified · ${post.trustScore}% legit`;
  }

  // Article body
  document.getElementById('post-content').innerHTML = post.content;

  // Tags
  const tagsEl = document.getElementById('post-tags');
  if (tagsEl) {
    tagsEl.innerHTML = post.tags.map(t =>
      `<span class="text-xs font-medium px-3 py-1 rounded-full border" style="background:rgba(74,158,187,0.08);color:#4a9ebb;border-color:rgba(74,158,187,0.2)">${t}</span>`
    ).join('');
  }

  initVoting(post);
  initBookmarkPost(post.id);
  initComments(post.id);
}

function initVoting(post) {
  const votes    = getVotes(post.id);
  const upBtn    = document.getElementById('upvote-btn');
  const vouchBtn = document.getElementById('vouch-btn');
  const upCount  = document.getElementById('upvote-count');
  const vCount   = document.getElementById('vouch-count');

  function refresh() {
    const v = getVotes(post.id);
    upCount.textContent  = post.upvotes  + (v.upvoted  ? 1 : 0);
    vCount.textContent   = post.vouches  + (v.vouched  ? 1 : 0);
    upBtn.classList.toggle('voted', !!v.upvoted);
    vouchBtn.classList.toggle('voted', !!v.vouched);
  }

  upBtn?.addEventListener('click', () => {
    const v = getVotes(post.id);
    v.upvoted = !v.upvoted;
    setVotes(post.id, v);
    refresh();
    showToast(v.upvoted ? 'Upvoted!' : 'Upvote removed');
  });

  vouchBtn?.addEventListener('click', () => {
    const v = getVotes(post.id);
    v.vouched = !v.vouched;
    setVotes(post.id, v);
    refresh();
    showToast(v.vouched ? 'You vouched for this post' : 'Vouch removed');
  });

  refresh();
}

function initBookmarkPost(id) {
  const btn   = document.getElementById('bookmark-btn');
  const label = document.getElementById('bookmark-label');
  if (!btn) return;

  function refresh() {
    const bm = isBookmarked(id);
    btn.classList.toggle('bookmarked', bm);
    if (label) label.textContent = bm ? 'Saved' : 'Save';
  }

  btn.addEventListener('click', () => {
    toggleBookmark(id);
    refresh();
    showToast(isBookmarked(id) ? 'Saved to bookmarks' : 'Removed from bookmarks');
  });

  refresh();
}

function initComments(id) {
  const form     = document.getElementById('comment-form');
  const listEl   = document.getElementById('comments-list');
  const countEl  = document.getElementById('comment-count');

  function getComments() {
    try { return JSON.parse(localStorage.getItem(`ws-comments-${id}`) || '[]'); } catch { return []; }
  }

  function saveComments(arr) {
    localStorage.setItem(`ws-comments-${id}`, JSON.stringify(arr));
  }

  function renderComments() {
    const comments = getComments();
    if (countEl) countEl.textContent = comments.length ? `(${comments.length})` : '';
    if (!listEl) return;

    if (comments.length === 0) {
      listEl.innerHTML = `<p class="text-sm text-[#555] dark:text-[#888] py-4">No comments yet — be the first to start the discussion.</p>`;
      return;
    }

    listEl.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-7 h-7 rounded-full bg-black/[0.1] dark:bg-white/[0.1] flex items-center justify-center
                      text-[0.6rem] font-bold text-black dark:text-white">${c.initials}</div>
          <span class="text-sm font-semibold text-black dark:text-white">${escapeHTML(c.name)}</span>
          <span class="text-xs text-[#555] dark:text-[#888] ml-auto">${formatDate(c.date)}</span>
        </div>
        <p class="text-sm text-[#555] dark:text-[#888] leading-relaxed">${escapeHTML(c.text)}</p>
      </div>`
    ).join('');
  }

  form?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();
    if (!name || !text) return;

    const comments = getComments();
    comments.push({
      name,
      text,
      initials: name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
      date: new Date().toISOString().split('T')[0]
    });
    saveComments(comments);
    form.reset();
    renderComments();
    showToast('Comment posted!');
  });

  renderComments();
}

function escapeHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ===== SHARE SPACE DATA =====

const SHARES_KEY = 'ws-shares';

const SHARES_SEED = [
  {
    id: 'ss-1',
    content: 'https://paulgraham.com/greatwork.html',
    tags: ['writing', 'advice', 'essays'],
    sharer: 'Marcus Webb',
    sharerInitials: 'MW',
    timestamp: '2026-04-12T06:15:00',
    coSharers: 3
  },
  {
    id: 'ss-2',
    content: 'The best productivity system is the one you actually use. Switched from Notion to a plain text file and never looked back.',
    tags: ['productivity', 'tools'],
    sharer: 'Sarah Chen',
    sharerInitials: 'SC',
    timestamp: '2026-04-11T22:40:00',
    coSharers: 0
  },
  {
    id: 'ss-3',
    content: 'https://github.com/sindresorhus/awesome',
    tags: ['dev', 'resources', 'lists'],
    sharer: 'Diego Fernandez',
    sharerInitials: 'DF',
    timestamp: '2026-04-11T18:20:00',
    coSharers: 7
  },
  {
    id: 'ss-4',
    content: 'https://www.youtube.com/watch?v=arj7oStGLkU',
    tags: ['talk', 'design', 'alan-kay'],
    sharer: 'Nadia Volkov',
    sharerInitials: 'NV',
    timestamp: '2026-04-11T14:00:00',
    coSharers: 1
  },
  {
    id: 'ss-5',
    content: 'Asking "why?" five times is not a technique — it\'s a mindset. Most engineers stop at the first answer because it\'s the comfortable one.',
    tags: ['engineering', 'thinking'],
    sharer: 'James O\'Brien',
    sharerInitials: 'JO',
    timestamp: '2026-04-10T09:30:00',
    coSharers: 0
  },
  {
    id: 'ss-6',
    content: 'https://fs.blog/mental-models/',
    tags: ['thinking', 'models', 'learning'],
    sharer: 'Priya Rajan',
    sharerInitials: 'PR',
    timestamp: '2026-04-10T07:15:00',
    coSharers: 5
  },
  {
    id: 'ss-7',
    content: 'Sleep is the single highest-leverage investment in cognitive performance. No supplement, diet, or workflow hack comes close.',
    tags: ['health', 'performance', 'habits'],
    sharer: 'Marcus Webb',
    sharerInitials: 'MW',
    timestamp: '2026-04-09T20:00:00',
    coSharers: 0
  },
  {
    id: 'ss-8',
    content: 'https://www.swyx.io/learn-in-public',
    tags: ['learning', 'career', 'advice'],
    sharer: 'Sarah Chen',
    sharerInitials: 'SC',
    timestamp: '2026-04-09T11:45:00',
    coSharers: 4
  }
];

function getShares() {
  try {
    const stored = localStorage.getItem(SHARES_KEY);
    return stored ? JSON.parse(stored) : [...SHARES_SEED];
  } catch { return [...SHARES_SEED]; }
}

function saveShares(arr) {
  localStorage.setItem(SHARES_KEY, JSON.stringify(arr));
}

// ===== SHARE SPACE HELPERS =====

function isURL(str) {
  return /^(https?:\/\/|www\.)/i.test(str.trim());
}

function extractDomain(url) {
  try {
    const u = new URL(url.startsWith('http') ? url : 'https://' + url);
    return u.hostname.replace(/^www\./, '');
  } catch { return url; }
}

function timeAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins  < 1)  return 'just now';
  if (mins  < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days  < 7)  return `${days}d ago`;
  return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function shareCardHTML(share, activeTag) {
  const url      = isURL(share.content);
  const domain   = url ? extractDomain(share.content) : null;
  const faviconURL = domain
    ? `https://www.google.com/s2/favicons?sz=16&domain=${domain}`
    : null;

  const sourceBadge = url ? `
    <div class="flex items-center gap-1.5 mb-3">
      <img src="${faviconURL}" width="14" height="14" alt="" class="rounded-sm opacity-70" onerror="this.style.display='none'" />
      <span class="text-[0.6rem] font-semibold tracking-wide text-[#787068]">${domain}</span>
    </div>` : '';

  const contentHTML = url
    ? `<a href="${share.content}" target="_blank" rel="noopener"
          class="text-sm font-medium text-[#1c1a16] dark:text-[#f0ede8] hover:text-[#4a9ebb] dark:hover:text-[#4a9ebb] transition-colors leading-snug break-all"
          onclick="event.stopPropagation()">${share.content}</a>`
    : `<p class="text-sm text-[#1c1a16] dark:text-[#f0ede8] leading-relaxed"
          style="display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden">${escapeHTML(share.content)}</p>`;

  const tagsHTML = share.tags.length ? `
    <div class="flex flex-wrap gap-1.5 mt-3">
      ${share.tags.map(t => `
        <button class="ss-tag-pill text-[0.6rem] font-semibold px-2 py-0.5 rounded-full transition-colors ${t === activeTag ? 'bg-[rgba(74,158,187,0.18)] text-[#4a9ebb]' : 'bg-[rgba(74,158,187,0.07)] text-[#787068] hover:text-[#4a9ebb] hover:bg-[rgba(74,158,187,0.14)]'}"
               data-tag="${t}">${t}</button>
      `).join('')}
    </div>` : '';

  const coShareBadge = share.coSharers > 0 ? `
    <span class="flex items-center gap-1 text-[0.6rem] text-[#787068]"
          title="${share.coSharers} other${share.coSharers > 1 ? 's' : ''} shared this">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      ${share.coSharers + 1}
    </span>` : '';

  return `
    <article class="share-card flex flex-col gap-0 p-5 rounded-xl border transition-all duration-200
                    bg-[#e8e5e0] border-black/[0.08] dark:bg-[#1e1e1e] dark:border-[#f0ede8]/[0.08]
                    hover:border-[#4a9ebb]/[0.25] hover:-translate-y-0.5"
             data-id="${share.id}">
      ${sourceBadge}
      ${contentHTML}
      ${tagsHTML}
      <div class="flex items-center gap-2 mt-4 pt-3.5 border-t border-black/[0.06] dark:border-[#f0ede8]/[0.05]">
        <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[0.6rem] font-bold
                    bg-[#1c1a16]/[0.08] text-[#1c1a16] dark:bg-[#f0ede8]/[0.08] dark:text-[#f0ede8]">${share.sharerInitials}</div>
        <span class="text-xs text-[#787068] truncate">${share.sharer}</span>
        <span class="text-xs text-[#787068] ml-auto shrink-0">${timeAgo(share.timestamp)}</span>
        ${coShareBadge}
      </div>
    </article>`;
}

// ===== SHARE SPACE PAGE =====

function initShareSpace() {
  if (!document.getElementById('share-feed')) return;

  // seed to localStorage if first visit
  if (!localStorage.getItem(SHARES_KEY)) {
    saveShares([...SHARES_SEED]);
  }

  let activeTag = null;

  // ── Tag pill input system ──
  let currentTags = [];

  function renderFormPills() {
    const display = document.getElementById('tag-pills-display');
    const input   = document.getElementById('tag-input');
    if (!display) return;
    display.innerHTML = currentTags.map(t => `
      <span class="inline-flex items-center gap-1 text-[0.65rem] font-semibold px-2 py-0.5 rounded-full"
            style="background:rgba(74,158,187,0.14);color:#4a9ebb">
        ${t}
        <button type="button" data-remove="${t}"
                class="hover:opacity-70 transition-opacity leading-none text-[0.7rem]">&times;</button>
      </span>`).join('');

    // wire remove buttons
    display.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentTags = currentTags.filter(x => x !== btn.dataset.remove);
        renderFormPills();
      });
    });

    if (input) input.placeholder = currentTags.length ? '' : 'add tags';
  }

  function addFormTag(raw) {
    const tag = raw.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (!tag || currentTags.includes(tag) || currentTags.length >= 6) return;
    currentTags.push(tag);
    renderFormPills();
  }

  const tagInput = document.getElementById('tag-input');

  function commitTagInput() {
    if (tagInput?.value.trim()) {
      addFormTag(tagInput.value);
      tagInput.value = '';
      tagInput.focus();
    }
  }

  document.getElementById('add-tag-btn')?.addEventListener('click', commitTagInput);

  tagInput?.addEventListener('keydown', e => {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      addFormTag(tagInput.value.replace(',', ''));
      tagInput.value = '';
    } else if (e.key === 'Backspace' && !tagInput.value && currentTags.length) {
      currentTags.pop();
      renderFormPills();
    }
  });
  tagInput?.addEventListener('blur', () => {
    if (tagInput.value.trim()) commitTagInput();
  });

  // ── Feed render ──
  function renderFeed(filter) {
    const feedEl   = document.getElementById('share-feed');
    const emptyEl  = document.getElementById('share-empty');
    const countEl  = document.getElementById('share-count');
    const shares   = getShares();
    const filtered = filter
      ? shares.filter(s => s.tags.includes(filter))
      : shares;

    if (countEl) countEl.textContent = `${filtered.length} share${filtered.length !== 1 ? 's' : ''}`;

    if (!filtered.length) {
      if (feedEl)  feedEl.innerHTML  = '';
      if (emptyEl) emptyEl.classList.remove('hidden');
      return;
    }
    if (emptyEl) emptyEl.classList.add('hidden');
    feedEl.innerHTML = filtered.map(s => shareCardHTML(s, filter)).join('');

    // tag pill clicks inside feed
    feedEl.querySelectorAll('.ss-tag-pill').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const t = btn.dataset.tag;
        activeTag = activeTag === t ? null : t;
        renderFeed(activeTag);
        renderSidebarFilters();
      });
    });
  }

  // ── Sidebar tag filters ──
  function allTags() {
    const shares = getShares();
    const freq   = {};
    shares.forEach(s => s.tags.forEach(t => { freq[t] = (freq[t] || 0) + 1; }));
    return Object.entries(freq).sort((a, b) => b[1] - a[1]);
  }

  function renderSidebarFilters() {
    const sidebar  = document.getElementById('sidebar-tag-filters');
    const clearBtn = document.getElementById('clear-tag-filter');
    if (!sidebar) return;

    sidebar.innerHTML = allTags().map(([t, count]) => `
      <button class="ss-sidebar-tag flex items-center justify-between gap-2 w-full text-left px-3 py-2 rounded-lg text-xs transition-colors
                     ${t === activeTag
                       ? 'font-semibold text-[#4a9ebb] bg-[rgba(74,158,187,0.1)]'
                       : 'text-[#787068] hover:text-[#4a9ebb] hover:bg-[rgba(74,158,187,0.06)]'}"
              data-tag="${t}">
        <span>${t}</span>
        <span class="text-[0.6rem] tabular-nums opacity-60">${count}</span>
      </button>`).join('');

    if (clearBtn) clearBtn.classList.toggle('hidden', !activeTag);

    sidebar.querySelectorAll('.ss-sidebar-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.tag;
        activeTag = activeTag === t ? null : t;
        renderFeed(activeTag);
        renderSidebarFilters();
      });
    });
  }

  document.getElementById('clear-tag-filter')?.addEventListener('click', () => {
    activeTag = null;
    renderFeed(null);
    renderSidebarFilters();
  });

  // ── Form submit ──
  document.getElementById('share-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const input   = document.getElementById('share-input');
    const content = input?.value.trim();
    if (!content) return;

    // add stray tag from input field
    if (tagInput?.value.trim()) {
      addFormTag(tagInput.value);
      tagInput.value = '';
    }

    const newShare = {
      id:             `ss-${Date.now()}`,
      content,
      tags:           [...currentTags],
      sharer:         'you',
      sharerInitials: 'YO',
      timestamp:      new Date().toISOString(),
      coSharers:      0
    };

    const shares = getShares();
    // check if same URL already shared → bump coSharers
    if (isURL(content)) {
      const existing = shares.find(s => s.content === content);
      if (existing) existing.coSharers++;
    }
    shares.unshift(newShare);
    saveShares(shares);

    // reset form
    input.value   = '';
    currentTags   = [];
    renderFormPills();

    activeTag = null;
    renderFeed(null);
    renderSidebarFilters();
    showToast('shared!');
  });

  // ── Init ──
  renderFeed(null);
  renderSidebarFilters();
}

// ===== BOOT =====

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initReadingMode();
  initMobileNav();
  initScrollReveal();
  initIndexPage();
  initBrowsePage();
  initPostPage();
  initShareSpace();
});
