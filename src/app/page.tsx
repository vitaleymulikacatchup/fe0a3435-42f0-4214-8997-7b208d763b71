"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Camera, Zap, Package, DollarSign, BarChart3, Users, MessageSquare, Building2, HelpCircle, BookOpen, Mail, Twitter, Instagram, Youtube, Facebook, Sparkles, Award, Crown, Monitor, Video } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="SONY"
          button={{
            text: "Shop Now",
            href: "https://www.sony.com/cameras"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Professional Presentation Cameras"
          description="Capture every detail with SONY's advanced presentation camera technology, designed for professionals who demand excellence in every frame."
          tag="SONY Professional"
          tagIcon={Camera}
          buttons={[
            {
              text: "Explore Cameras",
              href: "product"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560810307-45jnuz10.jpg"
          imageAlt="SONY professional presentation camera"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We create professional presentation cameras that empower content creators, educators, and business professionals to deliver exceptional visual experiences with cutting-edge technology and unmatched reliability."
          buttons={[
            {
              text: "Discover Technology",
              href: "feature"
            },
            {
              text: "View Products",
              href: "product"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Advanced Camera Technology"
          description="Experience the cutting-edge features that make SONY presentation cameras the preferred choice for professionals worldwide."
          tag="Innovation"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "4K Ultra HD Recording",
              description: "Capture stunning presentations with crystal-clear 4K resolution and professional-grade image quality that brings every detail to life.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560813071-uckcrqy6.jpg",
              imageAlt: "4K Ultra HD recording technology"
            },
            {
              id: "02",
              title: "Advanced Image Stabilization",
              description: "Our cutting-edge stabilization technology ensures smooth, professional footage even in challenging environments or with camera movement.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560814231-edzzc9su.jpg",
              imageAlt: "Advanced image stabilization system"
            },
            {
              id: "03",
              title: "Intelligent Autofocus",
              description: "Lightning-fast autofocus with AI-powered subject tracking keeps your presentations sharp and professional at all times.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560815309-2kjd6yiy.jpg",
              imageAlt: "Intelligent autofocus technology"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Professional Camera Collection"
          description="Discover our complete range of presentation cameras designed for every professional need and budget."
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "SONY Alpha Pro Series",
              price: "$2,499",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560816405-2yza1uw3.jpg",
              imageAlt: "SONY Alpha Pro Series camera",
              onProductClick: () => window.open('https://www.sony.com/cameras/alpha', '_blank')
            },
            {
              id: "2",
              name: "SONY FX Professional",
              price: "$3,299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560817461-scg36ejy.jpg",
              imageAlt: "SONY FX Professional camera",
              onProductClick: () => window.open('https://www.sony.com/cameras/fx', '_blank')
            },
            {
              id: "3",
              name: "SONY Compact Presenter",
              price: "$1,299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560818690-idec2375.jpg",
              imageAlt: "SONY Compact Presenter camera",
              onProductClick: () => window.open('https://www.sony.com/cameras/compact', '_blank')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Professional Camera Solutions"
          description="Choose the perfect SONY presentation camera package that fits your professional requirements and budget."
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Best Value",
              badgeIcon: Sparkles,
              price: "$1,299",
              subtitle: "Perfect for small presentations",
              features: [
                "Compact Presenter Camera",
                "1080p HD Recording",
                "Basic Image Stabilization",
                "6-month Warranty",
                "Email Support"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Award,
              price: "$2,499",
              subtitle: "Ideal for professional use",
              features: [
                "Alpha Pro Series Camera",
                "4K Ultra HD Recording",
                "Advanced Stabilization",
                "12-month Warranty",
                "Priority Support",
                "Professional Accessories"
              ]
            },
            {
              id: "enterprise",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$3,299",
              subtitle: "For enterprise solutions",
              features: [
                "FX Professional Camera",
                "4K Ultra HD + HDR",
                "AI-Powered Features",
                "24-month Warranty",
                "24/7 Premium Support",
                "Complete Accessory Kit",
                "Training Session Included"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Performance Excellence"
          description="Discover the impressive specifications and performance metrics that make SONY presentation cameras industry leaders."
          tag="Specifications"
          tagIcon={BarChart3}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "4K",
              title: "Ultra HD",
              description: "Maximum recording resolution for crystal-clear presentation capture",
              icon: Monitor
            },
            {
              id: "2",
              value: "60fps",
              title: "Frame Rate",
              description: "Smooth video recording for professional presentation quality",
              icon: Video
            },
            {
              id: "3",
              value: "24MP",
              title: "Resolution",
              description: "High-resolution image capture for detailed still photography",
              icon: Camera
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Expert Team"
          description="Meet the innovative minds behind SONY's professional presentation camera technology."
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Hiroshi Tanaka",
              role: "Chief Engineer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560823604-2xrojg2b.jpg",
              imageAlt: "Hiroshi Tanaka, Chief Engineer"
            },
            {
              id: "2",
              name: "Yuki Yamamoto",
              role: "Design Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560825039-jk0refem.jpg",
              imageAlt: "Yuki Yamamoto, Design Director"
            },
            {
              id: "3",
              name: "Kenji Sato",
              role: "Lead Photographer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560826097-so0edvv1.jpg",
              imageAlt: "Kenji Sato, Lead Photographer"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="Trusted by Professionals"
          description="Hear from photographers, videographers, and content creators who rely on SONY presentation cameras."
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex Thompson",
              handle: "@alexphoto_pro",
              testimonial: "The SONY Alpha Pro has revolutionized my presentation photography. The 4K quality and stabilization are absolutely incredible for professional work.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560827363-j1jsudpf.jpg",
              imageAlt: "Alex Thompson, Professional Photographer"
            },
            {
              id: "2",
              name: "Maria Rodriguez",
              handle: "@maria_creates",
              testimonial: "As a videographer, the FX Professional camera delivers stunning results. The autofocus system never misses a beat during live presentations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560828743-o0i51spt.jpg",
              imageAlt: "Maria Rodriguez, Professional Videographer"
            },
            {
              id: "3",
              name: "David Chen",
              handle: "@davidtech_content",
              testimonial: "The compact presenter camera is perfect for my content creation needs. Portable, reliable, and produces amazing quality footage every time.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560829864-ida7cqcq.jpg",
              imageAlt: "David Chen, Content Creator"
            },
            {
              id: "4",
              name: "Sarah Wilson",
              handle: "@sarahphoto_news",
              testimonial: "Working as a photojournalist, I need equipment I can trust. SONY cameras deliver consistent, professional results in any environment.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560830984-c685o0ub.jpg",
              imageAlt: "Sarah Wilson, Photojournalist"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join the world's leading camera manufacturers and professionals who choose SONY for their presentation needs."
          tag="Partners"
          tagIcon={Building2}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560832259-u8efjr7x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560833541-5z4yt0rc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560834666-7lu58ffp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560835974-zyud354e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560837326-yv0x5l2j.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560838659-0x33rvt5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560840122-j2enu0sw.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about SONY presentation cameras, specifications, and support."
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What makes SONY presentation cameras different from regular cameras?",
              content: "SONY presentation cameras are specifically designed for professional presentation environments with features like advanced autofocus, superior low-light performance, and optimized video recording capabilities for clear, stable footage in various lighting conditions."
            },
            {
              id: "2",
              title: "Do SONY cameras support live streaming?",
              content: "Yes, most SONY presentation cameras support live streaming through USB connectivity and are compatible with popular streaming software. They also offer clean HDMI output for professional broadcasting setups."
            },
            {
              id: "3",
              title: "What warranty coverage is included with SONY cameras?",
              content: "All SONY presentation cameras come with manufacturer warranty coverage ranging from 6 months to 24 months depending on the model. Extended warranty options are also available for professional users."
            },
            {
              id: "4",
              title: "Can I use SONY cameras for both photography and video recording?",
              content: "Absolutely! SONY presentation cameras excel at both high-quality still photography and professional video recording, making them versatile tools for any presentation or content creation need."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Camera Insights & Tips"
          description="Stay updated with the latest photography techniques, technology insights, and professional tips from SONY experts."
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Photography",
              title: "Professional Presentation Photography Tips",
              excerpt: "Master the art of presentation photography with these expert techniques and camera settings for stunning results.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560841629-ellrgyws.jpg",
              imageAlt: "Professional photography tips",
              authorName: "Michael Zhang",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560846748-s29q93pa.jpg",
              date: "15 Jan 2025",
              onBlogClick: () => console.log('Photography tips clicked')
            },
            {
              id: "2",
              category: "Technology",
              title: "4K Video Production Techniques",
              excerpt: "Discover advanced video production techniques using SONY's latest 4K camera technology for professional presentations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560843060-pz05sije.jpg",
              imageAlt: "4K video production techniques",
              authorName: "Sarah Chen",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560845415-w4honwr2.jpg",
              date: "10 Jan 2025",
              onBlogClick: () => console.log('Video production clicked')
            },
            {
              id: "3",
              category: "Innovation",
              title: "The Future of Camera Technology",
              excerpt: "Explore the cutting-edge innovations shaping the future of professional presentation cameras and imaging technology.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560844461-o93nxe5v.jpg",
              imageAlt: "Future camera technology",
              authorName: "Dr. Hiroshi Tanaka",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560823604-2xrojg2b.jpg",
              date: "5 Jan 2025",
              onBlogClick: () => console.log('Technology future clicked')
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Get the Latest Camera Updates"
          description="Subscribe to our newsletter for exclusive updates on new SONY presentation cameras, professional tips, and special offers for professionals."
          tagIcon={Mail}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763560847872-otadnrl6.jpg"
          imageAlt="Professional camera studio setup"
          mediaPosition="right"
          inputPlaceholder="Your professional email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive updates about SONY camera products and services. Unsubscribe anytime."
          onSubmit={(email) => console.log('Newsletter subscription:', email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SONY"
          copyrightText="© 2025 Sony Corporation. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Alpha Series",
                  href: "https://www.sony.com/cameras/alpha"
                },
                {
                  label: "FX Professional",
                  href: "https://www.sony.com/cameras/fx"
                },
                {
                  label: "Compact Cameras",
                  href: "https://www.sony.com/cameras/compact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Product Manuals",
                  href: "https://www.sony.com/support/manuals"
                },
                {
                  label: "Technical Support",
                  href: "https://www.sony.com/support"
                },
                {
                  label: "Warranty Service",
                  href: "https://www.sony.com/warranty"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Sony",
                  href: "https://www.sony.com/about"
                },
                {
                  label: "Careers",
                  href: "https://www.sony.com/careers"
                },
                {
                  label: "Press Center",
                  href: "https://www.sony.com/press"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/sony",
              ariaLabel: "Follow Sony on Twitter"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/sony",
              ariaLabel: "Follow Sony on Instagram"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/sony",
              ariaLabel: "Follow Sony on YouTube"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/sony",
              ariaLabel: "Follow Sony on Facebook"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}