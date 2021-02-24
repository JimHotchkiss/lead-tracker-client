# Login fix - 2/23/21
  [] Find out where the login process is failing
    * The Login page is taking the user input, and passing it to the UserSubmit action
    * The UserSubmit is making a fetch request, and successfully returning the data from the api
    * Then the userSubmitSuccess is called, and is reached successfully
    * A type: USER_LOGIN is sent to the reducer
      # However, it never makes it to the reducer.
      # It wasn't making to the reducer, userSubmit, because userSubmit was not defined in the Store
      # !!!! The user is NOT remaining logged in. It's not keeping the sessions key.
        - Need to watch the Learn.co Globetrotter login video.
 
      # Note - Clear user input