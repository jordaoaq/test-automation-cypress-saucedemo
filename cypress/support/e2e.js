
import './commands';

beforeEach(() => {
  // Limpa todas as sessões salvas antes de cada teste
  Cypress.session.clearAllSavedSessions();
});