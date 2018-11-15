const apiKey = 'BOYPgLK93MBZP7_RWvrOuqt7Uv2IdtdhEgDget8g0Eh0VJ2F76RXzS-spABsa_9AkMEpCHDpJc4eDLfsPwS4hSts__HVT8-1-rNbQknjnvOvvunVxwTN8K-1ViztW3Yx';
const Yelp = {
search(term, location, sortBy) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if(jsonResponse.business) {
      return jsonResponse.businesses.map(business => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zipCode,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount:business.review_count
        }
      });
    }
  })
 }
};

export default Yelp;
