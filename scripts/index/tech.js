const BADGE = document.createElement("span");
BADGE.classList.add("badge", "me-1");
const BADGE_a = document.createElement("a");
BADGE_a.target = "_blank";
BADGE.append(BADGE_a);
const BADGE_icon = document.createElement("i");
BADGE_icon.style.marginRight = "0.2em";
BADGE.prepend(BADGE_icon);

fetch('./contents/tech.json')
    .then(response => response.json())
    .then(data => {
        const parent_div = document.getElementById("tech-events");
        for (const element of data) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("row", "mt-1", "border-orange");

            const date = document.createElement("div");
            date.classList.add("date", "text-start", "text-md-center", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-2", "col-sm-3", "col-xs-3", "px-xl-1", "bg-body-secondary", "text-body-secondary");
            date.innerHTML = `${element.date.year}.${String(element.date.month).padStart(2,'0')}.${String(element.date.day).padStart(2,'0')}`;
            date.style.borderColor = "#FF9300";

            const main = document.createElement("div");
            main.classList.add("main-contents", "text-sm-start", "col-xxl-11", "col-xl-11", "col-lg-10", "col-md-10", "col-sm-9", "col-xs-9");

            const title = document.createElement("span");
            const link = document.createElement("a");
            link.innerHTML = element.title;
            link.classList.add("link-dark", "me-1");

            if(!(element.link == "") && ("link" in element)){
                link.href = element.link;
                link.target = "_blank";
            }else{
                link.tabindex = -1;
                link.style.textDecoration = "none";
            }
            title.append(link);
            title.classList = ["contents-title"];
            main.append(title);

            const br = document.createElement("br");
            br.classList = ["d-md-none"];
            main.append(br);

            for (badge of element.badges){
                const newBadge = BADGE.cloneNode(true);
                newBadge.querySelector("a").innerHTML = badge.name;

                if(!(badge.link == "") && ("link" in badge)){
                    newBadge.querySelector("a").href = badge.link;
                }else{
                    newBadge.querySelector("a").tabindex = -1;
                }

                if("remarks" in badge){
                    if(badge.remarks.text.includes("strikethrough")){
                        newBadge.querySelector("a").classList.add("text-decoration-line-through");
                    }
                }

                switch(badge.theme){
                    case "github":
                        newBadge.classList.add("text-secondary-emphasis", "bg-secondary-subtle");
                        newBadge.querySelector("i").classList.add("bi", "bi-github");
                        main.append(newBadge);
                        break;
                    case "team":
                        newBadge.classList.add("text-info-emphasis", "bg-info-subtle");
                        newBadge.querySelector("i").classList.add("bi", "bi-people");
                        main.append(newBadge);
                        break;
                    case "rank":
                        newBadge.classList.add("text-success-emphasis", "bg-success-subtle");
                        newBadge.querySelector("i").classList.add("bi", "bi-bar-chart-line");
                        main.append(newBadge);
                        break;
                    case "detail":
                        newBadge.classList.add("text-secondary-emphasis", "bg-secondary-subtle");
                        newBadge.querySelector("i").classList.add("bi", "bi-chevron-right");
                        main.append(newBadge);
                        break;
                    case "ex-link":
                        newBadge.classList.add("text-danger-emphasis", "bg-danger-subtle");
                        newBadge.querySelector("i").classList.add("bi", "bi-link-45deg");
                        main.append(newBadge);
                        break;
                    case "award":
                        newBadge.classList.add("text-warning-emphasis", "bg-warning-subtle");
                        newBadge.querySelector("i").classList.add("bi", "bi-award");
                        main.append(newBadge);
                        break;
                    default:
                        newBadge.classList.add("text-bg-light");
                        main.append(newBadge);
                        break;
                }
            }


            newDiv.append(date);
            newDiv.append(main);


            parent_div.append(newDiv);

        }
    })
    .catch(error => console.error('Failed to read json file:', error));


// DATA STRUCTURE
//
// {
//     "date"  : {
//         "year"  :0,
//         "month" :0,
//         "day"   :0
//     },
//     "name"  : "dummy",
//     "link"  : "https://dummy.xxx.yyy.jp",
//     "icons" : [
//         {
//             "theme"     : "dummy",
//             "name"      : "dummy",
//             "link"      : "https://dummy.xx.yy.jp",
//             "remarks"   : []
//         }
//     ]
// }
