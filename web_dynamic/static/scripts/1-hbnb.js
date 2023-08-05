$(document).ready(function() {
  const selectedAmenities = {};
  $('input[type="checkbox"]').on('change', function() {
    const amenityId = $(this).val();
    const amenityName = $(this).siblings('span').text().trim();
    if ($(this).prop('checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }
    const amenitiesList = Object.keys(selectedAmenities).join(', ');
    $('#amenities h4').text(amenitiesList);
  });
});
