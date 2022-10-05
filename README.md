# react-native-accessibility-props

Get cross platform accessibily props for react-native and react-native-web.

- <https://github.com/necolas/react-native-web/issues/2403#issuecomment-1267502015>
- <https://github.com/necolas/react-native-web/discussions/2372>

## Usage

```tsx
import { Pressable } from "react-native";
import { getAccessibilityStateProps } from "react-native-accessibility-props";

function MyComponent() {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityLabel="label"
      {...getAccessibilityStateProps({ checked: true })}
    >
      Example
    </Pressable>
  );
}
```
