import { TestPage } from '@/pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './globals.css';
import { ResultPage } from '@/pages/results';

const router = createBrowserRouter([
	{
		path: '/',
		element: <TestPage />,
	},
	{
		path: '/results',
		element: <ResultPage />,
	},
]);

function App() {
	return (
		<div className='flex flex-col items-center pt-32 gap-4 size-full bg-background'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
