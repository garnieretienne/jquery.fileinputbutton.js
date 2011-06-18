JQuery plugin to style input file in forms
==========================================

Use this plugin to style yours input file.

Usage
-----

```javascript
$('#stylized').fileinputbutton({
  'image'  : 'images/upload_button.png', // your button picture
  'width'  : '200px',                    // width of the button  (px, em or %)
  'height' : '43px',                     // height of the button (px, em or %)
  'debug'  : true                        // show real input file too for debugging purpose, default is false
});
```

Exemple
-------

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>JQuery plugin: jquery.fileinputbutton.js</title>
</head>
<body>
  <form action="" method="post">
    <label>Before:</label> <br />
    <input type="file" name="file1"/> <br />
    <label>After:</label> <br />
    <input id='stylized' type="file" name="file1"/> <br />
  </form>
  <script type="text/javascript" src='js/jquery-1.6.1.min.js'></script>
  <script type="text/javascript" src='../jquery.fileinputbutton.js'></script>
  <script type="text/javascript">
    $(function () {
      $('#stylized').fileinputbutton({
        'image'  : 'images/upload_button.png',
        'width'  : '200px',
        'height' : '43px'
      });
    });
  </script>
</body>
</html>
```
