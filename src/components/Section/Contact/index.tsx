import { Linkedin, TabletSmartphone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="text-center mb-16">
        <h2 className="mt-4 text-4xl text-blue-800 leading-tight font-bold font-heading mb-4">
          Contact Me
        </h2>
        <span className="text-lg text-yellow-500 font-semibold ">
          In case you don't click the button to download my resume, you can
          contact me through the following ways:
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className="flex gap-4 min-w-fit px-4 justify-center items-center text-sky-950 cursor-pointer"
          onClick={() => window.open('https://www.linkedin.com/in/wlkuik/')}
        >
          <Linkedin />
          <p>Linkedin</p>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex gap-4 min-w-fit px-4 justify-center items-center text-sky-950 cursor-pointer"
          onClick={() => window.open('https://wa.me/+60124278339?text=<Hello>')}
        >
          <TabletSmartphone />
          <p>Whatsapp</p>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex gap-4 min-w-fit px-4 justify-center items-center text-sky-950 cursor-pointer"
          onClick={() => (window.location.href = 'mailto:wlkuik@gmail.com')}
        >
          <Mail />
          <p>Email</p>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex gap-4 min-w-fit px-4 justify-center items-center text-sky-950 cursor-pointer"
          onClick={() => window.open('https://t.me/weiliang1995')}
        >
          <Send />
          <p>Telegram</p>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
