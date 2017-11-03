import people from './people';

export default (app) => {
    app.use('/' , people);
    app.use('/people' , people );
}