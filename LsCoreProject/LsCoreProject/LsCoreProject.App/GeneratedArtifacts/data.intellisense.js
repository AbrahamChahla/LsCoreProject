/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Permission, {
        /// <field>
        /// Called when a new permission is created.
        /// <br/>created(msls.application.Permission entity)
        /// </field>
        created: [lightSwitchApplication.Permission]
    });

    msls._addEntryPoints(lightSwitchApplication.RoleAssignment, {
        /// <field>
        /// Called when a new roleAssignment is created.
        /// <br/>created(msls.application.RoleAssignment entity)
        /// </field>
        created: [lightSwitchApplication.RoleAssignment]
    });

    msls._addEntryPoints(lightSwitchApplication.RolePermission, {
        /// <field>
        /// Called when a new rolePermission is created.
        /// <br/>created(msls.application.RolePermission entity)
        /// </field>
        created: [lightSwitchApplication.RolePermission]
    });

    msls._addEntryPoints(lightSwitchApplication.Role, {
        /// <field>
        /// Called when a new role is created.
        /// <br/>created(msls.application.Role entity)
        /// </field>
        created: [lightSwitchApplication.Role]
    });

    msls._addEntryPoints(lightSwitchApplication.UserRegistration, {
        /// <field>
        /// Called when a new userRegistration is created.
        /// <br/>created(msls.application.UserRegistration entity)
        /// </field>
        created: [lightSwitchApplication.UserRegistration]
    });

    msls._addEntryPoints(lightSwitchApplication.Icon, {
        /// <field>
        /// Called when a new icon is created.
        /// <br/>created(msls.application.Icon entity)
        /// </field>
        created: [lightSwitchApplication.Icon]
    });

    msls._addEntryPoints(lightSwitchApplication.Menu, {
        /// <field>
        /// Called when a new menu is created.
        /// <br/>created(msls.application.Menu entity)
        /// </field>
        created: [lightSwitchApplication.Menu]
    });

    msls._addEntryPoints(lightSwitchApplication.MenuTile, {
        /// <field>
        /// Called when a new menuTile is created.
        /// <br/>created(msls.application.MenuTile entity)
        /// </field>
        created: [lightSwitchApplication.MenuTile]
    });

}(msls.application));
