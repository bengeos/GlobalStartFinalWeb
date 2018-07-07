
export class ErrorMessage {
  public error: any;
  public message: any;
  public type: number;
  constructor(error: any, message: any, type: number) {
    this.error = error;
    this.message = message;
    this.type = type;
  }
}
export class AuthMessage {
  public error: string;
  public message: string;
  public status: number;
  public data: any;
  constructor(stat: number, error: string) {
    this.error = error;
    this.message = '';
    this.status = stat;
    this.data = null;
  }
}
