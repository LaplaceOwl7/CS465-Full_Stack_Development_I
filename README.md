# CS465-Full_Stack_Development_I
This is the work for SNHU's CS465 Full Stack Development class. All coursework is here.

<<< Compare and contrast the types of frontend development you used in your full-stack project, including Express HTML, JavaScript, and the single-page application (SPA). >>>

Express HTML and Angular’s single-page application (SPA) are different in some fundamental ways. In Express HTML, the server-rendered versions are triggered when users request the pages, which Express assembles with Handlebars and exports the full pages to the user. All logical decisions and routing are made on the server side. The browser is solely responsible for rendering and running client scripts. Express offers simplicity and traditional pages at the cost of dynamism.

The SPA version via Angular comprises the browser loading an application where all routing, models, and views are managed directly inside the browser. The user will make HTTP calls to RESTful endpoints with the responses being JSON data. The most apparent perk is that the UI components will seamlessly update without the need for a page refresh. Angular offers faster UI responses, incredible interactivity, and reusable components at the cost of increased network traffic to load the browser.

<<< Why did the backend use a NoSQL MongoDB database? >>>
The back end uses a NoSQL MongoDB database instead due to its schema flexibility to evolve the model without the need for migrations. MongoDB is advantageous due to its scalability and performance rates.

<<< How is JSON different from JavaScript, and how does JSON tie together the frontend and backend development pieces? >>>
JSON is a text-based data format that can be used across different languages, while JavaScript objects are more complex, being actual data structures in memory running the JavaScript language. JavaScript may include methods and functions that update with JSON, which is simple text information.

The back-end REST endpoints take JSON data, while the front-facing use JSON and bind it to UI components.

<<< Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components. >>>
My process required extensive refactoring, including revising existing HTML pages to integrate Handlebar functionality and Angular views. Most was unremarkable drudgery, but nonetheless a necessary task for a full-stack developer. The perk is less duplication, easier maintenance, and overall more consistency in the behavior or UI, also accelerating the development of future views.

<<< Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application. >>>
Taking a step-by-step approach, let’s explain what each one is. HTTP verbs are either GET to request data for the user, POST to create new resources, PUT to update an existing resource, and DELETE to remove resources. Each verb acts upon the API differently. Endpoints are URLs that expose backends to perform the previously mentioned methods. This can include /api/trips, api/auth/login, and /api/admin/trips.  Each Endpoint contains an authentication of the user using a token-based security. The backend confirms the token’s validity and allows the user to perform the method requests. 

<<< How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field? >>>

Although my goals do not align with the career pathway of a full-stack developer, it demonstrates some integral capabilities of the inner workings of front-end, back-end, databases, APIs, and security that nearly all applications use in some variety. Transferable skills like UI/UX awareness, API functionality, and best practices in security were required to construct these points. I had the privilege of developing a front-end framework with Angular components like modules, services, routing, and state management. I got to use TypeScript as well as JavaScript, which are both languages I had no previous experience with. JavaScript is an incredibly important tool that is garnering more popularity due to its extensive capabilities. Other notable skills are how full-stack operates, server-side Express-based RESTful APIs to handle routes, controllers, and middleware. Once again, coding developers the ability to read documentation, using tools like Visual Studio Code, the terminal, and GitHub to its fullest extent.

