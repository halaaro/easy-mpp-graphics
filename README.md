# Easy MPP Graphics

## Description

The goal of this enhancement is to create an easy way to add graphics to MPP. Something more like what you can do in Word: copy-paste or drag & drop. Secondarily, we would like to enable the user to resize images or apply other edits before uploading.

### State of the Art

Out of the box, we can insert an image into a process plan with the following steps:

1. Navigate to `Graphics` in TOC
2. Add new (form appears)
3. Click `Select an Image...` (dialog appears)
4. Choose External File tab
5. Browse for image location
6. Select image
7. Enter image name
8. Save, Unlock, and close graphic
9. Open a Process Plan 
10. Right-click on the work instruction detail
11. Choose `Add Graphic`
12. Search for graphic by name

Seems excessive, right? 

There must be a better way! <a href="#fn1"><span id="r1">[1]</span></a>

### Features

### 1. Add **Upload Graphic** context entry.

In the vanilla solution, only the Insert Graphics option is available. This is still available after this package is installed, but we also add a new menu option available after right-click. Instead of searching, it will show a form to directly upload the graphic.

### 2. HTML form to allow browsing, **drag & drop**, or copy-paste.

We use a custom form to add support for drag & drop, and copy-paste in addition to the built-in browse functionality.

### 4. **Automatic naming** based on file-name / using MPP number (configurable)

Since we start in the context of an MPP, we can use that information to give the graphic a name that ties it to the MPP. The default behavior is to add a name with the MPP number as a prefix, followed by the file name.

### 3. Preview of image with common **quick editing** features before uploading.

When an image is selected, we show a preview of the image and allow the user to manipulate in javascript (client-side). This makes edits much quicker and avoids the need for an outside tool to postprocess images before uploading. Common features needed are to crop and resize.

### Other Solutions

 A community package (https://github.com/AngelaIp/aras-image-uploader-for-tech-docs) also exists to improve part of the process. However it still requires the user to leave the Process Plan and manually upload the images before returning and also forces the user to search for the graphic(s) just added. Another downside of the approach is it encourages batching instead of a JIT workflow.</p>

## Project Details

**Built Using:**

Aras 11.0 SP9

**Versions Tested:**

Aras 11.0 SP9

**Browsers Tested:**

Chrome 91.0

## Installation

#### Important!
**Always back up your code tree and database before applying an import package or code tree patch!**

### Prerequisites

1. Aras Innovator installed (version 11.0 SPx preferred)
2. Aras Package Import tool
3. Import package of this project
4. MPP and/or Tech Docs must be installed in the target database

### Install Steps

#### Code tree Installation
These code tree changes only contain a custom icon for the toolbar. If you wish to use your own icon, you may replace the .svg file in the `\Innovator\` folder with your own.

1. Backup your code tree and store the archive in a safe place
2. Navigate to your local `..\easy-mpp-graphics\` folder
3. Copy the `\Innovator\` folder 
4. Paste this at the root of your install directory
+ By default this is `C:\Program Files\Aras\Innovator\`

#### Database Installation
1. Backup your database and store the BAK file in a safe place.
2. Open up the Aras Package Import tool.
3. Enter your login credentials and click **Login**
    * _Note: You must login as root for the package import to succeed!_
4. Enter the package name in the TargetRelease field.
    * Optional: Enter a description in the Description field.
5. Enter the path to your local `..\easyMppGraphics\Import\imports.mf` file in the Manifest File field.
6. Select **com.watlow.easyMppGraphics** in the Available for Import field.
8. If the target database has the MPP application installed, select the **com.watlow.easyMppGraphics.mppOptions** package.
9. Select Type = **Merge** and Mode = **Thorough Mode**.
10. Click **Import** in the top left corner.
11. Close the Aras Package Import tool.

You are now ready to login to Aras and try out the image importer.

## Usage

TBD.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

Created by @haleytec.

Inspired by [AngelaIp](https://github.com/AngelaIp) / [aras-image-uploader-for-tech-docs](https://github.com/AngelaIp/aras-image-uploader-for-tech-docs).

## License

This project is published to Github under the Microsoft Public License (MS-PL). See the [LICENSE file](./LICENSE.md) for license rights and limitations.

---

Footnotes

<p id="fn1"><a href="#r1">[1]</a> "There must be a better way!" A phrase often used by Raymond Hettinger while giving one of his excellent python talks. For example <a href="https://youtu.be/p33CVV29OG8?t=566">Modern Dictionaries by Raymond Hettinger, SF Python</a>.