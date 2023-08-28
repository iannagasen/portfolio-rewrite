// get the next index from array
export const incrementer = (arr: any[], currentIndex: number) => {
  const length = arr.length;
  if (currentIndex === length - 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}