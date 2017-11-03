import people from './people';

export default (app) => {
    app.use('/people' , people );
    app.use('/' ,  function(req, res) {
                                        res.json({ message: 'api bravi v1.0'});
                                      });

}