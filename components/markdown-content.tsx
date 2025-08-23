"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => <h2 {...props} className="text-2xl font-semibold mt-6 mb-3" />,
        h2: ({ node, ...props }) => <h3 {...props} className="text-xl font-semibold mt-5 mb-2" />,
        h3: ({ node, ...props }) => <h4 {...props} className="text-lg font-semibold mt-4 mb-2" />,
        p: ({ node, ...props }) => <p {...props} className="mb-3 leading-relaxed" />,
        ul: ({ node, ...props }) => <ul {...props} className="list-disc ml-6 mb-3" />,
        ol: ({ node, ...props }) => <ol {...props} className="list-decimal ml-6 mb-3" />,
        a: ({ node, ...props }) => <a {...props} className="text-amber-600 dark:text-amber-400 hover:underline" />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}


