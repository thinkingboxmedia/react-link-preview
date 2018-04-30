# LinkPreview React Component
_A Thinkingbox Endeavour_

**Demo: [LinkPreview Github Page](https://thinkingboxmedia.github.io/react-link-preview/)**

### Adding it to your react project

`import 'LinkPreview' from 'react-link-preview';`

### Forking this component

Start the dev server:  
`npm run dev`

Compile the production version of the demo (do this before pushing to master or making an MR/PR):  
`npm run docs:prod`

Compile the distribution version of the component (do this before pushing to master or to NPM):  
`npm run dist-build`

### What it is

This wrapper adds a modal preview to links or buttons -- on long-press -- that displays any react component you provide. 
A small progress bar shows the long-press progress.
This is a very simple component that wraps the `react-router-dom <Link />` component with a bit of added functionality.

### How it works

Wrap any link or button with `<LinkPreview></LinkPreview` to get a modal pop-up preview of the component you supply.
This might be the react route component you intend to send the user to, or another component with useful preview information.

This component is intended for use on mobile devices primarily, but can be toggled to be used on desktop as well.

### Example usage:

```javascript
<LinkPreview to="/preview-me"
              mobileOnly={false}
              loadBarAbove={false}
              previewComponent={<PreviewMe />}>
  This text can be any element you like instead
</LinkPreview>
```

### Available properties:

Property | Default | Required? | Description
-------- | ------- | --------- | -----------
**previewComponent** | N/A | yes | A component to show in the preview.
**clickWindow** | 500 | no | The window of time (ms) where a regular click is registered.
**longPressTime** | 1000 | no | The time (ms) it takes the user to hold before it's considered a longpress.
**mobileOnly** | true | no | Setting this to false allows the preview to work on desktop, too.
**loadBarAbove** | true | no | Settings this to false moves the longpress bar below your link.