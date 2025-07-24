import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench } from "lucide-react";
import type { Tool } from "@/data/courseData";

interface ToolsAndPlatformsProps {
  tools: Tool[];
}

const categoryColors = {
  Programming: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Analysis: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Visualization:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  DevOps:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export function ToolsAndPlatforms({ tools }: ToolsAndPlatformsProps) {
  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl">Tools and Platforms</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {Object.entries(groupedTools).map(
              ([category, categoryTools], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.5 }}
                >
                  <div className="mb-4">
                    <Badge
                      className={
                        categoryColors[category as keyof typeof categoryColors]
                      }
                    >
                      {category}
                    </Badge>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {categoryTools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: categoryIndex * 0.2 + toolIndex * 0.1,
                          duration: 0.4,
                        }}
                        whileHover={{ y: -2 }}
                        className="group relative overflow-hidden rounded-lg border bg-white dark:bg-gray-900 p-4 shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-xl">{tool.icon}</div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {tool.name}
                          </h3>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tool.description}
                        </p>

                        {/* Subtle gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
