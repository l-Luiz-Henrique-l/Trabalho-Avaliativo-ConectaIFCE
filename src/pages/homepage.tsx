import CtaSection from '@/components/homepage/cta-section'
import FaqSection from '@/components/homepage/faq-section'
import Featuresection from '@/components/homepage/feature-section'
import Herosection from '@/components/homepage/hero-section'
import React from 'react'

function Homepage() {
	return (
		<>
			<Herosection />
			<Featuresection />
			<FaqSection />
			<CtaSection />
		</>
	)
}

export default Homepage
