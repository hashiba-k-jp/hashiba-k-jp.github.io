const FLAG_PAIR = document.createElement("div");
FLAG_PAIR.classList.add("col-xxl-2", "col-lg-3", "col-md-4", "col-sm-6", "col-xs-6", "mt-1", "mt-sm-0");
const FLAG_ROW = document.createElement("div");
FLAG_ROW.classList.add("area", "row", "justify-content-center");
const FLAG_BADGE = document.createElement("div");
FLAG_BADGE.classList.add("d-flex", "flag");

fetch('./contents/flag.json')
    .then(response => response.json())
    .then(data => {
        for(const element of data) {
            const newFlagPair = FLAG_PAIR.cloneNode(true);
            const newFlagRow  = FLAG_ROW.cloneNode(true);

            const newFlagBadgeP = FLAG_BADGE.cloneNode(true);
            const newFlagBadgeC = FLAG_BADGE.cloneNode(true);

            for(const part of element.p){
                newFlagBadgeP.append(createFlagElement(part.color, part.width))
            }
            for(const part of element.c){
                newFlagBadgeC.append(createFlagElement(part.color, part.width))
            }

            newFlagRow.append(newFlagBadgeP);
            newFlagRow.append(newFlagBadgeC);
            newFlagPair.append(newFlagRow);
            document.getElementById("flags").append(newFlagPair);
        }

        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            .flag {
                padding: 0px;
                margin: 0.15em 0.1em;
                height: 1.2em;
                width: 12em;
            }
        `;
        document.querySelector("head").append(style);
    })
    .catch(error => console.error('Failed to read json file:', error));


function createFlagElement(color, width){
    const flagElement = document.createElement("div");
    flagElement.style.backgroundColor = color;
    flagElement.style.width = width;
    flagElement.classList = ["flag-element"];
    return flagElement;
}
