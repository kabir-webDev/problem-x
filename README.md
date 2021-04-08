

Last Call Media's [website](https://lastcallmedia.com) wants to change it's background, but we don't know what would fit best. Create a way to select from the available backgrounds and switch between them seemlessly.

* Checkout `backgrounds.js` to view the available backgrounds you can use. You'll see the following object which will correspond to a file we've already added to the `public` folder called "a-background-here.ext". You can use this to get the source path to each of the different backgrounds.
```
{
  name: "a-background-here"
  type: "ext"
}
```
* In `App.css` you'll find useful styles you can use to center the background media and the select field. The styles provided are targetting the latest version of Chrome.
* Videos should automatically play in a loop when selected, but should be muted.
* Selecting a different value in a select field should immediately change the background.

