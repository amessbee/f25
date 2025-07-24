import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FlaskConical } from "lucide-react";
import type { Week } from "@/data/courseData";

interface WeekCardProps {
  week: Week;
  index: number;
}

export function WeekCard({ week, index }: WeekCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
              {week.icon}
            </div>
            <div className="flex-1">
              <Badge variant="outline" className="mb-2">
                Week {week.number}
              </Badge>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                {week.title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Topics
            </h4>
            <ul className="space-y-1">
              {week.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-start gap-2 text-sm">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {week.lab && (
            <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <FlaskConical className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                  Lab
                </span>
              </div>
              <p className="text-sm text-blue-700 dark:text-blue-200">
                {week.lab}
              </p>
            </div>
          )}

          {week.homework && (
            <div className="rounded-lg bg-purple-50 dark:bg-purple-950/20 p-3">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="h-4 w-4 text-purple-600" />
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                  Homework
                </span>
              </div>
              <p className="text-sm text-purple-700 dark:text-purple-200">
                {week.homework}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
