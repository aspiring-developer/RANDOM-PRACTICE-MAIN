geocode();
function geocode(e) {
e.preventDefault();
let location = document.getElementById("locationInput").value;

axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
  params: {
      address: location,
      key: "AIzaSyBNlqKXOpDlK_yYaaFqLpacVf4mtrc7wRI"
  }
 }).then(function(response) {
console.log(response);
let formattedAddress = response.data.results[0].formatted_address;
let formattedAddressOutput = `
<ul class="list-group">
<li class="list-group-item"> ${formattedAddress} </li>
</ul>
`;

// Address
let addressComponents = response.data.results[0].address_components;
console.log(addressComponents);
let addressComponentsOutput = '<ul class="list-group">';
for (let i = 0; i < addressComponents.length; i++) {
addressComponentsOutput += `
<li class="list-group-item"> <span class="addressComponentLabel"> ${addressComponents[i].types[0]} : </span> ${addressComponents[i].long_name} </li> `;
}
addressComponentsOutput +=  '</ul>';
document.getElementById("mainAddressDisplay").innerHTML = formattedAddressOutput;
document.getElementById("mainAddressDisplay").style = "color: brown; font-size: 1.5rem; font-weight: bold";
document.getElementById("addressComponentsDisplay").innerHTML = addressComponentsOutput;
 }).catch(function(error) {
   console.log(error);
 });
}
