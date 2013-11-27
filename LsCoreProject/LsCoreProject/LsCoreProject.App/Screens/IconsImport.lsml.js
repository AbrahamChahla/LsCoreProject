/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.IconsImport.ImportIconsCsv_execute = function (screen) {

	// Import a CSV that is pasted into a big text area
	var importData = screen.CsvList;

	// Do we have at least one line?
	if (importData != null) {

		// split up the pasted list into an array
		var listArray = importData.split("\n");

		// loop over the array
		for (var i = 0; i < listArray.length; i++) {

			// if the value is not blank, create a new entity
			if (listArray[i] != "") {
				var newIcon = new myapp.Icon();
				newIcon.Name = listArray[i];
			}
		}
	}

	// commit all our additions to the database, batch mode.
	myapp.commitChanges();

};