export class PaginatedNews {
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
  public data: News[];

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

export class News {
  public id: number;
  public title: string;
  public description: string;
  public image: string;
  public created_at: string;
  public updated_at: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.image = '';
    this.created_at = '';
    this.updated_at = '';
  }
}


