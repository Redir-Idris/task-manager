/* 

// Steg1: skapa datamodeller  || Done
+ project.model.ts
+ task.model.ts

- Definiera ett TypeScript interface som representerar 
strukturen för ett projekt och en uppgift.



// Steg 2: Skapa tjänster för datakommunikation || Done
+ project.service.ts
+ task.service.ts

- Skapa en Angular @Injectable() service.
- Injicera HttpClient.

- Skapa metoder för att hämta, skapa, uppdatera och ta bort data via HTTP.



// Steg 3: Lägg till Routing || Done
+ app-routing.module.ts

-Lägg till rutter för:
Dashboard
Projects
Tasks

- Använd loadChildren för att ladda respektive modul via lazy loading.
- Se till att RouterModule.forRoot(routes) används och att AppRoutingModule importeras i AppModule.

// Steg 6: Skapa funktionsmoduler och komponenter

1) För varje mapp i features/ (dashboard, projects, tasks):
- Skapa en Angular-modul: ng generate module features/<modulnamn> --routing
- Skapa minst en page-komponent med ng generate component.

2) Se till att varje modul:
- Har sina routes i <modulnamn>-routing.module.ts
- Importeras med lazy loading via app-routing.module.ts


*/