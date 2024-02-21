interface DopeDev {
	name: string;
	avatar: string; // URL to the avatar image
	bio: string;
	country: string;
	technologies: string[]; // Array of technologies
}

export const dope_devs_data: DopeDev[] = [
	{
		name: 'Wes Bos',
		avatar:
			'https://pbs.twimg.com/profile_images/877525007185858562/7G9vGTca_400x400.jpg',
		bio: 'Fullstack Dev ❯ JS⚛ CSS Node ❯ http://BeginnerJavaScript.com ❯ http://ReactForBeginners.com ❯ http://JavaScript30.com ❯  http://wesbos.com/courses ❯ 🔥 Tips ❯ ♥ @KaitBos ❯ @SyntaxFM',
		country: 'CA',
		technologies: ['JavaScript', 'React', 'Node.js', 'Svelte'],
	},
	{
		name: 'Rich Harris',
		avatar:
			'https://pbs.twimg.com/profile_images/557940120184041473/bFyXy8Pu_400x400.jpeg',
		bio: 'Cheese fan. I work on @sveltejs at @vercel',
		country: 'US',
		technologies: ['JavaScript', 'HTML', 'CSS', 'Svelte'],
	},
	{
		name: 'Scott Tolinski',
		avatar:
			'https://pbs.twimg.com/profile_images/1404817306031562756/5cHmpCuL_400x400.jpg',
		bio: 'Creator of @leveluptuts | Co-host of http://Syntax.fm | Youtuber: http://youtube.com/c/leveluptuts | Robotops Crew Bboy clips: http://instagram.com/stolinski/',
		country: 'US',
		technologies: [
			'JavaScript',
			'TypeScript',
			'GraphQL',
			'HTML',
			'CSS',
			'Svelte',
		],
	},
];
