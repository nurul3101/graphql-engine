/* eslint no-unused-vars: 0 */
/* eslint import/prefer-default-export: 0 */

import {
  passPTCreateTable,
  passPTCheckRoute,
  passPTNoChecks,
  passPTCustomChecks,
  passPTRemovePerms,
  passPVCreateView,
  passPVPermissions,
  passPVRemovePerms,
  passPVDeleteView,
  passPTDeleteTable,
} from './spec';
import { testMode } from '../../../helpers/common';
import { setMetaData } from '../../validators/validators';

const setup = () => {
  describe('Check Data Tab', () => {
    it('Clicking on Data tab opens the correct route', () => {
      // Visit the index route
      cy.visit('/data/schema/public');
      cy.wait(7000);
      // Get and set validation metadata
      setMetaData();
    });
  });
};

export const runPermissionsTests = () => {
  describe('Permissions', () => {
    it('Create a table', passPTCreateTable);
    it('Create a view', passPVCreateView);
    it('Check permission route', passPTCheckRoute);
    it('Table No-check permissions work as expected', passPTNoChecks);
    it('Table Custom-check permissions work as expected', passPTCustomChecks);
    it('Table Permissions removal works as expected', passPTRemovePerms);
    it('View permissions work as expected', passPVPermissions);
    it('View Permissions removal works as expected', passPVRemovePerms);
    it('Delete off the views', passPVDeleteView);
    it('Delete off the test table', passPTDeleteTable);
  });
};

if (testMode !== 'cli') {
  setup();
  runPermissionsTests();
}
