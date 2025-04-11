'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@app/lib/utils';
import { Button } from '@app/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@app/components/ui/form';
import { Input } from '@app/components/ui/input';
import { Textarea } from '@app/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@app/hooks/use-toast';
import Navbar from '@app/components/Navbar';
import Footer from '@app/components/Footer';
import Hero from '@app/components/Hero';
import { CONTACT_INFO, SERVICES } from '@app/constants';
import Link from 'next/link';

const Services = () => {
  const [activeService, setActiveService] = useState('software');
  const currentService = SERVICES.find((service) => service.id === activeService) || services[0];

  // Form schema
  const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phone: z.string().min(6, { message: 'Please enter a valid phone number.' }),
    company: z.string().optional(),
    service: z.string().min(1, { message: 'Please select a service.' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  });
  // Form handling
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      service: activeService,
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your backend
    console.log(values);
    toast({
      title: 'Inquiry Submitted',
      description: "We'll get back to you as soon as possible!",
    });
    form.reset();
  }

  return (
    <div className="h-full bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero
          title="Our Services"
          subtitle="We deliver end-to-end solutions that transform ideas into reality through
                cutting-edge technology and innovative design."
        />

        {/* Service Detail Section */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={cn(
                        'rounded-lg p-6 transition-all duration-300',
                        activeService === service.id
                          ? 'border border-coral/20 bg-coral/10'
                          : 'border border-border bg-background/80 hover:bg-muted/50',
                      )}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div
                          className={cn(
                            'mb-4 rounded-full p-3',
                            activeService === service.id
                              ? 'bg-coral text-white'
                              : 'bg-muted text-muted-foreground',
                          )}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-medium">{service.title}</h3>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-col items-start gap-12 md:flex-row">
                {/* Service Info */}
                <div className="flex-1">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">{currentService.title}</h2>
                  <p className="mb-8 text-lg text-muted-foreground">{currentService.description}</p>

                  <h3 className="mb-4 text-xl font-semibold">Key Features</h3>
                  <div className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {currentService.features.map((feature) => (
                      <div key={feature.id} className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 text-coral">
                          <Check className="h-5 w-5" />
                        </div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="mb-4 text-xl font-semibold">Benefits</h3>
                  <ul className="mb-8 space-y-2">
                    {currentService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0 rounded-full bg-coral/10 p-1 text-coral">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-lg border border-border bg-muted/50 p-6">
                    <h4 className="mb-2 font-medium">Ready to get started?</h4>
                    <p className="mb-4 text-muted-foreground">
                      Contact us today for a free consultation on your project requirements.
                    </p>
                    <div className="flex flex-row space-x-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Email:</span>
                        <Link
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-coral hover:underline"
                        >
                          {CONTACT_INFO.email}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Phone:</span>
                        <Link
                          href={`tel:${CONTACT_INFO.phone}`}
                          className="text-coral hover:underline"
                        >
                          {CONTACT_INFO.phone}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inquiry Form */}
                <div className="w-full rounded-lg border border-border bg-secondary/30 p-6 md:w-2/5">
                  <h3 className="mb-6 text-xl font-semibold">Request Information</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service</FormLabel>
                            <FormControl>
                              <select
                                className="w-full rounded-md border border-input bg-background px-3 py-2 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral"
                                {...field}
                              >
                                {SERVICES.map((service) => (
                                  <option key={service.id} value={service.id}>
                                    {service.title}
                                  </option>
                                ))}
                              </select>
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or requirements"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-coral text-white hover:bg-coral-dark"
                      >
                        Submit Inquiry
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Services;
