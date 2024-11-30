// <div class="footer-image d-none d-lg-block">
//
//   <img src="images/layer2_white.svg" class="white_cover" id="layer_2"  alt="" width="1600" height="1600">
//   <img src="images/layer2.svg"  id="layer_2"  alt="" width="1600" height="1600">
//   <div class="layer_2_sate" id="l2_s1">
//     <img src="images/outer-satellite-1.svg" id="" class="l2_img1" alt="" width="400" height="400">
//     <img src="images/outer-satellite-2.svg" id="" class="l2_img2" alt="" width="400" height="400">
//     <img src="images/outer-satellite-3.svg" id="" class="l2_img3" alt="" width="400" height="400">
//   </div>
//   <div class="layer_2_sate" id="l2_s2">
//     <img src="images/outer-satellite-1.svg" id="" class="l2_img1" alt="" width="400" height="400">
//     <img src="images/outer-satellite-2.svg" id="" class="l2_img2" alt="" width="400" height="400">
//     <img src="images/outer-satellite-3.svg" id="" class="l2_img3" alt="" width="400" height="400">
//   </div>
//   <div class="layer_2_sate" id="l2_s3">
//     <img src="images/outer-satellite-1.svg" id="" class="l2_img1" alt="" width="400" height="400">
//     <img src="images/outer-satellite-2.svg" id="" class="l2_img2" alt="" width="400" height="400">
//     <img src="images/outer-satellite-3.svg" id="" class="l2_img3" alt="" width="400" height="400">
//   </div>
//   <img src="images/white-2.svg" class="white_cover" id="l2_white" alt="" width="1600" height="1600">
//
//   <div class="layer_1_sate" id="l1_s1">
//     <img src="images/l1_sate.svg" id="" class="l1_img" alt="" width="150" height="150">
//   </div>
//   <div class="layer_1_sate" id="l1_s2">
//     <img src="images/l1_sate.svg" id="" class="l1_img" alt="" width="150" height="150">
//   </div>
//   <div class="layer_1_sate" id="l1_s3">
//     <img src="images/l1_sate.svg" id="" class="l1_img" alt="" width="150" height="150">
//   </div>
//   <img src="images/layer1.svg"   id="layer_1"   alt="" width="1600" height="1600">
//   <img src="images/pink.svg"   id="l0_pink"  alt="" width="1600" height="1600">
//   <img src="images/yellow.svg" id="l0_yellow" alt="" width="1600" height="1600">
//   <img src="images/orange_white.svg" class="white_cover" id="l0_orange_white" alt="" width="1600" height="1600">
//   <img src="images/orange.svg" id="l0_orange" alt="" width="1600" height="1600">
//   <img src="images/white.svg" class="white_cover" id="white"  alt="" width="2500" height="2500">
//
// </div>
function main(){
    const masterDiv = document.createElement("div");
    masterDiv.classList.add("footer-image");
    masterDiv.setAttribute("user-select", "none");

    //   <img src="images/layer2_white.svg" class="white_cover" id="layer_2"  alt="" width="1600" height="1600">
    masterDiv.append(createImg("/images/layer2_white.svg", ["white_cover"], "layer_2", 1600, 1600));

    //   <img src="images/layer2.svg"  id="layer_2"  alt="" width="1600" height="1600">
    masterDiv.append(createImg("/images/layer2.svg", [], "layer_2", 1600, 1600));

    //   <div class="layer_2_sate" id="l2_s1">
    //     <img src="images/outer-satellite-1.svg" id="" class="l2_img1" alt="" width="400" height="400">
    //     <img src="images/outer-satellite-2.svg" id="" class="l2_img2" alt="" width="400" height="400">
    //     <img src="images/outer-satellite-3.svg" id="" class="l2_img3" alt="" width="400" height="400">
    //   </div>
    //   <div class="layer_2_sate" id="l2_s2">
    //     <img src="images/outer-satellite-1.svg" id="" class="l2_img1" alt="" width="400" height="400">
    //     <img src="images/outer-satellite-2.svg" id="" class="l2_img2" alt="" width="400" height="400">
    //     <img src="images/outer-satellite-3.svg" id="" class="l2_img3" alt="" width="400" height="400">
    //   </div>
    //   <div class="layer_2_sate" id="l2_s3">
    //     <img src="images/outer-satellite-1.svg" id="" class="l2_img1" alt="" width="400" height="400">
    //     <img src="images/outer-satellite-2.svg" id="" class="l2_img2" alt="" width="400" height="400">
    //     <img src="images/outer-satellite-3.svg" id="" class="l2_img3" alt="" width="400" height="400">
    //   </div>
    const l2_sate = document.createElement("div");
    l2_sate.append(createImg("/images/outer-satellite-1.svg", ["l2_img1"], null, 400, 400));
    l2_sate.append(createImg("/images/outer-satellite-2.svg", ["l2_img2"], null, 400, 400));
    l2_sate.append(createImg("/images/outer-satellite-3.svg", ["l2_img3"], null, 400, 400));
    masterDiv.append(cloneNodeClassId(l2_sate, ["layer_2_sate"], "l2_s1"));
    masterDiv.append(cloneNodeClassId(l2_sate, ["layer_2_sate"], "l2_s2"));
    masterDiv.append(cloneNodeClassId(l2_sate, ["layer_2_sate"], "l2_s3"));

    //   <img src="images/white-2.svg" class="white_cover" id="l2_white" alt="" width="1600" height="1600">
    masterDiv.append(createImg("/images/white-2.svg", ["white_cover"], "l2_white", 1600, 1600));

    //   <div class="layer_1_sate" id="l1_s1">
    //     <img src="images/l1_sate.svg" id="" class="l1_img" alt="" width="150" height="150">
    //   </div>
    //   <div class="layer_1_sate" id="l1_s2">
    //     <img src="images/l1_sate.svg" id="" class="l1_img" alt="" width="150" height="150">
    //   </div>
    //   <div class="layer_1_sate" id="l1_s3">
    //     <img src="images/l1_sate.svg" id="" class="l1_img" alt="" width="150" height="150">
    //   </div>
    const l1_sate = document.createElement("div");
    l1_sate.append(createImg("/images/l1_sate.svg", ["l1_img"], null, 150, 150));
    masterDiv.append(cloneNodeClassId(l1_sate, ["layer_1_sate"], "l1_s1"));
    masterDiv.append(cloneNodeClassId(l1_sate, ["layer_1_sate"], "l1_s2"));
    masterDiv.append(cloneNodeClassId(l1_sate, ["layer_1_sate"], "l1_s3"));

    //   <img src="images/layer1.svg"   id="layer_1"   alt="" width="1600" height="1600">
    masterDiv.append(createImg("/images/layer1.svg", [], "layer_1", 1600, 1600));

    //   <img src="images/pink.svg"   id="l0_pink"  alt="" width="1600" height="1600">
    masterDiv.append(createImg("/images/pink.svg", [], "l0_pink", 1600, 1600));

    //   <img src="images/yellow.svg" id="l0_yellow" alt="" width="1600" height="1600">
    masterDiv.append(createImg("/images/yellow.svg", [], "l0_yellow", 1600, 1600));

    //   <img src="images/orange_white.svg" class="white_cover" id="l0_orange_white" alt="" width="1600" height="1600">
    masterDiv.append(createImg("/images/orange_white.svg", ["white_cover"], "l0_orange_white", 1600, 1600));

    //   <img src="images/orange.svg" id="l0_orange" alt="" width="1600" height="1600">
    masterDiv.append(createImg("/images/orange.svg", [], "l0_orange", 1600, 1600));

    //   <img src="images/white.svg" class="white_cover" id="white"  alt="" width="2500" height="2500">
    masterDiv.append(createImg("/images/white.svg", ["white_cover"], "white", 2500, 2500));


    const main = document.querySelector("main");
    main.append(masterDiv);

    // <link rel="stylesheet" href="./styles/rotation.css" type="text/css">
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles/background.css';
    document.head.appendChild(link);

}

function createImg(src, classes, id, width, height){
    const img = document.createElement("img");
    img.src = src;
    for(item of classes){
        img.classList.add(item);
    }
    img.id = id;
    img.width = width;
    img.height = height;
    return img;
}

function cloneNodeClassId(node, classes, id){
    const newNode = node.cloneNode(true);
    for(item of classes){
        newNode.classList.add(item);
    }
    newNode.id = id;
    return newNode;
}

main()
