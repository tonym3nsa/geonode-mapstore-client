## GeoNode MapStore Client Project

This directory is the root folder where to initialize all the npm scripts. See the main [README.md](../../README.md) for more information about this directory.
### Configuration

The configuration file is located in [localConfig.json](static/mapstore/configs/localConfig.json) and it exposes specific properties to customize:

#### localConfig.json

| property | type | description |  |
| --- | --- | --- | --- |
| `supportedLocales` | {object} |  |  |
| `geoNodeConfiguration` | {object} | contains all the configuration needed to change the theme, filters and navbar structures | [see available properties](#geonode-configuration) |

#### GeoNode configuration

[localConfig](#geonode-configuration).geoNodeConfiguration

| property | type | description |  |
| --- | --- | --- | --- |
| `filters` | {object} | configuration of filter | |
| `filters.order` | {object} | configuration of order dropdown | |
| `filters.order.defaultLabelId` | {string} | label id to use for the order dropdown button | |
| `filters.order.options` | {array} | label id to use for the order dropdown button | [order object entry](#order-object) |
| `filters.extent` | {object} | configuration of extent filter | |
| `filters.extent.layers` | {array} | a list of MapStore layers object used as extent background | |
| `filters.extent.style` | {object} | a MapStore vector style object | |
| `cardsMenu` | {object} | configuration of the menu of resource cards | |
| `cardsMenu.items` | {array} | list of menu item objects, right placement | [menu item object entry](#menu-item-object) |
| `cardOptions` | {object} | configuration of the resource cards dropdown | |
| `cardOptions.items` | {array} | list of menu item objects, dropdown placement | [menu item object entry](#menu-item-object) |
| `filtersForm` | {object} | configuration of the resource cards dropdown | |
| `filtersForm.items` | {array} | list of filter objects, panel placement | [filter object](#filter-object) |

#### Order Object

Order object contains properties for an entry of the order dropdown. Configuration:

```js
{
  "labelId": "gnhome.aZ", // message id for the dropdown item
  "value": "title" // value used in the sort filter
}
```
#### Menu Item Object

Menu item object contains properties for a list item rendered in a menu. Configuration:

- type link
```js
{
  "labelId": "gnhome.register", // label message id
  "type": "link", // one of 'link', 'dropdown', 'divider' or 'filter'
  "href": "/account/signup/?next=/",
  "badge": "{state.datasetsTotalCount}", // (menu configuration only) counter badge. variable available: datasetsTotalCount, mapsTotalCount,
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "perms": [], // the value in array define the access to the contents
  "allowedRoles": [] // user roles to access  to the contents

}
```

- type dropdown
```js
{
  "labelId": "gnhome.register", // label message id
  "image": "", //the toogle image
  "type": "dropdown", // one of 'link', 'dropdown', 'divider' or 'filter'
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "perms": [], // the value in array define the access to the contents
  "allowedRoles": [], // user roles to access  to the contents
  "items": []  // menu items of type link or divider
}
```

- type divider
```js
{
  "type": "divider", // one of 'link', 'dropdown', 'divider' or 'filter'
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "perms": [], // the value in array define the access to the contents
  "allowedRoles": [], // user roles to access  to the contents
}
```

- type filter
```js
{
  "type": "filter", // one of 'link', 'dropdown', 'divider' or 'filter'
  "id": "landuse", // unique id of the filter
  "labelId": "gnhome.customFilterExample", // label message id
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "perms": [], // the value in array define the access to the contents
  "allowedRoles": [],  // user roles to access  to the contents
  "query": { // query filter to use
    "filter{regions.name.in}": [
        "Global"
    ]
  }
}
```

#### Filter Object

Filter object contains properties for a select input rendered inside the filter form. Configurations:

- type select
  - properties for select input with static options:
  ```js
  {
    "id": "title", // filter id used for the request filter{title.in}=
    "labelId": "gnhome.labelId", // message id for select label
    "placeholderId": "gnhome.placeholderId", // message id for select placeholder
    "type": "select",
    "options": [ // list of string values
        "Title 1",
        "Title 2",
        "Title 3",
        "Title 4"
    ]
  }
  ```

  - properties for select input with suggestions request:
  ```js
  {
    "labelId": "gnhome.resourceTypes", // message id for select label
    "placeholderId": "gnhome.resourceTypesPlaceholder", // message id for select placeholder
    "type": "select",
    "suggestionsRequestKey": "resourceTypes" // available 'resourceTypes', 'categories', 'keywords', 'regions' or 'owners'
  }
  ```
- type group
```js
{
  "type": "group",
  "labelId": "gnhome.customFiltersTitle", // label message id
  "authenticated": true, // true shows the item only when user authenticated while false only for anonymous user, if undefined the item is always visible
  "items": [
    //... list of filter objects excluding type group
  ]
}
```
Filter items supports also the following types from [menu object configuration](#menu-item-object): filter, divider and link.
