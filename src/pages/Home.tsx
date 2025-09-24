import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DailyQuote from "@/components/DailyQuote";
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Calendar
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Personalized treatment plans tailored to your unique mental health journey."
    },
    {
      icon: Users,
      title: "Expert Therapists",
      description: "Licensed professionals with years of experience in various therapeutic approaches."
    },
    {
      icon: Shield,
      title: "Confidential & Safe",
      description: "Your privacy is our priority with secure, HIPAA-compliant sessions."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Easy online booking with evening and weekend appointments available."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The team at MindCare helped me through my most difficult times. Their compassionate approach made all the difference.",
      rating: 5
    },
    {
      name: "David R.",
      text: "Professional, caring, and effective. I've seen tremendous improvement in my mental health journey.",
      rating: 5
    },
    {
      name: "Emma L.",
      text: "Finally found a place where I feel understood and supported. Highly recommend their services.",
      rating: 5
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Mental Health
                <span className="text-accent"> Matters</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Professional, compassionate mental health care designed to help you 
                thrive. Start your journey to wellness with our experienced team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hero" asChild>
                  <Link to="/appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/services">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional therapy office interior" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Daily Quote Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Daily Inspiration</h2>
          <p className="text-muted-foreground text-lg">Start your day with a positive mindset</p>
        </div>
        <DailyQuote />
      </section>

      {/* Features Section */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MindCare?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive mental health services with a focus on 
              personalized care and proven therapeutic approaches.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover interactive text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mental health care tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="card-shadow hover:card-shadow-hover interactive">
            <CardHeader>
              <CardTitle>Individual Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                One-on-one sessions focused on your personal mental health journey and goals.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Cognitive Behavioral Therapy
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Anxiety & Depression Treatment
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Trauma Recovery
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:card-shadow-hover interactive">
            <CardHeader>
              <CardTitle>Couples Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Strengthen relationships and improve communication with professional guidance.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Relationship Counseling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Communication Skills
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Conflict Resolution
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-shadow hover:card-shadow-hover interactive">
            <CardHeader>
              <CardTitle>Group Therapy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Connect with others facing similar challenges in a supportive environment.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Support Groups
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Skill Building Sessions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Peer Support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button size="lg" asChild className="btn-hero">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from people who found their path to wellness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warning fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <cite className="font-medium text-foreground">
                    — {testimonial.name}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health. Our compassionate team 
            is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/appointment">
                Book Your First Session
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;