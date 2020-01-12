For our partners to add more dynamic behaviour to the `LinkComponent` and `ButtonComponent` through the `data.json`, they have to specify the functionality in the props of the the component.
Example

```json
...
{
  "Content": {
    "type": "LinkComponent",
    "props": {
      "triggerModal": true, 👈
      "url": "https://lmgtfy.com/",
      "text": "I open a link but I should also open the modal."
    }
  },
}
....
```

```json
...
{
  "Content": {
    "type": "ButtonComponent",
    "props": {
      "triggerModal": false, 👈
      "text": "Click me to open the modal"
    }
  }
}
...
```

Note:
If that's not specified, the widget with return to the default function of using the `ButtonComponent` to trigger the `ModalComponent`.
Also, if you are specifying the `LinkComponent` trigger the `ModalComponent` the `ButtonComponent` will still trigger the `ModalComponent`if not specified not to.
