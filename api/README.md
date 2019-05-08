# NODE / API

Api restFUL, usando nodejs com transpilador babel e com conexão com firebase.

use x-www-formurlencoded parameters.

Methods
	
	'/people':

		**.GET**: Returns all people
		Ex.:
		    url : http://localhost:3000/people/

		**.POST**: Create a person

			parameters:

				firstName: string

				lastName: string

				age: number
				
				contact: Collection ({
				                       type : string
				                       
				                       value: string  
 				                     })
 		Ex.:
 		 		
            url: http://localhost:3000/people/		                     
            json: 
            {
                "firstName": "Ailton",
                "lastName":  "Martins",
                "age": 30 ,
                "contact" : [{
                              "type" : "whastapp",
                              "value" : "4899999998" 
                             },
                             {
                              "type" : "email",
                              "value" : "teste@teste.com" 
                             }]
                
            }
          
	'/people/:id identifier'

		**.GET**: Return a person
		url: http://localhost:3000/people/KEY_PERSON

		**.PUT**: Update a person information

			parameters:
				
				firstName: string

				lastName: string

				age: number
				
				contact: Collection ({
                                       type : string
                                       
                                       value: string  
                                     })
            Ex.:
                    
                url: http://localhost:3000/people/		                     
                json: 
                {
                    "firstName": "Ailton",
                    "lastName":  "Martins",
                    "age": 30 ,
                    "contact" : [{
                                  "key" : "KEY_CONTACT"
                                  "type" : "phone",
                                  "value" : "4899999998" 
                                 },
                                 {
                                  "type" : "email2",
                                  "value" : "teste@teste.com" 
                                 }]
                    
                }		

		**.DELETE**: Delete a Person
		url: http://localhost:3000/people/KEY_PERSON
		
	'/people/contact/:person':
    
    		**.GET**: Returns all contact perosn
    		Ex.:
    		    url : http://localhost:3000/people/contact/:person
    
    		**.POST**: Create a contact
    
    			parameters:
    
    				type: string
    
    				value: string
        				
     		Ex.:
     		 		
                url: http://localhost:3000/people/contact/:person	                     
                json: 
                {
                  "type" : "whastapp",
                  "value" : "4899999998" 
                 }
              
    '/people/contact/:person/:id identifier'

        **.GET**: Return a person
        url: http://localhost:3000/people/contact/:person/:id

        **.PUT**: Update a person information

            parameters:
                
                type: string
                    
                value: string
            Ex.:
                    
                url: http://localhost:3000/people/contact/:person/:id		                     
                json: 
                 {
                   "type" : "email2",
                   "value" : "teste@teste.com" 
                 }	

        **.DELETE**: Delete a Person
        url: http://localhost:3000/people/contact/:person/:id	
