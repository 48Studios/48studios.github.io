'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Award, Heart } from 'lucide-react';
import { Button } from '@app/components/ui/button';
import { Badge } from '@app/components/ui/badge';
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';
import Hero from '@app/components/Hero';

const About = () => {
  // Values section data
  const values = [
    {
      icon: <Globe className="h-8 w-8 text-coral" />,
      title: 'Innovation',
      description:
        "We're always exploring the cutting edge of technology to bring new solutions to life.",
    },
    {
      icon: <Users className="h-8 w-8 text-coral" />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to achieve the best results.',
    },
    {
      icon: <Award className="h-8 w-8 text-coral" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we create and build.',
    },
    {
      icon: <Heart className="h-8 w-8 text-coral" />,
      title: 'Passion',
      description: "We're passionate about technology and the impact it can have on the world.",
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      bio: 'With over 15 years of experience in hardware and software engineering, Rahul founded 48 Studios to bridge the gap between digital and physical innovation.',
    },
    {
      name: 'Priya Patel',
      role: 'Lead Software Engineer',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      bio: 'Priya specializes in IoT systems and embedded software, bringing smart solutions to life through elegant code and thoughtful architecture.',
    },
    {
      name: 'Vikram Singh',
      role: '3D Design Expert',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      bio: 'Vikram transforms complex ideas into tangible 3D models, with expertise in industrial design and rapid prototyping.',
    },
    {
      name: 'Aisha Khan',
      role: 'Product Manager',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1074&q=80',
      bio: 'Aisha ensures our products meet market needs through customer-focused development and strategic planning.',
    },
  ];

  return (
    <div className="h-full bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Crafting Perfection, Delivering Brilliance"
        subtitle="48 Studios is where innovation meets craftsmanship. We blend software, hardware, and design expertise to create products that make a difference."
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge variant="outline" className="mb-4 text-coral">
                Our Story
              </Badge>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                From a Small Workshop to a Studio of Innovation
              </h2>
              <p className="mb-6 text-muted-foreground">
                Founded in 2015 in Kolkata, 48 Studios began as a small workshop focused on custom
                3D printing solutions. As technology evolved, so did we, expanding our expertise to
                include software development and IoT solutions.
              </p>
              <p className="mb-6 text-muted-foreground">
                Today, we&apos;re a team of engineers, designers, and creators who are passionate
                about bringing ideas to life. We believe in the power of technology to solve
                real-world problems and create meaningful experiences.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our journey has been defined by curiosity, perseverance, and a commitment to
                quality. We&apos;re proud of what we&apos;ve built and excited about what&apos;s
                ahead.
              </p>
              <Link href="/contact">
                <Button className="mt-4 bg-coral text-white hover:bg-coral/90">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="relative h-[400px] overflow-hidden rounded-xl lg:h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112c4e17c6?ixlib=rb-1.2.1&auhref=format&fit=crop&w=1470&q=80"
                alt="48 Studios workshop"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-medium">
                  Our first workshop in Kolkata, where it all began
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 text-coral">
              Our Values
            </Badge>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">What Drives Us Forward</h2>
            <p className="text-muted-foreground">
              Our core values shape everything we do, from how we approach projects to how we build
              our team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="rounded-xl border bg-card p-6 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 text-coral">
              Our Team
            </Badge>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">The Faces Behind Our Innovation</h2>
            <p className="text-muted-foreground">
              Meet the passionate individuals who bring their expertise and creativity to every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="relative mb-5 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </div>
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="mb-3 font-medium text-coral">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-4xl font-bold text-coral md:text-5xl">7+</p>
              <p className="text-lg">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-4xl font-bold text-coral md:text-5xl">50+</p>
              <p className="text-lg">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-4xl font-bold text-coral md:text-5xl">25+</p>
              <p className="text-lg">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="mb-2 text-4xl font-bold text-coral md:text-5xl">12</p>
              <p className="text-lg">Team Members</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-muted/60 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Ready to Bring Your Ideas to Life?
              </h2>
              <p className="mb-8 text-muted-foreground">
                We&apos;re always looking for exciting new projects and collaborations. Let&apos;s
                discuss how we can help turn your vision into reality.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button className="bg-coral text-white hover:bg-coral/90">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">Our Services</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default About;
