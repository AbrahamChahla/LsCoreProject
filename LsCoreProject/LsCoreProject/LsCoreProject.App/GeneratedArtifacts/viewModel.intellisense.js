/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.Security.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Security
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Security,
            data: lightSwitchApplication.Security,
            value: lightSwitchApplication.Security
        },
        ScreenContent: {
            _$class: msls.ContentItem,
            _$name: "ScreenContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.Security,
            data: lightSwitchApplication.Security,
            value: lightSwitchApplication.Security
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Security
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Security, {
        /// <field>
        /// Called when a new Security screen is created.
        /// <br/>created(msls.application.Security screen)
        /// </field>
        created: [lightSwitchApplication.Security],
        /// <field>
        /// Called before changes on an active Security screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Security screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Security],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Security().findContentItem("Group"); }],
        /// <field>
        /// Called to render the ScreenContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ScreenContent_render: [$element, function () { return new lightSwitchApplication.Security().findContentItem("ScreenContent"); }]
    });

    lightSwitchApplication.IconAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.IconAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.IconAddEdit,
            data: lightSwitchApplication.IconAddEdit,
            value: lightSwitchApplication.IconAddEdit
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.IconAddEdit,
            data: lightSwitchApplication.IconAddEdit,
            value: String
        },
        Icon_Name: {
            _$class: msls.ContentItem,
            _$name: "Icon_Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.IconAddEdit,
            data: lightSwitchApplication.IconAddEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.IconAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.IconAddEdit, {
        /// <field>
        /// Called when a new IconAddEdit screen is created.
        /// <br/>created(msls.application.IconAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.IconAddEdit],
        /// <field>
        /// Called before changes on an active IconAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.IconAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.IconAddEdit],
        /// <field>
        /// Called to determine if the DeleteSelectedIcon method can be executed.
        /// <br/>canExecute(msls.application.IconAddEdit screen)
        /// </field>
        DeleteSelectedIcon_canExecute: [lightSwitchApplication.IconAddEdit],
        /// <field>
        /// Called to execute the DeleteSelectedIcon method.
        /// <br/>execute(msls.application.IconAddEdit screen)
        /// </field>
        DeleteSelectedIcon_execute: [lightSwitchApplication.IconAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.IconAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.IconAddEdit().findContentItem("Name"); }],
        /// <field>
        /// Called to render the Icon_Name content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon_Name_render: [$element, function () { return new lightSwitchApplication.IconAddEdit().findContentItem("Icon_Name"); }]
    });

    lightSwitchApplication.IconsBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.IconsBrowse
        },
        IconList: {
            _$class: msls.ContentItem,
            _$name: "IconList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.IconsBrowse,
            data: lightSwitchApplication.IconsBrowse,
            value: lightSwitchApplication.IconsBrowse
        },
        Icon: {
            _$class: msls.ContentItem,
            _$name: "Icon",
            _$parentName: "IconList",
            screen: lightSwitchApplication.IconsBrowse,
            data: lightSwitchApplication.IconsBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.IconsBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.Icon
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Icon",
            screen: lightSwitchApplication.IconsBrowse,
            data: lightSwitchApplication.Icon,
            value: lightSwitchApplication.Icon
        },
        Icon1: {
            _$class: msls.ContentItem,
            _$name: "Icon1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.IconsBrowse,
            data: lightSwitchApplication.Icon,
            value: lightSwitchApplication.Icon
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.IconsBrowse,
            data: lightSwitchApplication.Icon,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.IconsBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.IconsBrowse, {
        /// <field>
        /// Called when a new IconsBrowse screen is created.
        /// <br/>created(msls.application.IconsBrowse screen)
        /// </field>
        created: [lightSwitchApplication.IconsBrowse],
        /// <field>
        /// Called before changes on an active IconsBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.IconsBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.IconsBrowse],
        /// <field>
        /// Called after the IconList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IconList_postRender: [$element, function () { return new lightSwitchApplication.IconsBrowse().findContentItem("IconList"); }],
        /// <field>
        /// Called after the Icon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon_postRender: [$element, function () { return new lightSwitchApplication.IconsBrowse().findContentItem("Icon"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.IconsBrowse().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called to render the Icon1 content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon1_render: [$element, function () { return new lightSwitchApplication.IconsBrowse().findContentItem("Icon1"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.IconsBrowse().findContentItem("Name"); }]
    });

    lightSwitchApplication.IconsImport.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.IconsImport
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.IconsImport,
            data: lightSwitchApplication.IconsImport,
            value: lightSwitchApplication.IconsImport
        },
        CsvList: {
            _$class: msls.ContentItem,
            _$name: "CsvList",
            _$parentName: "Group",
            screen: lightSwitchApplication.IconsImport,
            data: lightSwitchApplication.IconsImport,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.IconsImport
        }
    };

    msls._addEntryPoints(lightSwitchApplication.IconsImport, {
        /// <field>
        /// Called when a new IconsImport screen is created.
        /// <br/>created(msls.application.IconsImport screen)
        /// </field>
        created: [lightSwitchApplication.IconsImport],
        /// <field>
        /// Called before changes on an active IconsImport screen are applied.
        /// <br/>beforeApplyChanges(msls.application.IconsImport screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.IconsImport],
        /// <field>
        /// Called to determine if the ImportIconsCsv method can be executed.
        /// <br/>canExecute(msls.application.IconsImport screen)
        /// </field>
        ImportIconsCsv_canExecute: [lightSwitchApplication.IconsImport],
        /// <field>
        /// Called to execute the ImportIconsCsv method.
        /// <br/>execute(msls.application.IconsImport screen)
        /// </field>
        ImportIconsCsv_execute: [lightSwitchApplication.IconsImport],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.IconsImport().findContentItem("Group"); }],
        /// <field>
        /// Called after the CsvList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CsvList_postRender: [$element, function () { return new lightSwitchApplication.IconsImport().findContentItem("CsvList"); }]
    });

    lightSwitchApplication.MenuAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenuAddEdit,
            data: lightSwitchApplication.MenuAddEdit,
            value: lightSwitchApplication.MenuAddEdit
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.MenuAddEdit,
            data: lightSwitchApplication.MenuAddEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenuAddEdit, {
        /// <field>
        /// Called when a new MenuAddEdit screen is created.
        /// <br/>created(msls.application.MenuAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.MenuAddEdit],
        /// <field>
        /// Called before changes on an active MenuAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenuAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenuAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.MenuAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.MenuAddEdit().findContentItem("Name"); }]
    });

    lightSwitchApplication.MenusBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenusBrowse
        },
        MenuList: {
            _$class: msls.ContentItem,
            _$name: "MenuList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenusBrowse,
            data: lightSwitchApplication.MenusBrowse,
            value: lightSwitchApplication.MenusBrowse
        },
        Menu: {
            _$class: msls.ContentItem,
            _$name: "Menu",
            _$parentName: "MenuList",
            screen: lightSwitchApplication.MenusBrowse,
            data: lightSwitchApplication.MenusBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.MenusBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.Menu
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Menu",
            screen: lightSwitchApplication.MenusBrowse,
            data: lightSwitchApplication.Menu,
            value: lightSwitchApplication.Menu
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenusBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenusBrowse, {
        /// <field>
        /// Called when a new MenusBrowse screen is created.
        /// <br/>created(msls.application.MenusBrowse screen)
        /// </field>
        created: [lightSwitchApplication.MenusBrowse],
        /// <field>
        /// Called before changes on an active MenusBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenusBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenusBrowse],
        /// <field>
        /// Called to determine if the ExportAll method can be executed.
        /// <br/>canExecute(msls.application.MenusBrowse screen)
        /// </field>
        ExportAll_canExecute: [lightSwitchApplication.MenusBrowse],
        /// <field>
        /// Called to execute the ExportAll method.
        /// <br/>execute(msls.application.MenusBrowse screen)
        /// </field>
        ExportAll_execute: [lightSwitchApplication.MenusBrowse],
        /// <field>
        /// Called after the MenuList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuList_postRender: [$element, function () { return new lightSwitchApplication.MenusBrowse().findContentItem("MenuList"); }],
        /// <field>
        /// Called after the Menu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Menu_postRender: [$element, function () { return new lightSwitchApplication.MenusBrowse().findContentItem("Menu"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.MenusBrowse().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.MenuTileAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuTileAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTileAddEdit,
            value: lightSwitchApplication.MenuTileAddEdit
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTileAddEdit,
            value: lightSwitchApplication.MenuTile
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        Order: {
            _$class: msls.ContentItem,
            _$name: "Order",
            _$parentName: "Group",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: Number
        },
        TileColor: {
            _$class: msls.ContentItem,
            _$name: "TileColor",
            _$parentName: "Group",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Size: {
            _$class: msls.ContentItem,
            _$name: "Size",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Permission: {
            _$class: msls.ContentItem,
            _$name: "Permission",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.Permission
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Permission",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        OnClick: {
            _$class: msls.ContentItem,
            _$name: "OnClick",
            _$parentName: "left",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        Status: {
            _$class: msls.ContentItem,
            _$name: "Status",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        StatusBgColor: {
            _$class: msls.ContentItem,
            _$name: "StatusBgColor",
            _$parentName: "Group1",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        StatusFgColor: {
            _$class: msls.ContentItem,
            _$name: "StatusFgColor",
            _$parentName: "Group1",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Badge: {
            _$class: msls.ContentItem,
            _$name: "Badge",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        BadgeBgColor: {
            _$class: msls.ContentItem,
            _$name: "BadgeBgColor",
            _$parentName: "Group2",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        BadgeFgColor: {
            _$class: msls.ContentItem,
            _$name: "BadgeFgColor",
            _$parentName: "Group2",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Icon: {
            _$class: msls.ContentItem,
            _$name: "Icon",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.Icon
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Icon",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.Icon,
            value: lightSwitchApplication.Icon
        },
        Icon1: {
            _$class: msls.ContentItem,
            _$name: "Icon1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.Icon,
            value: lightSwitchApplication.Icon
        },
        Name1: {
            _$class: msls.ContentItem,
            _$name: "Name1",
            _$parentName: "RowTemplate1",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.Icon,
            value: String
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "right",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        IconBgColor: {
            _$class: msls.ContentItem,
            _$name: "IconBgColor",
            _$parentName: "Group3",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        IconFgColor: {
            _$class: msls.ContentItem,
            _$name: "IconFgColor",
            _$parentName: "Group3",
            screen: lightSwitchApplication.MenuTileAddEdit,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuTileAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenuTileAddEdit, {
        /// <field>
        /// Called when a new MenuTileAddEdit screen is created.
        /// <br/>created(msls.application.MenuTileAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.MenuTileAddEdit],
        /// <field>
        /// Called before changes on an active MenuTileAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenuTileAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenuTileAddEdit],
        /// <field>
        /// Called to determine if the DeleteSelectedTile method can be executed.
        /// <br/>canExecute(msls.application.MenuTileAddEdit screen)
        /// </field>
        DeleteSelectedTile_canExecute: [lightSwitchApplication.MenuTileAddEdit],
        /// <field>
        /// Called to execute the DeleteSelectedTile method.
        /// <br/>execute(msls.application.MenuTileAddEdit screen)
        /// </field>
        DeleteSelectedTile_execute: [lightSwitchApplication.MenuTileAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("left"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Group"); }],
        /// <field>
        /// Called after the Order content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Order_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Order"); }],
        /// <field>
        /// Called to render the TileColor content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TileColor_render: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("TileColor"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Type"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Name"); }],
        /// <field>
        /// Called after the Size content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Size_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Size"); }],
        /// <field>
        /// Called after the Permission content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Permission_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Permission"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the OnClick content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        OnClick_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("OnClick"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("right"); }],
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Status"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Group1"); }],
        /// <field>
        /// Called to render the StatusBgColor content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusBgColor_render: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("StatusBgColor"); }],
        /// <field>
        /// Called to render the StatusFgColor content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusFgColor_render: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("StatusFgColor"); }],
        /// <field>
        /// Called after the Badge content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Badge_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Badge"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Group2"); }],
        /// <field>
        /// Called to render the BadgeBgColor content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BadgeBgColor_render: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("BadgeBgColor"); }],
        /// <field>
        /// Called to render the BadgeFgColor content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BadgeFgColor_render: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("BadgeFgColor"); }],
        /// <field>
        /// Called after the Icon content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Icon"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called to render the Icon1 content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Icon1_render: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Icon1"); }],
        /// <field>
        /// Called after the Name1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name1_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Name1"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("Group3"); }],
        /// <field>
        /// Called to render the IconBgColor content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IconBgColor_render: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("IconBgColor"); }],
        /// <field>
        /// Called to render the IconFgColor content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IconFgColor_render: [$element, function () { return new lightSwitchApplication.MenuTileAddEdit().findContentItem("IconFgColor"); }]
    });

    lightSwitchApplication.MenuView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuView
        },
        MenuTiles: {
            _$class: msls.ContentItem,
            _$name: "MenuTiles",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuView,
            value: lightSwitchApplication.MenuView
        },
        MenuTiles1: {
            _$class: msls.ContentItem,
            _$name: "MenuTiles1",
            _$parentName: "MenuTiles",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.MenuView,
                _$entry: {
                    elementType: lightSwitchApplication.MenuTile
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "MenuTiles1",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: lightSwitchApplication.MenuTile
        },
        Order: {
            _$class: msls.ContentItem,
            _$name: "Order",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: Number
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.MenuView,
            data: lightSwitchApplication.MenuTile,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenuView, {
        /// <field>
        /// Called when a new MenuView screen is created.
        /// <br/>created(msls.application.MenuView screen)
        /// </field>
        created: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called before changes on an active MenuView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenuView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called to determine if the DeleteEntireMenu method can be executed.
        /// <br/>canExecute(msls.application.MenuView screen)
        /// </field>
        DeleteEntireMenu_canExecute: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called to execute the DeleteEntireMenu method.
        /// <br/>execute(msls.application.MenuView screen)
        /// </field>
        DeleteEntireMenu_execute: [lightSwitchApplication.MenuView],
        /// <field>
        /// Called after the MenuTiles content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuTiles_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("MenuTiles"); }],
        /// <field>
        /// Called after the MenuTiles1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        MenuTiles1_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("MenuTiles1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Order content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Order_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Order"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.MenuView().findContentItem("Name"); }]
    });

    lightSwitchApplication.PermissionsBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.PermissionsBrowse
        },
        PermissionList: {
            _$class: msls.ContentItem,
            _$name: "PermissionList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.PermissionsBrowse,
            data: lightSwitchApplication.PermissionsBrowse,
            value: lightSwitchApplication.PermissionsBrowse
        },
        Permission: {
            _$class: msls.ContentItem,
            _$name: "Permission",
            _$parentName: "PermissionList",
            screen: lightSwitchApplication.PermissionsBrowse,
            data: lightSwitchApplication.PermissionsBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.PermissionsBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.Permission
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Permission",
            screen: lightSwitchApplication.PermissionsBrowse,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.PermissionsBrowse,
            data: lightSwitchApplication.Permission,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.PermissionsBrowse,
            data: lightSwitchApplication.Permission,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.PermissionsBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.PermissionsBrowse, {
        /// <field>
        /// Called when a new PermissionsBrowse screen is created.
        /// <br/>created(msls.application.PermissionsBrowse screen)
        /// </field>
        created: [lightSwitchApplication.PermissionsBrowse],
        /// <field>
        /// Called before changes on an active PermissionsBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.PermissionsBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.PermissionsBrowse],
        /// <field>
        /// Called after the PermissionList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PermissionList_postRender: [$element, function () { return new lightSwitchApplication.PermissionsBrowse().findContentItem("PermissionList"); }],
        /// <field>
        /// Called after the Permission content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Permission_postRender: [$element, function () { return new lightSwitchApplication.PermissionsBrowse().findContentItem("Permission"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.PermissionsBrowse().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.PermissionsBrowse().findContentItem("Name"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.PermissionsBrowse().findContentItem("Id"); }]
    });

    lightSwitchApplication.PermissionView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.PermissionView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.PermissionView,
            data: lightSwitchApplication.PermissionView,
            value: lightSwitchApplication.PermissionView
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.PermissionView,
            data: lightSwitchApplication.PermissionView,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "Details",
            screen: lightSwitchApplication.PermissionView,
            data: lightSwitchApplication.PermissionView,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.PermissionView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.PermissionView, {
        /// <field>
        /// Called when a new PermissionView screen is created.
        /// <br/>created(msls.application.PermissionView screen)
        /// </field>
        created: [lightSwitchApplication.PermissionView],
        /// <field>
        /// Called before changes on an active PermissionView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.PermissionView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.PermissionView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.PermissionView().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.PermissionView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.PermissionView().findContentItem("Id"); }]
    });

    lightSwitchApplication.Profile.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Profile
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Profile,
            data: lightSwitchApplication.Profile,
            value: lightSwitchApplication.Profile
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Profile
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Profile, {
        /// <field>
        /// Called when a new Profile screen is created.
        /// <br/>created(msls.application.Profile screen)
        /// </field>
        created: [lightSwitchApplication.Profile],
        /// <field>
        /// Called before changes on an active Profile screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Profile screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Profile],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Profile().findContentItem("Group"); }]
    });

    lightSwitchApplication.RoleAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RoleAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.RoleAddEdit,
            data: lightSwitchApplication.RoleAddEdit,
            value: lightSwitchApplication.RoleAddEdit
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "Details",
            screen: lightSwitchApplication.RoleAddEdit,
            data: lightSwitchApplication.RoleAddEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RoleAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.RoleAddEdit, {
        /// <field>
        /// Called when a new RoleAddEdit screen is created.
        /// <br/>created(msls.application.RoleAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.RoleAddEdit],
        /// <field>
        /// Called before changes on an active RoleAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.RoleAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.RoleAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.RoleAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.RoleAddEdit().findContentItem("Name"); }]
    });

    lightSwitchApplication.RolePermissionAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RolePermissionAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.RolePermissionAddEdit,
            data: lightSwitchApplication.RolePermissionAddEdit,
            value: lightSwitchApplication.RolePermissionAddEdit
        },
        Permission: {
            _$class: msls.ContentItem,
            _$name: "Permission",
            _$parentName: "Details",
            screen: lightSwitchApplication.RolePermissionAddEdit,
            data: lightSwitchApplication.RolePermissionAddEdit,
            value: lightSwitchApplication.Permission
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "Permission",
            screen: lightSwitchApplication.RolePermissionAddEdit,
            data: lightSwitchApplication.Permission,
            value: lightSwitchApplication.Permission
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RolePermissionAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.RolePermissionAddEdit, {
        /// <field>
        /// Called when a new RolePermissionAddEdit screen is created.
        /// <br/>created(msls.application.RolePermissionAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.RolePermissionAddEdit],
        /// <field>
        /// Called before changes on an active RolePermissionAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.RolePermissionAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.RolePermissionAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.RolePermissionAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Permission content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Permission_postRender: [$element, function () { return new lightSwitchApplication.RolePermissionAddEdit().findContentItem("Permission"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.RolePermissionAddEdit().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.RolesBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RolesBrowse
        },
        RoleList: {
            _$class: msls.ContentItem,
            _$name: "RoleList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.RolesBrowse,
            data: lightSwitchApplication.RolesBrowse,
            value: lightSwitchApplication.RolesBrowse
        },
        Role: {
            _$class: msls.ContentItem,
            _$name: "Role",
            _$parentName: "RoleList",
            screen: lightSwitchApplication.RolesBrowse,
            data: lightSwitchApplication.RolesBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.RolesBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.Role
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "Role",
            screen: lightSwitchApplication.RolesBrowse,
            data: lightSwitchApplication.Role,
            value: lightSwitchApplication.Role
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.RolesBrowse,
            data: lightSwitchApplication.Role,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RolesBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.RolesBrowse, {
        /// <field>
        /// Called when a new RolesBrowse screen is created.
        /// <br/>created(msls.application.RolesBrowse screen)
        /// </field>
        created: [lightSwitchApplication.RolesBrowse],
        /// <field>
        /// Called before changes on an active RolesBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.RolesBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.RolesBrowse],
        /// <field>
        /// Called after the RoleList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoleList_postRender: [$element, function () { return new lightSwitchApplication.RolesBrowse().findContentItem("RoleList"); }],
        /// <field>
        /// Called after the Role content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Role_postRender: [$element, function () { return new lightSwitchApplication.RolesBrowse().findContentItem("Role"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.RolesBrowse().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.RolesBrowse().findContentItem("Name"); }]
    });

    lightSwitchApplication.RoleView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RoleView
        },
        RolePermissions: {
            _$class: msls.ContentItem,
            _$name: "RolePermissions",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RoleView,
            value: lightSwitchApplication.RoleView
        },
        RolePermissions1: {
            _$class: msls.ContentItem,
            _$name: "RolePermissions1",
            _$parentName: "RolePermissions",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RoleView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.RoleView,
                _$entry: {
                    elementType: lightSwitchApplication.RolePermission
                }
            }
        },
        RowTemplate3: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate3",
            _$parentName: "RolePermissions1",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RolePermission,
            value: lightSwitchApplication.RolePermission
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RolePermission,
            value: String
        },
        Id: {
            _$class: msls.ContentItem,
            _$name: "Id",
            _$parentName: "RowTemplate3",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RolePermission,
            value: String
        },
        RoleAssignments: {
            _$class: msls.ContentItem,
            _$name: "RoleAssignments",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RoleView,
            value: lightSwitchApplication.RoleView
        },
        RoleAssignments1: {
            _$class: msls.ContentItem,
            _$name: "RoleAssignments1",
            _$parentName: "RoleAssignments",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RoleView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.RoleView,
                _$entry: {
                    elementType: lightSwitchApplication.RoleAssignment
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RoleAssignments1",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RoleAssignment,
            value: lightSwitchApplication.RoleAssignment
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RoleAssignment,
            value: String
        },
        FullName: {
            _$class: msls.ContentItem,
            _$name: "FullName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.RoleView,
            data: lightSwitchApplication.RoleAssignment,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.RoleView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.RoleView, {
        /// <field>
        /// Called when a new RoleView screen is created.
        /// <br/>created(msls.application.RoleView screen)
        /// </field>
        created: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called before changes on an active RoleView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.RoleView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to determine if the RolePermissions1_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.RoleView screen)
        /// </field>
        RolePermissions1_ItemTap_canExecute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to execute the RolePermissions1_ItemTap method.
        /// <br/>execute(msls.application.RoleView screen)
        /// </field>
        RolePermissions1_ItemTap_execute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to determine if the DeleteEntireRole method can be executed.
        /// <br/>canExecute(msls.application.RoleView screen)
        /// </field>
        DeleteEntireRole_canExecute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to execute the DeleteEntireRole method.
        /// <br/>execute(msls.application.RoleView screen)
        /// </field>
        DeleteEntireRole_execute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to determine if the DeleteRolePermission method can be executed.
        /// <br/>canExecute(msls.application.RoleView screen)
        /// </field>
        DeleteRolePermission_canExecute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to execute the DeleteRolePermission method.
        /// <br/>execute(msls.application.RoleView screen)
        /// </field>
        DeleteRolePermission_execute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to determine if the DeleteRoleAssignment method can be executed.
        /// <br/>canExecute(msls.application.RoleView screen)
        /// </field>
        DeleteRoleAssignment_canExecute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to execute the DeleteRoleAssignment method.
        /// <br/>execute(msls.application.RoleView screen)
        /// </field>
        DeleteRoleAssignment_execute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to determine if the RoleAssignments1_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.RoleView screen)
        /// </field>
        RoleAssignments1_ItemTap_canExecute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called to execute the RoleAssignments1_ItemTap method.
        /// <br/>execute(msls.application.RoleView screen)
        /// </field>
        RoleAssignments1_ItemTap_execute: [lightSwitchApplication.RoleView],
        /// <field>
        /// Called after the RolePermissions content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RolePermissions_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("RolePermissions"); }],
        /// <field>
        /// Called after the RolePermissions1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RolePermissions1_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("RolePermissions1"); }],
        /// <field>
        /// Called after the RowTemplate3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate3_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("RowTemplate3"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("Name"); }],
        /// <field>
        /// Called after the Id content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Id_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("Id"); }],
        /// <field>
        /// Called after the RoleAssignments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoleAssignments_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("RoleAssignments"); }],
        /// <field>
        /// Called after the RoleAssignments1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoleAssignments1_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("RoleAssignments1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FullName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FullName_postRender: [$element, function () { return new lightSwitchApplication.RoleView().findContentItem("FullName"); }]
    });

    lightSwitchApplication.Start.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Start
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Start,
            data: lightSwitchApplication.Start,
            value: lightSwitchApplication.Start
        },
        ScreenContent: {
            _$class: msls.ContentItem,
            _$name: "ScreenContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.Start,
            data: lightSwitchApplication.Start,
            value: lightSwitchApplication.Start
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Start
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Start, {
        /// <field>
        /// Called when a new Start screen is created.
        /// <br/>created(msls.application.Start screen)
        /// </field>
        created: [lightSwitchApplication.Start],
        /// <field>
        /// Called before changes on an active Start screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Start screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Start],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Start().findContentItem("Group"); }],
        /// <field>
        /// Called to render the ScreenContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ScreenContent_render: [$element, function () { return new lightSwitchApplication.Start().findContentItem("ScreenContent"); }]
    });

    lightSwitchApplication.UserRegistrationAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UserRegistrationAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UserRegistrationAddEdit,
            data: lightSwitchApplication.UserRegistrationAddEdit,
            value: lightSwitchApplication.UserRegistrationAddEdit
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "Details",
            screen: lightSwitchApplication.UserRegistrationAddEdit,
            data: lightSwitchApplication.UserRegistrationAddEdit,
            value: String
        },
        FullName: {
            _$class: msls.ContentItem,
            _$name: "FullName",
            _$parentName: "Details",
            screen: lightSwitchApplication.UserRegistrationAddEdit,
            data: lightSwitchApplication.UserRegistrationAddEdit,
            value: String
        },
        Password: {
            _$class: msls.ContentItem,
            _$name: "Password",
            _$parentName: "Details",
            screen: lightSwitchApplication.UserRegistrationAddEdit,
            data: lightSwitchApplication.UserRegistrationAddEdit,
            value: String
        },
        ConfirmPassword: {
            _$class: msls.ContentItem,
            _$name: "ConfirmPassword",
            _$parentName: "Details",
            screen: lightSwitchApplication.UserRegistrationAddEdit,
            data: lightSwitchApplication.UserRegistrationAddEdit,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UserRegistrationAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.UserRegistrationAddEdit, {
        /// <field>
        /// Called when a new UserRegistrationAddEdit screen is created.
        /// <br/>created(msls.application.UserRegistrationAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.UserRegistrationAddEdit],
        /// <field>
        /// Called before changes on an active UserRegistrationAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.UserRegistrationAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.UserRegistrationAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationAddEdit().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FullName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FullName_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationAddEdit().findContentItem("FullName"); }],
        /// <field>
        /// Called after the Password content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Password_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationAddEdit().findContentItem("Password"); }],
        /// <field>
        /// Called after the ConfirmPassword content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConfirmPassword_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationAddEdit().findContentItem("ConfirmPassword"); }]
    });

    lightSwitchApplication.UserRegistrationsBrowse.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UserRegistrationsBrowse
        },
        UserRegistrationList: {
            _$class: msls.ContentItem,
            _$name: "UserRegistrationList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UserRegistrationsBrowse,
            data: lightSwitchApplication.UserRegistrationsBrowse,
            value: lightSwitchApplication.UserRegistrationsBrowse
        },
        UserRegistration: {
            _$class: msls.ContentItem,
            _$name: "UserRegistration",
            _$parentName: "UserRegistrationList",
            screen: lightSwitchApplication.UserRegistrationsBrowse,
            data: lightSwitchApplication.UserRegistrationsBrowse,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.UserRegistrationsBrowse,
                _$entry: {
                    elementType: lightSwitchApplication.UserRegistration
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "UserRegistration",
            screen: lightSwitchApplication.UserRegistrationsBrowse,
            data: lightSwitchApplication.UserRegistration,
            value: lightSwitchApplication.UserRegistration
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UserRegistrationsBrowse,
            data: lightSwitchApplication.UserRegistration,
            value: String
        },
        FullName: {
            _$class: msls.ContentItem,
            _$name: "FullName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UserRegistrationsBrowse,
            data: lightSwitchApplication.UserRegistration,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UserRegistrationsBrowse
        }
    };

    msls._addEntryPoints(lightSwitchApplication.UserRegistrationsBrowse, {
        /// <field>
        /// Called when a new UserRegistrationsBrowse screen is created.
        /// <br/>created(msls.application.UserRegistrationsBrowse screen)
        /// </field>
        created: [lightSwitchApplication.UserRegistrationsBrowse],
        /// <field>
        /// Called before changes on an active UserRegistrationsBrowse screen are applied.
        /// <br/>beforeApplyChanges(msls.application.UserRegistrationsBrowse screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.UserRegistrationsBrowse],
        /// <field>
        /// Called after the UserRegistrationList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserRegistrationList_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationsBrowse().findContentItem("UserRegistrationList"); }],
        /// <field>
        /// Called after the UserRegistration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserRegistration_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationsBrowse().findContentItem("UserRegistration"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationsBrowse().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationsBrowse().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FullName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FullName_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationsBrowse().findContentItem("FullName"); }]
    });

    lightSwitchApplication.UserRegistrationView.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UserRegistrationView
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UserRegistrationView,
            data: lightSwitchApplication.UserRegistrationView,
            value: lightSwitchApplication.UserRegistrationView
        },
        UserName: {
            _$class: msls.ContentItem,
            _$name: "UserName",
            _$parentName: "Details",
            screen: lightSwitchApplication.UserRegistrationView,
            data: lightSwitchApplication.UserRegistrationView,
            value: String
        },
        FullName: {
            _$class: msls.ContentItem,
            _$name: "FullName",
            _$parentName: "Details",
            screen: lightSwitchApplication.UserRegistrationView,
            data: lightSwitchApplication.UserRegistrationView,
            value: String
        },
        RoleAssignments: {
            _$class: msls.ContentItem,
            _$name: "RoleAssignments",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UserRegistrationView,
            data: lightSwitchApplication.UserRegistrationView,
            value: lightSwitchApplication.UserRegistrationView
        },
        RoleAssignments1: {
            _$class: msls.ContentItem,
            _$name: "RoleAssignments1",
            _$parentName: "RoleAssignments",
            screen: lightSwitchApplication.UserRegistrationView,
            data: lightSwitchApplication.UserRegistrationView,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.UserRegistrationView,
                _$entry: {
                    elementType: lightSwitchApplication.RoleAssignment
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "RoleAssignments1",
            screen: lightSwitchApplication.UserRegistrationView,
            data: lightSwitchApplication.RoleAssignment,
            value: lightSwitchApplication.RoleAssignment
        },
        RoleName: {
            _$class: msls.ContentItem,
            _$name: "RoleName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.UserRegistrationView,
            data: lightSwitchApplication.RoleAssignment,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UserRegistrationView
        }
    };

    msls._addEntryPoints(lightSwitchApplication.UserRegistrationView, {
        /// <field>
        /// Called when a new UserRegistrationView screen is created.
        /// <br/>created(msls.application.UserRegistrationView screen)
        /// </field>
        created: [lightSwitchApplication.UserRegistrationView],
        /// <field>
        /// Called before changes on an active UserRegistrationView screen are applied.
        /// <br/>beforeApplyChanges(msls.application.UserRegistrationView screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.UserRegistrationView],
        /// <field>
        /// Called to determine if the DeleteUserRegistration method can be executed.
        /// <br/>canExecute(msls.application.UserRegistrationView screen)
        /// </field>
        DeleteUserRegistration_canExecute: [lightSwitchApplication.UserRegistrationView],
        /// <field>
        /// Called to execute the DeleteUserRegistration method.
        /// <br/>execute(msls.application.UserRegistrationView screen)
        /// </field>
        DeleteUserRegistration_execute: [lightSwitchApplication.UserRegistrationView],
        /// <field>
        /// Called to determine if the RoleAssignments1_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.UserRegistrationView screen)
        /// </field>
        RoleAssignments1_ItemTap_canExecute: [lightSwitchApplication.UserRegistrationView],
        /// <field>
        /// Called to execute the RoleAssignments1_ItemTap method.
        /// <br/>execute(msls.application.UserRegistrationView screen)
        /// </field>
        RoleAssignments1_ItemTap_execute: [lightSwitchApplication.UserRegistrationView],
        /// <field>
        /// Called to determine if the DeleteRoleAssignment method can be executed.
        /// <br/>canExecute(msls.application.UserRegistrationView screen)
        /// </field>
        DeleteRoleAssignment_canExecute: [lightSwitchApplication.UserRegistrationView],
        /// <field>
        /// Called to execute the DeleteRoleAssignment method.
        /// <br/>execute(msls.application.UserRegistrationView screen)
        /// </field>
        DeleteRoleAssignment_execute: [lightSwitchApplication.UserRegistrationView],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationView().findContentItem("Details"); }],
        /// <field>
        /// Called after the UserName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        UserName_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationView().findContentItem("UserName"); }],
        /// <field>
        /// Called after the FullName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        FullName_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationView().findContentItem("FullName"); }],
        /// <field>
        /// Called after the RoleAssignments content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoleAssignments_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationView().findContentItem("RoleAssignments"); }],
        /// <field>
        /// Called after the RoleAssignments1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoleAssignments1_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationView().findContentItem("RoleAssignments1"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationView().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the RoleName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RoleName_postRender: [$element, function () { return new lightSwitchApplication.UserRegistrationView().findContentItem("RoleName"); }]
    });

    lightSwitchApplication.UserRoleAssignmentAddEdit.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UserRoleAssignmentAddEdit
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.UserRoleAssignmentAddEdit,
            data: lightSwitchApplication.UserRoleAssignmentAddEdit,
            value: lightSwitchApplication.UserRoleAssignmentAddEdit
        },
        Role: {
            _$class: msls.ContentItem,
            _$name: "Role",
            _$parentName: "Details",
            screen: lightSwitchApplication.UserRoleAssignmentAddEdit,
            data: lightSwitchApplication.UserRoleAssignmentAddEdit,
            value: lightSwitchApplication.Role
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "Role",
            screen: lightSwitchApplication.UserRoleAssignmentAddEdit,
            data: lightSwitchApplication.Role,
            value: lightSwitchApplication.Role
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.UserRoleAssignmentAddEdit
        }
    };

    msls._addEntryPoints(lightSwitchApplication.UserRoleAssignmentAddEdit, {
        /// <field>
        /// Called when a new UserRoleAssignmentAddEdit screen is created.
        /// <br/>created(msls.application.UserRoleAssignmentAddEdit screen)
        /// </field>
        created: [lightSwitchApplication.UserRoleAssignmentAddEdit],
        /// <field>
        /// Called before changes on an active UserRoleAssignmentAddEdit screen are applied.
        /// <br/>beforeApplyChanges(msls.application.UserRoleAssignmentAddEdit screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.UserRoleAssignmentAddEdit],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.UserRoleAssignmentAddEdit().findContentItem("Details"); }],
        /// <field>
        /// Called after the Role content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Role_postRender: [$element, function () { return new lightSwitchApplication.UserRoleAssignmentAddEdit().findContentItem("Role"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.UserRoleAssignmentAddEdit().findContentItem("RowTemplate2"); }]
    });

    lightSwitchApplication.MenuExport.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuExport
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.MenuExport,
            data: lightSwitchApplication.MenuExport,
            value: lightSwitchApplication.MenuExport
        },
        JsonMenuData: {
            _$class: msls.ContentItem,
            _$name: "JsonMenuData",
            _$parentName: "Group",
            screen: lightSwitchApplication.MenuExport,
            data: lightSwitchApplication.MenuExport,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.MenuExport
        }
    };

    msls._addEntryPoints(lightSwitchApplication.MenuExport, {
        /// <field>
        /// Called when a new MenuExport screen is created.
        /// <br/>created(msls.application.MenuExport screen)
        /// </field>
        created: [lightSwitchApplication.MenuExport],
        /// <field>
        /// Called before changes on an active MenuExport screen are applied.
        /// <br/>beforeApplyChanges(msls.application.MenuExport screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.MenuExport],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.MenuExport().findContentItem("Group"); }],
        /// <field>
        /// Called after the JsonMenuData content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        JsonMenuData_postRender: [$element, function () { return new lightSwitchApplication.MenuExport().findContentItem("JsonMenuData"); }]
    });

}(msls.application));