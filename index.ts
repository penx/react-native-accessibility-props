import { Platform } from "react-native";

export const getAccessibilityStateProps = (accessibilityState: {
  disabled?: boolean;
  selected?: boolean;
  checked?: boolean | "mixed";
  busy?: boolean;
  expanded?: boolean;
}) =>
  Platform.select({
    web: {
      accessibilityDisabled: accessibilityState.disabled,
      accessibilitySelected: accessibilityState.selected,
      accessibilityChecked: accessibilityState.checked,
      accessibilityBusy: accessibilityState.busy,
      accessibilityExpanded: accessibilityState.expanded,
    },
    default: { accessibilityState },
  });
