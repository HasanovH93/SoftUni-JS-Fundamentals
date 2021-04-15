function extractFile(filePath) {
  let fileNameStartIndex = filePath.lastIndexOf("\\") + 1;
  let extensionStartIndex = filePath.lastIndexOf(".") + 1;
  let fileNameEndIndex = extensionStartIndex - 1;
  let fileName = filePath.substring(fileNameStartIndex, fileNameEndIndex);
  let extension = filePath.substring(extensionStartIndex);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
