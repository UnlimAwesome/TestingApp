import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { IQuestionFormProps, IShortTextQuestion } from '@/model/question';

interface ShortTextFormProps extends Omit<IQuestionFormProps, 'question'> {
	question: IShortTextQuestion & { chosenAnswer: string | string[] };
}

export const ShortTextForm = (props: ShortTextFormProps) => {
	const { question, onChange, ...otherProps } = props;
	return (
		<div className='w-auto'>
			<Input
				value={question.chosenAnswer}
				type='text'
				placeholder='Ваш ответ'
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};
export const ShortTextResult = (props: { question: IShortTextQuestion & { chosenAnswer: string | string[] } }) => {
	const { question } = props;
	const isAnswerValid =
		(question.chosenAnswer as string).toLowerCase().trim() === question.answer.toLowerCase().trim();
	return (
		<div className='w-auto flex gap-4'>
			{isAnswerValid ? (
				<Input
					value={question.chosenAnswer}
					type='text'
					placeholder='Ваш ответ'
					className={cn('border-green-500 bg-green-200/45 disabled:opacity-100')}
					disabled
				/>
			) : (
				<>
					<Input
						value={question.chosenAnswer}
						type='text'
						placeholder='Ваш ответ'
						className={cn('border-red-500 bg-red-200/45 flex-1 disabled:opacity-100')}
						disabled
					/>
					<Input
						value={question.answer}
						type='text'
						placeholder='Ваш ответ'
						className={cn('border-green-500 bg-green-200/45 flex-1 disabled:opacity-100')}
						disabled
					/>
				</>
			)}
		</div>
	);
};
