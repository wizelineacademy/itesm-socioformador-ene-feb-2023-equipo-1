// Import Cypress and add global commands
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import 'cypress-react-unit-test/support';

// Import the component test files
import './example.spec';

// Add Cypress global commands
addMatchImageSnapshotCommand();

// Start Cypress test runner
Cypress.run();
