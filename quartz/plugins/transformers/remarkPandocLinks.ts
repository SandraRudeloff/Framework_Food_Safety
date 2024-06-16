import { Link, Literal } from "mdast"
import { Plugin } from "unified"
import { Node, Parent } from "unist"
import { visit } from "unist-util-visit"

// Map of citation keys to their human-readable form
const citationMap: { [key: string]: string } = {
  "rosner.etal2020": "Rosner et al., 2020",
  // Add other citations here
}

const remarkPandocLinks: Plugin = () => {
  return (tree) => {
    // Handle inline citations
    visit(tree, "text", (node: Node) => {
      const textNode = node as Literal
      if (typeof textNode.value === "string") {
        textNode.value = textNode.value.replace(/\[\[@([^\]]+)\]\]/g, (_, citation) => {
          const citationText = citationMap[citation] ?? citation
          // Include the citation syntax that rehype-citation recognizes
          return `[${citationText}](Literature/@${citation})[@${citation}]`
        })
      }
    })

    // Handle citation links
    visit(tree, "link", (node: Link, index: number, parent: Parent) => {
      if (node.url.startsWith("@")) {
        const citationKey = node.url.slice(1) // remove the leading '@'
        const citationText = citationMap[citationKey] ?? citationKey
        const citationUrl = `Literature/@${citationKey}`

        // Replace the link node with the correct text and link format
        const linkNode: Link = {
          type: "link",
          url: citationUrl,
          children: [{ type: "text", value: citationText }],
        }

        // Include the citation syntax that rehype-citation recognizes
        const citationNode: Literal = {
          type: "text",
          value: `[@${citationKey}]`,
        }

        // Replace the current node with the new link node and citation node
        parent.children.splice(index, 1, linkNode, citationNode)
      }
    })
  }
}

export default remarkPandocLinks
