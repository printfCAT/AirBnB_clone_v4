$(document).ready(()=>{
	
	function selectedAmenities() {
		const userAmenities = []
		$("#amenity-list li input").change((e) => {
			if (e.target.checked){
				userAmenities.push(e.target.dataset.id);

			} else {
				const idx = userAmenities.indexOf(e.target.dataset.id);

				userAmenities.splice(idx, 1);
			}

			renderAmenities(userAmenities);
		});
	}

	function renderAmenities(amenities){
		let text = "";
		amenities.forEach((amenity, idx) => {
			text += $(`[data-id="${amenity}"]`).data('name');

			if ((idx + 1) !== amenities.length){
				text += ", ";
			}
		})
		if (text.length === 0) text = '\u00A0';
		$('#selected-amenities').text(text);
	}

	selectedAmenities()
});
