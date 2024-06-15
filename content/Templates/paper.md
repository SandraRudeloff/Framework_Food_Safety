---
Title: "{{title}}"
aliases: 
- {{title}}
- {{ title | capitalize }}
- {% if creators[0].name | default("") == "" -%}
	{%- if creators.length == 2 -%}	
		{%- if creators[1].name | default("") == "" -%}	
			{{creators[0].lastName}} & {{creators[1].lastName}}
		{%- else -%}
			{{creators[0].lastName}} & {{creators[1].name}}
		{%- endif -%}
	{%- elif creators.length > 2 -%}	
		{{creators[0].lastName}} et al.
	{%- else -%}
		{{creators[0].lastName}}
	{%- endif -%}
{%- else -%}
	{%- if creators.length == 2 -%}
		{%- if creators[1].name | default("") == "" -%}	
			{{creators[0].name}} & {{creators[1].lastName}}
		{%- else -%}
			{{creators[0].name}} & {{creators[1].name}}
		{%- endif -%}
	{%- elif creators.length > 2 -%}
		{{creators[0].name}} et al.
	{%- else -%} 
		{{creators[0].name}}
	{%- endif -%}
{%- endif -%}, {%- if date %} {{date | format("YYYY")}}{%- else %} n.d.{%- endif %}
- {% if creators[0].name | default("") == "" -%}
	{%- if creators.length == 2 -%}	
		{%- if creators[1].name | default("") == "" -%}	
			{{creators[0].lastName}} & {{creators[1].lastName}}
		{%- else -%}
			{{creators[0].lastName}} & {{creators[1].name}}
		{%- endif -%}
	{%- elif creators.length > 2 -%}	
		{{creators[0].lastName}} et al.
	{%- else -%}
		{{creators[0].lastName}}
	{%- endif -%}
{%- else -%}
	{%- if creators.length == 2 -%}
		{%- if creators[1].name | default("") == "" -%}	
			{{creators[0].name}} & {{creators[1].lastName}}
		{%- else -%}
			{{creators[0].name}} & {{creators[1].name}}
		{%- endif -%}
	{%- elif creators.length > 2 -%}
		{{creators[0].name}} et al.
	{%- else -%} 
		{{creators[0].name}}
	{%- endif -%}
{%- endif %} {%- if date %} ({{date | format("YYYY")}}){%- else %} (n.d.){%- endif %}
zotero_link: {{select}}
Citekey: {{citekey}}
Authors: {%- for creator in creators -%}{%- if creator.firstName %}
- {{creator.firstName}} {{creator.lastName}}{%- else %}
- {{creator.name}}{%- endif -%}
{%- endfor -%}
{%- if url %}
URL: {{url}}{%- endif %}{%- if date %}
Year:  {{date | format("YYYY")}}{%- endif -%}
{%- if itemType %}
itemType: {{itemType}}{%- endif -%}    
{%- if itemType == "journalArticle" -%}
{%- if publicationTitle %}
Journal: "[[{{publicationTitle}}]]" {%- endif -%}{%- endif -%}  
{%- if volume %}
Volume: {{volume}} {%- endif -%}    
{%- if issue %}
Issue: {{issue}} {%- endif -%}     
{%- if itemType == "bookSection" %}
Book: {{publicationTitle}} {%- endif -%}    
{%- if publisher %}
Publisher: "{{publisher}}" {%- endif -%}    
{%- if place %}
Location: {{place}} {%- endif -%}     
{%- if pages %} 
Pages: {{pages}} {%- endif -%}    
{%- if DOI %}
DOI: {{DOI}} {%- endif -%}    
{%- if ISBN %}
ISBN: {{ISBN}} {%- endif %}{%- if relations.length > 0 %}
related: {% for relation in relations %}{%- if relation.citekey %}
- "[[@{{relation.citekey}}]]"
{%- endif %}{%- endfor %}{%- endif %}
{% set summaries = notes | filterby("note", "startswith", "summary") -%}
{%- if summaries.length > 0 -%}
	{%- for summary in summaries -%}  
		summary: "{{summary.note | replace('summary: ', '', 1)| replace('\n', '')}}"
	{%- endfor -%}
{%- endif %}
---
{%- if attachments.length > 0 %}
{%- set pdfattachments = attachments | filterby("path", "endswith", "pdf") -%}
	{% for pdfattachment in pdfattachments %}
**[{{title}}]({{ pdfattachment.select }})**
	{%- endfor -%}
{%- endif %}
**tags**::{% persist "tags" %}{% endpersist %}

{%- set hasValidTags = false %}
{%- for tagObject in tags %}
  {%- if tagObject.tag == "Unread" or tagObject.tag == "Up_Next" or tagObject.tag == "Reading" or tagObject.tag == "Read" %}
    {%- set hasValidTags = true %}
  {%- endif %}
{%- endfor %}
{%- if hasValidTags %}
**status**::{% for tagObject in tags %}
    {%- if tagObject.tag == "Unread" or tagObject.tag == "Up_Next" or tagObject.tag == "Reading" or tagObject.tag == "Read" %} #Lit/Status/{{- tagObject.tag }}
    {%- endif %}
  {%- endfor %}
{%- endif %}


{%- if abstractNote %}

> [!Abstract]- 
**Abstract::** {{abstractNote  }}
{%- endif %}

# Notes
{% persist "notes" %}{%- endpersist %}

# Open Questions
> [!Question] {% persist "questions" %}{%- endpersist %}
> 

{%- if annotations.length %}

# Annotations
> [!NOTE]- Annotation colors
> ![[../Literature/Annotation Colors]]

{%- set important = annotations | filterby("comment", "startswith", "important") -%}
{%- if important.length > 0 %}

> [!important]- Important Notes
{% for annotation in important -%}
{%- if annotation.annotatedText %}
> - {{annotation.annotatedText | nl2br}}
{%- endif -%}
{%- if annotation.imageRelativePath %}
> - ![[{{annotation.imageRelativePath}}]]
{%- endif %}
> [page {{annotation.page}}](file://{{annotation.attachment.path | replace(" ", "%20")}})
{%- endfor -%}
{%- endif -%}

{%- macro calloutHeader(type, color) -%}
{%- if type == "highlight" -%}

{%- if color == "#ffd400" -%} <span style="border-bottom: 2px solid {{color}};">Quote</span> 
{%- elseif color == "#f19837" -%} <span style="border-bottom: 2px solid {{color}};">Disagreement with Author</span>
{%- elseif color == "#ff6666" -%} <span style="border-bottom: 2px solid {{color}};">Question</span>
{%- elseif color == "#2ea8e5" -%}<span style="border-bottom: 2px solid {{color}};">Literary Analysis</span>
{%- elseif color == "#a28ae5" -%}<span style="border-bottom: 2px solid {{color}};">Reference to Read</span>
{%- elseif color == "#aaaaaa" -%}<span style="border-bottom: 2px solid {{color}};">Comment</span>
{%- elseif color == "#5fb236" -%}<span style="border-bottom: 2px solid {{color}};">Conclusion</span>{%- endif -%}
{%- endif -%}
{%- if type == "text" -%}
<u>Note</u>
{%- endif -%}
{%- if type == "note" -%}
<u>Note</u>
{%- endif -%}
{%- if type == "image" -%}
<u>Image</u>
{%- endif -%}
{%- endmacro -%}

{%- set annots = annotations -%}
{%- if annots.length > 0 %}
{% for annot in annots %}
{{calloutHeader(annot.type, annot.color)}}
{%- if annot.annotatedText %}
> {{annot.annotatedText | nl2br}}
{%- endif -%}

{%- if annot.imageRelativePath %}
![[{{annot.imageRelativePath}}|400]]
{%- endif %}
> ([page {{annot.page}}](zotero://open-pdf/library/items/{{annot.attachment.itemKey}}?page={{annot.pageLabel}}&annotation={{annot.id}}))
{%- if annot.allTags %}
- *Tags*: {{annot.allTags| nl2br}}
{%- endif %}
{%- if annot.comment %}
- *Comment*: {{annot.comment | replace("\n", "\n-  *Comment*: ") | replace("\n-  \n-  ", "\n-  ")}}
{%- endif %}
{% endfor -%}
{% endif -%}
{%- endif -%}

{%- set filteredNotes = [] -%}
{%- for note in notes -%}
    {%- if not note.note.startsWith('summary') -%}
        {%- set _dummy = filteredNotes.push(note) -%}
    {%- endif -%}
{%- endfor -%}
{%- if filteredNotes.length > 0 %}
# Zotero Notes

{% for note in filteredNotes -%}
> [!NOTE] Note {{ loop.index }} 
> {{ note.note | replace("\n", "\n>  ") | replace ("users/9613822", "library")}}

{% endfor %}{% endif %}