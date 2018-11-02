function initialize(step) {

    switch (step) {
        case 1:
            document.body.style.backgroundImage = 'url("../../assets/images/lixhult/lixhult_step_01_80.jpg")';
            root.style.setProperty('--lixhult-image-current', 'url("../../assets/images/lixhult/lixhult_step_01_80.jpg")');
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
            url = 'url("../../assets/images/lixhult/lixhult_step_02_80.jpg")';
            // UPDATING THE IMAGE FOR THE BLUR EFFECT
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_02" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container06" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 3:
            url = 'url("../../assets/images/lixhult/lixhult_step_03_80.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_03" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container07" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 4:
            url = 'url("../../assets/images/lixhult/lixhult_step_04_80.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_04" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container04" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 5:
            url = 'url("../../assets/images/lixhult/lixhult_step_05_80.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_05" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container03" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 6:
            url = 'url("../../assets/images/lixhult/lixhult_step_06_80.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_06" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container04" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 7:
            url = 'url("../../assets/images/lixhult/lixhult_step_07_80.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_07" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container" id="container07" ondragover="allowDrop(event)"></div><div class="container" id="container08" ondragover="allowDrop(event)"></div><div class="container" id="container09" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container10" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 8:
            url = 'url("../../assets/images/lixhult/lixhult_step_08_80.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_08" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container05" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 9:
            url = 'url("../../assets/images/lixhult/lixhult_step_09_80.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_09" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container" id="container06" ondragover="allowDrop(event)"></div><div class="container" id="container07" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container17" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        case 10:
            url = 'url("../../assets/images/lixhult/lixhult_step_10_80.jpg")';
            document.getElementById('content-steps').innerHTML = '<div class="drag_item" id="box_10" draggable="true" ondragstart="drag(event)"></div><div class="container" id="container02" ondragover="allowDrop(event)"></div><div class="container" id="container03" ondragover="allowDrop(event)"></div><div class="container" id="container04" ondragover="allowDrop(event)"></div><div class="container" id="container05" ondragover="allowDrop(event)"></div><div class="container-trigger" id="container06" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            break;
        default:

    }
    document.body.style.backgroundImage = url;
    root.style.setProperty('--lixhult-image-current', url);
}

function allowDrop(e) {
    e.preventDefault();
    let position;

    switch (step) {
        case 1:
            switch (e.target.id) {
                case 'container02':
                    position = '0px 6.666666667%';
                    break;
                case 'container03':
                    position = '0px 13.3333333%';
                    break;
                case 'container04':
                    position = "0px 20%";
                    break;
                case 'container05':
                    position = "0px 26.6666667%";
                    break;
                case 'container06':
                    position = "0px 33.33333333%";
                    break;
                case 'container07':
                    position = "0px 40%";
                    break;
                case 'container08':
                    position = "0px 46.66666667%";
                    break;
                case 'container09':
                    position = "0px 53.33333333%";
                    break;
                case 'container10':
                    position = "0px 60%";
                    break;
                case 'container11':
                    position = "0px 66.66666667%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 2:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 3.44827586%";
                    break;
                case 'container03':
                    position = "0px 6.896551724%";
                    break;
                case 'container04':
                    position = "0px 10.344827586%";
                    break;
                case 'container05':
                    position = "0px 13.7931034482%";
                    break;
                case 'container06':
                    position = "0px 17.24137931034%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 3:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 4.761904761%";
                    break;
                case 'container03':
                    position = "0px 9.523809523809524%";
                    break;
                case 'container04':
                    position = "0px 14.285714285714286%";
                    break;
                case 'container05':
                    position = "0px 19.047619047619048%";
                    break;
                case 'container06':
                    position = "0px 23.80952380952381%";
                    break;
                case 'container07':
                    position = "0px 28.571428571428571%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 4:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 7.142857142857143%";
                    break;
                case 'container03':
                    position = "0px 14.285714285714286%";
                    break;
                case 'container04':
                    position = "0px 21.4285714428571429%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 5:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 11.11111111111111%";
                    break;
                case 'container03':
                    position = "0px 22.22222222222222%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 6:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 6.25%";
                    break;
                case 'container03':
                    position = "0px 12.5%";
                    break;
                case 'container04':
                    position = "0px 18.75%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 7:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 2.777777777777777778%";
                    break;
                case 'container03':
                    position = "0px 5.555555555555555556%";
                    break;
                case 'container04':
                    position = "0px 8.333333333333333333%";
                    break;
                case 'container05':
                    position = "0px 11.11111111111111111%";
                    break;
                case 'container06':
                    position = "0px 13.88888888888888888%";
                    break;
                case 'container07':
                    position = "0px 16.66666666666666667%";
                    break;
                case 'container08':
                    position = "0px 19.44444444444444444%";
                    break;
                case 'container09':
                    position = "0px 22.22222222222222222%";
                    break;
                case 'container10':
                    position = "0px 25%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 8:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 11.11111111111111111%";
                    break;
                case 'container03':
                    position = "0px 22.22222222222222222%";
                    break;
                case 'container04':
                    position = "0px 33.333333333333333333%";
                    break;
                case 'container05':
                    position = "0px 44.444444444444444444%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 9:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 5%";
                    break;
                case 'container03':
                    position = "0px 10%";
                    break;
                case 'container04':
                    position = "0px 15%";
                    break;
                case 'container05':
                    position = "0px 20%";
                    break;
                case 'container06':
                    position = "0px 25%";
                    break;
                case 'container07':
                    position = "0px 30%";
                    break;
                case 'container08':
                    position = "0px 35%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;
        case 10:
            switch (e.target.id) {
                case 'container02':
                    position = "0px 10%";
                    break;
                case 'container03':
                    position = "0px 20%";
                    break;
                case 'container04':
                    position = "0px 30%";
                    break;
                case 'container05':
                    position = "0px 40%";
                    break;
                case 'container06':
                    position = "0px 50%";
                    break;
                default:
                    position = "0px 0%";
                }
                break;

    }
    root.style.setProperty('--lixhult-image-position', position);

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
        case 'box_07':
            backgroundGif = 'background-gif-7';
            // currentBackgroundPosition = "34%";
            break;
        case 'box_08':
            backgroundGif = 'background-gif-8';
            // currentBackgroundPosition = "34%";
            break;
        case 'box_09':
            backgroundGif = 'background-gif-9';
            // currentBackgroundPosition = "34%";
            break;
        case 'box_10':
            backgroundGif = 'background-gif-10';
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
        root.style.setProperty('--lixhult-image-position', "0px 0%");
        document.body.classList.remove(backgroundGif);
        step += 1;
        updateSteps(step);
        updateProgress(step);
        appearAgainAnim(document.getElementById("content-steps"));
        appearAgainAnim(document.getElementById("footer-content-instruction"))

        if (step == 11) {

            // alert("Animation finished!");
            window.location.href = "./final/lixhult-final.html";
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

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-01.png";
            break;
        case 3:
            stepTitle = 'STEP 03';
            stepInstruction = "Remove everything except for two metal bars and two metal plates.";

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-02.png";
            break;
        case 4:
            stepTitle = 'STEP 04';
            stepInstruction = "Remove everything except for two metal bars and two metal plates. STEP 04";

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-03.png";
            break;
        case 5:
            stepTitle = 'STEP 05';
            stepInstruction = "Remove everything except for two metal bars and two metal plates. STEP 05";

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-04.png";
            break;
        case 6:
            stepTitle = 'STEP 06';
            stepInstruction = 'Remove everything except for two metal bars and two metal plates. STEP 06.';

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-05.png";
            break;
        case 7:
            stepTitle = 'STEP 07';
            stepInstruction = 'Remove everything except for two metal bars and two metal plates. STEP 06.';

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-05.png";
            break;
        case 8:
            stepTitle = 'STEP 08';
            stepInstruction = 'Remove everything except for two metal bars and two metal plates. STEP 06.';

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-05.png";
            break;
        case 9:
            stepTitle = 'STEP 09';
            stepInstruction = 'Remove everything except for two metal bars and two metal plates. STEP 06.';

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-05.png";
            break;
        case 10:
            stepTitle = 'STEP 10';
            stepInstruction = 'Remove everything except for two metal bars and two metal plates. STEP 06.';

            instructionImage = "../../assets/images/lixhult/instructions/lixhult-instruction-05.png";
            break;
    }
    document.getElementById('footer-instruction-step').innerHTML = stepTitle;
    document.getElementById('footer-instruction-step-02').innerHTML = stepInstruction;
    document.getElementById('content-progress').value = step;

    // Changing the image on the instructions
    // document.getElementById('modal-content-image').src=instructionImage;
}
