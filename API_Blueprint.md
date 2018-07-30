FORMAT: 1A

#ride-my-way-API

ride-my-way-API is a simple API built for carpooling service, it allows users to signup/login for the service, also it gives users ability to create a ride offers and also make some simple decisions on their ride offer's requests.

## User Signup [/auth/signup]

### Create a new account for user [POST]
you can create a new account with this action.
This action takes a JSON payload as the request body.
Response then return the new user's id and a Bearer authorization token.
The Bearer token is very important as to some actions require it as an header to get access to data.

+ Request (application/json)
    + Body

          {
            "firstname": "Andela",
            "lastname": "Bootcamp",
            "dob": "25/05/1992",
            "gender": "Male",
            "picture": "",
            "email": "bitbucket05@github.com",
            "password": "Password34",
            "vehicleType": "Toyota Carolla",
            "vehicleModel": "2018",
            "driverLn": "DFBHS34GHV34",
            "VRN": "43G-DB5"
          }

+ Response 200 (application/json)
    + Body

          {
            "id": "4",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiYml0YnVja2V0MDVAZ2l0aHViLmNvbSIsImlhdCI6MTUzMjU5NjQzNCwiZXhwIjoxNTMyNjgyODM0fQ.unlv5Ku33bPwVuv6OLsVuW4H9a0y2csz-n3l7EOzXrI"
          }


If user already exist

+ Response 200 (application/json)
    + Body

          {
            "message": "user already exist"
          }



## User Login[/auth/login]

### User authenication for login [POST]
This action is use for authenicating existing users.
This action takes a JSON payload as the request body.
Response then return the new user's id and a Bearer authorization token.
The Bearer token is very important as to some actions require it as an header to get access to data.

+ Request (application/json)
    + Body

          {
            "email": "bitbucket05@github.com",
            "password": "Password34"
          }

+ Response 200 (application/json)
    + Body

          {
            "id": "4",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiYml0YnVja2V0MDVAZ2l0aHViLmNvbSIsImlhdCI6MTUzMjU5NjQzNCwiZXhwIjoxNTMyNjgyODM0fQ.unlv5Ku33bPwVuv6OLsVuW4H9a0y2csz-n3l7EOzXrI"
          }


If user's authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    


## User Collection [/users/{user_Id}]

### Get a user detail [GET]

+ Parameters
    + user_Id (number) - ID of the user in form of an integer

This action get the detail of a user for the purpose of user profile and etc.
You need a token to use this action.

+ Request (application/json)
    + Headers
        Authorization: bearer {token}

+ Response 200 (application/json)
    + Body

          {

          }


If user's token authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    


## Deactivate user account [/users/{user_Id}]

### Delete a user account [DELETE]

+ Parameters
    + user_Id (number) - ID of the user in form of an integer

This action remove user's data permanently from our service's database as per user's wish to deactivate the account.
You need a token to use this action.

+ Request (application/json)
    + Headers
        Authorization: bearer {token}

+ Response 200 (application/json)
    + Body

          {
            "message": "operation successful"
          }


If user's token authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    


## Ride Offers Collection [/rides]

### Get all ride offers [GET]
This action get a list of all ride offers in our service's database providing you with various of ride offers.

+ Response 200 (application/json)
    + Body

          {

          }



## Ride Offer [/rides/{ride_Id}]

### Get a ride offer detail [GET]

+ Parameters
    + ride_Id (number) - ID of the ride offer in form of an integer

This action get all detail on the a single ride offer.
You need a token to use this action.

+ Request (application/json)
    + Headers
        Authorization: bearer {token}

+ Response 200 (application/json)
    + Body

          {

          }


If user's token authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    


## Add ride offer [/users/rides]

### create a new ride offer [POST]
you can create a new ride offer with this action.
This action takes a JSON payload as the request body.
Response then return an integer (1).
You need a token to use this action.

+ Request (application/json)
    + Headers
        Authorization: bearer {token}

    + Body

          {
              "location": "Ajah",
              "destination": "Lekki",
              "date": "23/04/2019",
              "time": "15:00",
              "prize": "5600",
              "creator_id": "8",
              "seat": "4"
          }

+ Response 200 (application/json)
    + Body

          1


If user's token authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    


## Add ride offer's request [/rides/{ride_Id}/request]

### create a new request for a ride offer [POST]

+ Parameters
    + ride_Id (number) - ID of the ride offer in form of an integer

This action is use to show interest in a ride offer by adding a request to the ride offer.
Response then return an integer (1).
You need a token to use this action.

+ Request (application/json)
    + Headers
        Authorization: bearer {token}

    + Body

          {
              "passenger_id": "4"
          }

+ Response 200 (application/json)
    + Body

          1


If user's token authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    


## Ride Offer Request Collection [/users/rides/{ride_Id}/request]

### get all requests of a single ride offer [GET]

+ Parameters
    + ride_Id (number) - ID of the ride offer in form of an integer

This action get a list of all request for a single ride offer.
You need a token to use this action.

+ Request (application/json)
    + Headers
        Authorization: bearer {token}

+ Response 200 (application/json)
    + Body

          {

          }


If user's token authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    


## Ride Offer Request Decision [/users/rides/{ride_Id}/requests/{request_Id}]

### update the status of a single ride offer request [PUT]

+ Parameters
    + ride_Id (number) - ID of the ride offer in form of an integer.

    + request_Id (number) - ID of the ride offer's request in form of an integer.

This action is use to update the request status on the event of acception or rejection of request from by the ride offer's creator.
You need a token to use this action.

+ Request (application/json)
    + Headers
        Authorization: bearer {token}

    + Body
          {
            "request_option": "Accept"
          }

+ Response 200 (application/json)
    + Body

          {

          }


If user's token authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    


## Ride Offer Search [/search]

### search for ride offers [POST]
This action is use to search for ride offers with location and destination.

+ Request (application/json)
    + Body
          
          {
            "destination": "Lekki",
	          "location": "Ajah"
          }


+ Response 200 (application/json)
    + Body

          {
            "search_result": [
              {
              "ride_location": "Ajah",
              "ride_destination": "Lekki",
              "ride_date": "23/04/2018",
              "ride_time": "15:00",
              "ride_prize": "5600",
              "ride_id": "8",
              "ride_seat": "4",
              "ride_owner_id": "2"
            }
            ],

            "related_result": [
              {
              "ride_location": "Ajah",
              "ride_destination": "Lekki",
              "ride_date": "23/04/2019",
              "ride_time": "15:00",
              "ride_prize": "5600",
              "ride_id": "8",
              "ride_seat": "4",
              "ride_owner_id": "2"
            },
            {
              "ride_location": "Shomolu",
              "ride_destination": "Lekki",
              "ride_date": "23/04/2019",
              "ride_time": "11:00",
              "ride_prize": "7500",
              "ride_id": "4",
              "ride_seat": "2",
              "ride_owner_id": "8"
            }
            ]
          }



## Delete Ride Offer [/rides/{ride_Id}]

### Delete a single ride offer [GET]

+ Parameters
    + ride_Id (number) - ID of the ride offer in form of an integer.

This action is use to delete ride offer in case it is no longer valid (expired) or mistake in detail.
Response then returns an integer (1).
You need a token to use this action.

+ Request (application/json)
    + Headers
        Authorization: bearer {token}

+ Response 200 (application/json)
    + Body

          1


If user's token authenication fail

+ Response 401 (application/json)
    + Body

          {
            "message": "Auth failed"
          }
    

