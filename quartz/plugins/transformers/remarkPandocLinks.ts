import { Link, Literal, Text } from "mdast"
import { Plugin } from "unified"
import { Node, Parent } from "unist"
import { visit } from "unist-util-visit"

const remarkPandocLinks: Plugin = () => {
  return (tree) => {
    // Handle inline citations
    visit(tree, "text", (node: Node) => {
      const textNode = node as Literal
      if (typeof textNode.value === "string") {
        textNode.value = textNode.value.replace(
          /\[\[@([^\]]+)\]\]/g,
          (_, citation) => `[@${citation}]`,
        )
      }
    })

    // Handle citation links
    visit(tree, "link", (node: Link, index: number, parent: Parent) => {
      if (node.url.startsWith("@")) {
        const citation = node.url.slice(1) // remove the leading '@'
        const citationText = `[@${citation}]`

        // Create a new text node for the citation
        const citationNode: Text = {
          type: "text",
          value: ` (${citationText})`,
        }

        // Insert the citation node after the link node
        parent.children.splice(index + 1, 0, citationNode)
      }
    })
  }
}

export default remarkPandocLinks
