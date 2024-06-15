import rehypeCitation from "rehype-citation"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { QuartzTransformerPlugin } from "../types"
import remarkPandocLinks from "./remarkPandocLinks"

interface Options {
  bibliography: string
}

export const PandocCitations: QuartzTransformerPlugin<Options> = (opts?: Options) => {
  const bibliography = opts?.bibliography ?? "path/to/your/bibliography.bib"

  return {
    name: "PandocCitations",
    markdownPlugins() {
      return [remarkParse, remarkPandocLinks]
    },
    htmlPlugins() {
      return [
        [remarkRehype, { allowDangerousHtml: true }],
        [rehypeCitation, { bibliography }],
      ]
    },
  }
}
