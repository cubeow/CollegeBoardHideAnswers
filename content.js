
setTimeout(() => {
    const elements = document.getElementsByClassName("response-analysis-wrapper");
    Array.from(elements).forEach(el => el.remove());

    const elements2 = document.getElementsByClassName("AccessibilityWrapper mcq-option --correct");
    Array.from(elements2).forEach(el => {
        el.className = "AccessibilityWrapper mcq-option";
    });

    const elements3 = document.getElementsByClassName("letter --chosen");
    Array.from(elements3).forEach(el => {
        el.className = "letter";
    });

    const elements4 = document.getElementsByClassName("v-mark-big");
    Array.from(elements4).forEach(el => el.remove());
    
}, 5000); // 5000 milliseconds = 5 seconds