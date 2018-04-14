# React Lightbox

This is a simple Lightbox component for React (v16 and above).

### To use in your project:

```javascript
import Lightbox from '@matthamlin/react-lightbox';

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
