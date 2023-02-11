export enum ValidCodes {
  LoginRequired = 1,
  LoginInvalid,
  LoginShort,
  PasswordRequired,
  PasswordShort,
  PasswordBad,
  PasswordInvalid,
  EmailRequired,
  EmailInvalid,
  FirstNameRequired,
  FirstNameShort,
  SecondNameRequired,
  SecondNameShort,
  NameRequired,
  NameShort,
  TitleRequired,
  UsernameShort,
  UsernameRequired,
  IdUserNotUUID,
  IdUserRequired,
  IdQuizRequired,
  IdQuizMin,
  IdQuestionMin,
  IdQuestionRequired,
  PageMin,
  PageRequired,
  GenderInvalid,
}

export enum DatabaseCodes {
  LoginAlreadyExist = 1,
  EmailAlreadyExist,
  NameAlreadyExist,
  UsernameAlreadyExist,
  SomeAlreadyExist,
  NotFound,
  Unknown,
  AuthBadPassword,
}

export enum CodeError {
  Unknown = 1,
  Valid,
  DontHaveRefreshCookie,
  CookieTimeout,
  Forbidden,
  Database,
  AuthBadPassword,
}