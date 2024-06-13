import { Button } from '@/components/ui/button';
import { CheckboxForm, CheckboxResult } from '@/components/ui/checkbox-form';
import { LongTextForm, LongTextResult } from '@/components/ui/long-text-form';
import { RadioForm, RadioResult } from '@/components/ui/radio-form';
import { ShortTextForm, ShortTextResult } from '@/components/ui/short-text-form';
import { cn } from '@/lib/utils';
import { IQuestion, IQuestionFormProps, QuestionType } from '@/model/question';
import { useEffect } from 'react';

interface QuestionProps {
	question: IQuestion & { chosenAnswer: string | string[] };
}

export const QuestionResult = (props: QuestionProps) => {
	const { question } = props;

	return (
		<div className={cn('w-4/5 flex justify-center flex-col gap-6')}>
			<p className='font-bold text-xl'>{question.text}</p>
			<QuestionForm question={question} />
		</div>
	);
};

const QuestionForm = (props: Omit<IQuestionFormProps, 'onChange'>) => {
	switch (props.question.type) {
		case QuestionType.Radio:
			return (
				<RadioResult
					{...props}
					question={props.question}
				/>
			);
		case QuestionType.Checkbox:
			return <CheckboxResult question={props.question} />;
		case QuestionType.ShortText:
			return <ShortTextResult question={props.question} />;
		case QuestionType.LongText:
			return <LongTextResult question={props.question} />;
	}
};
