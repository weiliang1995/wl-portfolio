import Card from './Card';
import { experience } from '@/utils/experience';
import bybit from '@/assets/bybit.jpg';
import upm from '@/assets/upm.png';

const Experience = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="text-center mb-16">
        <span className="text-lg text-yellow-500 font-semibold uppercase">
          My Journey
        </span>
        <h2 className="mt-4 text-4xl text-blue-800 leading-tight font-bold font-heading">
          Experience & Education
        </h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        <Card
          title="Frontend Developer"
          subtitle="Bybit Fintech Limited"
          duration="Mar 2025 - Present"
          desc={experience.bybit}
          image={bybit}
        />
        <Card
          title="Master of Software Engineering"
          subtitle="Universiti Putra Malaysia"
          duration="Mar 2025 - Present"
          desc={experience.upm}
          image={upm}
        />
        {/* TODO: Carousel of what i done in job */}
      </div>
    </div>
  );
};

export default Experience;
