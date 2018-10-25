
# simple furniture

This is a submission project for a Fall BFA Show 2018.

## Contributors:
 - **UIUX/Design:** JeongHoe Hwang
 - **Prototype/Development:** [Will Kim](www.withoutwax.me)
 - **Photography/Post-Production:** Dongwook Lim

## Features:
While there are many feature implemented in this site, we've selected a few which we've found useful. We decided to put it here so that we can use them for any future projects.

**Blur**
```html
<div class="blur">
    <h1>Header</h1>
    <p>Lorem Ipsum...</p>
</div>
```
```css
.blur {
    position: relative;
    background: hsla(0, 0%, 10%, .22);
    overflow: hidden;
}
.blur::before {
    background-image: url("../assets/images.jpg");
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    content: '';
    margin: -25px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(10px);
    z-index: -1;
}
```
It seems to work with CSS Grid & Flexbox.

**CSS Variables**
```CSS
:root {
    --variable-01: url("../assets/images.jpg");
    --variable-02: url("../assets/images.jpg");
    --variable-03: url("../assets/images.jpg");
    --variable-04: url("../assets/images.jpg");
    --variable-05: url("../assets/images.jpg");
}

div {
    background-image: var(--variable-01);
}
```
You can even manipulate CSS Variable with JavaScript:
```JavaScript
let root = document.documentElement;
root.style.setProperty('--variable-01','url("../assets/different_images.jpg")');
```
