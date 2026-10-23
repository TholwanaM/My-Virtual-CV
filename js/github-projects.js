const GITHUB_USER = "TholwanaM";
const EXCLUDED_REPOS = [GITHUB_USER.toLowerCase(), "ikageng-serenity-centre"];

// Repos owned by other accounts/orgs, with optional custom description and tags
const EXTRA_REPOS = [
    {
        full_name: "NWU-BridgeTech/NWU-BridgeTech",
        title: "BridgeTech",
        description: "BridgeTech team project.",
        tags: ["JavaScript", "C#", "CSS"]
    }
];

const projectsGrid = document.getElementById("projectsGrid");

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
}

function formatName(name) {
    return name.replace(/[-_]+/g, " ");
}

function buildCard(repo, index) {
    const card = el("article", "project-card" + (index % 2 ? " reverse" : ""));

    const imageWrap = el("div", "project-image");
    const img = document.createElement("img");
    img.src = `https://opengraph.githubassets.com/1/${repo.full_name}`;
    img.alt = repo.name;
    img.loading = "lazy";
    imageWrap.appendChild(img);

    const content = el("div", "project-content");
    content.appendChild(el("span", "project-number", String(index + 1).padStart(2, "0")));
    content.appendChild(el("h3", "", repo.title || formatName(repo.name)));
    content.appendChild(el("p", "", repo.description || "No description provided yet."));

    const tags = el("div", "project-tags");
    const labels = repo.tags || [repo.language, ...(repo.topics || [])].filter(Boolean);
    labels.forEach(label => tags.appendChild(el("span", "", label)));
    content.appendChild(tags);

    const buttons = el("div", "project-buttons");
    const github = el("a", "primary-btn magnetic", "GitHub");
    github.href = repo.html_url;
    github.target = "_blank";
    github.rel = "noopener";
    buttons.appendChild(github);
    if (repo.homepage) {
        const live = el("a", "secondary-btn magnetic", "Live Demo");
        live.href = /^https?:/i.test(repo.homepage) ? repo.homepage : `https://${repo.homepage}`;
        live.target = "_blank";
        live.rel = "noopener";
        buttons.appendChild(live);
    }
    content.appendChild(buttons);

    card.append(imageWrap, content);
    return card;
}

async function loadProjects() {
    if (!projectsGrid) return;
    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`,
            { headers: { Accept: "application/vnd.github+json" } }
        );
        if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);

        const own = (await response.json()).filter(
            repo => !repo.fork && !repo.archived && !EXCLUDED_REPOS.includes(repo.name.toLowerCase())
        );

        const extras = (await Promise.all(EXTRA_REPOS.map(async extra => {
            try {
                const res = await fetch(`https://api.github.com/repos/${extra.full_name}`);
                if (!res.ok) return null;
                const data = await res.json();
                return { ...data, ...extra, description: extra.description || data.description };
            } catch {
                return null;
            }
        }))).filter(Boolean);

        const repos = [...extras, ...own];
        if (!repos.length) return;

        projectsGrid.replaceChildren(...repos.map(buildCard));

        if (window.gsap) {
            gsap.from(".project-card", {
                opacity: 0,
                y: 60,
                duration: 0.9,
                stagger: 0.15,
                ease: "power3.out",
                clearProps: "all"
            });
            if (window.ScrollTrigger) ScrollTrigger.refresh();
        }
    } catch (error) {
        console.warn("Could not load GitHub repositories; keeping the static projects.", error);
    }
}

loadProjects();
