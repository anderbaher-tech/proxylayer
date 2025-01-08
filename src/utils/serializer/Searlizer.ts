export function serializeBigInt(obj: any): any {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === "bigint") return obj.toString();
  if (typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  }

  const serializedObj: any = {};
  for (const key of Object.keys(obj)) {
    serializedObj[key] = serializeBigInt(obj[key]);
  }

  return serializedObj;
}

export function deserializeBigInt(
  value: Record<string, any>
): Record<string, any> {
  const deserializedObject: Record<string, any> = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      const val = value[key];
      if (typeof val === "string" && /^\d+n$/.test(val)) {
        deserializedObject[key] = BigInt(val.slice(0, -1));
      } else if (typeof val === "object" && !Array.isArray(val)) {
        deserializedObject[key] = deserializeBigInt(val);
      } else {
        deserializedObject[key] = val;
      }
    }
  }
  return deserializedObject;
}
