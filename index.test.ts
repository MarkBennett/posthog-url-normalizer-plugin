import { PluginEvent, PluginInput, PluginMeta } from "@posthog/plugin-scaffold";
import { processEvent } from "./index";

/**
 * Given a url, construct a page view event.
 *
 * @param current_url The current url of the page view
 * @returns A new PostHog page view event
 */
function buildPageViewEvent(current_url: string): PluginEvent {
  const event: PluginEvent = {
    properties: { current_url },
    distinct_id: "distinct_id",
    ip: "1.2.3.4",
    site_url: "test.com",
    team_id: 0,
    now: "2022-06-17T20:21:31.778000+00:00",
    event: "$pageview",
    uuid: "01817354-06bb-0000-d31c-2c4eed374100",
  };

  return event;
}

function getMeta(): PluginMeta<PluginInput> {
  return {} as unknown as PluginMeta<PluginInput>;
}

describe("processEvent", () => {
  it("shouldn't change a url that's already lowercase", async () => {
    const sourceEvent = buildPageViewEvent("http://www.google.com");

    const processedEvent = await processEvent(sourceEvent, getMeta());

    console.log("processedEvent = ", processedEvent);

    expect(processedEvent?.properties?.current_url).toEqual(
      "http://www.google.com"
    );
  });

  it("should convert the current_url to lowercase", async () => {
    const sourceEvent = buildPageViewEvent(
      "http://www.GoOGle.com/WhatAreYouThinking"
    );

    const processedEvent = await processEvent(sourceEvent, getMeta());

    console.log("processedEvent = ", processedEvent);

    expect(processedEvent?.properties?.current_url).toEqual(
      "http://www.google.com/whatareyouthinking"
    );
  });

  it.todo("should remove the trailing slash from the current_url");
  it.todo("should preserve trailing id anchors");
  it.todo("shouldn't modify events that don't have a current_url set");
});
