# /IMAGE

Drop your product / site photos in this folder.

Because this lives inside Vite's `public/` directory, any file you add here
is automatically available at the root URL path — no import statements and
no rebuild-time processing needed.

Example:
- File: `public/IMAGE/eos-r6.jpg`
- Reference it in code as: `/IMAGE/eos-r6.jpg`

## How to use a real photo for a product

Open `src/data/products.js`, find the product, and change its `image` line
from the placeholder to your file, e.g.:

```js
// before
image: placeholderImg('Canon EOS R6 Mark II Body', 0),

// after
image: '/IMAGE/eos-r6.jpg',
```

That's it — no other code changes required.

Suggested naming (so it's easy to tell which photo goes where):
- cam-eos-r6.jpg
- lens-rf-2870.jpg
- cam-a7iv.jpg
- lens-50-1-8.jpg
- drone-mavic3.jpg
- drone-mini4.jpg
- gimbal-rs3.jpg
- gimbal-smooth5.jpg
- tripod-carbon.jpg
- tripod-video.jpg
- sd-256.jpg
- sd-128.jpg
- mic-rode-wireless.jpg
- mic-shotgun.jpg
- cam-r5c.jpg
- lens-rf70200.jpg

(These match each product's `id` in `src/data/products.js`.)
