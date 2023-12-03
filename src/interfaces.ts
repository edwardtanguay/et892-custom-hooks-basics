export interface ISkill {
	id: number;
	idCode: string;
	name: string;
	url: string;
	description: string;
}

export interface IJob {
	id: number;
	title: string;
	company: string;
	description: string;
	skillLlist: string;
	publicationDate: string;
}