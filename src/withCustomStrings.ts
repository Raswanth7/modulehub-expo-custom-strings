import { ConfigPlugin } from '@expo/config-plugins';
import { withStringsXml } from '@expo/config-plugins';
import type { CustomStringsPluginProps } from './pluginConfig';

export type { CustomStringsPluginProps, CustomStringEntry } from './pluginConfig';

/**
 * Expo config plugin that adds custom string resources to Android strings.xml.
 * Each key in props becomes a <string name="key">value</string> entry.
 */
const withCustomStrings: ConfigPlugin<CustomStringsPluginProps> = (
  config,
  props
) => {
  return withStringsXml(config, (modConfig) => {
    const strings = modConfig.modResults.resources.string || [];

    for (const key of Object.keys(props)) {
      const { value, moduleConfig } = props[key];

      const existing = strings.find((s) => s.$?.name === key);
      if (existing) continue;

      const entry: { $: { name: string; moduleConfig?: string }; _: string } = {
        $: { name: key },
        _: value,
      };
      if (moduleConfig === true) {
        entry.$['moduleConfig'] = 'true';
      }

      strings.push(entry);
    }

    modConfig.modResults.resources.string = strings;
    return modConfig;
  });
};

export default withCustomStrings;
