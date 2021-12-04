const RenderIcons = ({stars, receipt}) => {
  // еще не сделано
  let allStars = '';
  let allRec = '';
  
  for (let i = 0; i < stars; i++) {
    allStars += '<img src="./images/star_active.svg" alt="star" />'
  }
  if (stars < 5) {
    for (let i = 0; i < 5 - stars; i++) {
      allStars += '<img src="./images/star.svg" alt="star" />'
    }
  }

  for (let i = 0; i < receipt; i++) {
    allRec += '<img src="./images/value_active.svg" alt="star" />'
  }
  if (receipt < 5) {
    for (let i = 0; i < 5 - receipt; i++) {
      allRec += '<img src="./images/value.svg" alt="star" />'
    }
  }

  return allStars, allRec
  
}

export default RenderIcons