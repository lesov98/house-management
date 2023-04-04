import { Role } from '../entities/role.entity';

/* eslint-disable @typescript-eslint/no-empty-function */
export class RoleMapper {
  private static instance: RoleMapper = new RoleMapper();
  private rolesMap: Map<string, Role> = new Map();
  public static getInstance = (): RoleMapper => RoleMapper.instance;
  private constructor() {}

  public addRole = (name: string, role: Role): void => {
    this.rolesMap.set(name, role);
  };

  public getRole = (name: string): Role => {
    return this.rolesMap.get(name);
  };
}
