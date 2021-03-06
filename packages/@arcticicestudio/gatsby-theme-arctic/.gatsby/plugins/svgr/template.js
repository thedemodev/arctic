/*
 * Copyright (C) 2019-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2019-present Sven Greb <development@svengreb.de>
 *
 * Project:    Arctic
 * Repository: https://github.com/arcticicestudio/arctic
 * License:    MIT
 */

/**
 * Provides a custom for TypeScript components generated by SVGR.
 *
 * @see https://www.smooth-code.com/open-source/svgr/docs/typescript
 */
function svgrTemplate({ template }, opts, { componentName, jsx, state }) {
  const typeScriptTpl = template.smart({ plugins: ["typescript"] });
  return typeScriptTpl.ast`// Generated from ${state.filePath}
    import * as React from "react";
    const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    export default ${componentName};
  `;
}

module.exports = svgrTemplate;
