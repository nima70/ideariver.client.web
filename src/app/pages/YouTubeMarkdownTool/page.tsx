"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const YouTubeMarkdownForm: React.FC = () => {
  const [youtubeLink, setYoutubeLink] = useState<string>("");
  const [label, setLabel] = useState<string>("Watch this video on YouTube");
  const [markdownOutput, setMarkdownOutput] = useState<string>("");
  const [isInvalidUrl, setIsInvalidUrl] = useState<boolean>(false);

  const { toast } = useToast();

  const extractVideoId = (url: string) => {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return videoIdMatch ? videoIdMatch[1] : null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const videoId = extractVideoId(youtubeLink);

    if (videoId) {
      const markdown = `
[![Watch the video](https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)](https://youtu.be/${videoId})

### [${label || "Watch this video on YouTube"}](https://youtu.be/${videoId})
      `;
      setMarkdownOutput(markdown.trim());
      setIsInvalidUrl(false); // Reset invalid state when URL is valid
    } else {
      setMarkdownOutput("");
      setIsInvalidUrl(true); // Mark the URL as invalid
    }
  };

  const handleCopy = () => {
    if (markdownOutput) {
      navigator.clipboard.writeText(markdownOutput).then(
        () => {
          toast({
            title: "Copied to clipboard!",
            description: "The markdown has been successfully copied.",
          });
        },
        (err) => {
          console.error("Failed to copy text: ", err);
        }
      );
    }
  };

  return (
    <div className="flex w-full mt-5 md:mt-28  flex-col items-center justify-start min-h-screen bg-background text-foreground prose dark:prose-invert">

      <Card className="w-full max-w-sm sm:max-w-lg bg-secondary">
        <CardHeader>
          <CardTitle className="text-center">YouTube Markdown Embed Generator</CardTitle>
          <CardDescription>
            Enter the YouTube link and optional label to generate markdown
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="mb-4">
              <label
                htmlFor="youtubeLink"
                className="block text-sm font-medium text-gray-700"
              >
                YouTube Link:
              </label>
              <Input
                type="text"
                id="youtubeLink"
                value={youtubeLink}
                onChange={(e) => {
                  setYoutubeLink(e.target.value);
                  setIsInvalidUrl(false); // Reset invalid state when the user types
                }}
                required
                className={isInvalidUrl ? "border-red-500" : ""}
              />
              {isInvalidUrl && (
                <p className="text-red-600 text-sm mt-1">
                  Please enter a valid YouTube URL.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="label"
                className="block text-sm font-medium text-gray-700"
              >
                Optional Label:
              </label>
              <Input
                type="text"
                id="label"
                placeholder="Watch this video on YouTube"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" variant="default" className="w-full">
              Generate Markdown
            </Button>
          </CardFooter>
        </form>
      </Card>

      {markdownOutput && (
        <Card className="w-full max-w-sm sm:max-w-lg mt-8">
          <CardHeader>
            <CardTitle className="text-center">Markdown Output</CardTitle>
            <CardDescription>Generated markdown and preview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative flex flex-col">
              <ScrollArea className="max-h-32 sm:max-h-64">
                <pre className="p-2 sm:p-4 rounded whitespace-pre-wrap break-all">
                  {markdownOutput}
                </pre>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
              <Button
                onClick={handleCopy}
                variant="secondary"
                className="mt-1"
              >
                Copy
              </Button>
            </div>
            <h2 className="text-lg sm:text-2xl font-semibold mb-4 mt-8 text-center sm:text-left">
              Preview:
            </h2>
            <ReactMarkdown>{markdownOutput}</ReactMarkdown>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default YouTubeMarkdownForm;
