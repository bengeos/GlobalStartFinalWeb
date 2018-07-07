/**
 * Object for login
 */
export class LoginUser {
  public email: string;
  public password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
export class User {
  public id: number;
  public role_id: number;
  public fullname: string;
  public email: string;
  public Account_status: boolean;
  public created_at: string;
  public updated_at: string;
  constructor() {
    this.id = null;
    this.role_id = null;
    this.fullname = '';
    this.email = '';
    this.Account_status = false;
    this.created_at = '';
    this.updated_at = '';
  }
}
export class RegisterUser {
  public fullname: string;
  public email: string;
  public password: string;
  public role_id: number;
  constructor() {
    this.fullname = '';
    this.email = '';
    this.password = '';
    this.role_id = null;
  }
}
