import { ArrowUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
  return (
    <div className="sticky bottom-10 left-10">
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.scrollTo({ top: 0 })}
        className="flex gap-4 min-w-fit px-4 justify-center items-center text-sky-950"
      >
        <ArrowUpIcon />
        <p className="text-sky-950 text-shadow-2xs">Back to Top</p>
      </Button>
    </div>
  );
};

export default BackToTop;
