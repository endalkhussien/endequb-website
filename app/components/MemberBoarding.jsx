// 'use client';
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Form, 
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";

// const bookingSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().min(10, "Phone number must be at least 10 digits"),
//   destination: z.string().min(1, "Please select a destination"),
//   date: z.string().min(1, "Please select a date"),
//   guests: z.string().min(1, "Please select number of guests"),
//   message: z.string().optional(),
// });

// export default function MemberBoardingForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const form = useForm({
//     resolver: zodResolver(bookingSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       destination: "",
//       date: "",
//       guests: "",
//       message: "",
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       setIsSubmitting(true);
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       console.log("Onboarding submitted:", data);

//       toast({
//         title: "Onboarding Request Received!",
//         description: "Thank you for your interest. Our team will contact you within 24 hours.",
//       });

//       form.reset();
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section id="booking" className="py-24 bg-muted/30">
//       <div className="max-w-4xl mx-auto px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6" data-testid="text-booking-title">
//             Plan Your Journey
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             Ready to embark on your next adventure? Fill out the form below and our
//             travel experts will craft a personalized itinerary just for you.
//           </p>
//         </div>

//         <Card className="p-8 md:p-12">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Full Name</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="John Doe"
//                           {...field}
//                           data-testid="input-name"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Email Address</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="email"
//                           placeholder="john@example.com"
//                           {...field}
//                           data-testid="input-email"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="phone"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Phone Number</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="+1 (555) 123-4567"
//                           {...field}
//                           data-testid="input-phone"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="guests"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Number of Guests</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger data-testid="select-guests">
//                             <SelectValue placeholder="Select guests" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="1">1 Guest</SelectItem>
//                           <SelectItem value="2">2 Guests</SelectItem>
//                           <SelectItem value="3-4">3-4 Guests</SelectItem>
//                           <SelectItem value="5+">5+ Guests</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="destination"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Preferred Destination</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger data-testid="select-destination">
//                             <SelectValue placeholder="Select destination" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="maldives">Maldives Paradise</SelectItem>
//                           <SelectItem value="iceland">Iceland Northern Lights</SelectItem>
//                           <SelectItem value="swiss-alps">Swiss Alps Adventure</SelectItem>
//                           <SelectItem value="bagan">Bagan Cultural Tour</SelectItem>
//                           <SelectItem value="tokyo">Tokyo Urban Experience</SelectItem>
//                           <SelectItem value="safari">African Safari</SelectItem>
//                           <SelectItem value="amalfi">Amalfi Coast Retreat</SelectItem>
//                           <SelectItem value="machu-picchu">Machu Picchu Explorer</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="date"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Preferred Travel Date</FormLabel>
//                       <FormControl>
//                         <Input
//                           type="date"
//                           {...field}
//                           data-testid="input-date"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Additional Requirements (Optional)</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Tell us about your travel preferences, dietary requirements, or any special requests..."
//                         className="min-h-[120px] resize-none"
//                         {...field}
//                         data-testid="input-message"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <Button
//                 type="submit"
//                 size="lg"
//                 className="w-full"
//                 disabled={isSubmitting}
//                 data-testid="button-submit-booking"
//               >
//                 {isSubmitting ? "Submitting..." : "Submit Booking Request"}
//               </Button>
//             </form>
//           </Form>
//         </Card>
//       </div>
//     </section>
//   );
// }
