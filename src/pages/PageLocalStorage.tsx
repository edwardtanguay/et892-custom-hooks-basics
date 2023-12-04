import { useLocalStorage } from "../hooks/useLocalStorage";

export const PageLocalStorage = () => {
	const { value: firstName, save: saveFirstName } =
		useLocalStorage("firstName");
	const { value: status, save: saveStatus } = useLocalStorage(
		"status",
		"not-available"
	);

	return (
		<>
			<div className="flex gap-2 mb-3">
				<p>First Name:</p>
				<input
					value={firstName}
					onChange={(e) => saveFirstName(e.target.value)}
				/>
			</div>
			<div className="flex mb-3">
				<p
					className="underline cursor-pointer"
					onClick={() =>
						saveStatus(
							status === "available"
								? "not-available"
								: "available"
						)
					}
				>
					Status
				</p>
				<p>: {status}</p>
			</div>
			<hr className="mb-3" />
			{firstName && (
				<p>
					Hello, {firstName}, you are currently marked as{" "}
					{status === "available" ? "available" : "not available"}{" "}
				</p>
			)}
		</>
	);
};
