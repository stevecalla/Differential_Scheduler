
import { sequelize } from '../config/connection.js';
import { LoginFactory } from './Logins.js';
import { UserFactory } from './Users.js';
import { AppointmentBlockFactory } from './AppointmentBlocks.js';
import { ServiceFactory } from './Services.js';
import { AdditionalServiceFactory } from './AdditionalServices.js'
import { AvailabilityOptionFactory } from './AvailabilityOptions.js'
import { DwellingAdjustmentFactory } from './DwellingAdjustments.js';


const Login = LoginFactory(sequelize);
const User = UserFactory(sequelize);
const AppointmentBlock = AppointmentBlockFactory(sequelize);
const Service = ServiceFactory(sequelize);
const AdditionalService = AdditionalServiceFactory(sequelize);
const AvailabilityOption = AvailabilityOptionFactory(sequelize);
const DwellingAdjustment = DwellingAdjustmentFactory(sequelize);


//PART RELATIONSHIPS

//TO AppointmentBlocks m2m
Service.belongsToMany(AppointmentBlock, {
  through: 'ServiceAppointmentBlock',
});

//FROM AppointmentBlocks m2m
AppointmentBlock.belongsToMany(Service, {
  through: 'ServiceAppointmentBlock',
});



//TO AppointmentBlocks m2m
AvailabilityOption.belongsToMany(AppointmentBlock, {
  through: 'AvailabilityOptionAppointmentBlock',
});

//FROM AppointmentBlocks m2m
AppointmentBlock.belongsToMany(AvailabilityOption, {
  through: 'AvailabilityOptionAppointmentBlock',
});



//TO AppointmentBlocks m2m
DwellingAdjustment.belongsToMany(AppointmentBlock, {
  through: 'DwellingAdjustmentAppointmentBlock',
});

//FROM AppointmentBlocks m2m
AppointmentBlock.belongsToMany(DwellingAdjustment, {
  through: 'DwellingAdjustmentAppointmentBlock',
});



//TO AppointmentBlocks m2m
AdditionalService.belongsToMany(AppointmentBlock, {
  through: 'AdditionalServiceAppointmentBlock',
});

//FROM AppointmentBlocks m2m
AppointmentBlock.belongsToMany(AdditionalService, {
  through: 'AdditionalServiceAppointmentBlock',
});

export { AdditionalService, AvailabilityOption, DwellingAdjustment, Service, AppointmentBlock, User, Login };
