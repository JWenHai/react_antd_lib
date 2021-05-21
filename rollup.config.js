import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import dts from "rollup-plugin-dts";
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import clear from 'rollup-plugin-clear';
import flow from 'rollup-plugin-flow';

export default [{
    input: 'src/main.ts',
    output: {
        file: 'es/build.js',
        format: 'cjs',
    },
    external: [
        'react',
        'antd',
        '@ant-design/icons',
        '@types/jest'
    ],
    experimentalCodeSplitting: true,
    plugins: [ 
        resolve(),
        typescript(),
        postcss(),
        babel({
            exclude: 'node_modules/**'
        }),
        clear({
            targets: ['es'],
            watch: true,
        }),
        flow(),
        commonjs({
            include: ["node_modules/**"]
        })
    ]
},{
    input: "src/main.ts",
    output: [{ file: "es/build.d.ts", format: "es" }],
    plugins: [
        dts()
    ],
}];