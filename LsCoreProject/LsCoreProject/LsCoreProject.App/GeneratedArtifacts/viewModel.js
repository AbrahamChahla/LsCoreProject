/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function Admin(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Admin screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TilesForMenu" type="msls.VisualCollection" elementType="msls.application.MenuTile">
        /// Gets the tilesForMenu for this screen.
        /// </field>
        /// <field name="MenuName" type="String">
        /// Gets or sets the menuName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Admin.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Admin", parameters);
    }

    function IconAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the IconAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Icon" type="msls.application.Icon">
        /// Gets or sets the icon for this screen.
        /// </field>
        /// <field name="details" type="msls.application.IconAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "IconAddEdit", parameters);
    }

    function IconsBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the IconsBrowse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Icons" type="msls.VisualCollection" elementType="msls.application.Icon">
        /// Gets the icons for this screen.
        /// </field>
        /// <field name="details" type="msls.application.IconsBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "IconsBrowse", parameters);
    }

    function IconsImport(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the IconsImport screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CsvList" type="String">
        /// Gets or sets the csvList for this screen.
        /// </field>
        /// <field name="details" type="msls.application.IconsImport.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "IconsImport", parameters);
    }

    function MenuAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MenuAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Menu" type="msls.application.Menu">
        /// Gets or sets the menu for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MenuAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MenuAddEdit", parameters);
    }

    function MenusBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MenusBrowse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Menus" type="msls.VisualCollection" elementType="msls.application.Menu">
        /// Gets the menus for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MenusBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MenusBrowse", parameters);
    }

    function MenuTileAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MenuTileAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="MenuTile" type="msls.application.MenuTile">
        /// Gets or sets the menuTile for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MenuTileAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MenuTileAddEdit", parameters);
    }

    function MenuView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the MenuView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Menu" type="msls.application.Menu">
        /// Gets or sets the menu for this screen.
        /// </field>
        /// <field name="MenuTiles" type="msls.VisualCollection" elementType="msls.application.MenuTile">
        /// Gets the menuTiles for this screen.
        /// </field>
        /// <field name="details" type="msls.application.MenuView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "MenuView", parameters);
    }

    function PermissionsBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the PermissionsBrowse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Permissions" type="msls.VisualCollection" elementType="msls.application.Permission">
        /// Gets the permissions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.PermissionsBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "PermissionsBrowse", parameters);
    }

    function PermissionView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the PermissionView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Permission" type="msls.application.Permission">
        /// Gets or sets the permission for this screen.
        /// </field>
        /// <field name="details" type="msls.application.PermissionView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "PermissionView", parameters);
    }

    function Profile(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Profile screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Profile.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Profile", parameters);
    }

    function RoleAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the RoleAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Role" type="msls.application.Role">
        /// Gets or sets the role for this screen.
        /// </field>
        /// <field name="details" type="msls.application.RoleAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "RoleAddEdit", parameters);
    }

    function RolePermissionAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the RolePermissionAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RolePermission" type="msls.application.RolePermission">
        /// Gets or sets the rolePermission for this screen.
        /// </field>
        /// <field name="details" type="msls.application.RolePermissionAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "RolePermissionAddEdit", parameters);
    }

    function RolesBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the RolesBrowse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Roles" type="msls.VisualCollection" elementType="msls.application.Role">
        /// Gets the roles for this screen.
        /// </field>
        /// <field name="details" type="msls.application.RolesBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "RolesBrowse", parameters);
    }

    function RoleView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the RoleView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Role" type="msls.application.Role">
        /// Gets or sets the role for this screen.
        /// </field>
        /// <field name="RoleAssignments" type="msls.VisualCollection" elementType="msls.application.RoleAssignment">
        /// Gets the roleAssignments for this screen.
        /// </field>
        /// <field name="RolePermissions" type="msls.VisualCollection" elementType="msls.application.RolePermission">
        /// Gets the rolePermissions for this screen.
        /// </field>
        /// <field name="details" type="msls.application.RoleView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "RoleView", parameters);
    }

    function Start(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Start screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TilesForMenu" type="msls.VisualCollection" elementType="msls.application.MenuTile">
        /// Gets the tilesForMenu for this screen.
        /// </field>
        /// <field name="MenuName" type="String">
        /// Gets or sets the menuName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.Start.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Start", parameters);
    }

    function UserRegistrationAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the UserRegistrationAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UserRegistration" type="msls.application.UserRegistration">
        /// Gets or sets the userRegistration for this screen.
        /// </field>
        /// <field name="details" type="msls.application.UserRegistrationAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "UserRegistrationAddEdit", parameters);
    }

    function UserRegistrationsBrowse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the UserRegistrationsBrowse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UserRegistrations" type="msls.VisualCollection" elementType="msls.application.UserRegistration">
        /// Gets the userRegistrations for this screen.
        /// </field>
        /// <field name="details" type="msls.application.UserRegistrationsBrowse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "UserRegistrationsBrowse", parameters);
    }

    function UserRegistrationView(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the UserRegistrationView screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="UserRegistration" type="msls.application.UserRegistration">
        /// Gets or sets the userRegistration for this screen.
        /// </field>
        /// <field name="RoleAssignments" type="msls.VisualCollection" elementType="msls.application.RoleAssignment">
        /// Gets the roleAssignments for this screen.
        /// </field>
        /// <field name="details" type="msls.application.UserRegistrationView.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "UserRegistrationView", parameters);
    }

    function UserRoleAssignmentAddEdit(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the UserRoleAssignmentAddEdit screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RoleAssignment" type="msls.application.RoleAssignment">
        /// Gets or sets the roleAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.UserRoleAssignmentAddEdit.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "UserRoleAssignmentAddEdit", parameters);
    }

    msls._addToNamespace("msls.application", {

        Admin: $defineScreen(Admin, [
            {
                name: "TilesForMenu", kind: "collection", elementType: lightSwitchApplication.MenuTile,
                createQuery: function (MenuName) {
                    return this.dataWorkspace.ApplicationData.TilesForMenu(MenuName).expand("Icon");
                }
            },
            { name: "MenuName", kind: "local", type: String }
        ], [
        ]),

        IconAddEdit: $defineScreen(IconAddEdit, [
            { name: "Icon", kind: "local", type: lightSwitchApplication.Icon }
        ], [
            { name: "DeleteSelectedIcon" }
        ]),

        IconsBrowse: $defineScreen(IconsBrowse, [
            {
                name: "Icons", kind: "collection", elementType: lightSwitchApplication.Icon,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Icons;
                }
            }
        ], [
        ]),

        IconsImport: $defineScreen(IconsImport, [
            { name: "CsvList", kind: "local", type: String }
        ], [
            { name: "ImportIconsCsv" }
        ]),

        MenuAddEdit: $defineScreen(MenuAddEdit, [
            { name: "Menu", kind: "local", type: lightSwitchApplication.Menu }
        ], [
        ]),

        MenusBrowse: $defineScreen(MenusBrowse, [
            {
                name: "Menus", kind: "collection", elementType: lightSwitchApplication.Menu,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Menus;
                }
            }
        ], [
        ]),

        MenuTileAddEdit: $defineScreen(MenuTileAddEdit, [
            { name: "MenuTile", kind: "local", type: lightSwitchApplication.MenuTile }
        ], [
            { name: "DeleteSelectedTile" }
        ]),

        MenuView: $defineScreen(MenuView, [
            { name: "Menu", kind: "local", type: lightSwitchApplication.Menu },
            {
                name: "MenuTiles", kind: "collection", elementType: lightSwitchApplication.MenuTile,
                getNavigationProperty: function () {
                    if (this.owner.Menu) {
                        return this.owner.Menu.details.properties.MenuTiles;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.orderBy("Order").thenBy("Name");
                }
            }
        ], [
            { name: "DeleteEntireMenu" }
        ]),

        PermissionsBrowse: $defineScreen(PermissionsBrowse, [
            {
                name: "Permissions", kind: "collection", elementType: lightSwitchApplication.Permission,
                createQuery: function () {
                    return this.dataWorkspace.LsSecurityData.Permissions;
                }
            }
        ], [
        ]),

        PermissionView: $defineScreen(PermissionView, [
            { name: "Permission", kind: "local", type: lightSwitchApplication.Permission }
        ], [
        ]),

        Profile: $defineScreen(Profile, [
        ], [
        ]),

        RoleAddEdit: $defineScreen(RoleAddEdit, [
            { name: "Role", kind: "local", type: lightSwitchApplication.Role }
        ], [
        ]),

        RolePermissionAddEdit: $defineScreen(RolePermissionAddEdit, [
            { name: "RolePermission", kind: "local", type: lightSwitchApplication.RolePermission }
        ], [
        ]),

        RolesBrowse: $defineScreen(RolesBrowse, [
            {
                name: "Roles", kind: "collection", elementType: lightSwitchApplication.Role,
                createQuery: function () {
                    return this.dataWorkspace.LsSecurityData.Roles;
                }
            }
        ], [
        ]),

        RoleView: $defineScreen(RoleView, [
            { name: "Role", kind: "local", type: lightSwitchApplication.Role },
            {
                name: "RoleAssignments", kind: "collection", elementType: lightSwitchApplication.RoleAssignment,
                getNavigationProperty: function () {
                    if (this.owner.Role) {
                        return this.owner.Role.details.properties.RoleAssignments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("User");
                }
            },
            {
                name: "RolePermissions", kind: "collection", elementType: lightSwitchApplication.RolePermission,
                getNavigationProperty: function () {
                    if (this.owner.Role) {
                        return this.owner.Role.details.properties.RolePermissions;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("Permission");
                }
            }
        ], [
            { name: "RolePermissions1_ItemTap" },
            { name: "DeleteEntireRole" },
            { name: "DeleteRolePermission" },
            { name: "DeleteRoleAssignment" },
            { name: "RoleAssignments1_ItemTap" }
        ]),

        Start: $defineScreen(Start, [
            {
                name: "TilesForMenu", kind: "collection", elementType: lightSwitchApplication.MenuTile,
                createQuery: function (MenuName) {
                    return this.dataWorkspace.ApplicationData.TilesForMenu(MenuName).expand("Icon");
                }
            },
            { name: "MenuName", kind: "local", type: String }
        ], [
        ]),

        UserRegistrationAddEdit: $defineScreen(UserRegistrationAddEdit, [
            { name: "UserRegistration", kind: "local", type: lightSwitchApplication.UserRegistration }
        ], [
        ]),

        UserRegistrationsBrowse: $defineScreen(UserRegistrationsBrowse, [
            {
                name: "UserRegistrations", kind: "collection", elementType: lightSwitchApplication.UserRegistration,
                createQuery: function () {
                    return this.dataWorkspace.LsSecurityData.UserRegistrations;
                }
            }
        ], [
        ]),

        UserRegistrationView: $defineScreen(UserRegistrationView, [
            { name: "UserRegistration", kind: "local", type: lightSwitchApplication.UserRegistration },
            {
                name: "RoleAssignments", kind: "collection", elementType: lightSwitchApplication.RoleAssignment,
                getNavigationProperty: function () {
                    if (this.owner.UserRegistration) {
                        return this.owner.UserRegistration.details.properties.RoleAssignments;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
            { name: "DeleteUserRegistration" },
            { name: "RoleAssignments1_ItemTap" },
            { name: "DeleteRoleAssignment" }
        ]),

        UserRoleAssignmentAddEdit: $defineScreen(UserRoleAssignmentAddEdit, [
            { name: "RoleAssignment", kind: "local", type: lightSwitchApplication.RoleAssignment }
        ], [
        ]),

        showAdmin: $defineShowScreen(function showAdmin(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Admin screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Admin", parameters, options);
        }),

        showIconAddEdit: $defineShowScreen(function showIconAddEdit(Icon, options) {
            /// <summary>
            /// Asynchronously navigates forward to the IconAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("IconAddEdit", parameters, options);
        }),

        showIconsBrowse: $defineShowScreen(function showIconsBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the IconsBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("IconsBrowse", parameters, options);
        }),

        showIconsImport: $defineShowScreen(function showIconsImport(options) {
            /// <summary>
            /// Asynchronously navigates forward to the IconsImport screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("IconsImport", parameters, options);
        }),

        showMenuAddEdit: $defineShowScreen(function showMenuAddEdit(Menu, options) {
            /// <summary>
            /// Asynchronously navigates forward to the MenuAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("MenuAddEdit", parameters, options);
        }),

        showMenusBrowse: $defineShowScreen(function showMenusBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the MenusBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("MenusBrowse", parameters, options);
        }),

        showMenuTileAddEdit: $defineShowScreen(function showMenuTileAddEdit(MenuTile, options) {
            /// <summary>
            /// Asynchronously navigates forward to the MenuTileAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("MenuTileAddEdit", parameters, options);
        }),

        showMenuView: $defineShowScreen(function showMenuView(Menu, options) {
            /// <summary>
            /// Asynchronously navigates forward to the MenuView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("MenuView", parameters, options);
        }),

        showPermissionsBrowse: $defineShowScreen(function showPermissionsBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the PermissionsBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("PermissionsBrowse", parameters, options);
        }),

        showPermissionView: $defineShowScreen(function showPermissionView(Permission, options) {
            /// <summary>
            /// Asynchronously navigates forward to the PermissionView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("PermissionView", parameters, options);
        }),

        showProfile: $defineShowScreen(function showProfile(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Profile screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Profile", parameters, options);
        }),

        showRoleAddEdit: $defineShowScreen(function showRoleAddEdit(Role, options) {
            /// <summary>
            /// Asynchronously navigates forward to the RoleAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("RoleAddEdit", parameters, options);
        }),

        showRolePermissionAddEdit: $defineShowScreen(function showRolePermissionAddEdit(RolePermission, options) {
            /// <summary>
            /// Asynchronously navigates forward to the RolePermissionAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("RolePermissionAddEdit", parameters, options);
        }),

        showRolesBrowse: $defineShowScreen(function showRolesBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the RolesBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("RolesBrowse", parameters, options);
        }),

        showRoleView: $defineShowScreen(function showRoleView(Role, options) {
            /// <summary>
            /// Asynchronously navigates forward to the RoleView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("RoleView", parameters, options);
        }),

        showStart: $defineShowScreen(function showStart(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Start screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Start", parameters, options);
        }),

        showUserRegistrationAddEdit: $defineShowScreen(function showUserRegistrationAddEdit(UserRegistration, options) {
            /// <summary>
            /// Asynchronously navigates forward to the UserRegistrationAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("UserRegistrationAddEdit", parameters, options);
        }),

        showUserRegistrationsBrowse: $defineShowScreen(function showUserRegistrationsBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the UserRegistrationsBrowse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("UserRegistrationsBrowse", parameters, options);
        }),

        showUserRegistrationView: $defineShowScreen(function showUserRegistrationView(UserRegistration, options) {
            /// <summary>
            /// Asynchronously navigates forward to the UserRegistrationView screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("UserRegistrationView", parameters, options);
        }),

        showUserRoleAssignmentAddEdit: $defineShowScreen(function showUserRoleAssignmentAddEdit(RoleAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the UserRoleAssignmentAddEdit screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("UserRoleAssignmentAddEdit", parameters, options);
        })

    });

}(msls.application));
