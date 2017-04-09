/*http://csshexagon.com/*/

import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';

const getHexagonStyle = (size, mainColor, barSize, barColor) => {
  return StyleSheet.create({
    hexagon: {
      position: 'relative',
      width: size,
      height: size * 0.5775,
      backgroundColor: mainColor,
      margin: `${(size * 0.5775) / 2}px 0`,
      ':before': {
        content: '""',
        position: 'absolute',
        width: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        bottom: '100%',
        borderBottom: `${(size * 0.5775) / 2}px solid ${mainColor}`
      },
      ':after': {
        content: '""',
        position: 'absolute',
        width: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        top: '100%',
        borderTop: `${(size * 0.5775) / 2}px solid ${mainColor}`
      }
    },
    bar: {
      borderRight: `${barSize}px solid ${barColor}`,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5
    }
  });
};

const getBarStyle = (barPercent, mainColor, size) => {
  return StyleSheet.create({
    bar: {
      height: '100%',
      width: barPercent + '%',
      backgroundColor: mainColor,
      zIndex: 10,
      display: 'inherit',
      position: 'relative',
      left: size,
      top: '-100%'
    }
  });
};

const getImageStyle = image => {
  return StyleSheet.create({
    image: {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      height: '100%',
    }
  });
};

const styles = StyleSheet.create({
  content: {
    width: '60%',
    height: '100%',
    marginLeft: '20%'
  }
});

const Hexagon = ({bar, barColor, barContent, barPercent, barSize, clickData, content, image, mainColor, onClick, size}) => {
  const hexagonStyle = getHexagonStyle(size, mainColor, barSize, barColor);
  const classes = css(
    hexagonStyle.hexagon,
    bar && hexagonStyle.bar,
  );

  // calculate the correct percent relative to the size
  const relativeBarPercent = (barSize / size) * barPercent;
  const barElement = bar
    ? (<span className={css(getBarStyle(relativeBarPercent, mainColor, size).bar)}>{barContent}</span>)
    : '';

  return (
    <div className={classes} onClick={() => onClick(clickData)}>
      <div className={css(styles.content)}>
        <div className={css(getImageStyle(image).image)}>
          {content}
        </div>
      </div>
      {barElement}
    </div>
  );
}

Hexagon.props = {
  /**
   * Display a bar or not
   */
  bar: PropTypes.bool,
  /**
   * Colour of the bar if this one is visible
   */
  barColor: PropTypes.string,
  /**
   * Component to render over the bar
   */
  barContent: PropTypes.element,
  /**
   * Percentage of bar that is full
   */
  barPercent: PropTypes.number,
  /**
   * Width of bar in px
   */
  barSize: PropTypes.number,
  /**
   * Data passed on click of hexagon
   */
  clickData: PropTypes.any,
  /**
   * Text shown inside hegaxon.
   */
  content: PropTypes.string,
  /**
   * Image shown inside hegaxon
   */
  image: PropTypes.element,
  /**
   * Color of hexagon
   */
  mainColor: PropTypes.string,
  /**
   * On click of the component, the function that will run
   */
  onClick: PropTypes.func,
  /**
   * Size of the hexagon in px
   */
  size: PropTypes.number
};

export default Hexagon;
