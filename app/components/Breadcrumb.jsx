import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const Breadcrumb = ({ items }) => {
  return (
    <nav data-testid="breadcrumb" className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={item.path} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 text-concrete mx-2" />}
          {index === items.length - 1 ? (
            <span className="text-charcoal font-medium">{item.name}</span>
          ) : (
            <Link
              href={item.path}
              className="text-concrete hover:text-steel transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
