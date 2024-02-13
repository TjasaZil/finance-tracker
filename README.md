# FinanceTracker

Finance tracker is a simple financial app that lets the user log into the dashboard and track different expenses/income, setting budgets, visualising expenses/income via graphs and more.

## Technologies used

1. [**Angular**](https://angular.io/)
2. [**DevExtreme**](https://js.devexpress.com/Angular/)
3. [**TailwindCSS**](https://tailwindcss.com/docs/guides/angular)
4. [**AngularFire**](https://firebaseopensource.com/projects/angular/angularfire2/)

## Theme

This design approach is carefully developed to harmonize visual appeal with practical utility, offering a visually attractive and intuitive interface for web applications. It features a refined color scheme at its heart, emphasizing clearness and user-friendliness to guarantee a captivating user interaction.

### Colors

![theme colors](<Screenshot from 2024-02-05 21-30-10.png>)

- **Primary:** #252525 (Charcoal)
- **Secondary:** #FABF14 (Vivid Yellow)
- **Background:** #FFFFFF (White)
- **Accent 1:** #C4C4C4 (Medium Grey)
- **Accent 2:** #FAFAFA (Off White)
- **Error:** #8B0000 (Red)
- **Success:** #006400 (Green)

### Typography

- **[Lato](https://fonts.google.com/specimen/Lato)**
- **[Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans)**

## Project Structure

- **src/app:** Main application code,
- **src/app/components:** Angular components.
- **src/assets:** Static assets like images, icons, etc.,
- **src/app/services:** services like crud and auth,
- **src/app/models:** Angular models/classes,

## Functionalities

### Authentication

Used Firebas authentication to handle registration and login using email/password or login using Google. Created Auth services  for sign up,, login and log in with Google. Added Auth guards to all the routes except Log in and Sign up.

### Expence tracking
### Categorizing expenses
### Visualizing expenses and income
### Setting budgets
