import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Heart, 
  BookOpen,
  Clock,
  Shield,
  Star,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe in treating every individual with empathy, respect, and understanding."
    },
    {
      icon: Shield,
      title: "Confidentiality",
      description: "Your privacy and trust are paramount. We maintain the highest standards of confidentiality."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in all aspects of mental health care and therapeutic services."
    },
    {
      icon: Users,
      title: "Inclusive Environment",
      description: "We welcome individuals from all backgrounds and create a safe space for everyone."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      title: "Clinical Director & Licensed Psychologist",
      specialties: ["Anxiety Disorders", "Depression", "Trauma Therapy"],
      education: "Ph.D. in Clinical Psychology, Harvard University",
      experience: "15+ years"
    },
    {
      name: "Dr. Michael Chen",
      title: "Psychiatrist",
      specialties: ["Mood Disorders", "ADHD", "Medication Management"],
      education: "M.D. Psychiatry, Johns Hopkins University",
      experience: "12+ years"
    },
    {
      name: "Lisa Rodriguez, LCSW",
      title: "Licensed Clinical Social Worker",
      specialties: ["Family Therapy", "Couples Counseling", "Addiction Recovery"],
      education: "MSW, Columbia University",
      experience: "10+ years"
    },
    {
      name: "Dr. Amanda White",
      title: "Child & Adolescent Psychologist",
      specialties: ["Child Psychology", "Developmental Issues", "Behavioral Therapy"],
      education: "Ph.D. in Developmental Psychology, Stanford University",
      experience: "8+ years"
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Helped" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "24/7", label: "Crisis Support" }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About MindCare
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Founded with a mission to make quality mental health care accessible to everyone, 
              MindCare has been serving our community for over 15 years with compassion, 
              expertise, and dedication to healing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To provide comprehensive, compassionate mental health services that empower 
              individuals to overcome challenges, develop resilience, and achieve lasting 
              emotional wellness in a safe and supportive environment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-3" />
                <span>Evidence-based therapeutic approaches</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-3" />
                <span>Personalized treatment plans</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-3" />
                <span>Culturally sensitive care</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 text-primary mr-2" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A world where mental health is prioritized, stigma is eliminated, 
                  and everyone has access to the support they need to thrive.
                </p>
              </CardContent>
            </Card>
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-2" />
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are committed to continuous learning, innovation in treatment 
                  approaches, and maintaining the highest ethical standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="subtle-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape the care we provide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-shadow hover:card-shadow-hover interactive text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="card-shadow text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of licensed professionals brings together years of 
            experience and specialized expertise in various areas of mental health.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="card-shadow hover:card-shadow-hover interactive">
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-primary font-medium">{member.title}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Education</h4>
                  <p className="text-sm text-muted-foreground">{member.education}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Experience</h4>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to support you. Take the first step 
            towards better mental health today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero px-6 py-3 rounded-lg font-medium transition-all">
              Schedule Consultation
            </button>
            <button className="px-6 py-3 rounded-lg font-medium border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;