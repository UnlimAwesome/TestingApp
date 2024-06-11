import { Button } from '@/components/ui/button';
import { CheckboxForm } from '@/components/ui/checkbox-form';
import { LongTextForm } from '@/components/ui/long-text-form';
import { RadioForm } from '@/components/ui/radio-form';
import { ShortTextForm } from '@/components/ui/short-text-form';
import { cn } from '@/lib/utils';
import { IQuestion, IQuestionFormProps, QuestionType } from '@/model/question';
import { useEffect } from 'react';

export interface QuestionProps {
	question: IQuestion & { chosenAnswer: string | string[] };
	onChange: (value: string | string[]) => void;
	onMount: () => void;
	onSubmit: () => void;
}

export const Question = (props: QuestionProps) => {
	const { question, onMount, onChange, onSubmit, ...otherProps } = props;

	useEffect(() => {
		onMount();
	}, []);
	return (
		<div className={cn('w-4/5 flex justify-center flex-col gap-6')}>
			<p className='font-bold text-xl'>{question.text}</p>
			<QuestionForm
				question={question}
				onChange={onChange}
			/>

			<Button
				className='rounded-sm w-1/6'
				variant={'destructive'}
				onClick={onSubmit}
			>
				Ответить
			</Button>
		</div>
	);
};

const QuestionForm = (props: IQuestionFormProps) => {
	switch (props.question.type) {
		case QuestionType.Radio:
			return (
				<RadioForm
					{...props}
					question={props.question}
				/>
			);

		case QuestionType.Checkbox:
			return (
				<CheckboxForm
					{...props}
					question={props.question}
				/>
			);
		case QuestionType.ShortText:
			return (
				<ShortTextForm
					{...props}
					question={props.question}
				/>
			);
		case QuestionType.LongText:
			return (
				<LongTextForm
					{...props}
					question={props.question}
				/>
			);
	}
};
