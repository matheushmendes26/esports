export function convertHour(hourString: string){
  const [hours,minutes] = hourString.split(':').map(Number)

  const minutesAmount = (hours*60) + minutes

  return minutesAmount;
}