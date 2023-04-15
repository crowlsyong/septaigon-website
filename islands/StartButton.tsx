import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ColoredButton(
  props: JSX.HTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 active:bg-blue-400"
    />
  );
}
