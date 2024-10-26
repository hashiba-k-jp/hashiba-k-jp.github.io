
fetch('./contents/edu.json')
    .then(response => response.json())
    .then(data => {
        const parent_div = document.getElementById("edu");
        for (const element of data) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("row", "mt-1");

            const date = document.createElement("div");
            date.classList.add("date", "text-start", "text-md-center", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-2", "col-sm-3", "col-xs-3", "px-xl-1", "bg-body-secondary", "text-body-secondary");
            date.style.borderColor = element.color;
            if(!("enrolled" in element) || !element.enrolled){
                date.innerHTML = `${element.date.year}.${String(element.date.month).padStart(2,'0')}.${String(element.date.day).padStart(2,'0')}`;
            }else{
                date.innerHTML = "";
            }

            const main = document.createElement("div");
            main.classList.add("main-contents", "text-sm-start", "col-xxl-11", "col-xl-11", "col-lg-10", "col-md-10", "col-sm-9", "col-xs-9");

            const title = document.createElement("p");
            title.classList.add("contents-title");
            title.innerHTML = element.title;
            main.append(title);

            for(dept of element.dept){
                main.insertAdjacentHTML("beforeend", `${dept}, `);
            }

            const school = document.createElement("span");
            school.style.fontWeight = 550;
            school.innerHTML = element.school;
            main.append(school);

            newDiv.append(date);
            newDiv.append(main);
            parent_div.append(newDiv);
            // console.log(newDiv);
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
