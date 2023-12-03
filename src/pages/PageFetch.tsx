import { IJob, ISkill } from "../interfaces";
import { useFetch } from "../hooks/useFetch";

export const PageFetch = () => {
	const { items: skills, isLoading: isLoadingSkills } = useFetch<ISkill[]>(
		"https://edwardtanguay.vercel.app/share/skills_with_id.json",
		true
	);
	const { items: jobs, isLoading: isLoadingJobs } = useFetch<IJob[]>(
		"https://edwardtanguay.vercel.app/share/jobs.json",
		true
	);

	return (
		<>
			<p>There are {isLoadingSkills ? "..." : skills.length} skills.</p>
			{isLoadingJobs ? (
				<p>Jobs are loading...</p>
			) : (
				<p>There are {jobs.length} jobs.</p>
			)}
		</>
	);
};
