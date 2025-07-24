import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import type { ProjectIdea } from "@/data/courseData";

interface ProjectIdeasProps {
  projectIdeas: ProjectIdea[];
}

const difficultyColors = {
  Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Intermediate:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export function ProjectIdeas({ projectIdeas }: ProjectIdeasProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Example Project Ideas</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 text-muted-foreground">
            <p>
              Here are some inspiring project ideas to get you started. Feel
              free to propose your own ideas that align with course objectives!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectIdeas.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group h-full"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">{project.icon}</div>
                      <Badge className={difficultyColors[project.difficulty]}>
                        {project.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Key Topics
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.topics.map((topic, topicIndex) => (
                          <Badge
                            key={topicIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20"
          >
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                  Custom Project Proposals
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  Have your own idea? Great! Custom projects are encouraged as
                  long as they incorporate network analysis and machine learning
                  concepts covered in the course. Submit a brief proposal
                  including dataset sources, methodology, and expected outcomes.
                </p>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
