export enum QuestionType {
	Checkbox = 'checkbox',
	Radio = 'radio',
	ShortText = 'shortText',
	LongText = 'longText',
}
export interface IAbstractQuestion {
	id: string;
	type: QuestionType;
	text: string;
}

export interface ICheckboxQuestion extends IAbstractQuestion {
	type: QuestionType.Checkbox;
	options: string[];
	answer: string[];
}
export interface IRadioQuestion extends IAbstractQuestion {
	type: QuestionType.Radio;
	options: string[];
	answer: string;
}

export interface IShortTextQuestion extends IAbstractQuestion {
	type: QuestionType.ShortText;
	answer: string;
}
export interface ILongTextQuestion extends IAbstractQuestion {
	type: QuestionType.LongText;
}

export type IQuestion = ICheckboxQuestion | IRadioQuestion | IShortTextQuestion | ILongTextQuestion;

export interface IQuestionFormProps {
	question: IQuestion & { chosenAnswer: string | string[] };
	onChange: (value: string | string[]) => void;
}
