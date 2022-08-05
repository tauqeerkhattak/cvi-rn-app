module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        // alias: {
        //   '@assets': `./AppConfigs/${process.env.APP_CONFIG_NAME}/src/assets`,
        //   '@config': `./AppConfigs/${process.env.APP_CONFIG_NAME}/src/config`,
        //   '@common': './src/common',
        //   '@components': './src/components',
        //   '@containers': './src/containers',
        //   '@drawer': './src/drawer',
        //   '@libs': './src/libs',
        //   '@navigation': './src/navigation',
        //   '@redux': './src/redux',
        // },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
