import environmentDevelopment from './environment.development';
import environmentProduction from './environment.production';

const environment = process.env.NODE_ENV === 'development' ? environmentDevelopment : environmentProduction;

export default environment;
