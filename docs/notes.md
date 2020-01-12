# How I think the widget should be made customisable

## Table of Content

1. [First Component](#First-Component)
2. [Children Component](#Children-Component)
   - [Solution](#Solution)
   - [Data passed down to Children Component](#Data-passed-down-to-Children-Component)
3. [How Components are rendered Dynamically](#How-Components-are-rendered-Dynamically)
4. [Modal Component](#Modal-Component)

After observing all the sample data, there things that are consistent and not consistent.

Assuming the consistent structure stays consistent, that will lead to **my first assumption**

I will assume the JSON data will always have a structure of `Content` as the first key. And `Children` as the second key. `Content` specifying the the first element component to be rendered with or without `props` and `Children` specifying other components to be rendered after the first component.

Also I going to assume the first component with either be `BoxComponent` or `ModalComponent`

### First Component

```JSON
{
     "Content": {
          "type": "BoxComponent"
     }
}
// Which is going to render the BoxComponent
// with a default border size of "0.5px"
```

or

```JSON
{
     "Content": {
          "type": "BoxComponent",
          "props": {
               "borderSize": "2px"
          }
     }
}
// Which is going to render the BoxComponent
// with a default border size of "2px"
```

## Children Component

The next thing in line is how to render the components in the children object.

- Some object keys in the `Children` object object are not consistent. Which means they won't remain the same for us to just access the values with the same key.

- Another problem is, we don't know how many values are going to be in the `Children` object. Aha, we can just limit the partners to just a certain number of values in the `Children` object. If we do that, will that not terminate the whole reason of making the widget customisable?

### Solution

- Convert the values in the `Children` object into an array. When converted into an array, include only the `Content` objects after their key.
- That leads us to not worrying about how many values are in the `Children` object and the keys they possess. **Assuming the `Content` structure is going to remain the same**

So now, we are going to have our data this way

### Data passed down to Children Component

```JSON
// 1st Child Component Data
[
     {
    "Content": {
        "type": "H1Component",
        "props": {
          "text": "Our benefits"
        }
      }
}
// 2nd Child Component Data
{
     "Content": {
        "type": "H2Component",
        "props": {
          "text": "This is why you will love our product"
        }
      }
}
// 3rd Child Component Data
{
     "Content": {
        "type": "ListComponent",
        "props": {
          "li": ["free to use", "superfast", "and pretty, too!"]
        }
      }
}
]
```

## How Components are rendered Dynamically

Based on the data passed into the components, I will have to create another component with a function to switch which component to render by accessing the by types - `Content.type`. Creating the component, I can also reuse it in other components that has children.

So, here is an example of how the component

```jsx
// Destructure the data from props
const checkAndGetComponent = passedData => {
  switch (passedData.Content.type) {
    // For components that won't be having children
    // Will pass everyting
    case "ModalComponent":
      return <ModalComponent {...passedData} />;
    // ...passedData = {Content: {...}, Children: {...}}

    // For components that won't be having children
    // Will pass only their props
    case "ModalComponent":
      return <H1Component {...passedData.Content.props} />;

    // ...passedData.Content.props = text: {...}

    ////...
  }
};

/* This component with its function above is what will be reusable to Dynamically render any component based on their type.
 */
const GetComponent = ({ data }) => {
  return <div> {checkAndGetComponent(data)}</div>;
};

export default GetComponent;
```

## Modal Component

The `ModalComponent` is seperated from the `LinkComponent` and `ButtonComponent`. The option of having them together is not an option because there is no defined way of how the JSON data is going to render those components.

So to be able to toggle the `ModalComponent` using either the `LinkComponent` or `ButtonComponent` we redux to manage the state whenever it's toggled.

## Dynamic Behaviour to LinkComponent and ButtonComponent

### Requirements

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

- [Back To Top](#How-I-think-the-widget-should-be-made-customisable)
- [Back To README](../README)
