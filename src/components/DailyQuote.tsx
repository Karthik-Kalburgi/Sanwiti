import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import quoteImage from "@/assets/quote-image.jpg";

interface Quote {
  text: string;
  author: string;
}

const mentalHealthQuotes: Quote[] = [
  {
    text: "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
    author: "Noam Shpancer"
  },
  {
    text: "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: "Nido Qubein"
  },
  {
    text: "Healing takes time, and asking for help is a courageous step.",
    author: "Mariska Hargitay"
  },
  {
    text: "You don't have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman"
  },
  {
    text: "Self-care is not selfish. You cannot serve from an empty vessel.",
    author: "Eleanor Brown"
  },
  {
    text: "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.",
    author: "Jonathan Harnisch"
  },
  {
    text: "Mental health recovery is a journey, not a destination.",
    author: "Anonymous"
  },
  {
    text: "Progress, not perfection, is the goal.",
    author: "Anonymous"
  },
  {
    text: "It's okay to not be okay. It's not okay to stay that way.",
    author: "Anonymous"
  },
  {
    text: "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
    author: "Anonymous"
  }
];

const DailyQuote = () => {
  const [quote, setQuote] = useState<Quote>(mentalHealthQuotes[0]);

  useEffect(() => {
    // Get today's date and use it to determine which quote to show
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
    const quoteIndex = dayOfYear % mentalHealthQuotes.length;
    setQuote(mentalHealthQuotes[quoteIndex]);
  }, []);

  return (
    <Card className="quote-card border-0">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-foreground mb-4">
              "{quote.text}"
            </blockquote>
            <cite className="text-sm text-muted-foreground font-medium">
              — {quote.author}
            </cite>
            <div className="mt-4 text-xs text-muted-foreground">
              Daily Inspiration • {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
          <div className="flex-shrink-0">
            <img 
              src={quoteImage} 
              alt="Mental wellness illustration" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyQuote;