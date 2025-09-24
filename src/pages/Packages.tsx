import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Shield,
  Calendar,
  ArrowRight,
  Phone,
  Video,
  MessageCircle
} from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Starter Wellness",
      price: "$299",
      period: "per month",
      description: "Perfect for those beginning their mental health journey",
      popular: false,
      features: [
        "2 individual therapy sessions",
        "Basic mental health assessment",
        "Goal setting & treatment planning",
        "Email support between sessions",
        "Access to wellness resources",
        "Crisis intervention support"
      ],
      includes: {
        sessions: "2 per month",
        duration: "50 minutes each",
        support: "Email support",
        resources: "Basic wellness library"
      }
    },
    {
      name: "Complete Care",
      price: "$549",
      period: "per month",
      description: "Comprehensive mental health support for ongoing wellness",
      popular: true,
      features: [
        "4 individual therapy sessions",
        "Comprehensive psychological evaluation",
        "Personalized treatment plan",
        "Priority scheduling",
        "24/7 crisis support",
        "Access to group therapy sessions",
        "Wellness tracking tools",
        "Family/partner session included"
      ],
      includes: {
        sessions: "4 per month",
        duration: "50 minutes each",
        support: "24/7 crisis line",
        resources: "Full wellness platform"
      }
    },
    {
      name: "Premium Support",
      price: "$849",
      period: "per month",
      description: "Premium care with maximum flexibility and support",
      popular: false,
      features: [
        "6 individual therapy sessions",
        "2 couples/family therapy sessions",
        "Psychiatric consultation included",
        "Flexible scheduling (including evenings)",
        "Unlimited messaging support",
        "Monthly progress reviews",
        "Access to all group programs",
        "Wellness coaching sessions",
        "Treatment coordination with other providers"
      ],
      includes: {
        sessions: "6 individual + 2 couples",
        duration: "50-60 minutes each",
        support: "Unlimited messaging",
        resources: "Premium platform + coaching"
      }
    }
  ];

  const addOnServices = [
    {
      name: "Psychiatric Consultation",
      price: "$200",
      description: "Initial evaluation with medication management",
      icon: Shield
    },
    {
      name: "Emergency Session",
      price: "$150",
      description: "Same-day or next-day emergency appointment",
      icon: Clock
    },
    {
      name: "Group Therapy",
      price: "$60",
      description: "Access to specialized support groups",
      icon: Users
    },
    {
      name: "Wellness Coaching",
      price: "$100",
      description: "Life coaching and goal achievement support",
      icon: Star
    }
  ];

  const features = [
    {
      icon: Video,
      title: "Telehealth Options",
      description: "Secure video sessions from the comfort of your home"
    },
    {
      icon: Phone,
      title: "Crisis Support",
      description: "24/7 phone support for mental health emergencies"
    },
    {
      icon: MessageCircle,
      title: "Secure Messaging",
      description: "HIPAA-compliant messaging with your therapist"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Easy online booking with evening and weekend slots"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mental Health Care Packages
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Choose the package that best fits your needs and budget. 
              All packages include personalized care from licensed professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`card-shadow hover:card-shadow-hover interactive relative ${
                pkg.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">/{pkg.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sessions:</span>
                    <span className="font-medium">{pkg.includes.sessions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{pkg.includes.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Support:</span>
                    <span className="font-medium">{pkg.includes.support}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Resources:</span>
                    <span className="font-medium">{pkg.includes.resources}</span>
                  </div>
                </div>

                <Button 
                  className={`w-full ${pkg.popular ? 'btn-hero' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/appointment">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Add-On Services */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your care package with these specialized services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((service, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover interactive text-center">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Included
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All packages include these essential features for comprehensive care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow text-center">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Can I change my package?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your package at any time. 
                Changes take effect at the start of your next billing cycle.
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Are sessions covered by insurance?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We accept most major insurance plans. Our billing team can help verify 
                your coverage and explain your benefits before you start treatment.
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg">What if I need to cancel a session?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We require 24-hour notice for cancellations. Sessions can be rescheduled 
                within the same month, and unused sessions don't roll over to the next month.
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Do you offer payment plans?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we offer flexible payment plans to make mental health care accessible. 
                Contact our billing department to discuss options that work for your budget.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Choose the package that's right for you and take the first step 
            towards better mental health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/appointment">
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">
                Ask Questions
                <MessageCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;