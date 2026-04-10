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

// ===== THEME =====

function initTheme() {
  const saved = localStorage.getItem('ws-theme') || 'dark';
  if (saved === 'light') document.documentElement.classList.add('light');
  updateThemeIcon(saved);

  document.querySelectorAll('#theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      // Apply smooth transition
      document.documentElement.classList.add('theme-transition');
      setTimeout(() => document.documentElement.classList.remove('theme-transition'), 300);

      const isLight = document.documentElement.classList.toggle('light');
      const mode = isLight ? 'light' : 'dark';
      localStorage.setItem('ws-theme', mode);
      updateThemeIcon(mode);
    });
  });
}

function updateThemeIcon(mode) {
  document.querySelectorAll('#icon-sun').forEach(el => el.classList.toggle('hidden', mode === 'light'));
  document.querySelectorAll('#icon-moon').forEach(el => el.classList.toggle('hidden', mode === 'dark'));
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
    ? `<span style="background:rgba(34,197,94,0.12);color:#22c55e" class="inline-flex items-center gap-1 text-[0.65rem] font-semibold px-2 py-0.5 rounded-full ml-auto">&#10003; ${post.trustScore}%</span>`
    : `<span class="text-[0.65rem] text-lo ml-auto">${post.trustScore}%</span>`;

  return `
    <article class="post-card flex flex-col gap-3 p-5 bg-surface rounded-xl border border-hi/[0.08]
                    hover:border-hi/[0.22] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
             data-id="${post.id}">
      <div class="flex items-start justify-between gap-2">
        <span class="text-[0.65rem] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full
                     bg-hi/[0.06] text-lo">${post.topic}</span>
        <button class="bookmark-btn ${bookmarked} shrink-0" data-id="${post.id}" aria-label="Bookmark">
          ${BOOKMARK_ICON}
        </button>
      </div>
      <h3 class="text-[0.9rem] font-bold text-hi leading-snug">${post.title}</h3>
      <p class="text-sm text-lo leading-relaxed"
         style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
        ${post.excerpt}
      </p>
      <div class="flex items-center gap-2 mt-auto pt-3 border-t border-hi/[0.06]">
        <div class="w-6 h-6 rounded-full bg-hi/[0.1] flex items-center justify-center
                    text-[0.6rem] font-bold text-hi shrink-0">${post.initials}</div>
        <span class="text-xs text-lo truncate">${post.author}</span>
        <span class="text-xs text-lo ml-auto shrink-0">${post.readTime} min</span>
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

// ===== POST PAGE =====

function initPostPage() {
  if (!document.getElementById('post-content')) return;

  const id   = new URLSearchParams(window.location.search).get('id');
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    document.getElementById('post-content').innerHTML =
      '<p style="color:rgb(var(--c-lo))">Post not found. <a href="/" style="color:rgb(var(--c-hi));text-decoration:underline">Go back home</a></p>';
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
      `<span class="text-xs font-medium px-3 py-1 rounded-full bg-hi/[0.06] text-lo border border-hi/[0.08]">${t}</span>`
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
      listEl.innerHTML = `<p class="text-sm text-lo py-4">No comments yet — be the first to start the discussion.</p>`;
      return;
    }

    listEl.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div class="flex items-center gap-2 mb-2">
          <div class="w-7 h-7 rounded-full bg-hi/[0.1] flex items-center justify-center
                      text-[0.6rem] font-bold text-hi">${c.initials}</div>
          <span class="text-sm font-semibold text-hi">${escapeHTML(c.name)}</span>
          <span class="text-xs text-lo ml-auto">${formatDate(c.date)}</span>
        </div>
        <p class="text-sm text-lo leading-relaxed">${escapeHTML(c.text)}</p>
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

// ===== BOOT =====

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initScrollReveal();
  initIndexPage();
  initPostPage();
});
