export type UserDomain = {
	id: string;
  firstName: string;
  lastName: string;
  name: string;
	bio: string,
  email: string;
  avatarUrl?: string;
  role: 'STUDENT' | 'PROFESSOR' | 'TECHNICIAN';
  campus: {
    id: string;
    name: string;
  };
  course?: string;
	states: {
		followerCount: number,
		followingCount: number
		postsCount: number,
	},
	isFollowing: boolean;
}
