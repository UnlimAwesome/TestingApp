import { Input } from '@/components/ui/input';
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
