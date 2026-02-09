import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { siteConfig } from '@/config/site';

const slides = [
  {
    image: '/assets/generated/hero-slide-1.dim_1920x800.png',
    title: 'Professional Pest Control Solutions',
    subtitle: 'Protecting your home and business from pests for over 7 years',
  },
  {
    image: '/assets/generated/hero-slide-2.dim_1920x800.png',
    title: 'Safe & Eco-Friendly Methods',
    subtitle: 'Advanced pest control that is safe for your family and pets',
  },
  {
    image: '/assets/generated/hero-slide-3.dim_1920x800.png',
    title: '24/7 Emergency Service',
    subtitle: 'Available round the clock in Mumbai and Pune',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[500px] overflow-hidden bg-muted md:h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg md:text-xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href={`tel:${siteConfig.branches[0].phoneFormatted}`}>
                    <Button size="lg" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-foreground sm:w-auto">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-8 bg-brand-orange'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
