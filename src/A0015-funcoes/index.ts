type MapStringCb = (item: string) => string;

function mapString(array: string[], callbackfn: MapStringCb): string[] {
  const newArray: string[] = [];

  array.forEach((i) => {
    newArray.push(callbackfn(i));
  });

  return newArray;
}

const abc = ['a', 'b', 'c'];
const acbMap = mapString(abc, (item) => item.toUpperCase());

console.log(acbMap);
