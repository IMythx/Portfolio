import ContactForm from "@/components/contact/contactForm";

const Contact = () => {
  return (
    <div className="pt-10 sm:pt-20 grid gap-16 sm:gap-20 ">
      <h1
        className="text-4xl sm:text-[56px] font-bold sm:text-center tracking-[1px]"
        style={{
          WebkitTextStrokeWidth: "3.4px",
        }}
      >
        GET IN <span className="text-primary-portfolio">TOUCH</span>
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
