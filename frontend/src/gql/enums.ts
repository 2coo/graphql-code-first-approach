export const GqlUserType = {
  /** A human user */
  HUMAN: 'HUMAN',
  /** A robot user */
  ROBOT: 'ROBOT'
} as const;

export type GqlUserType = typeof GqlUserType[keyof typeof GqlUserType];