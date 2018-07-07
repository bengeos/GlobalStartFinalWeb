export class PaginatedUsers {
  public current_page: number;
  public first_page_url: string;
  public from: number;
  public last_page: number;
  public last_page_url: string;
  public next_page_url: string;
  public path: string;
  public per_page: number;
  public prev_page_url: string;
  public to: number;
  public total: number;
  public data: User[];

  constructor() {
    this.current_page = null;
    this.from = null;
    this.last_page = null;
    this.per_page = null;
    this.to = null;
    this.total = null;
    this.first_page_url = '';
    this.last_page_url = '';
    this.next_page_url = '';
    this.prev_page_url = '';
    this.path = '';

  }
}

export class User {
  public id: number;
  public full_name: string;
  public email: string;
  public password: string;
  public role_id: number;
  public account_status: boolean;
  public user_role: Role;
  public created_at: string;
  public updated_at: string;

  constructor() {
    this.full_name = '';
    this.email = '';
    this.password = '';
    this.role_id = null;
    this.account_status = false;
    this.user_role = new Role();
    this.created_at = '';
    this.updated_at = '';
  }
}

export class Role {
  public id: number;
  public role_name: string;
  constructor() {
    this.id = null;
    this.role_name = '';
  }
}
