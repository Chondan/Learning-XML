<?php 
// Load XML file
$xml = new DOMDocument;
$xml->load('../assets/xml/cdcatalog.xml');

// Load XSL file
$xsl = new  DOMDocument;
$xsl->load('../assets/xsl/cdcatalog.xsl');

// Configure the transformer
$proc = new XSLTProcessor;

// Attach the xsl rules
$proc->importStyleSheet($xsl);

echo $proc->transformToXML($xml);
?>