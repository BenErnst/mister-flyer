export class Destination {
  constructor(
    public _id?: string,
    public city: string = '',
    public flightDurationTo: string = '',
    public coords = null,
    public departAt: number = null
  ) {}

  setId?() {
    this._id = `des${Math.floor(Math.random() * 1000)}`;
  }
}
