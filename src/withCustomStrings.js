const { withStringsXml } = require('@expo/config-plugins');

module.exports = (config, props) => {
    return withStringsXml(config, (modConfig) => {
        const strings = modConfig.modResults.resources.string || [];

        Object.keys(props).forEach((key) => {
            const { value, moduleConfig } = props[key];

            const existing = strings.find(s => s.$?.name === key);
            if (existing) return;

            const entry = {
                $: { name: key },
                _: value
            };
            if (moduleConfig === true) {
                entry.$['moduleConfig'] = 'true';
            }

            strings.push(entry);
        });

        modConfig.modResults.resources.string = strings;
        return modConfig;
    });
};
