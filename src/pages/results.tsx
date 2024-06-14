import { Button } from '@/components/ui/button';
import { QuestionResult } from '@/components/ui/question-result';
import { IQuestion } from '@/model/question';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ResultPage = () => {
	const navigate = useNavigate();
	const [questions, setQuestions] = useState<(IQuestion & { seen: boolean; chosenAnswer: string })[]>();
	useEffect(() => {
		const testStatus = localStorage.getItem('test_status');
		if (!testStatus || testStatus === 'in_progress') {
			navigate('/');
		}
		setQuestions(JSON.parse(localStorage.getItem('questions') as string));
	}, []);
	return (
		<div className='flex flex-col gap-5 w-4/6'>
			{questions &&
				questions.map((q: IQuestion & { seen: boolean; chosenAnswer: string }) => (
					<QuestionResult
						key={q.id}
						question={q}
					/>
				))}
			<Button
				className='w-40'
				variant={'destructive'}
				onClick={() => {
					localStorage.clear();
					navigate('/');
				}}
			>
				Пройти еще раз
			</Button>
		</div>
	);
};
