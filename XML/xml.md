# XML AJAX

> AJAX is a developer's dream, because you can
- update a web page without reloading the page
- Request data from a server - after the page has loaded
- Receive data from a server - after the page has loaded
- Send data to a server - in the background 

## What is AJAX?
- AJAX = Asynchronous JavaScript And XML
- AJAX is not a programming language
- AJAX just uses a combination of 
 - A browser built-in XMLHttpRequest object (to request data from a web server)
 - JavaScript and HTML DOM (to display or use the data)

> AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

- AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

---

## The XMLHttpRequest Object
### Access Across Domains
- For security reasons, modern browsers do not allow access across domains
- This means that both the web page and the XML file it tries to load, must be located on the same server.
- The examples on 

XMLHttpRequest Object Properties
- readyState
	- 0: request not initialized
	- 1: server connection established
	- 2: request received
	- 3: processing request
	- 4: request finished and response is ready
- status
	- 200: "OK"
	- 403: "Forbidden"
	- 404: "Not Found"

### Send a Request To a Server

#### GET or POST?
- GET is simpler and faster than POST, and can be used in most cases.

However. always use POST request when
- A cached file is not an option (update a file or database on the server)
- Sending a large amount of data to the sever (POST has no size limitations)
- Sending user input (which can contain unknown characters), POST is more robust and secure than GET

> **Note:** Main difference between POST and GET method is that GET carries request parameter appended in URL string while POST carries request parameter in message body which makes it more secure way of transferring data from client to server in http protocol

---

## XML DOM

### Node Properties
1. The `documentElement` property of the XML document is the root node. 
2. The `nodeName` property of a node is the name of the node.
3. The `nodeType` property of a node is the type of the node.

### DOM Traversing
Traversing means looping through or traveling across the node tree.

### Browser Differences in DOM Parsing
All modern browsers support the W3C specification

However, there are some differects between browsers. One important difference is 
 - The way they handle white-spaces and new lines 

#### DOM - Whte Spaces and New Lines
XML often contains new line, or white space characters, between nodes. This is often case when the document is edited by a simple editor like Notepad.

### PCDATA - Parsed Character Data
XML parsers normally parse all the text in an XML document

When an XML element is parsed, the text between the XML tags is also parsed

`<message>This text is also parsed</message>`

The parser does this because XML elements can contain other elements, as in this example, where the `<name>` element contains two other elements (first and last)

`<name><first>Bill</first><last>Gate</last></name>`

> Parsed Character Data (PCDATA) is a term used about text data that will be parsed by the XML parser

### CDATA - (Unparsed) Character Data
The term CDATA is used about text data that should not be parsed by the XML parser

Characters like "<" and "&" are illegal in XML elements

> "<" will generate an error because the parser interprets it as the start of a new element

Some text, like JavaScript code, contains a lot of "<" or "&" characters. To avoid error script code can be defined as CDATA

Everything inside a CDATA section is ignored by the parser

A CDATA section starts with `"<![CDATA[" and ends with "]]>`

### XML DOM - Navigating Nodes
Nodes can be navigated using node relationships

#### Navigating DOM Nodes
In the XML DOM, node relationships are defined as properties to the nodes
 - parentNode
 - childNodes
 - firstChild
 - lastChild
 - nextSibling
 - previousSibling

#### Avoid Empty Text Nodes
Firefox, and some other browsers, will treat empty white-spaces or new lines as text nodes, Internet Explorer will not.

This causes a problem when using the properties: firstChild, lastChild, nextSibling, previousSibling

To avoid navigating to empty text nodes (spaces and new-line characters between element nodes), we use a function that checks the node type

### XML DOM Get Node Values
The nodeValue property is used to get the text value of node

The `getAttribute()` method returns the value of an attribute

#### Get the Value of an Element
In the DOM, everything is a node. Element nodes do not have a text value. 

The text value of an element node is stored in a child node. This node is called a text node. 

### XML DOM Change Node Values
The nodeValue property is used to change a node value

The `setAttribute()` method is used to change an attribute value

#### Change the value of an Element
In the DOM, everything is a node. Element nodes do not have a text value

The text value of an element node is stored in a child node. This is called a text node.

### XML DOM Remoev Nodes
The removeChild() method removes a specified nod

The removeAttribute() method removes a specified attribute

#### Remove an Element Node
Example: This code will remove the first `<book>` element from the loaded xml.
```JavaScript
y = xmlDoc.getElementsByTagName("book")[0];
xmlDoc.documentElement.removeChild(y);
```

#### Remove Myself - Remove the Current Node
The removeChild() method is the only way to remove a specified node. 

When you have navigated to the node you want to remove, it is possible to remove that node using the parentNode property and the removeChild() method

#### Clear a Text Node
The nodeValue property can be used to change the value of a text node.

Example: `xmlDox.getElementsByTagName("title")[0].childNodes[0].nodeValue = "";`

#### Remove an Attribute Node by Name
The removeAttribute() method removes an attribute node by its name

Example: `node.removeAttribute("category")` -> This code removes the "category" attribute in the first `<book>` element

#### Remove Attribute Nodes by Object
The removeAttributeNode() method removes an attribute node, using the node object as parameter

Example: `node.removeAttributeNode(attnode)` -> This code removes all the attributes of all `<book>` elements

### XML DOM Replace Nodes
The replaceChild() method replaces a specified node

The nodeValue property replaces text in a text node 

### XML DOM Create Nodes

#### Create a New Element Node
The createElement() method creates a new element node

### Create an Attribute Using setAttribute()
Sinde the setAttribute() method  creates a new attribute if the attribute does not exist, it can be used to create a new attribute

### XML Add Nodes

#### Add Text to a Text Node - insertData()
The inserData() method inserts data into an existing text node

### XML DOM Clone Nodes

#### Copy a Node
The cloneNode() method creates a copy of a specified node

The cloneNode() method has a parameter (true or false). This parameter indicates if the clone node should include all attributes and child nodes of the original node

---

## XPATH Tuturial 

### What is XPath?
- XPath is a major element in the XSLT standard

> XSLT (Extensible Stylesheet Language Transformations) is a language for transforming XML documents into other XML documents, or other formats such as HTML for web pages, plain text or XSL Formatting Objects, which may subsequently be converted to other formats, such as PDF, PostScript and PNG.

- XPath can be used to navigate through elements and attributes in an XML document
- XPath stands for XML Path Language
- XPath uses "path like" syntax to identify and navigate nodes in an XML document
- XPath contains over 200 built-in functions
- XPath is a major element in the XSLT standard
- XPath is a W3C recommendation

#### XPath Path expressions
XPath uses path expressions to select nodes or node-sets in an XML document

These path expressions look very much like the  path expressions you use with traditional computer file system

#### XPath Standard Functions
XPath includes over 200 built-in functions

There are functions for string values, numeric values, booleans, date and time comparison, node manipulation, sequence manipulation, and much more

Today XPath  expressions can also be used in JavaScript, Java, XML Schema, PHP, Python, C and C++, and lots of other languages

### XPath Nods

#### XPath Terminology
- Nodes
	In XPath, there are seven kinds of nodes
		1. element
		2. attribute
		3. text
		4. namespace
		5. processing-instruction
		6. comment
		7. document nodes

	XML documents are treated as trees of nodes. The topmost element of the tree is called the root element
- Atomic values
	Atomic values are nodes with no children or parent 
- Items 
	Items are atomic values or nodes

#### Relationship of Nodes
- Parent
	Each element and attribute has one parent
- Children
	Element nodes may have zero, one or more children
- Siblings
	Nodes that have the same parent
- Ancestors
	A node's parent, parent's parent, etc.
- Descendants
	A node's children, children's children etc.

### XPath Syntax
XPath uses path expressions to select nodes or node-sets in an XML document. The node is selected  by following a path or steps

#### Selecting Nodes

Expression | Description 
--- | ---
nodename | Selects all nodes with the name "nodename"
/ | Selects from the root node
// | Selects nodes in the document from the current node that match the selection no matter where they are
. | Selects the current node
.. | Selects the parent of the current node
@ | Selects attributes

Example
- bookstore -> Selects all nodes with the name "bookstore"
- /bookstore -> Selects the root element bookstore
> **Note:** If the path starts with a slash (/) it always represents an absolute path to an element
- bookstore/book -> Selects all book elements that are children of bookstore
- //book Selects all book element no matter where they are in the document
- bookstore//book -> Selects all book elements that are descendant of the booksotre element, no matter where they are under the bookstore element
- //@lang -> Selects all attribute that are named lang

#### Predicates
Predicates are used to find a specific node or a node that contains a specific value. 

**Noet:** Predicates are always embedded in square brackets

Path Expression | Resutl
--- | ---
/bookstore/book[1] | Selects the first book element that is the child of the bookstore element
/bookstore/book[last() - 1] | Selects the last but one book element that is the child of the bookstore element
/bookstore/book[position() < 3] | Selects the first two book elements that are children of the bookstore element
//title[@lang] | Selects all the title elements that have an attribute named lan
/bookstore/book[price > 35.00] | Selects all the book elements of the bookstore element that have a price element with a value greater than 35.00

#### Selecting Unknown Nodes
XPath wildcards can be used to select unknow XML nodes

Wildcard | Description
--- | ---
* | Matches any element node
@* | Matches any attribute node
node() | Matches any node of any kind


Example
- /bookstore/* -> Selects all the child element nodes of the bookstore element
- //* -> Selects all elements in the document
- `//title[@*]` -> Selects all title elements which have at least one attribute of any kind

#### Selecting Several Paths
By using the `|` operator in an XPath expression you can select several paths

Path Expression | Result 
--- | ---
//book/title `|` //book/price | Selects all the title AND price elements of all book elements
//title `|` //price | Selects all the title AND price elements in the document

### XPath Axes
An axis represents a relationship to the context (current) node, and is used to locate nodes relative to that node on the tree

--- 

## XSLT Tutorial

> XSLT (Extensible Stylesheet Language Transformations) is a language for transforming XML documents into other XML documents, or other formats such as HTML for web pages, plain text or XSL Formatting Objects, which may sebsequently be converted to other formats such as PDF, PostScript and PNG

**Design and processing model**
> XML Input + XSLT Code -> XSLT Processor -> Result Document

### XSLT Introduction
- XSL (eXtensible Stylesheet Language) is a styling language for XML
- XSLT stands for XSL Transformations

### XSL(T) Languages
- XSLT is a language for transforming XML documents
- XPath is a language for navigating in XML documents
- XQuery is a language for querying XML documents

> CSS = Styel Sheets for HTML 
> XSL = Style Sheets for XML

XML does not use predefined tags. The meaning of, and how to display each tag is well understood.

A `<table>` element could indicate an HTML table, a piece of furniture, or something else - and browsers do not know how to display it!

So, XSL describes how the XML elements should be displayed

#### XSL - More Than s Style Sheet Language
XSL consists of four parts
- XSLT -> a language for transforming XML documents
- XPath -> a language for navigating in XML documents 
- XSL-FO -> a language for formatting XML docunments (discontinued in 2013)
- XQuery -> a language for querying XML documents

> With the **CSS3 paged Media Module**, W3C has delivered a new standard for document formatting. So, since 2013, CSS3 is proposed as an XSL-FO replacement

#### What is XLST?
- XSLT stands for XSL Transformation
- XSLT is the most important part of XSL
- XSLT transforms an XML document into another XML document
- XSLT uses XPath to navigate in XML documents
- XSLT is a W3C Recommendation

#### XSLT = XSL Transformations

XSLT is used to transform an XLM document into another XML document, or another type of document that is recognized by a browser, like HTML and XHTML. Normally XSLT does this by transforming each XML element into an (X)HTML element.

With XSLT you can add/remove elements and attributes to or from the output file. You can also rearrange and sort elements, perform tests and make decisions about which elements to hide and display, and a lot more.

A common way to describe the transformation process is to say that XSLT transforms an XML source-tree into an XML result-tree.

#### XSLT Uses XPath
XSLT uses XPath to find information in an XML document. XPath is used to navigate through elements and attributes in XML documents. 

#### How Does it Work?
In the transformation process, XSLT uses XPath to define parts of the source document that should match one or more predefined template. When a match is found, XSLT will transform the matching part of the source document into the result document

### XSLT - Transformation

#### Correct Style Sheet Declaration
The root element that declares the document to be an XSL style sheet is `<xsl:stylesheet>` or `<xsl:transform>`

**Note:** `<xsl:stylesheet>` and `<xsl:transform>` are completely synonymous and either can be used!

The correct way to declare an XSL style sheet (`.xsl` file) according to the W3C XSLT Recommendation is

```XML
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
```

To get access to the XSLT elements, attributes and features we must declare the XSLT namespace at the top of the document

The xmlns:xsl="http://www.w3.org/1999/XSL/Transform" points to the official W3C XSLT namespace. If you use this namespace, you must also include the attribute version="1.0"

and then we need to put this following tag in `.xml` file
```XML
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="../xsl/cdcatalog.xsl"?>
```

### XSLT `<xsl:template>` Element
An XSL style sheet consists of one or more set of rules that are called templates

A template contains rules to apply when a specified node is matched.

The `<xsl:template match="[XPath expressiong]">` element is used to build templates.

The **match** attribute is used to associate a template with an XML element. The match attribute can also be used to define a template for the entire XML document. The value of the match attribute is an XPath expression (i.e. match="/" defines the whole document)

The content inside the `<xsl:template>` element defines some HTML to write to the output.

### XSLT `<xsl:value-of>` Element
The `<xsl:value-of>` element is used to extract the value of a selected node. 

Example
`<td><xsl:value-of select="catalog/cd/title"/><td>`

**Note:** The **select** attribute, in the example above, contains an XPath expression. An XPath expression works like navigating a file system; a forward slash (`/`) selects subdirectories.

### XSLT `<xsl:for-each>` Element
The `<xsl:for-each>` element allows you to do looping in XSLT.

#### Filterinng the Output
We can also filter the output from the XML file by adding a criterion to the select attribute in the `<xsl:for-each>` element.

For Example
`<xsl:for-each select="catalog/cd[artist='Bob Dylan']">`

Legal filter operators are
- `=` (equal)
- `!=` (not equal)
- `&lt;` less than
- `&gt;` greater than

### XSLT `<xsl:sort>` Element
The `<xsl:sort>` element is used to sort the output

#### Where to put the Sort Information
To sort the output, simple add an `<xsl:sort>` element inside the `<xsl:for-each>` element in the XSL file

For Example
`<xsl:sort select="artist"/>`

### XSLT `<xsl:if>` Element
The `<xsl:if>` element is used to put a conditional test against the content of the XML file

To put a conditional if test against the content of the XML file, add an `<xsl:if>` element to the XSL document

#### Syntax
```xml
<xsl:if test="expression">
	...some output if the expression is true...
</xsl:if>
```

#### Where to Put the `<xsl:if>` Element
To add a conditional test, add the `<xsl:if>` element inside the `<xsl:for-each>` element in the XSL file

For Example
`<xsl:if test="price &gt; 10>...output</xsl:if>`

### XSLT `<xsl:choose>` Element
The `<xsl:choose>` element is used in conjuction with `<xsl:when>` and `<xsl:otherwise>` to express multiple conditional tests. 

#### Syntax
```xml
<xsl:choose>
	<xsl:when test="expression">
		... some output
	</xsl:when>
	<xsl:otherwise>
		... some output
	</xsl:otherwise>
</xsl:choose>
```

#### Where to put the Choose Condition
To inset a multiple conditional test against the XML file, add `<xsl:choose>`, `<xsl:when>`, and `<xsl:otherwise>` elements to the XSL file.

For Example: 
```xml
<xsl:choose>
	<xsl:when test="price &gt; 10">
		<td bgcolor="#f00"><xsl:value-of select="artist"/></td>
	</xsl:when>
	<xsl:when test="price &gt; 9">
		<td bgcolor="#ccc"><xsl:value-of select="artist"/></td>
	</xsl:when>
	<xsl:otherwise>
		<td><xsl:value-of select="artist"/></td>
	</xsl:otherwise>
</xsl:choose>
```

This code above will add a red background color to the "Artist" column WHEN the price of the CD is higher than 10, and grey background-color WHEN the price of the CD is higher than 9 and lower or equal to 10.

### XSLT `<xsl:apply-templates>` Element
The `<xsl:apply-templates>` element applies a template rule to the current element or to the current element's child nodes.

If we add a "select" attribute to the `<xsl:apply-templates>` element, it will process only the child elements that matches the value of the attribute. We can use the "select" attribute to specify in which order the child nodes are to be processed.  

### XSLT - On the Client

#### A JavaScript Solution
In the previose chapters we have explained how XSLT can be used to transform a document from XML to XHTML. We did this by adding an XSL style sheet to the XML file and let the browser do the transformation

Even if this works fine, it is not always desirable to include a style sheet reference in an XML file (e.g. it will not work in a non XSLT aware browser)

A more versatile solution would be use a JavaScript to do the transformation

By using a JavaScript, we can 
- do browser-specific testing
- use different style sheets according to browser and user needs 

That is the beauty of XSLT! One of the design goals for XSLT was to make it possible to transform data from one format to another, supporting different browsers and different use needs. 

### XSLT - On the Server
To make XML data available to all kind of browser, we can transform the XML document on the SERVER and send it back to the browser as XHTML

#### A Cross Browser Solution
In the previose chapter we explained how XSLT can be used to transform a document from XML to XHTML in the browser. We used a JavaScritp and an XML parser for the transformation. However, this will not work in a browser that doesn't have an XML parser.

### XSLT - Editing XML
Data stored in XML files can be edited from an Internet browser

#### Open, Edit and Save XML
Now, we will show hot to open, edit, and save an XML file that is stored on the server.

We will use XSL to transform the XML document into an HTML form. The values of the XML elements will be written to HTML input fields in an HTML form. The HTML form is editable. After editing the data, the data is going to be submitted back to the server and the XML file will be updated.

--- 

## XQuery Tutorial

### XQuery Introduction

#### What is XQuery?
- XQuery is to XML what SQL is to databases.
- XQuery is designed to query XML data. 
- XQuery is the language for querying XML data
- XQuery for XML is like SQL for databases
- XQuery is built on XPath expressions
- XQuery is supported by all major databases

XQuery Example
```XQuery
for $x in doc("books.xml")/bookstore/book
where $x/price>30
order by $x/title
return $x/title
```

#### XQuery is About Querying XML
XQuery is a language for finding and extracting elements and attributes from XML documents.

Here is an example of what XQuery could solve:

"Select all CD records with a price less than $10 from the CD collection stored in cd_catalog.xml"

#### XQuery - Examples of Use
XQuery can be used to: 
- Extract information to use in a Web Service
- Generate summary reports
- Transform XML data to XHTML
- Search Web documents for relevant information

### XQuery FLWOR EXpressions
FLWOR (pronounced "flower") is an acronym for "For, Let, Where, Order by, Return"

- For -> selects a sequence of nodes
- Let -> binds a sequenc to a variable
- Where -> filters the nodes
- Order by -> sorts the nodes
- Return -> what to return (gets evaluated once for every node)

---

## XML DTD

### XML Introduction

#### What is a DTD?
A DTD is a Document Type Definition

A DTD defines the structure and the legal elements and attributes of an XML document

#### Why use a DTD?
With a DTD, independent groups of people can agree on a standard DTD for interchanging data.

An application can use a DTD to verify that XML data is valid.

#### An Internal DTD Declaration
If the DTD is declared inside the XML file, it must be wrapped inside the `<!DOCTYPE>` definition

FOR EXAMPLE:
```xml
<?xml version="1.0" ?>
<!DOCTYPE note [
<!ELEMENT note (to, from, heading, body)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT heading (#PCDATA)>
<!ELEMENT body (#PCDATA)>
]>
```

#### An External DTD Declaration
If the DTD is declared in an external file, the `<!DOCTYPE>` definition must contain a reference to the DTD file

FOR EXAMPLE:
```xml
<?xml version="1.0" ?>
<!DOCTYPE note SYSTEM "note.dtd">
```

And here is the file "note.dtd", which contains the DTD

```dtd
<!ELEMENT note (to, from, heading, body)>
<!ELEMENT to (#PCDATA)>
<!ELEMENT from (#PCDATA)>
<!ELEMENT heading (#PCDATA)>
<!ELEMENT body (#PCDATA)>
```

### DTD - XML Building Blocks
The main building blocks of both XML and HTML documents are elements.

#### The Building Blocks of XML Documents
Seen from a DTD point of view, all XML documents are made up by the following building blocks:
- Elements
- Attributes
- Entities
- PCDATA
- CDATA

##### Elements
Elements are the main building blocks of both XML and HTML documents

Examples of HTML elements are "body" and "table". Examples of XML documents could be "note" and "message". Elements can contain text, other elements, or be empty. Examples of empty HTML elements are "hr", "br" and "img".

##### Attributes
Attributes provide extra information about elements

Attributes are always placed inside the opening tag of an element. Attributes always come in name/value pairs. The following "img" element has additional information about a source file:

> `<img src="computer.gif" />`

##### Entities
Some characters have a special meaning in XML, like the less than sign (`<`) that defines the start of an XML tag.

Most of you know  the HTML entity: `&nbsp;`. This "no-breaking-space" entity is used in HTML to insert an extra space in a document. Entities are expanded when a document is parsed by an XML parser.

##### PCDATA
PCDATA means parsed character data

Think of character data as the text found between the start tag and the end tag of an XML element.

**PCDATA is text that WILL be parsed by a parser. The text will be examined by the parser for entities and markup.**

Tags inside the text will be treated as markup and entities will be expanded

However, parsed character data should not contain any special characters (`&, <, or >`); these need to be represented by the `&amp; &lt; and &gt;` entities, respectively.

##### CDATA
CDATA means character data

**CDATA is text that will NOT be parsed by a parser.** Tags inside the text will NOT be treated as markup and entities will not be expanded.

### DTD - Elements
In a DTD, elements are declared with an ELEMENT declaration.

#### Declaring Elements
In a DTD, XML elements are declared with the following syntax

```xml
<!ELEMENT element-name category>
or
<!ELEMENT element-name (element-content)>
```

 