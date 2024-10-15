function isFontAvailable(fontName) {
    // Create a hidden div for measuring text width
    const testDiv = document.createElement('div');
    testDiv.style.position = 'absolute';
    testDiv.style.left = '-9999px';
    testDiv.style.fontSize = '100px'; // Use a large font size to ensure accurate measurements
    testDiv.style.fontFamily = `"${fontName}", sans-serif`; // Set the font family to the font you want to detect, with a fallback
    document.body.appendChild(testDiv);

    // Measure the width of the text using the specific font
    const testText = 'AaBbCcXxYyZz1234567890';
    testDiv.textContent = testText;
    const widthWithSpecificFont = testDiv.offsetWidth;

    // Change the font to a known fallback font (e.g., Arial) and measure again
    testDiv.style.fontFamily = 'Arial, sans-serif';
    const widthWithFallbackFont = testDiv.offsetWidth;

    // Remove the hidden div from the DOM
    document.body.removeChild(testDiv);

    // Compare the widths to determine if the specific font is available
    return Math.abs(widthWithSpecificFont - widthWithFallbackFont) > 1; // Allow a small tolerance for differences
}
