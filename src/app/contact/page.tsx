'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@app/components/ui/button';
import { Input } from '@app/components/ui/input';
import { Textarea } from '@app/components/ui/textarea';
import { Badge } from '@app/components/ui/badge';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@app/components/ui/form';
// import { toast } from "sonner";
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';
import { CONTACT_INFO } from '@app/constants';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact info
  const CONTACT_INFO_EXTENDED = [
    {
      icon: <MapPin className="h-5 w-5 text-coral" />,
      title: 'Visit Us',
      details: [CONTACT_INFO.address],
    },
    {
      icon: <Phone className="h-5 w-5 text-coral" />,
      title: 'Call Us',
      details: [CONTACT_INFO.phone],
    },
    {
      icon: <Mail className="h-5 w-5 text-coral" />,
      title: 'Email Us',
      details: [CONTACT_INFO.email],
    },
    {
      icon: <Clock className="h-5 w-5 text-coral" />,
      title: 'Working Hours',
      details: ['Monday - Friday: 10AM - 8PM', 'Saturday: 10AM - 2PM'],
    },
  ];

  // Form definition
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  // Form submission handler
  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      // toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-muted/30 pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 text-coral">
              Contact Us
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Get in Touch with Our Team</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Have a question, a project idea, or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Send Us a Message</h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input placeholder="johndoe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project or inquiry..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-coral text-white hover:bg-coral/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Contact Information</h2>
              <p className="mb-8 text-muted-foreground">
                We're here to help. Reach out to us through any of these channels.
              </p>

              <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {CONTACT_INFO_EXTENDED.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <div className="mr-4 mt-1">{info.icon}</div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="h-[300px] overflow-hidden rounded-xl border shadow-sm">
                <iframe
                  loading="lazy"
                  width="100%"
                  height="100%"
                  title="48 Studios"
                  className="border-0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=48 Studios&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 text-coral">
              FAQs
            </Badge>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Here are some common questions our clients ask us.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-semibold">What services do you offer?</h3>
              <p className="text-muted-foreground">
                We offer software development, IoT solutions, 3D printing services, and 3D design.
                Visit our Services page for more details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-semibold">How long does a typical project take?</h3>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity. Small projects may take 2-4 weeks, while
                larger ones can take 2-6 months. We'll provide a detailed timeline during
                consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-semibold">
                Do you work with clients outside India?
              </h3>
              <p className="text-muted-foreground">
                Yes, we work with clients globally. We use digital collaboration tools to ensure
                smooth communication and project management regardless of location.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-semibold">How do we get started on a project?</h3>
              <p className="text-muted-foreground">
                Contact us through the form on this page or email us directly. We'll schedule an
                initial consultation to discuss your needs and how we can help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-black p-8 text-white md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">Start Your Project Today</h2>
              <p className="mb-8 text-gray-400">
                Let's collaborate to bring your vision to life. Take the first step towards
                innovation.
              </p>
              <Button className="bg-coral text-white hover:bg-coral/90">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Contact;
