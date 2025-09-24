import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  Bell,
  User,
  Video,
  Phone,
  MessageCircle,
  Activity,
  AlertTriangle,
  CheckCircle,
  Plus,
  Search
} from "lucide-react";
import doctorDashboardImage from "@/assets/doctor-dashboard.jpg";

const DoctorDashboard = () => {
  const todayAppointments = [
    {
      id: 1,
      patient: "Sarah M.",
      time: "9:00 AM",
      type: "Individual Therapy",
      session: "Follow-up",
      status: "confirmed",
      notes: "Anxiety management progress check"
    },
    {
      id: 2,
      patient: "David R.",
      time: "10:30 AM", 
      type: "Initial Consultation",
      session: "First Visit",
      status: "confirmed",
      notes: "Depression symptoms assessment"
    },
    {
      id: 3,
      patient: "Emma L.",
      time: "2:00 PM",
      type: "Individual Therapy",
      session: "Session 8",
      status: "confirmed",
      notes: "Trauma therapy continuation"
    },
    {
      id: 4,
      patient: "Michael K.",
      time: "3:30 PM",
      type: "Couples Therapy",
      session: "Session 4",
      status: "tentative",
      notes: "Communication skills practice"
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: "Sarah M.",
      lastSeen: "2024-03-21",
      diagnosis: "Generalized Anxiety Disorder",
      status: "stable",
      nextAppt: "2024-03-28"
    },
    {
      id: 2,
      name: "David R.",
      lastSeen: "2024-03-20",
      diagnosis: "Major Depression",
      status: "improving",
      nextAppt: "2024-03-27"
    },
    {
      id: 3,
      name: "Emma L.",
      lastSeen: "2024-03-19",
      diagnosis: "PTSD",
      status: "stable",
      nextAppt: "2024-03-26"
    }
  ];

  const notifications = [
    {
      id: 1,
      type: "appointment",
      message: "New appointment request from John D.",
      time: "10 mins ago",
      urgent: false
    },
    {
      id: 2,
      type: "crisis",
      message: "Crisis alert: Patient requires immediate attention",
      time: "2 hours ago",
      urgent: true
    },
    {
      id: 3,
      type: "message",
      message: "Message from Sarah M. about medication side effects",
      time: "1 hour ago",
      urgent: false
    }
  ];

  const weeklyStats = [
    { label: "Total Patients", value: "47", change: "+3" },
    { label: "Sessions This Week", value: "28", change: "+5" },
    { label: "New Patients", value: "4", change: "+1" },
    { label: "Cancellations", value: "3", change: "-2" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Dr. Sarah Johnson's Dashboard</h1>
              <p className="text-primary-foreground/80">Today: March 25, 2024 • 4 appointments scheduled</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Bell className="h-4 w-4 mr-2" />
                Alerts (3)
              </Button>
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 space-y-6">
        {/* Dashboard Overview Image */}
        <Card className="card-shadow overflow-hidden">
          <div className="relative h-48 bg-gradient-to-r from-primary/10 to-secondary/20">
            <img 
              src={doctorDashboardImage} 
              alt="Doctor dashboard interface with patient appointments and medical charts" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-primary-foreground">
              <h2 className="text-lg font-semibold">Clinical Practice Management</h2>
              <p className="text-sm opacity-90">Comprehensive patient care and appointment tracking</p>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Button className="btn-hero p-6 h-auto flex flex-col items-center space-y-2">
            <Plus className="h-6 w-6" />
            <span>New Patient</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2">
            <Search className="h-6 w-6" />
            <span>Find Patient</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2">
            <FileText className="h-6 w-6" />
            <span>Notes</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2">
            <Calendar className="h-6 w-6" />
            <span>Schedule</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2">
            <Activity className="h-6 w-6" />
            <span>Reports</span>
          </Button>
        </div>

        {/* Weekly Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {weeklyStats.map((stat, index) => (
            <Card key={index} className="card-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  </div>
                  <div className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-success' : 'text-warning'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Appointments */}
          <div className="xl:col-span-2 space-y-6">
            {/* Today's Appointments */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    Today's Appointments
                  </div>
                  <Badge variant="secondary">{todayAppointments.length} scheduled</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{appointment.patient}</h4>
                          <p className="text-sm text-muted-foreground">{appointment.type} • {appointment.session}</p>
                          <p className="text-xs text-muted-foreground">{appointment.notes}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{appointment.time}</span>
                        </div>
                        <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Patients */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  Recent Patients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div key={patient.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-secondary-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">{patient.name}</h4>
                          <p className="text-sm text-muted-foreground">{patient.diagnosis}</p>
                          <p className="text-xs text-muted-foreground">Last seen: {patient.lastSeen}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={patient.status === 'improving' ? 'default' : 'secondary'}
                          className="mb-1"
                        >
                          {patient.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground">Next: {patient.nextAppt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 text-primary mr-2" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-3 rounded-lg border-l-4 ${
                        notification.urgent 
                          ? 'border-destructive bg-destructive/10' 
                          : 'border-primary bg-primary/10'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{notification.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                        {notification.urgent && (
                          <AlertTriangle className="h-4 w-4 text-destructive ml-2" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Write Session Notes
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Patient Message
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Follow-up
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Consultation
                </Button>
              </CardContent>
            </Card>

            {/* Today's Overview */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Today's Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Appointments</span>
                  <span className="font-medium">4 scheduled</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Completed Sessions</span>
                  <span className="font-medium">2/4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pending Notes</span>
                  <span className="font-medium">3 pending</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">New Messages</span>
                  <span className="font-medium">5 unread</span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="card-shadow border-warning">
              <CardHeader>
                <CardTitle className="text-warning">Emergency Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-warning" />
                    <span>Crisis Line: (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    <span>Emergency Services: 911</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-warning" />
                    <span>Supervisor: Dr. Chen (ext. 245)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;