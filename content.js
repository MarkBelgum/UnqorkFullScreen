function fullscreenDWF() {
    const modalContent = document.querySelector(".ngdialog-content");
    if (modalContent) {
        modalContent.style.width = "100%";
        modalContent.style.height = "100%";
        modalContent.style.marginLeft = 0;
        modalContent.style.marginRight = 0;
        modalContent.style.padding = 0;
    }

    const modalContentUDesigner = document.querySelector("div.UDView-root.UD_PageGrid_Aside_Content.unq-udview-vertical:not(.-xsmall");
    if (modalContentUDesigner) {
        if (modalContentUDesigner.getAttribute("data-selector") != "vwModuleBuilderRight-vwAsideRight-udView") {
            modalContentUDesigner.style.minWidth = "100vw";
        }
    }

    const dwf = document.querySelector("#diagramDiv");
    if (!dwf) return;

    for (const sibling of dwf.parentNode.children) {
        if (!sibling.classList.contains("manualLayoutContainer") &&
            !sibling.classList.contains("control-label") &&
            !sibling.classList.contains("draggableDW")) {
            sibling.style.height = "100vh";
        }
    }
}

// **Monitor the document for modal changes**
const observer = new MutationObserver(() => {
    const modal = document.querySelector(".ngdialog-content");
    if (modal) {
        fullscreenDWF(); // Apply fullscreen when modal appears
    }
});

// Start observing the document for added/removed nodes
observer.observe(document.body, { childList: true, subtree: true });

console.log("FullscreenDWF extension is monitoring modals...");
