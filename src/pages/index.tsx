import { Button } from '@/components/ui/button';
import { Test } from '@/components/ui/test';
import { questionMock } from '@/lib/mock';
import { useState, useEffect } from 'react';
const TestTimeMinutes = 20;
export const TestPage = () => {
	const [timer, setTimer] = useState<number>(() => {
		const storagedExpAt = localStorage.getItem('expAt');
		if (!storagedExpAt) return 0;

		const expAt = new Date(storagedExpAt);
		if (storagedExpAt.localeCompare(new Date().toString()) < 0) {
			// localStorage.removeItem('expAt');
			return 0;
		}

		return ~~((expAt.getTime() - new Date().getTime()) / 1000);
	});

	const startTimer = () => {
		const currentDate = new Date();
		const deadline = new Date(currentDate.getTime() + TestTimeMinutes * 60 * 1000);
		localStorage.setItem('expAt', deadline.toString());
		setTimer(TestTimeMinutes * 60);
	};

	useEffect(() => {
		// if (timer <= 0) window.location.href = '/results';
		const interval = setInterval(() => {
			setTimer((prev) => prev - 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [timer]);
	return (
		<>
			{!localStorage.getItem('expAt') ? (
				<div className='w-max justify-center items-center flex flex-col gap-4'>
					<h1 className='text-3xl font-bold'>Тестирование</h1>
					<Button
						variant='destructive'
						onClick={startTimer}
					>
						Приступить к тестированию
					</Button>
				</div>
			) : (
				<Test
					questionsDTO={questionMock}
					timer={timer}
				/>
			)}
		</>
	);
};
