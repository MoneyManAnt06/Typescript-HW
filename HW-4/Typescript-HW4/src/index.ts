import LogServices from './services/logServices';
import NoteServices from './services/noteServices';
import UserServices from './services/userServices';

const noteServices = new NoteServices();
noteServices.createNote('note 2', 'EWdfdsafsdf', 1);

const userServices = new UserServices();
userServices.createUser('Anthony', 'Lopez', 'Anthony.lopez@gmail.com');

const logServices = new LogServices();
logServices.createLog('sdfdfdfa');
