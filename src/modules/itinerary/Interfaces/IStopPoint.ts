export default interface IStopPoint {
  id?:string
  name: string;
  address: string;
  formattedAddress?: string;
  completed?: boolean
}