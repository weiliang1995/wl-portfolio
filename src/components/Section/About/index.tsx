import { isH5 } from '@/utils/utils';
import { profile, resume } from '@/assets';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const About = () => {
  const textAlignCenter = isH5 ? 'text-center' : '';
  return (
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex justify-center">
          <img
            className="w-auto h-144 object-contain rounded-md shadow-xl"
            src={profile}
            alt="profile picture"
          />
        </div>
        <div
          className={`w-full lg:w-1/2 px-4 flex items-center ${textAlignCenter}`}
        >
          <div>
            <span className="text-lg text-yellow-500 font-semibold uppercase">
              About Me
            </span>
            <h2 className="mt-4 mb-6 text-4xl text-blue-800 leading-tight font-bold font-heading">
              Passionate Developer with 1 Year of Experience
            </h2>
            <p className="mb-6 text-lg text-gray-500">
              Master's student in Software Engineering with experience in React
              and TypeScript, focused on building clean and responsive
              interfaces.
            </p>
            <p className="mb-6 text-lg text-gray-500">
              I am passionate about learning, improving and growing as a
              developer. Hoping to learn backend and mobile development to
              transition into a full stack developer.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center w-full md:w-auto px-8 py-5 text-sm font-bold uppercase bg-yellow-500 hover:bg-yellow-400 transition duration-200 shadow-md ">
                  Download Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="w-full md:w-auto">
                <DialogHeader>
                  <DialogTitle>Resume</DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <img src={resume} alt="resume" className="w-full h-auto" />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
