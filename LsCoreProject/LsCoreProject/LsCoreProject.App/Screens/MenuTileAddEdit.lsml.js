/// <reference path="../GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/itg-msls-helpers.js" />


myapp.MenuTileAddEdit.DeleteSelectedTile_execute = function (screen) {

	// Delete the selected tile
	// Setup a dialog box to verify ok to delete
	msls.showMessageBox("Are you sure you want to delete the \nMenu Tile, including all associated data?", {
		title: "Delete Menu Tile",
		buttons: msls.MessageBoxButtons.yesNo
	}).then(function (e) {
		if (e == msls.MessageBoxResult.yes) {
			screen.MenuTile.deleteEntity();
			myapp.commitChanges();
		}
	});


};

myapp.MenuTileAddEdit.Icon1_render = function (element, contentItem) {

	// Render our modal pick list of icons
	// call our helper function, easy!
	setupIconPicker(element, contentItem);

};

// Render all of our color pickers, again, call our helper function!
// We are using the jquery plugin Spectrum color picker
myapp.MenuTileAddEdit.TileColor_render = function (element, contentItem) {

	setupSpectrumColorPicker(element, contentItem);

};
myapp.MenuTileAddEdit.StatusBgColor_render = function (element, contentItem) {

	setupSpectrumColorPicker(element, contentItem);

};
myapp.MenuTileAddEdit.StatusFgColor_render = function (element, contentItem) {

	setupSpectrumColorPicker(element, contentItem);

}; myapp.MenuTileAddEdit.BadgeBgColor_render = function (element, contentItem) {

	setupSpectrumColorPicker(element, contentItem);

};
myapp.MenuTileAddEdit.BadgeFgColor_render = function (element, contentItem) {

	setupSpectrumColorPicker(element, contentItem);

};
myapp.MenuTileAddEdit.IconBgColor_render = function (element, contentItem) {

	setupSpectrumColorPicker(element, contentItem);

};
myapp.MenuTileAddEdit.IconFgColor_render = function (element, contentItem) {

	setupSpectrumColorPicker(element, contentItem);

};

