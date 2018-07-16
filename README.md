# ECO Demo
---

Demo for a potential rebuild of the eCO system.

[ameyer@egov.com](mailto:ameyer@egov.com) <-- Let me know if you have questions.

---
## To begin...

### To run:

☞ _If you don't have node already installed, you'll [have to install it](https://www.google.com/search?q=how+to+install+nodejs)._
☞ _If you don't have grunt already installed, you need to install it after installing npm using_: `npm install -g grunt-cli`

1. From your terminal window, run the following command: `npm install`

2. Run `grunt` to fire up browser sync and launch a watch task so that changes in code will trigger a browser refresh.

### To build dist folder
`grunt dist`

### To package (building dist before)
`grunt package`

Various other grunt tasks are setup. You can view them in the gruntfile.

---
## Overview and Editing

This set up uses [Nunjucks](https://mozilla.github.io/Nunjucks/) for layouts/templates. All the Nunjucks files are in `templates`; layouts in `templates/layouts` and pages in `templates/pages`. If the grunt watch task is running, you can edit those files and changes will trigger rebuilding the html files.

For the stylesheets, this uses [Bootstrap](https://getbootstrap.com/docs/3.3/) (3.x, by the way) and therefore [Less](http://lesscss.org/). Custom compiled Bootstrap files are found in `lib`. They will not need to be changed, unless Bootstrap needs to be recompiled for some reason. The app-specific files are in the `less` folder. The structure of the .less files should be fairly clear. As with the Nunjucks files, if the watch task is running, changes to the less files will trigger rebuilding the css files.
