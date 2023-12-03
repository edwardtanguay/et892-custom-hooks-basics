import { useToggle } from "../hooks/useToggle";

export const PageToggle = () => {
	const [isOnline, toggleIsOnline] = useToggle();
	const [isProcessing, toggleIsProcessing] = useToggle();
	return (
		<>
			<div className="flex gap-3 items-center mb-3">
				<button onClick={() => toggleIsOnline()}>sign in/out</button>{" "}
				<span className="text-2xl">
					{isOnline ? "online" : "offline"}
				</span>
			</div>
			<div className="flex gap-3 items-center mb-3">
				<button onClick={() => toggleIsProcessing()}>
					change processing status
				</button>{" "}
				<span className="text-2xl">
					{isProcessing ? "processing..." : "finished."}
				</span>
			</div>
		</>
	);
};
