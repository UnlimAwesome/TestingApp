import { Button } from '@/components/ui/button';
import { Test } from '@/components/ui/test';
import { questionMock } from '@/lib/mock';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const TestTimeMinutes = 0.1;
export const TestPage = () => {
	const navigate = useNavigate();
	const [timer, setTimer] = useState<number | undefined>();

	const startTest = () => {
		const currentDate = new Date();
		const deadline = new Date(currentDate.getTime() + TestTimeMinutes * 60 * 1000);
		localStorage.setItem('expAt', deadline.toString());
		localStorage.setItem('test_status', 'in_progress');
		setTimer(TestTimeMinutes * 60);
	};

	const finishTest = () => {
		localStorage.setItem('test_status', 'finished');
		localStorage.removeItem('expAt');
		navigate('/results');
	};

	useEffect(() => {
		if (localStorage.getItem('test_status') === 'finished') navigate('/results');
		const storagedExpAt = localStorage.getItem('expAt');
		if (!storagedExpAt) return;
		if (storagedExpAt.localeCompare(new Date().toString()) < 0) {
			finishTest();
		}
		const expAt = new Date(storagedExpAt);
		setTimer((expAt.getTime() - new Date().getTime()) / 1000);
	}, []);

	useEffect(() => {
		if (timer == undefined) return;
		if (timer <= 0) {
			finishTest();
			return;
		}
		const timeout = setTimeout(() => {
			setTimer((prev) => (prev ? prev - 1 : undefined));
		}, 1000);
		return () => clearTimeout(timeout);
	}, [timer]);

	return (
		<>
			{!timer ? (
				<div className='w-max justify-center items-center flex flex-col gap-4'>
					<h1 className='text-3xl font-bold'>Тестирование</h1>
					<Button
						variant='destructive'
						onClick={startTest}
					>
						Приступить к тестированию
					</Button>
				</div>
			) : (
				<Test
					onSubmit={finishTest}
					questionsDTO={questionMock}
					timer={timer}
				/>
			)}
		</>
	);
};
