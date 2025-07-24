import { motion } from "framer-motion";
import { GraduationCap, Calendar, User, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { CourseInfo } from "@/data/courseData";

interface CourseHeaderProps {
  courseInfo: CourseInfo;
}

export function CourseHeader({ courseInfo }: CourseHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-8 text-white shadow-2xl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 text-center"
        >
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            {courseInfo.title}
          </h1>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {courseInfo.subtitle}
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <User className="mx-auto mb-2 h-8 w-8" />
              <p className="text-sm font-medium opacity-90">Instructor</p>
              <p className="text-lg font-bold">{courseInfo.instructor}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Calendar className="mx-auto mb-2 h-8 w-8" />
              <p className="text-sm font-medium opacity-90">Semester</p>
              <p className="text-lg font-bold">{courseInfo.semester}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <GraduationCap className="mx-auto mb-2 h-8 w-8" />
              <p className="text-sm font-medium opacity-90">Level</p>
              <p className="text-lg font-bold">{courseInfo.level}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <Clock className="mx-auto mb-2 h-8 w-8" />
              <p className="text-sm font-medium opacity-90">Credits</p>
              <p className="text-lg font-bold">{courseInfo.credits}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
