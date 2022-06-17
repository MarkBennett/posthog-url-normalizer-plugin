import { PluginEvent, PluginInput, PluginMeta } from "@posthog/plugin-scaffold";

export function processEvent(
  event: PluginEvent,
  meta: PluginMeta<PluginInput>
) {
  if (event.properties) {
    event.properties["hello"] = "world";
  }
  return event;
}
