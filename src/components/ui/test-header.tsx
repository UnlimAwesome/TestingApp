import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TestHeaderProps {
	timer?: number;
	startTest: () => void;
}

export const TestHeader = (props: TestHeaderProps) => {
	const { timer, startTest } = props;
	if (!timer) {
		return (
			<div className='w-max justify-center items-center flex flex-col gap-4'>
				<h1 className='text-3xl font-bold'>Тестирование</h1>
				<Button
					variant='destructive'
					onClick={startTest}
				>
					Приступить к тестированию
				</Button>
			</div>
		);
	}

	return (
		<div className='flex gap-4 items-end'>
			<h1 className='text-3xl font-bold'>Тестирование</h1>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<p className='flex items-center justify-center px-1 font-bold text-xl'>
							{Math.floor(timer / 60) +
								':' +
								(timer % 60).toLocaleString('ru', { minimumIntegerDigits: 2 })}
						</p>
					</TooltipTrigger>
					<TooltipContent>
						<p>Оставшееся время</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};
