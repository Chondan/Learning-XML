<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	<html>
	<body>
	<h2>My CD Collections</h2>
	<table border="1">
		<tr bgcolor="#9acd32">
			<th>Title</th>
			<th>Artist</th>
		</tr>
		<xsl:for-each select="catalog/cd[artist!='Bob Dylan']">
			<xsl:sort select="artist"/>
			<tr>
				<td><xsl:value-of select="title"/></td>
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
			</tr>
		</xsl:for-each>
	</table>
	</body>
	</html>
</xsl:template>
</xsl:stylesheet>