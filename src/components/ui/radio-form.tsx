import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { IQuestionFormProps, IRadioQuestion } from '@/model/question';
import { useId } from 'react';

interface RadioFormProps extends Omit<IQuestionFormProps, 'question'> {
	question: IRadioQuestion & { chosenAnswer: string };
}

export const RadioForm = (props: RadioFormProps) => {
	const { question, onChange, ...otherProps } = props;
	return (
		<RadioGroup
			onValueChange={onChange}
			defaultValue={question.chosenAnswer}
			className='w-auto'
		>
			{question.options.map((value, index) => (
				<RadioItem
					key={question.id + '-option-' + index}
					value={value}
				/>
			))}
		</RadioGroup>
	);
};

const RadioItem = (props: { value: string }) => {
	const id = useId();
	return (
		<div className='flex items-center space-x-2'>
			<RadioGroupItem
				value={props.value}
				id={id}
			/>
			<Label htmlFor={id}>{props.value}</Label>
		</div>
	);
};
