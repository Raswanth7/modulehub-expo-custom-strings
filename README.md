**ModuleHub Expo Custom Strings Plugin**
Internal Expo config plugin for injecting custom Android string resources into strings.xml during expo prebuild.

This allows native Android string values to be configured directly from app.json.

📦 Installation
1️⃣ Add the dependency in your app’s package.json
{
  "dependencies": {
    "@modulehub/expo-custom-strings":"1.0.0"
  }
}
2️⃣ Install dependencies

Using pnpm:

pnpm install
⚙️ Usage
1️⃣ Configure the plugin in app.json
{
  "expo": {
    "plugins": [
      [
        "@modulehub/expo-custom-strings",
        {
          "api_url": {
            "value": "https://example.com",
            "moduleConfig": true
          },
          "app_name_native": {
            "value": "value"
          }
        }
      ]
    ]
  }
}
2️⃣ Run prebuild
npx expo prebuild
🧠 What It Does

During prebuild, the plugin:

Reads Android strings.xml

Appends new <string> entries

Skips keys that already exist

Optionally adds moduleConfig="true" attribute

Example output:

<string name="api_url" moduleConfig="true">
  https://example.com
</string>

<string name="app_name_native">
  examplevalue
</string>
🛠 Configuration Format

Each string entry must follow:

{
  "string_key": {
    "value": "string value",
    "moduleConfig": true
  }
}
