function buildNewAd(adGroup, headOne, headTwo, desc, pathOne, pathTwo, newUrl) {
  // Assuming this function constructs an ad object or string
  const ad = {
    adGroup: adGroup,
    headline1: headOne,
    headline2: headTwo,
    description: desc,
    path1: pathOne,
    path2: pathTwo,
    finalUrl: newUrl
  };
  
  // Alternatively, you might construct a string representation of the ad
  // const adString = `${adGroup}: ${headOne} | ${headTwo} - ${desc} (${pathOne}/${pathTwo}) [${newUrl}]`;

  return ad;
}

// Example usage:
const adGroup = "Special Offers";
const headOne = "Get 20% Off!";
const headTwo = "Limited Time Only";
const desc = "Shop now for exclusive deals.";
const pathOne = "special";
const pathTwo = "offers";
const newUrl = "https://example.com/special-offers";

const newAd = buildNewAd(adGroup, headOne, headTwo, desc, pathOne, pathTwo, newUrl);
console.log(newAd);
