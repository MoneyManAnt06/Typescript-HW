import { InternServices } from './internServices';
import LogServices from './logServices';
import { ManagerServices } from './managerServices';

const updatedIntern = new InternServices();
updatedIntern.createIntern(24, 'otto', 'developer', 'cold caller', 'Lucho');
updatedIntern.updateIntern(24, 'otto', 'developer', 'cold caller', 'Jorge', 1);
// updatedIntern.deleteIntern(1);

const managerServices = new ManagerServices();
managerServices.createManager(
  24,
  'Lucho',
  'Accounting Manager',
  'Accounting',
  2,
  1
);

managerServices.updateManager(24, 'Lucho', 'sweeper', 'cleaning crew', 0, 1);

// managerServices.deleteManager(1)

const logServices = new LogServices();
logServices.createLog('sdfdfdfa');
