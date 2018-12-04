# HTML-Practice

### Selectors in css3
```
p [name^="my"] {font-size: 20px; }
^= will be assigned to any <p> element with a name attribute value begining with "my" (e.g. "mytext","mycar")

p [name$="my"] {font-size: 20px; }
$= will be assigned to any <p> element with a name attribute value ending with "my" (e.g. "textmy","carmy")

p [name*="my"] {font-size: 20px; }
*= will match any <p> element with a name attribute value containing the substring "my" (the substring could also be in the middle -- for e.g. in "textmycar"
```

### hsla

```
The syntax is: color: hsla(hue, saturation, lightness, opacity);  
hue - from 0 to 360 degrees. Around 0 and 360 - red colors, around 120 - green, around 240 - blue
saturation - from 0% (grey scale) to 100% (full color ot fully saturated)
lightness - from 0% (completely dark to 100% (completely light) 
```
### HTML Elements
An HTML element usually consists of a start tag and end tag, with the content inserted in between:
```
<tagname>Content goes here...</tagname>
```
The HTML element is everything from the start tag to the end tag
HTML elements can be nested (elements can contain elements).

All HTML documents consist of nested HTML elements.
e.g.
```
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
```
### Empty HTML Elements
HTML elements with no content are called empty elements.

<br> is an empty element without a closing tag (the <br> tag defines a line break).

Empty elements can be "closed" in the opening tag like this: <br />.

HTML5 does not require empty elements to be closed. But if you want stricter validation, or if you need to make your document readable by XML parsers, you must close all HTML elements properly.

### Use Lowercase Tags
HTML tags are not case sensitive: <P> means the same as <p>.

The HTML5 standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.

</html>
