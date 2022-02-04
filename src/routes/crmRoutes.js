import { addNewContact,
         getContact, 
         getContactWithId,
         updateContact,
         deleteContact
        } from '../controllers/crmController'


const routes = (app) => {

  app.route('/contact')
    .get((req, res, next) =>{
      
      //midleware
      console.log(`Request de :${req.originalUrl}`);
      console.log(`Request type:${req.method}`);
      next();
      
    }, getContact)
    .post(addNewContact);

  app.route('/contact/:contactId')
    //contact with ID
    .get(getContactWithId)

    //update with ID
    .put(updateContact)

    //del with ID
    .delete(deleteContact);

}

export default routes;