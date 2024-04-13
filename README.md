# Angular Ngx-ProgressLoader

How was Ngx-Progress Loader born?

While developing my website, I was looking for a component to use to represent my confidence level with various technologies.

As you can imagine, I certainly found a ready-made component that was right for me, but what's the point of life without some difficulty? :joy:

So I decided to provide my personal interpretation of the component which until then was just an idea in my head :muscle: :smile:

Feel free to sift through the code :mag_right:, take inspiration, use the component, report bugs :bug: and if you like, even leave a star :star:

---

## Warning

The component is still under active development, and at the moment a stable version is not yet available.

As a result, both the methods of use and the API may undergo significant changes.

---

Table of contents
=================

- [Angular Ngx-ProgressLoader](#angular-ngx-progressloader)
- [Version](#version)
- [Browser Support](#browser-support)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Customization](#customization)
  - [Color](#color)
  - [Css Customization](#css-customization)
- [Demo](#demo)
  - [Example](#example)

## Version

| NgxProgressLoader | Angular          |
|:-----------------:|:----------------:|
|       v1.x        |        -         |
|       v0.x        | >=17.0.0 <18.0.0 |

## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Latest ✔                                                                                                                                                                                                      | Latest ✔                                                                                                                                                                                                          | IE11, Edge ✔                                                                                                                                                                                                    | Latest ✔                                                                                                                                                                                                                  | Latest ✔                                                                                                                                                                                                  |

## Features

- [x] Circle Loader
- [ ] Multi Circle Loader
- [x] Square Loader
- [x] Content projection
- [x] Infinite loop animation
- [ ] Customization

## Installation

`ngx-progress-loader` is available via npm

Using npm:

```bash
$ npm install ngx-progress-loader --save
```

## Configuration

## Customization

### Color

`ngx-progress-loader` is presented with default colors that can be used.

|  Color   |                                                           | Hex Code |  Default   |
|:--------:|:---------------------------------------------------------:|:--------:|:----------:|
| `black`  |   ![black!](https://i.ibb.co/JqnC7cT/black.png "black")   | #1a1a1a  |            |
| `white`  |   ![white!](https://i.ibb.co/jzVRFTP/white.png "white")   | #d9d9d9  |            |
|  `blue`  |    ![blue!](https://i.ibb.co/LhByBcM/blue.png "blue")     | #3498DB  |    true    |
| `orange` | ![orange!](https://i.ibb.co/vJDzBCR/orange.png "orange")  | #F39C12  |            |
| `green`  |   ![green!](https://i.ibb.co/cDcJ1hw/green.png "green")   | #27AE60  |            |
| `purple` | ![purple!](https://i.ibb.co/Hg6bjXS/purple.png "purple")  | #7D3C98  |            |

The desired color can be indicated via the `color` input. If omitted, the default coloring is used.

 :bangbang: It isn't currently possible to use `color` input to indicate custom colors. 
 However, you can customize the coloring by using custom CSS rules. For more information see the section
[Css Customization](#css-customization)

```angular17html
  <ngx-progress-loader
    type="circle"
    color="purple">
  </ngx-progress-loader>
```

### CSS Customization
:warning: The library is still under active development!
Many properties may have been implemented only partially and therefore not available for all components

You can customize the appearance of your components by editing the CSS custom properties.

| CSS Custom Propriety            | Description                                                                                                                                                                                         |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--progress-color`              | Allows you to change the color of the Loader. You can indicate coloring in any format allowed by CSS (`hex`, `rgb/rgba`,...)<br/> :bangbang: The color input takes precedence over the CSS property |


## Demo

### Example

```angular17html
  <ngx-progress-loader
    type="circle"
    [value]='progressValue'
    color="orange">
  </ngx-progress-loader>
```
