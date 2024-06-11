import { Textarea } from '@/components/ui/textarea';
import { ILongTextQuestion, IQuestionFormProps } from '@/model/question';

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
