import { Test } from '@/components/ui/test';
import { questionMock } from '@/lib/mock';
import './globals.css';

function App() {
	return (
		<div className='flex flex-col items-center pt-32 gap-4 size-full bg-background'>
			<Test questionsDTO={questionMock} />
		</div>
	);
}

export default App;
