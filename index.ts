import { PluginEvent, PluginInput, PluginMeta } from "@posthog/plugin-scaffold";

function normalizeUrl(url: string): string {
  const parsedUrl = new URL(url.toLocaleLowerCase());
  parsedUrl.pathname = parsedUrl.pathname.replace(/\/$/, "");

  console.log("parsedUrl", parsedUrl);

  return parsedUrl.toString();
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
