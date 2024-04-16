import { InternServices } from './internServices';
import LogServices from './logServices';
import { ManagerServices } from './managerServices';

const initIndex = async () => {
  const updatedIntern = new InternServices();
  await updatedIntern.createIntern(
    24,
    'otto',
    'developer',
    'cold caller',
    'Lucho'
  );
  await updatedIntern.updateIntern(
    24,
    'otto',
    'developer',
    'cold caller',
    'Jorge',
    1
  );
  // updatedIntern.deleteIntern(1);

  const managerServices = new ManagerServices();
  await managerServices.createManager(
    24,
    'Lucho',
    'Accounting Manager',
    'Accounting',
    2
  );

  const updatedManager = await managerServices.updateManager(
    24,
    'Lucho',
    'sweeper',
    'cleaning crew',
    2,
    1
  );

  console.log(updatedManager);

  // managerServices.deleteManager(1)
};

initIndex();
