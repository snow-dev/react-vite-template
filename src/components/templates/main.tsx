import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import RootView from '@pages/RootView.tsx';

import '../../assets/css/index.css';
import store from '../../store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RootView />
		</Provider>
	</React.StrictMode>,
);
