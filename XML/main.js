(() => {
	function getData(url, callback, type) {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				// console.log(this.getAllResponseHeaders());
				const res = type === "txt" ? this.responseText : this.responseXML;
				callback(res);
			}
		}
		xhr.open("GET", url, true);
		xhr.send();
	}
	function showConent(res) {
		const div = document.getElementById("demo");
		div.innerText = res;
	}
	function xmlDOM(res) {
		const xmlDoc = res;
		console.log("root node: ", xmlDoc.documentElement);
		function accessingNode() {
			const books = Array.from(xmlDoc.getElementsByTagName("book"));
			books.forEach(book => {
				console.log("title: ", book.children[0].textContent);
			});
		}
		// accessingNode();
		function traversingNodes() {
			let txt = "";
			const x = xmlDoc.documentElement.childNodes;
			console.log(x);
			for (i = 0; i < x.length; i++) {
				console.log(x[i].nodeName, x[i].nodeType);
				if (x[i].nodeType == 1) {
					txt += x[i].nodeName + " ";
				}
			}
			console.log(txt);
		}
		// traversingNodes();
		function NavigatingNodeRelationships() {
			const books = xmlDoc.getElementsByTagName("book");
			const x = books[0];
			// setAttribute()
			x.setAttribute("category", "food");
			console.log(x.attributes[0], "nodeType: " + x.attributes[0].nodeType, "parentNode: " + x.parentNode.nodeName);
			// getAttribute()
			console.log(x.getAttribute("category"));
			const xlen = x.childNodes.length;
			let y = x.firstChild;
			let txt = "";
			for (i = 0; i < xlen; i++) {
				// Process only element ondes (type 1) 
				if (y.nodeType == 1) {
					txt += y.nodeName + " ";
				}
				y = y.nextSibling;
			}
			console.log(txt);
		}
		NavigatingNodeRelationships();
	}
	function CDATA(res) {
		console.log(res);
	}
	function replaceNodes(res) {
		const x = res.documentElement;
		// create a book element, title element and a text node
		const newNode = res.createElement("book");
		const newTitle = res.createElement("title");
		const newText = res.createTextNode("A Notebook");

		// add the text node to the title node
		newTitle.appendChild(newText);
		newNode.appendChild(newTitle);

		const y = res.getElementsByTagName("book")[0];
		x.replaceChild(newNode, y);
		console.log(x);
	}
	function replaceDataInATextNode(res) {
		const x = res.getElementsByTagName("title")[0].childNodes[0];
		x.replaceData(0, 8, "Easy"); // Use the replaceData method to replace the eight first characters from the text node with "Easy"
		console.log(x);

		// Use the nodeValue Property Instead 
		x.nodeValue = "Hard Intalian";
		console.log(x);
	}
	function createNode(res)  {
		//  Create a New Element Node
		const newElement = res.createElement("edition");
		const newText = res.createTextNode("version 1.0");
		newElement.appendChild(newText);

		const x = res.getElementsByTagName("book")[0];
		x.appendChild(newElement);
		console.log(x);

		// Create a New Attribute Node
		const newAtt = res.createAttribute("edition");
		newAtt.nodeValue = "first";

		res.getElementsByTagName("title")[0].setAttributeNode(newAtt);

		// Create an Attribute Using setAttribute()
		res.getElementsByTagName("book")[0].setAttribute("edition", "frist");

		// Create a CDATA Section Node
		const newCDATA = res.createCDATASection("Special Offer & Book Sale");
		x.appendChild(newCDATA);

		// Create a Comment Node
		const newComment = res.createComment("Revised March 2015");
		x.appendChild(newComment);
	}
	function addNodes(res) {
		const book0 = res.getElementsByTagName("book")[0];
		console.log(res.documentElement);
		console.log(book0);

		// Add a Node - appencChild()
		const newElem = res.createElement("edition");
		const newText = res.createTextNode("first");
		newElem.appendChild(newText);
		book0.appendChild(newElem);

		// Insert a Node - insertBefore()
		const newNode = res.createElement("book");
		const y = res.getElementsByTagName("book")[3];
		res.documentElement.insertBefore(newNode, y);

		// Add a New Attribute
		book0.setAttribute("edition", "frist");

		// Add Text to a Text Node - insertData()
		book0.getElementsByTagName("title")[0].childNodes[0].insertData(0, "Easy ");
	}
	function cloneNodes(res) {
		console.log(res.documentElement);

		const oldNode = res.getElementsByTagName("book")[0];
		const newNode = oldNode.cloneNode(true);
		res.documentElement.appendChild(newNode);
	}
	function xPath(res) {
		const xmlDoc = res;
		console.log(xmlDoc.documentElement);
		let txt = "";
		const path = "/bookstore/book[price > 35]/title";

		// XPath
		const nodes = xmlDoc.evaluate(path, xmlDoc, null, XPathResult.ANY_TYPE, null);
		console.log(nodes);
		let result = nodes.iterateNext();
		while (result) {
			txt += result.childNodes[0].nodeValue + "\n";
			result = nodes.iterateNext();
		}
		console.log(txt);
	}
	function loadXMLDoc(fileName) {
		if (window.ActiveXObject) {
			xhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} else {
			xhttp = new XMLHttpRequest();
		}
		xhttp.open("GET", fileName, false);
		try { xhttp.responseType = "msxml-document" } catch(err) {} //Helping IE11
		xhttp.send("");
		return xhttp.responseXML;
	}
	async function transformXMLToXHTML() {
		const xhttp = new XMLHttpRequest();
		const xml = await loadXMLDoc("./assets/xml/cdcatalog.xml");
		const xsl = await loadXMLDoc("./assets/xsl/cdcatalog.xsl");
		// code for IE
		if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
			const ex = xml.transformNode(xsl);
			document.getElementById("example").innerHTML = ex;
		} else if (document.implementation && document.implementation.createDocument) {
			const xsltProcessor = new XSLTProcessor();
			xsltProcessor.importStylesheet(xsl);
			resultDocument = xsltProcessor.transformToFragment(xml, document);
			document.getElementById("example").appendChild(resultDocument);
		}
	}
	function loadPhp() {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("php").innerHTML = this.responseText;
			}
		}
		xhttp.open("GET", "./php/transform.php", true);
		xhttp.send();
	}

	function app() {
		const showBtn = document.getElementById("show-content-btn");
		showBtn.onclick = function() {
			getData("./assets/txt/ajax.txt", showConent, "txt");
		}
		// getData("./assets/xml/books.xml", transformXMLToXHTML, "xml");
		loadPhp();
	}
	app();
})();