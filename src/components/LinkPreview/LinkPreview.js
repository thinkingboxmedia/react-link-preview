// Modules.
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import isMobile from 'ismobilejs';

// Components.
import { Link } from 'react-router-dom';

// Styles.
import styles from './LinkPreview.css';

// Constants.
const MODAL_POPUP_ANIMATION_TIME = 200;
const IOS_3D_TOUCH_THRESHOLD = 0.14;

export default class LinkPreview extends React.Component {

  static get propTypes() {
    return {
      previewComponent: PropTypes.element.isRequired,
      clickWindow: PropTypes.number,
      longPressTime: PropTypes.number,
      mobileOnly: PropTypes.bool,
      loadBarAbove: PropTypes.bool,
    }
  }

  static get defaultProps() {
    return {
      clickWindow: 500,
      longPressTime: 1000,
      mobileOnly: true,
      loadBarAbove: true,
    }
  }

	constructor(props) {
		super(props);
		this.state = {
      disabled: this.props.mobileOnly && !isMobile.any,
      pressing: false,
        pressStart: 0,
        longpressing: false,
		};
    this.timer = null;
	}

  clickHandler(e) {
    // Check for a generic click, otherwise prevent the click-through
    if(!this.state.disabled && Date.now() - this.state.pressStart > this.props.clickWindow) {
      e.preventDefault();
      e.nativeEvent && e.nativeEvent.stopImmediatePropagation();
    }
  }

  mouseDownHandler() {
    this.setState({ pressing: true });
    if(!this.state.pressStart) this.setState({ pressStart: Date.now() });

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ longpressing: true });
    }, this.props.longPressTime);
  }

  mouseUpHandler() {
    this.setState({ pressing: false, longpressing: false });

    clearTimeout(this.timer);
    this.timer = null;
  }

  previewEnd() {
    this.setState({ pressing: false, longpressing: false, pressStart: 0 });
    if(this.timer) clearTimeout(this.timer);
    this.timer = null;
  }

  /*
   * Fixes for iOS Safari and macOS Safari
   */

  mouseLeave(e) {
    // In the space during press, before longpress, if you move the mouse off the element on Safari it won't always call mouseup.
    if(this.state.pressing && !this.state.longpressing) {
      this.previewEnd(e);
    }
  }

  touchForceChange(e) {
    // To prevent 3D peek from interfering with our own peek, we'll stop ours at this threshold and let the iOS one take over.
    if(e.touches && e.touches.length && e.touches[0].force > IOS_3D_TOUCH_THRESHOLD) {
      this.previewEnd(e);
    }
  }

  componentDidMount() {
    if(!this.props.mobileOnly) {
      this.wrapper.addEventListener("mousedown", this.mouseDownHandler.bind(this));
      this.wrapper.addEventListener("mouseup", this.mouseUpHandler.bind(this));
    }
    this.wrapper.addEventListener("touchstart", this.mouseDownHandler.bind(this));
    this.wrapper.addEventListener("touchend", this.mouseUpHandler.bind(this));
    this.wrapper.addEventListener("contextmenu", this.mouseUpHandler.bind(this));
    this.wrapper.addEventListener("touchforcechange", this.touchForceChange.bind(this));
  }

	render() {
		const classes = classnames({
			[styles.LinkPreview]: true,
      [styles.pressing]: this.state.pressing,
      [styles.LongPress]: this.state.longpressing,
      [styles["load-bar-above"]]: this.props.loadBarAbove,
		});

		const modalClasses = classnames({
      [styles.LinkPreviewModal]: true,
      [styles["modal-show"]]: this.state.pressing,
    });

		const dynamicWrapperStyles = {
      animationDuration: `${this.props.longPressTime}ms`,
    };
		const dynamicModalStyles = {
      animationDelay: `${this.props.longPressTime + MODAL_POPUP_ANIMATION_TIME}ms`,
      animationDuration: `${MODAL_POPUP_ANIMATION_TIME}ms`,
    };

    // Create the passable props object
    const {
        clickWindow,
        mobileOnly,
        longPressTime,
        loadBarAbove,
        previewComponent,
        ...passableProps
    } = this.props;

		return (
      <div className={ classes } style={dynamicWrapperStyles} ref={ el => this.wrapper = el }>
        <div className={modalClasses} style={dynamicModalStyles}>
          { previewComponent }
        </div>
        <Link {...passableProps}
              onClick={this.clickHandler.bind(this)}
              onDragEnd={this.previewEnd.bind(this)}
              onMouseLeave={this.mouseLeave.bind(this)}>
          {this.props.children}
        </Link>
      </div>
		);

	}

}
