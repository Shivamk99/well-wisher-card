import Dot from './Dot';

import fontFile from './RanilleNormalRegular-axEpm.otf';//https://www.fontspace.com/category/opentype

const defaultFrameRate = 40; // low framerate to avoid too much strain on mobile phones

//eslint-disable-next-line
export default (parent, text) => (sketch) => {
  var font;
  var dots;
  var firstWordPoints = [];
  var secondWordPoints = [];
  var thirdWordPoints = [];
  var forthWordPoints = [];
  

  sketch.preload = () => {
    font = sketch.loadFont(fontFile);
  };

  const fillDots = (width, height) => {
    dots = [];
    // Assumption that text is just 4 words, no more, no less
    var [firstWord, secondWord, thirdWord, forthWord] = text.split(' ') 

    // A dirty hack to make it work on both desktop and mobile phones
    if (width > height) {
      // console.log('desktop view')

      // ref: https://p5js.org/reference/#/p5.Font/textToPoints 
      // The numbers would be different for different text
      firstWordPoints = font.textToPoints(`${firstWord} ${secondWord}`, width*0.08, height*0.37, width*0.15)
      secondWordPoints = font.textToPoints(`${thirdWord} ${forthWord}`, width*0.010, height*0.90, width*0.15);
      
    } else {
      // console.log('in mobile view')

      firstWordPoints = font.textToPoints(firstWord, width*0.1, height*0.15, width*0.2);
      secondWordPoints = font.textToPoints(secondWord, width*0.1, height*0.35, width*0.20);
      thirdWordPoints = font.textToPoints(thirdWord, width*0.08, height*0.7, width*0.25);
      forthWordPoints = font.textToPoints(forthWord, width*0.08, height*0.9, width*0.25);
    
    }

    firstWordPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    });

    secondWordPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    });

    thirdWordPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    });

    forthWordPoints.forEach((point) => {
      dots.push(new Dot(point.x, point.y, sketch));
    })

  };

  sketch.setup = () => {
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    sketch.createCanvas(width, height);
    fillDots(width, height);
    sketch.frameRate(defaultFrameRate);
  };

  sketch.draw = () => {
    sketch.clear();
    dots.forEach((dot) => {
      dot.update();
      dot.applyAllForces();
      dot.show();
    });
  };
};
