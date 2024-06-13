import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import { IQuestionFormProps, IRadioQuestion } from '@/model/question';
import { useId } from 'react';

interface RadioFormProps extends Omit<IQuestionFormProps, 'question'> {
	question: IRadioQuestion & { chosenAnswer: string | string[] };
}

export const RadioForm = (props: RadioFormProps) => {
	const { question, onChange, ...otherProps } = props;
	return (
		<RadioGroup
			onValueChange={onChange}
			defaultValue={question.chosenAnswer as string}
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

export const RadioResult = (props: { question: IRadioQuestion & { chosenAnswer: string | string[] } }) => {
	const { question } = props;
	return (
		<RadioGroup
			defaultValue={question.chosenAnswer as string}
			className='w-auto'
			disabled
		>
			{question.options.map((value, index) => (
				<RadioItem
					key={question.id + '-option-' + index}
					value={value}
					correct={value === question.answer || (value === question.chosenAnswer ? false : undefined)}
				/>
			))}
		</RadioGroup>
	);
};

const RadioItem = (props: { value: string; correct?: boolean }) => {
	const id = useId();
	return (
		<div className='flex items-center space-x-2'>
			<RadioGroupItem
				value={props.value}
				className={cn(props.correct == undefined ? '' : props.correct ? 'bg-green-200' : 'bg-red-200')}
				id={id}
			/>
			<Label htmlFor={id}>{props.value}</Label>
		</div>
	);
};
