import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ColoredButton(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-3 py-2 bg-gray-800 text-gray-100 rounded hover:bg-gray-700 active:bg-gray-600"
    />
  );
}
