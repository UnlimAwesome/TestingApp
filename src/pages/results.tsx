import { QuestionResult } from '@/components/ui/question-result';
import { IQuestion } from '@/model/question';

export const ResultPage = () => {
	const questions = JSON.parse(localStorage.getItem('questions') as string);
	return (
		<div className='flex flex-col'>
			{questions.map((q: IQuestion & { seen: boolean; chosenAnswer: string }) => (
				<QuestionResult
					key={q.id}
					question={q}
				/>
			))}
		</div>
	);
};
