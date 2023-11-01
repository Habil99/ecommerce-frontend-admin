export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
  isConfirmed: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};
