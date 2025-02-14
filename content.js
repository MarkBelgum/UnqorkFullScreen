const modalContent = document.querySelector(".ngdialog-content");
modalContent.style.width = "100%";
modalContent.style.height = "100%";
modalContent.style.marginLeft = 0;
modalContent.style.marginRight = 0;
modalContent.style.padding = 0;

const dwf = document.querySelector("#diagramDiv");

for (const sibling of dwf.parentNode.children) {
    if (!sibling.classList.contains("manualLayoutContainer") && !sibling.classList.contains("control-label") && !sibling.classList.contains("draggableDW")) {
        sibling.style.height = "100vh";
    }
}