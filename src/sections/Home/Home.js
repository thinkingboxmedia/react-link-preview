// Modules.
import React from 'react';
import classnames from 'classnames';

// Components.
import LinkPreview from 'src/components/LinkPreview';
import PreviewMe from "src/sections/PreviewMe/PreviewMe";

// Styles.
import styles from './Home.css';

// Constants.
const AVAILABLE_PROPS = [
  { name: 'previewComponent', def: 'N/A', req: 'yes', desc: "A component to show in the preview."},
  { name: 'clickWindow', def: '500', req: 'no', desc: "The window of time (ms) where a regular click is registered."},
  { name: 'longPressTime', def: '1000', req: 'no', desc: "The time (ms) it takes the user to hold before it's considered a longpress."},
  { name: 'mobileOnly', def: 'true', req: 'no', desc: "Setting this to false allows the preview to work on desktop, too."},
  { name: 'loadBarAbove', def: 'true', req: 'no', desc: "Settings this to false moves the longpress bar below your link."},
];

export default class Home extends React.Component {

  static get propTypes() {
    return {
    }
  }

  static get defaultProps() {
    return {
    }
  }

  render() {
    const homeClasses = classnames({
      [styles.Home]: true,
    });

    return (
      <div className={homeClasses}>
        <h1>LinkPreview Demo</h1>
        <em>A Thinkingbox endeavour</em>
        <p>This link will show a loading bar when you long press.</p>
        <LinkPreview to="/preview-me"
                     mobileOnly={false}
                     previewComponent={
                       <PreviewMe />
                     }>
          Preview this link by long pressing
        </LinkPreview>
        <p>Here's a link with the loading bar below. Set the property <code>loadBarAbove</code> to <code>false</code> (the default is <code>true</code>.)</p>
        <LinkPreview to="/preview-me"
                     mobileOnly={false}
                     loadBarAbove={false}
                     previewComponent={
                       <PreviewMe />
                     }>
          This link will have the bar below it
        </LinkPreview>
        <p>You can also enable this component for desktop by setting the <code>mobileOnly</code> property to <code>false</code> (the default is <code>true</code>.)
          We use package <code><a href="https://www.npmjs.com/package/ismobilejs">isMobileJs</a></code> to determine what's mobile.</p>
        <LinkPreview to="/preview-me"
                     previewComponent={
                       <PreviewMe />
                     }>
          This link is just a normal link, except on mobile
        </LinkPreview>
        <p>Clicking on the link will take you directly to the route. Internally, this component uses a <code>react-router-dom &lt;Link /&gt;</code>. Pass any normal properties you'd like.</p>
        <h3>Example usage:</h3>
        <pre className="prettyprint lang-js linenums">
          {
            `<LinkPreview to="/preview-me"
              mobileOnly={false}
              loadBarAbove={false}
              previewComponent={<PreviewMe />}>
  This text can be any element you like instead
</LinkPreview>`
          }
        </pre>
        <h3>Here are the available properties:</h3>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Default</th>
              <th>Required?</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              AVAILABLE_PROPS.map((prop, i) =>
                <tr key={i}>
                    <td>{prop.name}</td>
                    <td>{prop.def}</td>
                    <td>{prop.req}</td>
                    <td>{prop.desc}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );

  }

}
