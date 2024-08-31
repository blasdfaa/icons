import {transform} from '@svgr/core';
import {compile as compileVue} from '@vue/compiler-dom';

export const transformer = {
    react: async (content, componentName) => {
        return await transform(
            content,
            {typescript: true, plugins: ['@svgr/plugin-jsx']},
            {componentName},
        );
    },
    vue: async (content) => {
        let {code} = compileVue(content, {
            mode: 'module',
            isTS: true,
        });

        code = code.replace('export function', 'export default function');
        return code;
    },
};
