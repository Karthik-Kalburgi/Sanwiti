import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  User, 
  Users, 
  Heart, 
  Baby, 
  Brain, 
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Individual Therapy",
      description: "Personalized one-on-one sessions to address your unique mental health needs and goals.",
      features: [
        "Cognitive Behavioral Therapy (CBT)",
        "Dialectical Behavior Therapy (DBT)", 
        "Mindfulness-Based Therapy",
        "Trauma-Informed Care",
        "Solution-Focused Therapy"
      ],
      conditions: [
        "Anxiety & Depression",
        "PTSD & Trauma",
        "Stress Management",
        "Life Transitions",
        "Self-Esteem Issues"
      ],
      duration: "50 minutes",
      price: "From $120"
    },
    {
      icon: Users,
      title: "Couples Therapy",
      description: "Professional guidance to strengthen relationships and improve communication between partners.",
      features: [
        "Gottman Method",
        "Emotionally Focused Therapy",
        "Communication Skills Training",
        "Conflict Resolution",
        "Intimacy Building"
      ],
      conditions: [
        "Relationship Issues",
        "Communication Problems",
        "Trust & Infidelity",
        "Pre-marital Counseling",
        "Divorce Mediation"
      ],
      duration: "60 minutes",
      price: "From $150"
    },
    {
      icon: Heart,
      title: "Group Therapy",
      description: "Connect with others facing similar challenges in a supportive group environment.",
      features: [
        "Anxiety Support Groups",
        "Depression Support Groups",
        "Grief & Loss Groups",
        "Addiction Recovery Groups",
        "Skills Training Groups"
      ],
      conditions: [
        "Social Anxiety",
        "Depression",
        "Addiction Recovery",
        "Grief & Loss",
        "Life Skills Development"
      ],
      duration: "90 minutes",
      price: "From $60"
    },
    {
      icon: Baby,
      title: "Child & Adolescent Therapy",
      description: "Specialized care for children and teenagers addressing developmental and behavioral concerns.",
      features: [
        "Play Therapy",
        "Art & Music Therapy",
        "Behavioral Interventions",
        "Family Therapy",
        "School-Based Support"
      ],
      conditions: [
        "ADHD & Learning Issues",
        "Behavioral Problems",
        "Anxiety in Children",
        "Developmental Delays",
        "Family Conflicts"
      ],
      duration: "45 minutes",
      price: "From $100"
    },
    {
      icon: Brain,
      title: "Psychiatric Services",
      description: "Medical evaluation and medication management for mental health conditions.",
      features: [
        "Psychiatric Evaluation",
        "Medication Management",
        "Treatment Planning",
        "Regular Monitoring",
        "Coordination of Care"
      ],
      conditions: [
        "Depression & Anxiety",
        "Bipolar Disorder",
        "ADHD",
        "Schizophrenia",
        "Mood Disorders"
      ],
      duration: "30-60 minutes",
      price: "From $200"
    },
    {
      icon: Shield,
      title: "Crisis Intervention",
      description: "Immediate support and intervention for mental health emergencies and crisis situations.",
      features: [
        "24/7 Crisis Hotline",
        "Emergency Assessments",
        "Safety Planning",
        "Hospital Liaisons",
        "Follow-up Care"
      ],
      conditions: [
        "Suicidal Ideation",
        "Severe Depression",
        "Panic Attacks",
        "Psychotic Episodes",
        "Substance Abuse Crisis"
      ],
      duration: "As needed",
      price: "Contact for pricing"
    }
  ];

  const specialtyAreas = [
    "Anxiety Disorders",
    "Depression",
    "Trauma & PTSD",
    "Bipolar Disorder",
    "ADHD",
    "Eating Disorders",
    "Substance Abuse",
    "Grief & Loss",
    "Relationship Issues",
    "Life Transitions",
    "Stress Management",
    "Self-Esteem"
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Mental Health Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              We offer a full range of evidence-based therapeutic services designed 
              to meet your unique mental health needs and support your journey to wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-shadow hover:card-shadow-hover interactive">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Treatment Approaches</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-3">Common Conditions Treated</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.conditions.map((condition, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-medium">{service.duration}</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-sm text-muted-foreground">Starting at</div>
                    <div className="font-bold text-primary">{service.price}</div>
                  </div>
                </div>

                <Button className="w-full btn-hero" asChild>
                  <Link to="/appointment">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Specialty Areas */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team specializes in treating a wide range of mental health conditions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialtyAreas.map((area, index) => (
              <Card key={index} className="card-shadow text-center p-4">
                <CardContent className="p-2">
                  <p className="text-sm font-medium text-foreground">{area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Treatment Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured approach to ensure you receive the best possible care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-shadow text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">1</span>
              </div>
              <CardTitle className="text-lg">Initial Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Comprehensive assessment to understand your needs and goals
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">2</span>
              </div>
              <CardTitle className="text-lg">Treatment Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Personalized treatment plan tailored to your specific situation
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">3</span>
              </div>
              <CardTitle className="text-lg">Active Treatment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Regular sessions using evidence-based therapeutic approaches
              </p>
            </CardContent>
          </Card>

          <Card className="card-shadow text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">4</span>
              </div>
              <CardTitle className="text-lg">Progress Review</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Regular evaluation and adjustment of treatment as needed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take the First Step Today
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait to start your journey to better mental health. 
            Our experienced team is ready to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero" asChild>
              <Link to="/appointment">
                Schedule Appointment
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/packages">
                View Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;