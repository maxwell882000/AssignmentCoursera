var allCategoriesUrl =
  "https://davids-restaurant.herokuapp.com/categories.json";
$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  buildAndShowHomeHTML, // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitly setting the flag to get JSON from server processed into an object literal
// *** finish **
// Builds HTML for the home page based on categories array
// returned from the server.
function buildAndShowHomeHTML (categories) {

  // Load home snippet page
  $ajaxUtils.sendGetRequest(
    allCategoriesUrl,
    function (homeHtml) {
      console.log(categories[20].short_name);
    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}
