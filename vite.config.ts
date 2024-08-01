import { defineConfig, loadEnv } from 'vite';
import path from 'path';

import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
	// Cargar variables de entorno desde los archivos .env
	const env = loadEnv(mode, process.cwd());

	// Acceder a las variables de entorno en la configuración de Vite
	const port = parseInt(env.VITE_PORT) || 3012;

	const commonConfig = {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `$injectedColor: ${env.VITE_COLOR};`,
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
				'@slices': path.resolve(__dirname, 'src/store/slices'),
				'@templates': path.resolve(__dirname, 'src/components/templates'),
				'@utils': path.resolve(__dirname, 'src/utils'),
			},
		},
	};

	if (command === 'serve') {
		// Configuraciones específicas para el comando 'serve'
		return {
			...commonConfig,
			server: {
				port: port,
			},
		};
	} else if (command === 'build') {
		// Configuraciones específicas para el comando 'build'
		return {
			...commonConfig,
			build: {
				outDir: 'dist',
				rollupOptions: {
					// input: 'src/components/templates/main.tsx',
					output: {
						manualChunks(id) {
							if (id.includes('node_modules')) {
								return 'vendor';
							}
						},
					},
				},
				// sourcemap: true,
			},
		};
	} else {
		// Retorno por defecto si 'command' no coincide con 'serve' o 'build'
		return commonConfig;
	}
});
