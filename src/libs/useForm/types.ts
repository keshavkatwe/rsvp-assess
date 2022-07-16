export interface IValidationList {
  isRequired: boolean;
}

export type IValidationMessages = {
  [K in keyof IValidationList]?: string;
};
interface IValidationRule {
  rules: IValidationList;
  messages: IValidationMessages;
}

export type IValidation<Values> = {
  [K in keyof Values]?: IValidationRule;
};
export type IValueBoolean<Values> = {
  [K in keyof Values]?: boolean;
};
export type IValueMessage<Values> = {
  [K in keyof Values]?: string;
};
