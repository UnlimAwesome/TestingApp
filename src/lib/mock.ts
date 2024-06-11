import { IQuestion, QuestionType } from '@/model/question';

export const questionMock: IQuestion[] = [
	{
		id: 'question1',
		type: QuestionType.Radio,
		text: 'Что должен знать фронтенд разработчик? Назовите три ключевых технологии.',
		options: ['HTML, CSS, JS', 'PHP, JS, Kotlin', 'C#, Unity, JS', 'Next.js, Express.js, JS'],
		answer: 'HTML, CSS, JS',
	},
	{
		id: 'question2',
		type: QuestionType.Radio,
		text: 'В каком ухе у меня жужжит?',
		options: ['В левом', 'В правом', 'В обоих ухах'],
		answer: 'В обоих ухах',
	},
	{
		id: 'question3',
		type: QuestionType.Checkbox,
		text: 'Какие инструменты для стилизации использовать?',
		options: ['HTML', 'JS', 'Tailwind', 'SaSS', 'Less'],
		answer: ['SaSS', 'Less', 'Tailwind'],
	},
	{
		id: 'question4',
		type: QuestionType.ShortText,
		text: 'Какая часть линейки очень быстро тает на солнышке?',
		answer: 'Иней',
	},
	{
		id: 'question5',
		type: QuestionType.LongText,
		text: 'Почему Андрей Болконский идет на войну?',
	},
];
