export class App {
  configureRouter(config, router) {
    config.title = 'Bánh Tráng';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Tính giá' }
    ]);

    this.router = router;
  }
}
