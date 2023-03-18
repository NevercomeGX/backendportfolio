class HttpError extends Error {
  public status: number;
  public title: string;
  public detail: string;
  public code: number;
  public opts?: { [key: string]: any };

  constructor({
    status = 500,
    title = 'Error',
    detail = 'Internal Server Error',
    code = 1000,
    opts,
  }: {
    status?: number;
    title?: string;
    detail?: string;
    code?: number;
    opts?: { [key: string]: any };
  }) {
    super(detail);
    this.status = status;
    this.title = title;
    this.detail = detail;
    this.code = code;
    this.opts = opts;
  }
}

export default HttpError;
