function initialize(step) {

    switch (step) {
        case 1:
            document.body.style.backgroundImage = "url(../../assets/images/lixhult/1-11D/1-11D-V16bit.png)";
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_01" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container" id="container07" ondragover="allowDrop(event)"></div><div class="container" id="container08" ondragover="allowDrop(event)"></div><div class="container" id="container09" ondragover="allowDrop(event)"></div><div class="container" id="container10" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container11" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            // <div class="drag_item" id="box_01" draggable="true" ondragstart="drag(event)"></div>
            // <div class="container" id="container02" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container03" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container04" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container05" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container06" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container07" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container08" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container09" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container10" ondragover="allowDrop(event)"></div>
            // <div class="container-trigger" id="container11" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    }

}

function allowDrop(e) {
    e.preventDefault();

    switch (e.target.id) {
        case 'container02':
            document.body.style.backgroundPosition = "0px 10%";
            break;
        case 'container03':
            document.body.style.backgroundPosition = "0px 20%";
            break;
        case 'container04':
            document.body.style.backgroundPosition = "0px 30%";
            break;
        case 'container05':
            document.body.style.backgroundPosition = "0px 40%";
            break;
        case 'container06':
            document.body.style.backgroundPosition = "0px 50%";
            break;
        case 'container07':
            document.body.style.backgroundPosition = "0px 60%";
            break;
        case 'container08':
            document.body.style.backgroundPosition = "0px 70%";
            break;
        case 'container09':
            document.body.style.backgroundPosition = "0px 80%";
            break;
        case 'container10':
            document.body.style.backgroundPosition = "0px 90%";
            break;
        case 'container11':
            document.body.style.backgroundPosition = "0px 100%";
            break;
        default:
            document.body.style.backgroundPosition = "0px 0px";
    }

    // Global settings for the button
    document.getElementById(e.target.id).style.backgroundColor = "rgba(0, 0, 0, 0.1)";

    // Global settings for the images
    document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    // CHANGES THE CONTAINER BOX
    data_color = '40px';
}
