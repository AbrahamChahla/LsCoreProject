LsCoreProject - Refactored
=============

This is a major rewrite and will break the previous code.  I'll be updating the blog shortly.

We are now utilizing external js code for most of the functionality.  We've also moved to a namespace of itgLsHelper so that we don't collide with others.

Here are a few of the functions included in this file:

// *****************************************************************************************************
// *****************************************************************************************************
// LightSwitch 2013 Helper Functions/Methods/Whatever
//
// init
//		initializes the system: gets user name & permissions, imports menus
// 
// passwordValidator
//		setup a visual field for password entry and validation
//
// confirmPasswordValidator
//		setup a visual field for password entry and validate against the password field
//
// screens
//		Returns an array of your screens, name, display name and methods to show them
//
// changeButtonIcon
//		changes the icon class of a button
// 
// colorPicker
//		setup a visual field as a color picker
// 
// iconPicker
//		setup a visual field as an icon picker
//
// screenPicker
//		setup a visual field as a screen picker
//
// userHasPermission
//		does the current user have the permission assignment
//
// userHasRole
//		does the current user have the role assignment
// 
// tileMenu
//		setup a screen/container for a predefined MetroUI type tile menu
//
// exportTileMenusToJson
//		export/return a JSON object representing all the tile menus
//
// importJsonTileMenus
//		import a JSON object representing a set of menus and their tiles
//
// importIconClassList
//		import a csv list of icon class list
//
// urlParameterByName
//		get a URL parameter by its name
//
// fixMetadataHandlerForEtag
//		a fix for a known ETag issue
//
// fixJsonHandlerForEtag
//		a fix for a known ETag issue
//
// internalHelpers
//		bunch of functions for internal use
//		perhaps useful for learning new stuff?
// 
// *****************************************************************************************************
// *****************************************************************************************************



=============

LightSwitch 2013 Core Project with User Mgt, Tle Menus and Self Registration

As noted in the title, this tutorial will show you how to setup a core LightSwitch 2013 project. Not just any LightSwitch project, but one that will allow User Management natively vs. having to use Web API. We'll also show you how to implement a highly configurable system that supports creating MetroUI style tile menus. Finally, it doesn't do any good if you can't deploy the application, so we will show you how with Microsoft Azure. 

I know that this is a huge tutorial, <strong>again</strong>. I did try to make it a bit more manageable by breaking it up into pages vs. one humongous post. I encourage you to go through the tutorial (at least read it) rather than just downloading and running the code, there are some items that you should understand in order to have a successful deployment.  Or Not :)

Here are the topics and their logical order:
<p style="padding-left:30px;">
<ol>
<li><a href="http://wp.me/P2fr76-2k">Create the project</a>
<li><a href="http://wp.me/P2fr76-2t">Add external CSS</a> 
<li><a href="http://wp.me/P2fr76-2x">Add external scripts</a>
<li><a href="http://wp.me/P2fr76-2z">Update the default.htm</a>
<li><a href="http://wp.me/P2fr76-2B">Add LogIn/LogOut/Register/ChangePassword</a>
<li><a href="http://wp.me/P2fr76-2D">Create the security data source</a>
<li><a href="http://wp.me/P2fr76-2F">Screens for permissions</a>
<li><a href="http://wp.me/P2fr76-3x">Screens for role management</a>
<li><a href="http://wp.me/P2fr76-3z">Screens for user management</a>
<li><a href="http://wp.me/P2fr76-2H">Tables for tile menus</a>
<li><a href="http://wp.me/P2fr76-2J">Screens for icon management</a>
<li><a href="http://wp.me/P2fr76-42">Screens for menu management</a>
<li><a href="http://wp.me/P2fr76-44">Create a tile menu screen</a>
<li><a href="http://wp.me/P2fr76-2L">Create a database project</a>
<li><a href="http://wp.me/P2fr76-2N">How to deploy successfully</a>
<li><a href="http://wp.me/P2fr76-6r">Wrap up</a>
</ol>
</p>

