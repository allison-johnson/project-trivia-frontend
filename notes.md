*To Do*
[x] Get backend hosted

[x] Create App component with simple button ('Random Trivia Question') to test axios request

[] Implement create action

[] Implement delete action

[] Implement authentication with JWT 
    [] Setup backend/DB for authentication
    [] Create forms to sign up, login, and logout
    [] Send axios requests with form data to server
    [] *stretch* User can save question to their 'favorites' list

[] Adjust backend: get MORE questions from external API and just load a random subset of them (?) when 'Question Index' page loads

[] Create nav bar: 
    - Random Trivia Question
    - Take a Quiz (Link to '#' for now)
    - Filter by Category (Dropdown menu)
    - Submit a Question

[x] Set up React router

[] Create TriviaQuestion component that renders when path is '/randomquestion'

*Routes*
GET /triviaQuestion
GET /triviaQuestion/id/:id
GET /triviaQuestion/category/:category_name
POST /triviaQuestion
PUT /triviaQuestion/:id
DELETE /triviaQuestion/:id

GET /category
GET /category/id/:id 
POST /category
DELETE /category/:id
