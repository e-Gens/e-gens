module.exports = {
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    pwa: {
        name: 'e-Gens',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    
        // configure the workbox plugin
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          // swSrc is required in InjectManifest mode.
          swSrc: './src/registerServiceWorker.js',
          // ...other Workbox options...
        }
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
    outputDir: '../demo.e-gens.com.br'
}