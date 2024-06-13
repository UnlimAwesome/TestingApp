import { Textarea } from '@/components/ui/textarea';
import { ILongTextQuestion, IQuestionFormProps } from '@/model/question';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface LongTextFormProps extends Omit<IQuestionFormProps, 'question'> {
	question: ILongTextQuestion & { chosenAnswer: string | string[] };
}

export const LongTextForm = (props: LongTextFormProps) => {
	const { question, onChange, ...otherProps } = props;
	return (
		<div className='w-auto'>
			<Textarea
				value={question.chosenAnswer}
				placeholder='Ваш ответ'
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export const LongTextResult = (props: { question: ILongTextQuestion & { chosenAnswer: string | string[] } }) => {
	const { question } = props;
	return (
		<div className='w-auto flex flex-col gap-1'>
			<Textarea
				className='disabled:opacity-100'
				value={question.chosenAnswer}
				placeholder='Ваш ответ'
				disabled
			/>
			<div className='flex gap-4 font-medium'>
				<ChevronRight />
				<p>Ожидает проверки</p>
			</div>
		</div>
	);
};
