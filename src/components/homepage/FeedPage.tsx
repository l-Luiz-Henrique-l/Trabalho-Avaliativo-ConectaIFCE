import RecommendationsCard from '@/follow/components/recommendetions-card'
import ProfileCard from '@/users/components/profile-card'

function FeedPage() {
  return (
    <section className='flex-1 flex justify-center items-center'>
      <ProfileCard />
			<RecommendationsCard />
    </section>
  )
}

export default FeedPage
