
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
}

const ServiceCard = ({ title, description, image, slug }: ServiceCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CardContent className="flex flex-col justify-center items-center h-full text-white p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-center mb-4">{description}</p>
            <Link to={`/services/${slug}`}>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                {t("Learn More", "Daha Fazla")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
