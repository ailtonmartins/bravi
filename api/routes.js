import people from './people';
import contact from './contact';

export default (app) => {
    app.use('/people/contact' , contact );
    app.use('/people' , people );
    app.use('/' ,  function(req, res) {
                                        res.json({ message: 'api bravi v1.0'});
                                      });

}