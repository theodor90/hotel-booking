This project was created in Visual Studio as an ASP.NET Core app with React and Vite, as described in this tutorial:
https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022.

"Hotel Booking" is a fullstack demo version of a hotel booking website. It supports search functionality, selection of booking dates in the calendar, and payment. Please note that running the application requires both Visual Studio and Visual Studio Code, which can be installed from here:
https://code.visualstudio.com/download
https://visualstudio.microsoft.com/vs/.

After installing Visual Studio Code, install the LiveServer extension.

"Hotel Booking" allows users to create admin accounts to access booking details in the dashboard. The hotel info is provided by a database seeding file, so in order to access the data, the backend code must be run in Visual Studio. The code checks whether or not the data tables are empty, and if so, the database is seeded with data from the file. The SQL Server Object Explorer in Visual Studio shows what has been stored in the data tables. Before running the application, delete all files in the Migration folder and open the Package Manager window. Write "add-migration Initial" and wait for the command to finish. Write "Update-Database" to complete the process. If any of these commands result in error messages, try deleting the data tables for "Users", "Hotels", and "Rooms" before writing the commands again. A succesful execution of the commands will replace the deleted data tables and the files that were removed from the Migrations folder.

Now the application is ready to run. When Swagger starts up, backend data is passed to the frontend solution through the API. 
If running https projects returns error messages, try these commands in the Command Prompt: 
"dotnet dev-certs https --clean",
"dotnet dev-certs https --trust".

Install the new certificates and run the application.

Open the React part of the application in Visual Studio Code, activate the Terminal window, and go to the directory containing the frontend folder. 
Write "npm install" and wait for the installation to finish.
Write "npm install @mui/material @emotion/react @emotion/styled" to install the required library.
Write "npm run dev" and wait for Vite to start up.

Open a new tab in the browser and go to "http://localhost:5173/". The page might have to be reloaded once.
The hotels listed in the data seeding file will appear on the Home page, and users can navigate through the application from there. 







