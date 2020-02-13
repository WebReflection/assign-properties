import resolve from 'rollup-plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import includePaths from 'rollup-plugin-includepaths';

export default {
  input: './esm/index.js',
  plugins: [
    includePaths({
      include: {
        '@ungap/assign': 'node_modules/@ungap/degap/assign.js',
        '@ungap/get-own-property-descriptors': 'node_modules/@ungap/degap/get-own-property-descriptors.js'
      },
    }),
    resolve({module: true}),
    terser()
  ],
  output: {
    exports: 'named',
    file: './new.js',
    format: 'iife',
    name: 'assignProperties'
  }
};
