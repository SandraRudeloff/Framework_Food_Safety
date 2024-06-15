![[Legend]]

```dataviewjs
// Function to wrap items in tags with specific classes
function wrapTags(items) {
    return items.map(item => {
        let className = 'tag';
        switch (item.toLowerCase()) {
            case 'relation':
                className += ' tag-relation';
                break;
            case 'entity':
                className += ' tag-entity';
                break;
            case 'given data':
                className += ' tag-given-data';
                break;
            case 'wanted data':
                className += ' tag-wanted-data';
                break;
            case 'pre-collectable data':
                className += ' tag-pre-collectable-data';
                break;
            case 'supportive data':
                className += ' tag-supportive-data';
                break;
            case 'derived data':
                className += ' tag-derived-data';
                break;
        }
        return `<span class="${className}">${item}</span>`;
    }).join(" ");
}

dv.table(["File", "Type", "Category"],
    dv.pages("")
    .where(p => p.Type && !p.file.name.includes("Frontmatter") && p.file.folder === "")
    .map(p => [
        p.file.link, 
        wrapTags(Array.isArray(p.Type) ? p.Type : [p.Type]),
        p.Category
    ])
);
```

