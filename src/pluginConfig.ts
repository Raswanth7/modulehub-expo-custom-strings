/**
 * Configuration for a single custom string entry in Android strings.xml
 */
export interface CustomStringEntry {
  /** The string value to write */
  value: string;
  /** If true, adds moduleConfig="true" to the string element */
  moduleConfig?: boolean;
}

/**
 * Plugin configuration: a map of string resource names to their entries.
 * Keys become the `name` attribute of each <string> element.
 */
export interface CustomStringsPluginProps {
  [key: string]: CustomStringEntry;
}
