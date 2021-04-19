console.log("You opened forms! Injecting script");
let questions = [];
//MathJax-Element-2
let i = 1;

setTimeout(() => {
    while (true) {
        if (!document.getElementById(`MathJax-Element-${i}`)) {
            break;
        }
        questions.push(document.getElementById(`MathJax-Element-${i}`).innerHTML);
        i++;
    }
    console.log(questions)
}, 6000);

let style = document.createElement("style")
style.innerHTML = `
.MathJax{
    user-select: all!important;
}
`;
document.body.appendChild(style)