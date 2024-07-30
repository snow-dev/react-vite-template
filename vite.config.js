var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
export default defineConfig(function (_a) {
    var command = _a.command, mode = _a.mode;
    // Cargar variables de entorno desde los archivos .env
    var env = loadEnv(mode, process.cwd());
    // Acceder a las variables de entorno en la configuración de Vite
    var port = parseInt(env.VITE_PORT) || 3012;
    var commonConfig = {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: "$injectedColor: ".concat(env.VITE_COLOR, ";"),
                },
            },
        },
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        plugins: [react()],
        resolve: {
            alias: {
                '@atoms': path.resolve(__dirname, 'src/components/atoms'),
                '@molecules': path.resolve(__dirname, 'src/components/molecules'),
                '@organisms': path.resolve(__dirname, 'src/components/organisms'),
                '@pages': path.resolve(__dirname, 'src/components/pages'),
                '@schemas': path.resolve(__dirname, 'src/components/schemas'),
                '@templates': path.resolve(__dirname, 'src/components/templates'),
            },
        },
    };
    if (command === 'serve') {
        // Configuraciones específicas para el comando 'serve'
        return __assign(__assign({}, commonConfig), { server: {
                port: port,
            } });
    }
    else if (command === 'build') {
        // Configuraciones específicas para el comando 'build'
        return __assign(__assign({}, commonConfig), { build: {
                outDir: 'dist',
                rollupOptions: {
                    // input: 'src/components/templates/main.tsx',
                    output: {
                        manualChunks: function (id) {
                            if (id.includes('node_modules')) {
                                return 'vendor';
                            }
                        },
                    },
                },
                // sourcemap: true,
            } });
    }
    else {
        // Retorno por defecto si 'command' no coincide con 'serve' o 'build'
        return commonConfig;
    }
});
