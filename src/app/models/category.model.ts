export class Category {
  _id: string;
  name: string;
  parent: Category;
  constructor(obj: { _id: string; name: string; parent: Category }) {
    this._id = obj._id;
    this.name = obj.name;
    this.parent = obj.parent;
  }
}
