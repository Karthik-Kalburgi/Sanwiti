import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Clock, 
  Heart, 
  Activity, 
  MessageCircle, 
  FileText, 
  Bell,
  TrendingUp,
  User,
  Phone,
  Video,
  Plus,
  CheckCircle
} from "lucide-react";
import userDashboardImage from "@/assets/user-dashboard.jpg";

const UserDashboard = () => {
  const upcomingAppointments = [
    {
      id: 1,
      therapist: "Dr. Sarah Johnson",
      date: "2024-03-28",
      time: "2:00 PM",
      type: "Individual Therapy",
      location: "Video Call",
      status: "confirmed"
    },
    {
      id: 2,
      therapist: "Dr. Michael Chen",
      date: "2024-04-02",
      time: "10:00 AM", 
      type: "Psychiatric Consultation",
      location: "Main Office",
      status: "confirmed"
    }
  ];

  const recentSessions = [
    {
      id: 1,
      date: "2024-03-21",
      therapist: "Dr. Sarah Johnson",
      type: "Individual Therapy",
      duration: "50 min",
      notes: "Great progress on anxiety management techniques"
    },
    {
      id: 2,
      date: "2024-03-14",
      therapist: "Dr. Sarah Johnson", 
      type: "Individual Therapy",
      duration: "50 min",
      notes: "Discussed coping strategies for work stress"
    }
  ];

  const wellnessMetrics = [
    { name: "Mood Rating", value: 7.2, max: 10, trend: "+0.8", color: "text-success" },
    { name: "Sleep Quality", value: 6.8, max: 10, trend: "+0.3", color: "text-primary" },
    { name: "Anxiety Level", value: 4.2, max: 10, trend: "-1.2", color: "text-success" },
    { name: "Stress Level", value: 5.1, max: 10, trend: "-0.6", color: "text-success" }
  ];

  const todaysTasks = [
    { id: 1, task: "Complete mindfulness exercise", completed: true },
    { id: 2, task: "Take evening medication", completed: false },
    { id: 3, task: "Practice breathing techniques", completed: true },
    { id: 4, task: "Journal reflection", completed: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, Sarah!</h1>
              <p className="text-primary-foreground/80">Here's your wellness overview for today</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Bell className="h-4 w-4 mr-2" />
                Notifications (3)
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
              src={userDashboardImage} 
              alt="Patient health dashboard interface" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            <div className="absolute bottom-4 left-4 text-primary-foreground">
              <h2 className="text-lg font-semibold">Your Health Journey</h2>
              <p className="text-sm opacity-90">Track progress and stay connected with your care team</p>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button className="btn-hero p-6 h-auto flex flex-col items-center space-y-2">
            <Plus className="h-6 w-6" />
            <span>Book Appointment</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2">
            <MessageCircle className="h-6 w-6" />
            <span>Message Therapist</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2">
            <FileText className="h-6 w-6" />
            <span>View Records</span>
          </Button>
          <Button variant="outline" className="p-6 h-auto flex flex-col items-center space-y-2">
            <Heart className="h-6 w-6" />
            <span>Wellness Tools</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {appointment.location === "Video Call" ? (
                            <Video className="h-6 w-6 text-primary" />
                          ) : (
                            <User className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">{appointment.therapist}</h4>
                          <p className="text-sm text-muted-foreground">{appointment.type}</p>
                          <div className="flex items-center space-x-2 text-sm">
                            <Clock className="h-3 w-3" />
                            <span>{appointment.date} at {appointment.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          {appointment.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground">{appointment.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Wellness Metrics */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 text-primary mr-2" />
                  Wellness Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wellnessMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{metric.name}</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm">{metric.value}/10</span>
                          <TrendingUp className={`h-3 w-3 ${metric.color}`} />
                          <span className={`text-xs ${metric.color}`}>{metric.trend}</span>
                        </div>
                      </div>
                      <Progress value={(metric.value / metric.max) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Sessions */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  Recent Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div key={session.id} className="border-l-4 border-primary pl-4 py-2">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{session.type}</h4>
                        <span className="text-xs text-muted-foreground">{session.duration}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {session.date} with {session.therapist}
                      </p>
                      <p className="text-sm">{session.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Today's Tasks */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  Today's Wellness Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todaysTasks.map((task) => (
                    <div key={task.id} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                        task.completed ? 'bg-success border-success' : 'border-muted-foreground'
                      }`}>
                        {task.completed && <CheckCircle className="h-3 w-3 text-success-foreground" />}
                      </div>
                      <span className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                        {task.task}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sessions Completed</span>
                  <span className="font-medium">4/6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tasks Completed</span>
                  <span className="font-medium">18/24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mood Average</span>
                  <span className="font-medium text-success">7.2/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Goals Met</span>
                  <span className="font-medium">3/4</span>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="card-shadow border-warning">
              <CardHeader>
                <CardTitle className="text-warning">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're experiencing a crisis, we're here to help.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Crisis Line: 12345678900
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat with Therapist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;