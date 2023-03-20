// import React library
import React from 'react';

// stickFigure function with destructured props arguments
const StickFigure = ({ wrongLetters }) => {
  // count the number of wrong letters to determine how much of the figure to draw
  const errors = wrongLetters.length;
  // render an SVG element that represents the figure
  
  return (
    <div className="figure-wrapper">
        <svg height="250" width="300" className="figure-container">
          {/* draw the top of the stick */}
          <line x1="130" y1="20" x2="170" y2="20" stroke="#6795ab"></line>
          <line x1="170" y1="20" x2="170" y2="50" stroke="#6795ab"></line>
          <line x1="128" y1="20" x2="128" y2="230" stroke="#6795ab"></line>
          <line x1="130" y1="20" x2="130" y2="230" stroke="#6795ab"></line>
          <line x1="110" y1="228" x2="200" y2="228" stroke="#6795ab"></line>
          <line x1="110" y1="230" x2="200" y2="230" stroke="#6795ab"></line>
          <line x1="110" y1="232" x2="200" y2="232" stroke="#6795ab"></line>

        {/* draw the head if there is at least one wrong letter */}
        {errors > 0 &&
          <g>
            <circle cx="170" cy="70" r="20" fill="yellow"></circle>
            <circle cx="163" cy="65" r="4" fill="black"></circle>
            <circle cx="176" cy="65" r="4" fill="black"></circle>
          </g>
        }

        {/* draw the body if there are at least two wrong letters */}
        {errors > 1 &&
          <line x1="170" y1="90" x2="170" y2="150"></line>
        }
        
        {/* draw the left arm if there are at least three wrong letters */}
        {errors > 2 &&
          <line x1="150" y1="120" x2="170" y2="100"></line>
        }
        
        {/* draw the right arm if there are at least four wrong letters */}
        {errors > 3 &&
          <line x1="190" y1="120" x2="170" y2="100"></line>
        }

        {/* draw the left leg if there are at least five wrong letters */}
        {errors > 4 &&
          <line x1="170" y1="150" x2="150" y2="180"></line>
        }
        
        {/* draw the right leg if there are at least six wrong letters */}
        {errors > 5 &&
          <line x1="170" y1="150" x2="190" y2="180"></line>
        }
      </svg>
    </div>
  );
};

// export stickFigure 
export default StickFigure;