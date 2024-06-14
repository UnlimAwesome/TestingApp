import { Test } from '@/components/ui/test';
import { TestHeader } from '@/components/ui/test-header';
import { questionMock } from '@/lib/mock';
import { useTimer } from '@/lib/useTimer';
export const TestPage = () => {
	const { finishTest, startTest, timer } = useTimer();
	return (
		<>
			<div className='flex flex-col gap-2 w-4/6'>
				<TestHeader
					startTest={startTest}
					timer={timer}
				/>
				{timer && (
					<Test
						onSubmit={finishTest}
						questionsDTO={questionMock}
					/>
				)}
			</div>
		</>
	);
};
