export class Urls {
  
  // public static SERVER_URL = 'http://127.0.0.1:8000';
  public static SERVER_URL = 'https://good-enough.herokuapp.com';
  
  public static REGISTRATION = Urls.SERVER_URL + '/auth/users/';
  public static LOGIN = Urls.SERVER_URL + '/auth/token/login/';
  public static LOGOUT = Urls.SERVER_URL + '/auth/token/logout/';
  public static USER = Urls.SERVER_URL + '/auth/users/me/';
  
  public static ACHIEVEMENTS_URL = Urls.SERVER_URL + '/api/achievements/';
  
}
