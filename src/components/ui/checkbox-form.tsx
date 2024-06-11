import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ICheckboxQuestion, IQuestionFormProps } from '@/model/question';
import { useId } from 'react';

interface CheckboxFormProps extends Omit<IQuestionFormProps, 'question'> {
	question: ICheckboxQuestion & { chosenAnswer: string | string[] };
}

export const CheckboxForm = (props: CheckboxFormProps) => {
	const { question, onChange, ...otherProps } = props;
	return (
		<div className='w-auto flex flex-col gap-1'>
			{question.options.map((value, index) => (
				<CheckboxItem
					key={question.id + '-option-' + index}
					value={value}
					checked={question.chosenAnswer.includes(value)}
					onCheckedChange={(checked: boolean) => {
						if (checked) {
							onChange([...question.chosenAnswer, value].filter((v, i, a) => a.indexOf(v) === i));
						} else {
							onChange([...question.chosenAnswer].filter((v) => v !== value));
						}
					}}
				/>
			))}
		</div>
	);
};

const CheckboxItem = (props: { value: string; checked: boolean; onCheckedChange: (checked: boolean) => void }) => {
	const id = useId();
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				checked={props.checked}
				onCheckedChange={props.onCheckedChange}
				id={id}
			/>
			<Label htmlFor={id}>{props.value}</Label>
		</div>
	);
};
