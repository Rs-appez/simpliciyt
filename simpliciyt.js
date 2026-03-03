function remove_rich_sections() {
    const rich_sections = document.querySelectorAll("ytd-rich-section-renderer");
    rich_sections.forEach((section) => {
        section.remove();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", remove_rich_sections);
} else {
    remove_rich_sections();
}

const observer = new MutationObserver(remove_rich_sections);
observer.observe(document.body, { childList: true, subtree: true });
