export default class AccessToken {
  id: string;
  name: string;
  permissions: string[];

  constructor(serverResponse: { id: string, name: string, permissions: string[] }) {
    this.id = serverResponse.id;
    this.name = serverResponse.name;
    this.permissions = serverResponse.permissions;
  }

  hasPermission(permissionName: string) {
    return this.permissions.some(x => x === permissionName);
  }
}
