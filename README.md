# Zig Zag String

## About the project
>This system was developed using Angular 19, leveraging modern features such as Standalone Components and Lazy Loading to optimize user experience. It is fully responsive, adapting to various screen sizes to ensure a seamless interaction on both mobile devices and desktops. The main functionality allows the user to input a string and an integer x, and the system processes this string by breaking it into lines of length x and reconstructing it according to a pattern called "Back and Forth".

> The "Back and Forth" pattern works by dividing the original string into lines of length x. If the division isn't exact, the remaining characters, called "leftovers," are alternated between the beginning and end of the resulting string. Additionally, all even-numbered lines have their contents reversed before being used in the final string reconstruction. This process creates a reorganized string, alternating between reversed and non-reversed lines.

> This approach enables the system to dynamically and efficiently rearrange the words, applying an interesting logic for string manipulation. The use of the "Back and Forth" pattern ensures that the string is always reorganized and interwoven according to the specified rules, regardless of the original string's size or the value of x.

## Main technologies used in the project
>* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0.
>* This project has implemented [Standalone Components](https://v17.angular.io/guide/standalone-components)
>* This project has implemented [Bootstrap](https://getbootstrap.com) version 5.3.0

## About bootstrap
>For standardization, best practices and responsiveness, when developing new pages, think about the structure of rows and columns following the grid pattern.

**Example:**

| Grid pattern class | Description                                                                    |
|:-------------------|:-------------------------------------------------------------------------------|
| `.container`       | Container with spacing on the sides (width: 1200px).                           |
| `.container-fluid` | Container without spacing on the sides(width: 100%).                           |
| `.row`             | Single div, must be used as a parent div that will have 1 to 12 col child divs |
| `.col`             | Single div, must be used as a parent div that will have 1 to 12 child divs     | 

>***The pattern shown above in the table shows the structure of the project's html pages, new pages must follow the pattern.***

**Page grid example**

~~~html
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <h1>Page title</h1>
    </div>
  </div>
  
  <div class="row">
    <div class="col">
      <p>First container</p>
    </div>
    <div class="col">
      <p>Second container</p>
    </div>
  </div>
</div>
~~~

## Bootstrap componentes
>You can view the available components for using bootstrap and ng-bootstrap by clicking on the links below:
>* [bootstrap components](https://getbootstrap.com/docs/5.3/components)

## How to clone and setup up the project
> - [x] Clone the project, use de code: `git clone <project-url>` to clone the project.
> - [x] Install npm packages, use de code: `npm i` to install the packages.
> - [x] Run the project, use de code: `npm start` to run the project.

## Development server
> Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Preview app
![image](https://github.com/Jhoncosta08/zig-zag/blob/master/src/assets/previews/preview-one.png)
![image](https://github.com/Jhoncosta08/zig-zag/blob/master/src/assets/previews/preview-two.png)
![image](https://github.com/Jhoncosta08/zig-zag/blob/master/src/assets/previews/preview-three.png)
