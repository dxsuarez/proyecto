import { ActoresModule } from './actores.module';

describe('ActoresModule', () => {
  let actoresModule: ActoresModule;

  beforeEach(() => {
    actoresModule = new ActoresModule();
  });

  it('should create an instance', () => {
    expect(actoresModule).toBeTruthy();
  });
});
