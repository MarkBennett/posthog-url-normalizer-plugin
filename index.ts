import { PluginEvent, PluginInput, PluginMeta } from "@posthog/plugin-scaffold";

function normalizeUrl(url: string): string {
  return url.toLowerCase().replace(/\/$/, "");
}

export function processEvent(
  event: PluginEvent,
  meta: PluginMeta<PluginInput>
) {
  const current_url = event?.properties?.current_url;
  if (event?.properties && current_url) {
    const normalized_url = normalizeUrl(current_url);
    event.properties.current_url = normalized_url;
  }

  return event;
}
