/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Permission(entitySet) {
        /// <summary>
        /// Represents the Permission entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this permission.
        /// </param>
        /// <field name="Id" type="String">
        /// Gets or sets the id for this permission.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this permission.
        /// </field>
        /// <field name="RolePermissions" type="msls.EntityCollection" elementType="msls.application.RolePermission">
        /// Gets the rolePermissions for this permission.
        /// </field>
        /// <field name="MenuTiles" type="msls.EntityCollection" elementType="msls.application.MenuTile">
        /// Gets the menuTiles for this permission.
        /// </field>
        /// <field name="details" type="msls.application.Permission.Details">
        /// Gets the details for this permission.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RoleAssignment(entitySet) {
        /// <summary>
        /// Represents the RoleAssignment entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this roleAssignment.
        /// </param>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this roleAssignment.
        /// </field>
        /// <field name="RoleName" type="String">
        /// Gets or sets the roleName for this roleAssignment.
        /// </field>
        /// <field name="SourceAccountName" type="String">
        /// Gets or sets the sourceAccountName for this roleAssignment.
        /// </field>
        /// <field name="User" type="msls.application.UserRegistration">
        /// Gets or sets the user for this roleAssignment.
        /// </field>
        /// <field name="SourceAccount" type="msls.application.UserRegistration">
        /// Gets or sets the sourceAccount for this roleAssignment.
        /// </field>
        /// <field name="Role" type="msls.application.Role">
        /// Gets or sets the role for this roleAssignment.
        /// </field>
        /// <field name="details" type="msls.application.RoleAssignment.Details">
        /// Gets the details for this roleAssignment.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RolePermission(entitySet) {
        /// <summary>
        /// Represents the RolePermission entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rolePermission.
        /// </param>
        /// <field name="RoleName" type="String">
        /// Gets or sets the roleName for this rolePermission.
        /// </field>
        /// <field name="PermissionId" type="String">
        /// Gets or sets the permissionId for this rolePermission.
        /// </field>
        /// <field name="Role" type="msls.application.Role">
        /// Gets or sets the role for this rolePermission.
        /// </field>
        /// <field name="Permission" type="msls.application.Permission">
        /// Gets or sets the permission for this rolePermission.
        /// </field>
        /// <field name="details" type="msls.application.RolePermission.Details">
        /// Gets the details for this rolePermission.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Role(entitySet) {
        /// <summary>
        /// Represents the Role entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this role.
        /// </param>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this role.
        /// </field>
        /// <field name="RoleAssignments" type="msls.EntityCollection" elementType="msls.application.RoleAssignment">
        /// Gets the roleAssignments for this role.
        /// </field>
        /// <field name="RolePermissions" type="msls.EntityCollection" elementType="msls.application.RolePermission">
        /// Gets the rolePermissions for this role.
        /// </field>
        /// <field name="details" type="msls.application.Role.Details">
        /// Gets the details for this role.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UserRegistration(entitySet) {
        /// <summary>
        /// Represents the UserRegistration entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this userRegistration.
        /// </param>
        /// <field name="UserName" type="String">
        /// Gets or sets the userName for this userRegistration.
        /// </field>
        /// <field name="FullName" type="String">
        /// Gets or sets the fullName for this userRegistration.
        /// </field>
        /// <field name="Password" type="String">
        /// Gets or sets the password for this userRegistration.
        /// </field>
        /// <field name="RoleAssignments" type="msls.EntityCollection" elementType="msls.application.RoleAssignment">
        /// Gets the roleAssignments for this userRegistration.
        /// </field>
        /// <field name="DerivingRoleAssignments" type="msls.EntityCollection" elementType="msls.application.RoleAssignment">
        /// Gets the derivingRoleAssignments for this userRegistration.
        /// </field>
        /// <field name="details" type="msls.application.UserRegistration.Details">
        /// Gets the details for this userRegistration.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Icon(entitySet) {
        /// <summary>
        /// Represents the Icon entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this icon.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this icon.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this icon.
        /// </field>
        /// <field name="MenuTiles" type="msls.EntityCollection" elementType="msls.application.MenuTile">
        /// Gets the menuTiles for this icon.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this icon.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this icon.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this icon.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this icon.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this icon.
        /// </field>
        /// <field name="details" type="msls.application.Icon.Details">
        /// Gets the details for this icon.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Menu(entitySet) {
        /// <summary>
        /// Represents the Menu entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this menu.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this menu.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this menu.
        /// </field>
        /// <field name="Screen" type="String">
        /// Gets or sets the screen for this menu.
        /// </field>
        /// <field name="MenuTiles" type="msls.EntityCollection" elementType="msls.application.MenuTile">
        /// Gets the menuTiles for this menu.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this menu.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this menu.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this menu.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this menu.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this menu.
        /// </field>
        /// <field name="details" type="msls.application.Menu.Details">
        /// Gets the details for this menu.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function MenuTile(entitySet) {
        /// <summary>
        /// Represents the MenuTile entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this menuTile.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this menuTile.
        /// </field>
        /// <field name="Order" type="Number">
        /// Gets or sets the order for this menuTile.
        /// </field>
        /// <field name="TileColor" type="String">
        /// Gets or sets the tileColor for this menuTile.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this menuTile.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this menuTile.
        /// </field>
        /// <field name="Size" type="String">
        /// Gets or sets the size for this menuTile.
        /// </field>
        /// <field name="OnClick" type="String">
        /// Gets or sets the onClick for this menuTile.
        /// </field>
        /// <field name="Status" type="String">
        /// Gets or sets the status for this menuTile.
        /// </field>
        /// <field name="StatusBgColor" type="String">
        /// Gets or sets the statusBgColor for this menuTile.
        /// </field>
        /// <field name="StatusFgColor" type="String">
        /// Gets or sets the statusFgColor for this menuTile.
        /// </field>
        /// <field name="Badge" type="String">
        /// Gets or sets the badge for this menuTile.
        /// </field>
        /// <field name="BadgeBgColor" type="String">
        /// Gets or sets the badgeBgColor for this menuTile.
        /// </field>
        /// <field name="BadgeFgColor" type="String">
        /// Gets or sets the badgeFgColor for this menuTile.
        /// </field>
        /// <field name="IconBgColor" type="String">
        /// Gets or sets the iconBgColor for this menuTile.
        /// </field>
        /// <field name="IconFgColor" type="String">
        /// Gets or sets the iconFgColor for this menuTile.
        /// </field>
        /// <field name="PermissionId" type="String">
        /// Gets or sets the permissionId for this menuTile.
        /// </field>
        /// <field name="Menu" type="msls.application.Menu">
        /// Gets or sets the menu for this menuTile.
        /// </field>
        /// <field name="Icon" type="msls.application.Icon">
        /// Gets or sets the icon for this menuTile.
        /// </field>
        /// <field name="Permission" type="Permission">
        /// Gets or sets the permission for this menuTile.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this menuTile.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this menuTile.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this menuTile.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this menuTile.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this menuTile.
        /// </field>
        /// <field name="details" type="msls.application.MenuTile.Details">
        /// Gets the details for this menuTile.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function LsSecurityData(dataWorkspace) {
        /// <summary>
        /// Represents the LsSecurityData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Permissions" type="msls.EntitySet">
        /// Gets the Permissions entity set.
        /// </field>
        /// <field name="RoleAssignments" type="msls.EntitySet">
        /// Gets the RoleAssignments entity set.
        /// </field>
        /// <field name="RolePermissions1" type="msls.EntitySet">
        /// Gets the RolePermissions1 entity set.
        /// </field>
        /// <field name="Roles" type="msls.EntitySet">
        /// Gets the Roles entity set.
        /// </field>
        /// <field name="UserRegistrations" type="msls.EntitySet">
        /// Gets the UserRegistrations entity set.
        /// </field>
        /// <field name="details" type="msls.application.LsSecurityData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Icons" type="msls.EntitySet">
        /// Gets the Icons entity set.
        /// </field>
        /// <field name="Menus" type="msls.EntitySet">
        /// Gets the Menus entity set.
        /// </field>
        /// <field name="MenuTiles" type="msls.EntitySet">
        /// Gets the MenuTiles entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="LsSecurityData" type="msls.application.LsSecurityData">
        /// Gets the LsSecurityData data service.
        /// </field>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Permission: $defineEntity(Permission, [
            { name: "Id", type: String },
            { name: "Name", type: String },
            { name: "RolePermissions", kind: "collection", elementType: RolePermission },
            { name: "MenuTiles", kind: "virtualCollection", elementType: MenuTile }
        ]),

        RoleAssignment: $defineEntity(RoleAssignment, [
            { name: "UserName", type: String },
            { name: "RoleName", type: String },
            { name: "SourceAccountName", type: String },
            { name: "User", kind: "reference", type: UserRegistration },
            { name: "SourceAccount", kind: "reference", type: UserRegistration },
            { name: "Role", kind: "reference", type: Role }
        ]),

        RolePermission: $defineEntity(RolePermission, [
            { name: "RoleName", type: String },
            { name: "PermissionId", type: String },
            { name: "Role", kind: "reference", type: Role },
            { name: "Permission", kind: "reference", type: Permission }
        ]),

        Role: $defineEntity(Role, [
            { name: "Name", type: String },
            { name: "RoleAssignments", kind: "collection", elementType: RoleAssignment },
            { name: "RolePermissions", kind: "collection", elementType: RolePermission }
        ]),

        UserRegistration: $defineEntity(UserRegistration, [
            { name: "UserName", type: String },
            { name: "FullName", type: String },
            { name: "Password", type: String },
            { name: "RoleAssignments", kind: "collection", elementType: RoleAssignment },
            { name: "DerivingRoleAssignments", kind: "collection", elementType: RoleAssignment }
        ]),

        Icon: $defineEntity(Icon, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "MenuTiles", kind: "collection", elementType: MenuTile },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        Menu: $defineEntity(Menu, [
            { name: "Id", type: Number },
            { name: "Name", type: String },
            { name: "Screen", type: String },
            { name: "MenuTiles", kind: "collection", elementType: MenuTile },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        MenuTile: $defineEntity(MenuTile, [
            { name: "Id", type: Number },
            { name: "Order", type: Number },
            { name: "TileColor", type: String },
            { name: "Type", type: String },
            { name: "Name", type: String },
            { name: "Size", type: String },
            { name: "OnClick", type: String },
            { name: "Status", type: String },
            { name: "StatusBgColor", type: String },
            { name: "StatusFgColor", type: String },
            { name: "Badge", type: String },
            { name: "BadgeBgColor", type: String },
            { name: "BadgeFgColor", type: String },
            { name: "IconBgColor", type: String },
            { name: "IconFgColor", type: String },
            { name: "PermissionId", type: String },
            { name: "Menu", kind: "reference", type: Menu },
            { name: "Icon", kind: "reference", type: Icon },
            { name: "Permission", kind: "virtualReference", type: Permission },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        LsSecurityData: $defineDataService(LsSecurityData, lightSwitchApplication.rootUri + "/LsSecurityData.svc", [
            { name: "Permissions", elementType: Permission },
            { name: "RoleAssignments", elementType: RoleAssignment },
            { name: "RolePermissions1", elementType: RolePermission },
            { name: "Roles", elementType: Role },
            { name: "UserRegistrations", elementType: UserRegistration }
        ], [
            {
                name: "Permissions_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Permissions },
                        lightSwitchApplication.rootUri + "/LsSecurityData.svc" + "/Permissions(" + "Id=" + $toODataString(Id, "String?") + ")"
                    );
                }
            },
            {
                name: "RoleAssignments_SingleOrDefault", value: function (UserName, RoleName, SourceAccountName) {
                    return new $DataServiceQuery({ _entitySet: this.RoleAssignments },
                        lightSwitchApplication.rootUri + "/LsSecurityData.svc" + "/RoleAssignments(" + "UserName=" + $toODataString(UserName, "String?") + "," + "RoleName=" + $toODataString(RoleName, "String?") + "," + "SourceAccountName=" + $toODataString(SourceAccountName, "String?") + ")"
                    );
                }
            },
            {
                name: "RolePermissions1_SingleOrDefault", value: function (RoleName, PermissionId) {
                    return new $DataServiceQuery({ _entitySet: this.RolePermissions1 },
                        lightSwitchApplication.rootUri + "/LsSecurityData.svc" + "/RolePermissions1(" + "RoleName=" + $toODataString(RoleName, "String?") + "," + "PermissionId=" + $toODataString(PermissionId, "String?") + ")"
                    );
                }
            },
            {
                name: "Roles_SingleOrDefault", value: function (Name) {
                    return new $DataServiceQuery({ _entitySet: this.Roles },
                        lightSwitchApplication.rootUri + "/LsSecurityData.svc" + "/Roles(" + "Name=" + $toODataString(Name, "String?") + ")"
                    );
                }
            },
            {
                name: "UserRegistrations_SingleOrDefault", value: function (UserName) {
                    return new $DataServiceQuery({ _entitySet: this.UserRegistrations },
                        lightSwitchApplication.rootUri + "/LsSecurityData.svc" + "/UserRegistrations(" + "UserName=" + $toODataString(UserName, "String?") + ")"
                    );
                }
            }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Icons", elementType: Icon },
            { name: "Menus", elementType: Menu },
            { name: "MenuTiles", elementType: MenuTile }
        ], [
            {
                name: "Icons_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Icons },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Icons(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Menus_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Menus },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Menus(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "MenuTiles_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.MenuTiles },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/MenuTiles(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TilesForMenu", value: function (MenuName) {
                    return new $DataServiceQuery({ _entitySet: this.MenuTiles },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/TilesForMenu()",
                        {
                            MenuName: $toODataString(MenuName, "String?")
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "LsSecurityData", type: LsSecurityData },
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
