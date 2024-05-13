document.addEventListener("DOMContentLoaded", function () {
    const popupTriggers = document.querySelectorAll(".popup-trigger");
    
    popupTriggers.forEach(function (trigger) {
        trigger.addEventListener("mouseover", function () {
            const popup = document.createElement("div");
            trigger.parentNode.appendChild(popup);
            positionPopup(popup, trigger);
            popup.classList.add("active");
        });
        
        trigger.addEventListener("mouseleave", function () {
            const popup = trigger.parentNode.querySelector(".popup");
            if (popup) {
                popup.remove();
            }
        });
    });
    
    function positionPopup(popup, trigger) {
        const triggerRect = trigger.getBoundingClientRect();
        const popupRect = popup.getBoundingClientRect();
        
        const top = triggerRect.top - popupRect.height - 10;
        const left = triggerRect.left + triggerRect.width / 2 - popupRect.width / 2;
        
        popup.style.top = `${top}px`;
        popup.style.left = `${left}px`;
    }
});
