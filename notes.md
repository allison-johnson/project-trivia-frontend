*To Do*
[x] Get backend hosted

[] Create App component with simple button ('Random Trivia Question') to test axios request

[] Implement authentication with JWT 
    [] Setup backend/DB for authentication
    [] Create forms to sign up, login, and logout
    [] Send axios requests with form data to server

[] Create nav bar: 
    - Random Trivia Question
    - Take a Quiz (Link to '#' for now)
    - Filter by Category (Dropdown menu)
    - Submit a Question

[] Set up React router

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
