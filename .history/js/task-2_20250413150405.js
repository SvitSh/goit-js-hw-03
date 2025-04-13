function makeArray(firstArray, secondArray, maxLength) {
  const combined = firstArray.concat(secondArray);

  if (combined.length > maxLength) {
    return combined.slice(0, maxLength);
  }

  return combined;
}
