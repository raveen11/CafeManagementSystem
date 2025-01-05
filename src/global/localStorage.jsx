export class LocalDb {
  constructor() {
    this.sessionObj = { abc: true };
  }
  getSessions() {
    return this.sessionObj;
  }
}
const localDb = new LocalDb();
export default localDb;
