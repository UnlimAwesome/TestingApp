import { Question } from '@/components/ui/question';
import { cn } from '@/lib/utils';
import { IQuestion } from '@/model/question';
import { useEffect, useState } from 'react';

interface testProps {
	className?: string;
	questionsDTO: IQuestion[];
	onSubmit: () => void;
}

export const Test = (props: testProps) => {
	const { className, questionsDTO, onSubmit, ...otherProps } = props;
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [questions, setQuestions] = useState<(IQuestion & { seen: boolean; chosenAnswer: string })[]>(() =>
		!localStorage.getItem('questions')
			? questionsDTO.map((q, i) => ({ ...q, seen: i == 0, chosenAnswer: '' }))
			: JSON.parse(localStorage.getItem('questions') as string)
	);

	useEffect(() => {
		const handleUnmount = () => {
			localStorage.setItem('questions', JSON.stringify(questions));
		};

		window.addEventListener('beforeunload', handleUnmount);
		window.addEventListener('unload', handleUnmount);
		return () => {
			window.removeEventListener('beforeunload', handleUnmount);
			window.removeEventListener('unload', handleUnmount);
			handleUnmount();
		};
	}, []);

	return (
		<div
			className={cn('flex flex-col gap-2 w-4/6', className)}
			{...otherProps}
		>
			<div className='flex gap-2'>
				{questions.map((q, i) => (
					<div
						key={'questionBar' + i}
						className={cn(
							'w-14 h-3 bg-muted cursor-pointer',
							q.seen ? 'bg-current' : '',
							i === activeQuestion ? 'bg-destructive' : ''
						)}
						onClick={() => setActiveQuestion(i)}
					/>
				))}
			</div>
			<Question
				key={'question' + activeQuestion}
				question={questions[activeQuestion]}
				onChange={(value: string | string[]) => {
					setQuestions((prev) => {
						const next = [...prev];
						next.find((q) => q.id === questions[activeQuestion].id)!.chosenAnswer = value as string;
						return next;
					});
				}}
				onMount={() => {
					setQuestions((prev) => {
						const next = [...prev];
						next[activeQuestion].seen = true;
						return next;
					});
				}}
				onSubmit={() => {
					if (activeQuestion === questions.length - 1) {
						onSubmit();
					}
					setActiveQuestion(activeQuestion + 1);
				}}
			/>
		</div>
	);
};
