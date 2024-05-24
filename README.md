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

To use the component, you need to import the package. No further configuration is required.

```typescript

import { NgxProgressLoaderComponent } from 'ngx-progress-loader';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgxProgressLoaderComponent //Import the component into your project
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

```

## Customization

At the moment it's only possible to offer a slight customization of the component.

More configuration options will be available in future versions of the component.

### Color

`ngx-progress-loader` is presented with default colors that can be used.

|    Color     | Hex Code |                                                                      |      Default       |
|:------------:|:--------:|:--------------------------------------------------------------------:|:------------------:|
|   `black`    | #1a1a1a  |        ![black!](https://i.ibb.co/JqnC7cT/black.png "black")         |                    |
| `light-grey` | #d1d1d1  | ![light-grey!](https://i.ibb.co/WsCgMdc/light-grey.png "light-grey") |                    |
| `dark-grey`  | #424242  |  ![dark-grey!](https://i.ibb.co/ZJ8KBWt/dark-grey.png "dark-grey")   |                    |
|   `white`    | #ededed  |        ![white!](https://i.ibb.co/dkWDHJ6/white.png "white")         |                    |
|    `blue`    | #3498DB  |          ![blue!](https://i.ibb.co/LhByBcM/blue.png "blue")          | :heavy_check_mark: |
|   `orange`   | #F39C12  |       ![orange!](https://i.ibb.co/vJDzBCR/orange.png "orange")       |                    |
|   `green`    | #27AE60  |        ![green!](https://i.ibb.co/cDcJ1hw/green.png "green")         |                    |
|   `purple`   | #7D3C98  |       ![purple!](https://i.ibb.co/Hg6bjXS/purple.png "purple")       |                    |

The desired color can be indicated via the `color` input. If omitted, the default coloring is used.


```angular17html
  <ngx-progress-loader
    type="circle"
    color="purple">
  </ngx-progress-loader>
```

:bangbang: It isn't currently possible to use `color` input to indicate custom colors.
However, you can customize the coloring by using custom CSS rules. For more information see the section
[Css Customization](#css-customization)

### CSS Customization
:warning: The library is still under active development!
Many properties may have been implemented only partially and therefore not available for all components

You can customize the appearance of your components by editing the CSS custom properties.

| CSS Custom Propriety | Description                                                                                                                                                                                         |      Support       |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------:|
| `--track-color`      | Allows customization of the loader track color!<br/>Track customization can only be done through the use of custom CSS.                                                                             | :heavy_check_mark: |
| `--progress-color`   | Allows you to change the color of the Loader. You can indicate coloring in any format allowed by CSS (`hex`, `rgb/rgba`,...)<br/> :bangbang: The color input takes precedence over the CSS property | :heavy_check_mark: |
| `--progress-stroke`  | Determines the width of the track.<br/>Available only for circle type progress                                                                                                                      | :heavy_minus_sign: |



#### Example

```scss
  //The change will apply to all components of that type unless there is a more specific rule
  ngx-progress-loader {
    --track-color: #3d3737;
    --progress-color: '#0b667b';
  }

  //The change will be applied to all components with the custom-color class
  .custom-color {
    --track-color: #3d3737;
    --progress-color: '#0b667b';
  }
```

## Demo

### Example

```angular17html
  <ngx-progress-loader
    type="circle"
    [value]='progressValue'
    color="orange">
  </ngx-progress-loader>
```
