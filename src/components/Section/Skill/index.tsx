import Card from '../Experience/Card';
import { html, css, js, ts, react, next } from '@/assets';
const Skill = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="text-center mb-16">
        <h2 className="mt-4 text-4xl text-blue-800 leading-tight font-bold font-heading">
          Skills
        </h2>
      </div>
      <div className="grid-cols-3 grid-rows-2 gap-4 md:grid">
        <Card title="HTML" image={html} grid />
        <Card title="CSS" image={css} grid />
        <Card title="JavaScript" image={js} grid />
        <Card title="TypeScript" image={ts} grid />
        <Card title="React" image={react} grid />
        <Card title="Next.js" image={next} grid />
      </div>
    </div>
  );
};

export default Skill;
