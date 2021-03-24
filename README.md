# 411 Web

## Installation

* Clone repo by running `git clone https://github.com/dinkokec/411salon.git`
* cd into 411
* yarn install

## Folder Structure

```
- src
    - actions
    - components
    - reducers
    - sagas
    - screens
    - utils
    - services
```

- `actions` contains all actions.

- `components` contains all components. Components include any component that is rendered in a parent component. Each component is required to contain just two files; the component and the style for the component.

- `reducers` contains all reducers.

- `sagas` contains all sagas.

- `screens` contains all screens.

- `utils` contains helper functions.

- `services` contains api calls. Each component has its own service.

## Styling

Styling is modular. Each component has its own style. Although can inherit from the `root` styling file `App.scss`.

### Guidelines
- Styles that will be used in two different components should be placed in the root style file.

- Overriding a style should start with the stye name followed by two underscores and the name of the modifier. e.g `btn` should have a modifier like `btn__red`

## Contributions

To add new changes,

- Create a new branch off development

- Raise a PR against development following the provided PR template.


