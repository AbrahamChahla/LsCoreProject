Here is how to upgrade from a B1 project to B2 as of 12/12/2013

<ol>

	<li>Most of the functionality has been moved to an external javascript file and using a namespace of itgLsHelper
	
	<li>No longer need query data item added to a tileMenu screen
	
	<li>Changed Admin screen to be Security
		<ol type="a">
		<li>Delete the query in the left panel, not needed anymore
		</ol>
		
	<li>MenuTiles Data Table
		<ol type="a">
		<li>Change OnClick to be choiceList
		<li>Add one choice, doesn’t matter as we'll replace it
		</ol>
		
	<li>Menus Data Table
		<ol type="a">
		<li>Delete the Screen field, we don't use it
		</ol>
		
	<li>LsSecurityData.UserRegistrations table
		<ol type="a">
		<li>Add a new query 
		<li>Name it CurrentUser
		<li>Edit Additional Query Code
		<li>Add the following
		</ol>
		<pre>
		query = query.Where(u => u.UserName == this.Application.User.Name).Select(u => u);
		</pre>
		
	<li>IconsImport screen
		<ol type = "a">
		<li>IconsImportCsv_execute, changed to use new code
		</ol>
		<pre>
		// Import a CSV that is pasted into a big text area
		itgLsHelper.importIcons(screen.CsvList);
		</pre>
		
	<li>New screen, MenuExport
		<ol type="a">
		<li>Browse screen, screen name: MenuExport, no data
		<li>Select Show As Dialog, or not
		<li>Add Data Item, Local Property, String, Required, Named: JsonMenuData
		<li>Add the property to the screen
		<li>Change the control type to text area
		<li>Height and Width set to Stretch
		<li>Set the tab  also to Stretch Height and Width
		<li>Write code, for the screen created method
		</ol>
		<pre>
		// Get our contentItem to hold the export
		var exportContentItem = screen.findContentItem("JsonMenuData");
	
		// Lets get our data, stuff the contentItem when done
		itgLsHelper.exportTileMenusToJson(exportContentItem);
		</pre>
	<li>MenusBrowse screen
		<ol type="a">
		<li>Add button, Existing method
		<li>showMenuExport
		</ol>
		
	<li>MenuTileAddEdit screen
		<ol type="a">
		<li>You'll see the OnClick field is now a dropdown
		<li>Change the display name of OnClick to be On Click Show Screen
		<li>Edit the screem created method
		<li>Add the following code
		<pre>		
		// Go get our OnClick field (contentItem)
		var onClickContentItem = screen.findContentItem("OnClick");
	
		// Update our screen picker with the list of screens
		// This should be within screen created vs post render of the field
		itgLsHelper.screenPicker(onClickContentItem);
		</pre>
		<li>Update all the colorPickers to the following
			itgLsHelper.colorPicker(element, contentItem)
			
		<li>Update the iconPicker to the following
			itgLsHelper.iconPicker(element, contentItem)
		</ol>
		
	<li>Start screen
		<ol type="a">
		<li>Delete the query items in the left panel, we no longer need them
		<li>Add a new data item to the screen
		<li>Local Property, boolean, Not required, Name it itgReady
		<li>Edit the Render code for the custom control
		<li>Remove the current code inside the render method
		<li>Replace it with the following
		<pre>
		// This will initialize the system, getting user info, permissions, etc
		// Only needed in your startup screen. Called once.
		itgLsHelper.init({
			readyPropertyName: "itgReady",
			contentItem: contentItem,
			element: element,
			menuName: "Start"
		});
		</pre>
		<li>If you look at the sample project you will also see how we've implemented additional options, jsonMenus and screens to exclude from a list
		</ol>
		
	<li>UserRegistrationAddEdit
		<ol type="a">
		<li>Open the screen editor
		<li>Add Data Item, Local Property, String, Not Required, Named: ConfirmPassword
		<li>Edit PostRender Code for the Password field
		<li>Add the following code
		<pre>
		// Go find our ConfirmPassword contentItem
		var confirmContentItem = contentItem.screen.findContentItem("ConfirmPassword");
	
		// Turn this field into a password with validation
		itgLsHelper.passwordValidator(element, contentItem, confirmContentItem);
		</pre>
		<li>Edit PostRender Code for the new ConfirmPassword field
		<li>Add the following code
		<pre>
		// Go find our Password contentItem
		var passwordContentItem = contentItem.screen.findContentItem("Password");
		
		// Turn this field into a password type, validate against the password
		itgLsHelper.confirmPasswordValidator(element, contentItem, passwordContentItem);
		</pre>
		</ol>
		
	<li>UserRegistrationsBrowse
		<ol type="a">
		<li>Edit the query
		<li>Add a filter: 
		<pre>
		Where UserName <> leavemealone
		[/pre]
		<li>Add your own name that is the security name for your Odata Svc call
		</ol>
		
	<li>default.htm
		<ol type="a">
		<li>Update the reference to itgLsHelper.js
		<li>Update the getUrlParameter with 
			itgLsHelper.getUrlParameter
		<li>Update the Etag fix towards the bottom of the file with
			itgLsHelper.fixMetadataHandlerForEtag();
			itgLsHelper.fixJsonHandlerForEtag();
		</ol>
		
	<li>Script.PostDeployment1.sql
		<ol type="a">
		<li>Under default menus
		<li>Delete the [Screen] field and data fields
		<li>In fact this whole section changed and should be reviewd.  Look at the sample project
		<li>No longer is there a worry about Azure or other hosters.
		</ol>
	</ol>
		
