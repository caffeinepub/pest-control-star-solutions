import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { MapPin, Phone, Clock, Heart } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'pest-control-star'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info with Logo */}
          <div>
            <img
              src="/assets/generated/logo-pest-control-star.dim_512x512.png"
              alt={siteConfig.name}
              className="mb-4 h-auto w-full max-w-[200px] object-contain sm:max-w-[250px]"
            />
            <p className="text-sm text-muted-foreground">
              Leading pest management company in Mumbai and Pune with over 7 years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-yellow">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-brand-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-brand-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-brand-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Branch 1 - Mumbai */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-yellow">Mumbai Branch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-orange" />
                <span>{siteConfig.branches[0].address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-orange" />
                <a href={`tel:${siteConfig.branches[0].phoneFormatted}`} className="hover:text-brand-orange transition-colors">
                  {siteConfig.branches[0].phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand-orange" />
                <span>{siteConfig.branches[0].hours}</span>
              </li>
            </ul>
          </div>

          {/* Branch 2 - Pune */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-brand-yellow">Pune Branch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-orange" />
                <span>{siteConfig.branches[1].address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-orange" />
                <a href={`tel:${siteConfig.branches[1].phoneFormatted}`} className="hover:text-brand-orange transition-colors">
                  {siteConfig.branches[1].phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand-orange" />
                <span>{siteConfig.branches[1].hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center gap-6 border-t border-border/40 pt-8">
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-brand-orange transition-colors"
            aria-label="Facebook"
          >
            <SiFacebook className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-brand-orange transition-colors"
            aria-label="Instagram"
          >
            <SiInstagram className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-brand-orange transition-colors"
            aria-label="YouTube"
          >
            <SiYoutube className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} {siteConfig.name}. Built with{' '}
            <Heart className="h-4 w-4 fill-brand-orange text-brand-orange" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-brand-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
