"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Sparkles, Zap, Shield, Lightbulb, Settings, TrendingUp, Users, Award, Star, Rocket } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="fluid"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Agentic MVPs"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020023141-0dx68f0u.jpg"
          logoAlt="Agentic MVPs"
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Build AI-Powered MVPs in Days"
          description="Deploy intelligent agents that work for you. Agentic MVPs transforms your vision into production-ready AI applications with unprecedented speed."
          tag="Revolutionizing AI Development"
          tagIcon={Sparkles}
          buttons={[
            { text: "Start Building", href: "contact" },
            { text: "View Demo", href: "features" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020023768-rwovg5uv.jpg", imageAlt: "AI technology artificial intelligence" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020024730-v1n1ci43.jpg", imageAlt: "AI innovation neural network" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020025201-9eccq2mm.jpg", imageAlt: "Future technology AI" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020026270-po0g76d7.jpg", imageAlt: "Data analytics AI dashboard" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020026963-fe5oxjpr.jpg", imageAlt: "Automation AI robot intelligent" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose Agentic MVPs"
          description="We understand the challenges of bringing AI ideas to market. Our platform eliminates complexity, enabling you to focus on your core innovation."
          tag="Our Philosophy"
          tagIcon={Zap}
          bulletPoints={[
            {
              title: "Lightning Fast",
              description: "Deploy complete AI agents in days, not months. Skip the infrastructure setup.",
              icon: Zap
            },
            {
              title: "Production Ready",
              description: "Built-in monitoring, scaling, and reliability. Your MVP is enterprise-grade from day one.",
              icon: Shield
            },
            {
              title: "No AI Expertise Required",
              description: "Our intuitive platform guides you through building complex agents step by step.",
              icon: Lightbulb
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020024730-v1n1ci43.jpg"
          imageAlt="AI innovation platform"
          imagePosition="right"
          textboxLayout="default"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="How Agentic MVPs Works"
          description="Three simple steps to launch your AI application"
          tag="Smart Integration"
          tagIcon={Settings}
          features={[
            {
              id: 1,
              title: "Define Your Agent",
              description: "Describe your AI agent's purpose, capabilities, and data sources. Our platform handles the complexity.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020027665-4ggxx7si.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020028549-gjcztj9i.jpg" }
            },
            {
              id: 2,
              title: "Train & Optimize",
              description: "Our advanced ML pipeline trains your agent on real-world scenarios, optimizing performance continuously.",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020028549-gjcztj9i.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020027665-4ggxx7si.jpg" }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          buttons={[
            { text: "Explore Features", href: "contact" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Trusted by Innovators"
          description="See the impact of AI-powered development"
          tag="Impact"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: Zap,
              title: "Deployment Speed",
              value: "10x Faster"
            },
            {
              id: "2",
              icon: Users,
              title: "Active Users",
              value: "50,000+"
            },
            {
              id: "3",
              icon: Award,
              title: "Success Rate",
              value: "98.5%"
            },
            {
              id: "4",
              icon: TrendingUp,
              title: "Growth",
              value: "300% YoY"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Experts in AI, software engineering, and product innovation"
          tag="Leadership"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "CEO & Co-Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020029212-i7z7kw71.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "CTO & Co-Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020029835-2yy5g15b.jpg",
              imageAlt: "Marcus Rodriguez"
            },
            {
              id: "3",
              name: "Emily Watson",
              role: "Head of AI Research",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020030352-aiilk2u9.png",
              imageAlt: "Emily Watson"
            },
            {
              id: "4",
              name: "David Park",
              role: "VP of Product",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020031079-2vb8rigo.jpg",
              imageAlt: "David Park"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Loved by Founders & Teams"
          description="Real feedback from companies using Agentic MVPs"
          tag="Customer Stories"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Alex Johnson",
              role: "Founder",
              company: "TechStartup Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020032146-8e695v29.jpg"
            },
            {
              id: "2",
              name: "Lisa Chen",
              role: "Product Lead",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020032806-09nuxxud.jpg"
            },
            {
              id: "3",
              name: "Michael Brown",
              role: "CTO",
              company: "Digital Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020033319-hikadiv5.png"
            },
            {
              id: "4",
              name: "Sarah Williams",
              role: "CEO",
              company: "Future AI Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020033862-sh4hbu65.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Backed by Industry Leaders"
          description="Trusted by companies pushing the boundaries of AI"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020034659-zi77kcuj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020035331-uu27c7gh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020035973-5knn4i71.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020036455-jiuptgy3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020036981-v5rqtl18.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020037509-a849gmjx.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020038047-4owb24gk.jpg"
          ]}
          textboxLayout="default"
          showCard={true}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Build Your AI MVP"
          description="Join hundreds of innovators creating the next generation of AI-powered applications. Start your free trial today."
          tagIcon={Rocket}
          inputPlaceholder="Enter your email"
          buttonText="Get Started Free"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1764020023141-0dx68f0u.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 Agentic MVPs. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Security", href: "contact" },
                { label: "Documentation", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Blog", href: "contact" },
                { label: "Careers", href: "contact" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "contact" },
                { label: "Terms of Service", href: "contact" },
                { label: "Cookie Policy", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}