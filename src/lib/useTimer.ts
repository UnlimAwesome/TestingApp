import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const TestTimeMinutes = 20;

export function useTimer() {
	const [timer, setTimer] = useState<number | undefined>();
	const navigate = useNavigate();

	const startTest = useCallback(() => {
		const currentDate = new Date();
		const deadline = new Date(currentDate.getTime() + TestTimeMinutes * 60 * 1000);
		localStorage.setItem('expAt', deadline.toString());
		localStorage.setItem('test_status', 'in_progress');
		setTimer(TestTimeMinutes * 60);
	}, []);

	const finishTest = useCallback(() => {
		localStorage.setItem('test_status', 'finished');
		localStorage.removeItem('expAt');
		navigate('/results');
	}, [navigate]);

	useEffect(() => {
		if (localStorage.getItem('test_status') === 'finished') navigate('/results');
		const storagedExpAt = localStorage.getItem('expAt');
		if (!storagedExpAt) return;
		if (storagedExpAt.localeCompare(new Date().toString()) < 0) {
			finishTest();
		}
		const expAt = new Date(storagedExpAt);
		setTimer(Math.floor((expAt.getTime() - new Date().getTime()) / 1000));
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

	return { timer, startTest, finishTest };
}
