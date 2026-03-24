import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-gray-900 aspect-[4/5] cursor-pointer"
      data-testid={`project-card-${project.id}`}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
        <div className="flex items-center text-gray-300 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {project.location}
        </div>
        <h3 className="font-heading font-bold text-xl text-white mb-1">
          {project.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-gray-300 text-sm">
            <span>{project.type}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.sqm} m²</span>
          </div>
        </div>

        {/* Hover Reveal */}
        <div className="mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <Link
            to={`/portfolio`}
            className="inline-flex items-center text-steel font-medium hover:text-white transition-colors"
          >
            Δείτε το Έργο
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-steel/90 text-white text-xs font-medium px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
