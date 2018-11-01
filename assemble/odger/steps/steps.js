function initialize(step) {

    switch (step) {
        case 1:
            document.body.style.backgroundImage = 'url("../../assets/images/odger/odger_step_01_10.jpg")';
            root.style.setProperty('--odger-image-current', 'url("../../assets/images/odger/odger_step_01_10.jpg")');
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_01" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container" id="container07" ondragover="allowDrop(event)"></div><div class="container" id="container08" ondragover="allowDrop(event)"></div><div class="container" id="container09" ondragover="allowDrop(event)"></div><div class="container" id="container10" ondragover="allowDrop(event)"></div><div class="container" id="container11" ondragover="allowDrop(event)"></div><div class="container" id="container12" ondragover="allowDrop(event)"></div><div class="container" id="container13" ondragover="allowDrop(event)"></div><div class="container" id="container14" ondragover="allowDrop(event)"></div><div class="container" id="container15" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container16" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';

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
            // <div class="container" id="container11" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container12" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container13" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container14" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container15" ondragover="allowDrop(event)"></div>
            // <div class="container" id="container16" ondragover="allowDrop(event)"></div>
            // <div class="container-trigger" id="container17" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            break;
    }
    console.log("Web App ready");
}

function updateSteps(step) {
    let url;
    switch (step) {
        case 2:
            url = 'url("../../assets/images/odger/odger_step_02_10.jpg")';
            // UPDATING THE IMAGE FOR THE BLUR EFFECT
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_02" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container" id="container07" ondragover="allowDrop(event)"></div><div class="container" id="container08" ondragover="allowDrop(event)"></div><div class="container" id="container09" ondragover="allowDrop(event)"></div><div class="container" id="container10" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container11" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 3:
            url = 'url("../../assets/images/odger/odger_step_03_10.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_03" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container" id="container07" ondragover="allowDrop(event)"></div><div class="container" id="container08" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container09" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 4:
            url = 'url("../../assets/images/odger/odger_step_04_10.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_04" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container" id="container07" ondragover="allowDrop(event)"></div><div class="container" id="container08" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container09" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 5:
            url = 'url("../../assets/images/odger/odger_step_05_10.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_05" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container05" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 6:
            url = 'url("../../assets/images/odger/odger_step_06_10.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_06" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container07" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        default:

    }
    document.body.style.backgroundImage = url;
    root.style.setProperty('--odger-image-current', url);
}

function allowDrop(e) {
    e.preventDefault();
    let position;

    switch (step) {
        case 1:
            switch (e.target.id) {
                case 'container02':
                    position = '0px 5.55555556%';
                    break;
                case 'container03':
                    position = '0px 11.1111111%';
                    break;
                case 'container04':
                    position = "0px 16.6666667%";
                    break;
                case 'container05':
                    position = "0px 22.2222222%";
                    break;
                case 'container06':
                    position = "0px 27.7777778%";
                    break;
                case 'container07':
                    position = "0px 33.3333333%";
                    break;
                case 'container08':
                    position = "0px 38.8888889%";
                    break;
                case 'container09':
                    position = "0px 44.4444444%";
                    break;
                case 'container10':
                    position = "0px 50%";
                    break;
                case 'container11':
                    position = "0px 55.5555556%";
                    break;
                case 'container12':
                    position = "0px 61.1111111%";
                    break;
                case 'container13':
                    position = "0px 66.6666667%";
                    break;
                case 'container14':
                    position = "0px 72.2222222%";
                    break;
                case 'container15':
                    position = "0px 77.7777778%";
                    break;
                case 'container16':
                    position = "0px 83.3333333%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 2:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 7.69%";
                    break;
                case 'container03':
                    position = "0px 15.38%";
                    break;
                case 'container04':
                    position = "0px 23.07%";
                    break;
                case 'container05':
                    position = "0px 30.76%";
                    break;
                case 'container06':
                    position = "0px 38.46%";
                    break;
                case 'container07':
                    position = "0px 46.15%";
                    break;
                case 'container08':
                    position = "0px 53.84%";
                    break;
                case 'container09':
                    position = "0px 61.53%";
                    break;
                case 'container10':
                    position = "0px 69.23%";
                    break;
                case 'container11':
                    position = "0px 76.92%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 3:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 4.54%";
                    break;
                case 'container03':
                    position = "0px 9.09%";
                    break;
                case 'container04':
                    position = "0px 13.63%";
                    break;
                case 'container05':
                    position = "0px 18.18%";
                    break;
                case 'container06':
                    position = "0px 22.72%";
                    break;
                case 'container07':
                    position = "0px 27.27%";
                    break;
                case 'container08':
                    position = "0px 31.81%";
                    break;
                case 'container09':
                    position = "0px 36.36%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 4:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 7.69%";
                    break;
                case 'container03':
                    position = "0px 15.38%";
                    break;
                case 'container04':
                    position = "0px 23.07%";
                    break;
                case 'container05':
                    position = "0px 30.76%";
                    break;
                case 'container06':
                    position = "0px 38.46%";
                    break;
                case 'container07':
                    position = "0px 46.15%";
                    break;
                case 'container08':
                    position = "0px 53.84%";
                    break;
                case 'container09':
                    position = "0px 61.53%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 5:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 9.09%";
                    break;
                case 'container03':
                    position = "0px 18.18%";
                    break;
                case 'container04':
                    position = "0px 27.27%";
                    break;
                case 'container05':
                    position = "0px 36.36%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 6:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 5.55%";
                    break;
                case 'container03':
                    position = "0px 11.11%";
                    break;
                case 'container04':
                    position = "0px 16.66%";
                    break;
                case 'container05':
                    position = "0px 22.22%";
                    break;
                case 'container06':
                    position = "0px 27.77%";
                    break;
                case 'container07':
                    position = "0px 33.33%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
    }
    root.style.setProperty('--odger-image-position', position);

    // Global settings for the button
    document.getElementById(e.target.id).style.backgroundColor = "rgba(0, 0, 0, 0.1)";

    // Global settings for the images
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";

    // CHANGES THE CONTAINER BOX
    data_color = '40px';
}

function autoAnimation(data) {
    let backgroundGif;
    // let currentBackgroundPosition;

    switch (data) {
        case 'box_01':
            backgroundGif = 'background-gif-1';
            // currentBackgroundPosition = "21%";
            break;
        case 'box_02':
            backgroundGif = 'background-gif-2';
            // currentBackgroundPosition = "34%";
            break;
        case 'box_03':
            backgroundGif = 'background-gif-3';
            // currentBackgroundPosition = "34%";
            break;
        case 'box_04':
            backgroundGif = 'background-gif-4';
            // currentBackgroundPosition = "34%";
            break;
        case 'box_05':
            backgroundGif = 'background-gif-5';
            // currentBackgroundPosition = "34%";
            break;
        case 'box_06':
            backgroundGif = 'background-gif-6';
            // currentBackgroundPosition = "34%";
            break;
    }

    // SET BACKGROUND IMAGE FOR ANIMATION
    document.body.classList.add(backgroundGif); // Activate Animation

    // DETECTING WHEN ANIMATION ENDS
    let backgroundAnimation = document.body;
    backgroundAnimation.addEventListener('animationend',
     (event) => {
       console.log(event);
       console.log('Animation Complete!');

       // PREPARE FOR NEXT STEP
        root.style.setProperty('--odger-image-position', "0px 0%");
        document.body.classList.remove(backgroundGif);
        step += 1;
        updateSteps(step);
        updateProgress(step);
        appearAgainAnim(document.getElementById("content-steps"));
        appearAgainAnim(document.getElementById("footer-content-instruction"))

        if (step == 7) {

            // alert("Animation finished!");
            window.location.href = "./final/odger-final.html";
        }
    }, {once: true} );

}

function updateProgress(step) {
    let stepTitle;
    let stepInstruction;

    let instructionImage;
    // STEP 02 Lay it down to the left side.
    // STEP 03 Remove everything except for two metal bars and two metal plates.
    // STEP 04 Remove everything except for two metal bars and two metal plates STEP 04.
    // STEP 05 Remove everything except for two metal bars and two metal plates. STEP 05.
    // STEP 05 Remove everything except for two metal bars and two metal plates. STEP 06.
    switch (step) {
        case 2:
            stepTitle = 'STEP 02';
            stepInstruction = "Lay it down to the left side.";

            instructionImage = "../../assets/images/odger/instructions/odger-instruction-01.png";
            break;
        case 3:
            stepTitle = 'STEP 03';
            stepInstruction = "Remove everything except for two metal bars and two metal plates.";

            instructionImage = "../../assets/images/odger/instructions/odger-instruction-02.png";
            break;
        case 4:
            stepTitle = 'STEP 04';
            stepInstruction = "Remove everything except for two metal bars and two metal plates. STEP 04";

            instructionImage = "../../assets/images/odger/instructions/odger-instruction-03.png";
            break;
        case 5:
            stepTitle = 'STEP 05';
            stepInstruction = "Remove everything except for two metal bars and two metal plates. STEP 05";

            instructionImage = "../../assets/images/odger/instructions/odger-instruction-04.png";
            break;
        case 6:
            stepTitle = 'STEP 06';
            stepInstruction = 'Remove everything except for two metal bars and two metal plates. STEP 06.';

            instructionImage = "../../assets/images/odger/instructions/odger-instruction-05.png";
            break;
    }
    document.getElementById('footer-instruction-step').innerHTML = stepTitle;
    document.getElementById('footer-instruction-step-02').innerHTML = stepInstruction;
    document.getElementById('content-progress').value = step;

    // Changing the image on the instructions
    document.getElementById('modal-content-image').src=instructionImage;
}
