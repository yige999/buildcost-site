import { cn } from "@/lib/utils";

interface SEOBlockProps {
  title: string;
  content: string;
  className?: string;
}

export function SEOBlock({ title, content, className }: SEOBlockProps) {
  // Parse the content into sections based on ## headers
  const sections = content.split(/(?=^##\s)/m);

  return (
    <article className={cn("mt-12 pt-8 border-t border-secondary-200", className)}>
      <div className="max-w-4xl mx-auto prose prose-slate prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-secondary-900 mb-6">{title}</h2>

        {sections.map((section, index) => {
          // Check if this section starts with a header
          const headerMatch = section.match(/^##\s+(.+)$/m);
          if (headerMatch) {
            const headerText = headerMatch[1];
            const sectionContent = section
              .replace(/^##\s+.+$/m, "")
              .trim();

            return (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                  {headerText}
                </h3>
                <div
                  className="text-secondary-600 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: formatContent(sectionContent),
                  }}
                />
              </div>
            );
          }

          // Regular paragraph content
          if (section.trim()) {
            return (
              <div
                key={index}
                className="text-secondary-600 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: formatContent(section),
                }}
              />
            );
          }

          return null;
        })}
      </div>
    </article>
  );
}

/**
 * Format content with basic HTML
 * Supports: paragraphs, bold, italic, ### headings, - lists
 */
function formatContent(content: string): string {
  if (!content) return "";

  const lines = content.split(/\n/);
  const blocks: string[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push(`<ul class="list-disc list-inside space-y-1 my-2">${currentList.join("")}</ul>`);
      currentList = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    // ### headings
    if (line.startsWith("### ")) {
      flushList();
      const headingText = applyInline(line.slice(4));
      blocks.push(`<h4 class="text-lg font-semibold text-secondary-800 mt-4 mb-2">${headingText}</h4>`);
      continue;
    }

    // List items
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const itemText = applyInline(line.slice(2));
      currentList.push(`<li>${itemText}</li>`);
      continue;
    }

    // Flush any accumulated list items
    flushList();

    // Blank line = paragraph break
    if (line === "") {
      continue;
    }

    // Regular text line
    blocks.push(`<p>${applyInline(line)}</p>`);
  }

  flushList();
  return blocks.join("");
}

function applyInline(text: string): string {
  let result = text;
  result = result.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");
  return result;
}
