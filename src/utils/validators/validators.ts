export const validate  = (value: string) =>{
  if (value)   return undefined;
  return "Field is required"
}

export const maxLengthCreator = (maxLength: number) => (value: string) =>{
    if (value && value.length>maxLength)   return "Max length is exceeded";
    return undefined;
}

