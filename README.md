# React Lightbox

This is a simple Lightbox component for React (v16 and above).

### To use in your project:

```javascript
import Lightbox from '/path/to/Lightbox.js';

require('path/to/Lightbox.css');

...

render(
  <Lightbox
    images={
      [
        {
          img: 'path/to/image.jpg',
          caption: 'Image Caption'
        },
        {
          img: 'path/to/another_image.jpg',
          caption: 'Another Image Caption'
        }
      ]
    }
  />,
  root
);
```

### Requirements:

* React
* CSSNext (color function, this can be changed out to whatever color you want however)
