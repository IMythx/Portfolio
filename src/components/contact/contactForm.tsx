"use client";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "../ui/textarea";
import AnimatedButton from "../global/animatedButton";
import { FaTelegramPlane } from "react-icons/fa";
import { sendEmail } from "@/actions";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";

const formSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email().min(1, "Required"),
  subject: z.string().min(1, "Required"),
  message: z.string().min(1, "Required"),
});

const ContactForm = () => {
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSending(true);
    const res: { ok: boolean } = await sendEmail(data);
    if (res.ok) {
      toast.success("Email sent successfully");
      form.reset({
        name: "",
        email: "",
        message: "",
        subject: "",
      });
    } else {
      toast.error("Failed to send email");
    }
    setIsSending(false);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="grid gap-6 flex-1 h-fit">
        <h5 className="font-bold text-2xl">GET IN TOUCH !</h5>
        <p className="w-[80%]">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your vision.
        </p>
        <div className="flex items-center gap-4">
          <FaEnvelope size={30} className="text-primary-portfolio" />
          <div className="grid gap-1">
            <p>MAIL ME</p>
            <Link
              href={"mailto:mahmoudhelal9888@gmail.com"}
              className="font-bold"
            >
              mahmoudhelal9888@gmail.com
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary-portfolio flex items-center justify-center rounded-lg">
            <MdCall size={22} className="text-black" />
          </div>
          <div className="grid gap-1">
            <p>CALL ME</p>
            <Link href={"Tel:mahmoudhelal9888@gmail.com"} className="font-bold">
              +20 01029862568
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"https://www.linkedin.com/in/mahmoud-helal-b0a89a246"}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background hover:bg-primary-portfolio"
          >
            <FaLinkedin size={"22"} />
          </Link>
          <Link
            href={"https://github.com/IMythx"}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background hover:bg-primary-portfolio"
          >
            <FaGithub size={"22"} />
          </Link>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 grid gap-2 sm:gap-4 mt-10 sm:mt-0 pb-24"
        >
          <div className="flex flex-col sm:flex-row items-start w-full sm:items-center gap-2 sm:gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
              <FormItem className="flex-1">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={8} className="resize-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <AnimatedButton className="text-sm sm:text-base" disabled={isSending}>
            {isSending ? <IoReload className="animate-spin" /> : "SEND MESSAGE"}
            <div className="bg-primary-portfolio flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full">
              <FaTelegramPlane />
            </div>
          </AnimatedButton>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
