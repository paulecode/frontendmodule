# Project Documentation

This project servers for the assessment of SE20, and is deployed on https://paulecode.github.io/frontendmodule/.

## Local Setup

First, clone this repository

`https://github.com/paulecode/frontendmodule.git`

Navigate into the directory

`cd frontendmodule`

Before you start the development server, you need to edit the file package.json, and remove

`"homepage": "https://paulecode.github.io/frontendmodule",`

in line 2.

Save the file, go back to your terminal and now you can start the development server with

`npm start`

## Software Description

This software is yet to be completed, but is basically for pianists who want to practice certain pieces and keep track of practice time,
as well as other meta data which has yet to be implented.

### How to use this software

As this software does not have a working backend yet, the login screen does not really work. Just fill out a random username, and hit enter or login.
The username will appear on the sidebar in the next screen.

You can now add pieces by pressing the "Add Piece" button. A dialog will appear, where you can enter information like

Composer:     Chopin  
Title:        Nocturne  
Title Extra:  Opus 9 No. 2  

The composer textfield possesses an Autocomplete function, after typing the first letter you should get suggestions for matching composers.
Hit enter or press add to close the dialog.
It will then create a card with this meta data, and a placeholder image.

### Module requirements

In the following list I will go over the module requirements as specified on the learning platform, and whether or how I dealt with them

#### Use either a modern JavaScript framework or use modern patterns for dynamic DOM updates, state management and working with components

This project is built on React.js, utilizes state management in functional components, best seen in the cards.

#### Have frontend tests

I wrote two frontend tests, one for the cards to see whether they crashed upon rendering and one for the login screen.

The loginscreen test throws errors because `useNavigate` is supposed to be in Routing components only, which is happening outside of the scope of this file,
so i took the liberty of ignoring the test result. I sadly don't know how to deal with this in a professional manner

#### Work with APIs to send and retrieve data dynamically

I used the open opus API found at 

https://openopus.org/

to implement the autocomplete functionality.

This works by making a fetch request after entering the first letter to get a list of all components starting with that letter.
This list is then mapped into a `<datalist />` component.

#### Use authentication & authorization

Due to the lack of a working backend I simulated authentication by simply setting the username in the localstorage, and then calling for it to check
whether a user is authorized to access certain routes. I am fully aware that this is best done with a backend, or atleast with a BaaS such as Firebase.
An alternative to this would have been to store the token in jwt.

#### Have proper styling (either with custom CSS or using a framework)

I didn't use a styling framework like Bootstrap but spent a small amount of time creating my own style in pure CSS. The styling followed my figma design.

#### Use git as version control system

I used git as a version control system. Due to the limited scope of the project and me working alone I didn't need to merge anything, and admittedly didn't follow clean coding commit messages such as `feat: Feature` or `fix: Bugfix`.

#### Be deployed and available publicly on the internet

As aforementioned, this project is hosted on github pages.

# Diagrams

Any diagrams will be put into the "Documentation" Folder.
