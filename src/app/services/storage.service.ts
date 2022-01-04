export class StorageService {
  store(key: string, value: any) {
    localStorage[key] = JSON.stringify(value);
    return JSON.parse(localStorage[key]);
  }

  load(key: string, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
  }
}
