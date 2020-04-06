export class AppConfig {
  public readonly APIUrl = 'http://localhost:3000/';

  public readonly Token = sessionStorage.getItem('token');

  public readonly login = 'login';

  public readonly students = 'students';

  public readonly lecturers = 'lecturers';

  public readonly reviews = 'reviews';

  public readonly events = 'events';

}
