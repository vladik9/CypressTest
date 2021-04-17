describe("Connect to site", () => {
  it("Assist test site: 'moovie'", () => {
    cy.visit("http://20.52.181.242:3000/");

    // //check home page click on home page
    // //Case 1.a***********************
    // cy.get("#nav > ul > li:nth-child(1) > a").click();
    // //Case 1.b***********************
    // // check the add to watch list functionality
    // cy.get(
    //   "#top > div > div > div > div.row.justify-content-center.align-items-center.hero-row > div:nth-child(1) > div > div.mt-5 > button.heroAddButton.ml-3"
    // ).click();
    // //Case 1.c***********************
    // //check remove from watch list functionality
    // cy.get("#nav > ul > li:nth-child(4) > a").click();
    // cy.get(
    //   "#root > div > div > div.container > div > div > div.col-md-12 > div > div > div > div > button.addToList"
    // ).click();

    //special case for multiple movies in watch list
    //***********************
    // //add movies
    // cy.get("#nav > ul > li:nth-child(2) > a").click();
    // cy.get(
    //   "#root > div > div > div.container > div > div > div.col-md-12 > div > div:nth-child(1) > div > div > button.addToList"
    // ).click();
    // cy.get(
    //   "#root > div > div > div.container > div > div > div.col-md-12 > div > div:nth-child(7) > div > div > button.addToList"
    // ).click();
    // cy.get(
    //   "#root > div > div > div.container > div > div > div.col-md-12 > div > div:nth-child(5) > div > div > button.addToList"
    // ).click();

    // cy.get("#nav > ul > li:nth-child(4) > a").click();
    // //delete movies
    // cy.get(
    //   "#root > div > div > div.container > div > div > div.col-md-12 > div > div:nth-child(1) > div > div > button.addToList"
    // ).click();
    // cy.get(
    //   "#root > div > div > div.container > div > div > div.col-md-12 > div > div:nth-child(1) > div > div > button.addToList"
    // ).click();
    // cy.get(
    //   "#root > div > div > div.container > div > div > div.col-md-12 > div > div > div > div > button.addToList"
    // ).click();
    // //test past 3 movies add to list and remove from watch list just 2

    // //Case 1.d***********************
    // //Verify “Coming Next Filter”
    // cy.get(
    //   "#root > div > div > section:nth-child(4) > div > div > div > div:nth-child(1) > div.row.comingRow > div.col-md-7.mt-3 > div > select"
    // ).select("Drama");

    // //Case 1.e***********************
    // // Check WatchList page
    // cy.get("#nav > ul > li:nth-child(4) > a").click();

    //Case 1.f.1***********************
    // Check All movies page
    // cy.get("#nav > ul > li:nth-child(2) > a").click();

    // //search an movie clear, search another one
    // cy.get("#watchSearch > div > input")
    //   .type("Zack Snyder's Justice League")
    //   .wait(2000); //wait 2 seconds
    // cy.get("#watchSearch > div > input").clear();
    // cy.get("#watchSearch > div > input").type("The Intouchables").wait(2000); //wait 2 seconds
    // cy.get("#watchSearch > div > input").clear();

    // //Case 1.f.2***********************
    // // Check All movies page
    // cy.get(
    //   "#root > div > div > div.container > div > div > div.row.searchRow > div.col-md-6.mt-3 > div > select"
    // )
    //   .select("Comedy")
    //   .wait(2000) //wait 2 seconds
    //   .select("Fantasy")
    //   .wait(2000)
    //   .select("None"); //wait 2 seconds

    // //Case 1.g***********************
    // // Check Login page
    // cy.get("#footerRow > div:nth-child(3) > ul > li:nth-child(3) > a").click();
    // cy.get("#email").type("admin@yahoo.com");
    // cy.get("#password").type("Admin123.");
    // cy.get("#form > button").click();

    // // Case 2***********************
    // // Check Add movie Functionality
    // cy.get("#footerRow > div:nth-child(3) > ul > li:nth-child(3) > a").click();
    // cy.get("#email").type("admin@yahoo.com");
    // cy.get("#password").type("Admin123.");
    // cy.get("#form > button").click();
    // cy.get(
    //   "#root > div > div > div > div.row > div:nth-child(2) > button"
    // ).click();

    // //2.1 whit correct data
    // cy.get("#footerRow > div:nth-child(3) > ul > li:nth-child(3) > a").click();
    // cy.get("#email").type("admin@yahoo.com");
    // cy.get("#password").type("Admin123.");
    // cy.get("#form > button").click();
    // cy.get(
    //   "#root > div > div > div > div.row > div:nth-child(2) > button"
    // ).click();
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div.row.inputRow.justify-content-center.align-items-center > div:nth-child(1)"
    // ).type("Wonder Woman 2");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div.row.inputRow.justify-content-center.align-items-center > div:nth-child(2)"
    // ).type("https://www.youtube.com/watch?v=XW2E2Fnh52w");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(2) > div > div"
    // ).type("https://www.imdb.com/title/tt7126948/");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(3) > div > div"
    // ).type(
    //   "https://nowslife.com/wp-content/uploads/2021/01/Wonder_Woman_1984.png"
    // );
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(4) > div > div"
    // ).type(
    //   "Diana must contend with a work colleague and businessman, whose desire for extreme wealth sends the world down a path of destruction, after an ancient artifact that grants wishes goes missing."
    // );

    // cy.get(
    //   ".addContent > .container > :nth-child(1) > form > :nth-child(5) > .col-md-4 > .form-group > #category"
    // ).select("Fantasy");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(5) > div:nth-child(2) > div"
    // ).type("2 h 31 min ");

    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(5) > div:nth-child(3) > div"
    // ).type("5.4");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(5) > div.col-md-2 > div"
    // ).type("005");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(6) > div:nth-child(1) > div"
    // ).type("Patty Jenkins");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(6) > div:nth-child(2) > div"
    // ).type("2020/12/25");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(7) > div > div"
    // ).type(" Patty Jenkins, Geoff Johns");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(8) > div > div"
    // ).type(" Gal Gadot, Chris Pine, Kristen Wiig");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div.row.titleRow.justify-content-center.align-items-center.mt-4 > input"
    // ).click();

    // //2.2 whit incorrect data
    // cy.get("#footerRow > div:nth-child(3) > ul > li:nth-child(3) > a").click();
    // cy.get("#email").type("admin@yahoo.com");
    // cy.get("#password").type("Admin123.");
    // cy.get("#form > button").click();

    // cy.get(
    //   "#root > div > div > div > div.row > div:nth-child(2) > button"
    // ).click();
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div.row.inputRow.justify-content-center.align-items-center > div:nth-child(1)"
    // ).type("Error movie");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div.row.inputRow.justify-content-center.align-items-center > div:nth-child(2)"
    // ).type("https://www.youtube.com/watch?v=ERT_7u5L0dc");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(2) > div > div"
    // ).type("https://www.imdb.com/");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(3) > div > div"
    // ).type(
    //   "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/04/army-of-the-dead.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
    // );
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(4) > div > div"
    // ).type(
    //   "And while Army of the Dead doesn’t have superheroes, it does have the super-muscular Dave Bautista in the lead. Returning to his roots as the director of the Dawn of the Dead remake, Snyder brings back the “fast zombies” he originally popularized."
    // );

    // cy.get(
    //   ".addContent > .container > :nth-child(1) > form > :nth-child(5) > .col-md-4 > .form-group > #category"
    // ).select("Horror");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(5) > div:nth-child(2) > div"
    // ).type("2h 40min ");

    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(5) > div:nth-child(3) > div"
    // ).type("10");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(5) > div.col-md-2 > div"
    // ).type("12");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(6) > div:nth-child(1) > div"
    // ).type("Todd Arnold");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(6) > div:nth-child(2) > div"
    // ).type("1000/10/05");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(7) > div > div"
    // ).type("Jon Lucas, Scott Moore");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div:nth-child(8) > div > div"
    // ).type("Zach Galifianakis, Bradley Cooper, Justin Bartha");
    // cy.get(
    //   "body > div.fade.modal.show > div > div > div.addContent.modal-body > div > div > form > div.row.titleRow.justify-content-center.align-items-center.mt-4 > input"
    // ).click();

    // // 2.3 Verify if the movie was added correctly
    // cy.get("#footerRow > div:nth-child(3) > ul > li:nth-child(3) > a").click();
    // cy.get("#email").type("admin@yahoo.com");
    // cy.get("#password").type("Admin123.");
    // cy.get("#form > button").click();
    // cy.get(
    //   "#navbarSupportedContent-555 > ul > li.nav-item.menuBar.mr-5 > a > span"
    // ).click();
    // cy.get("#nav > ul > li:nth-child(2) > a").click();
    // cy.get("#watchSearch > div > input").type("Wonder Woman 2"); //search added movie
    // cy.get("#moovieTitle").click().wait(5000); //delay to see results
    // cy.get("#nav > ul > li:nth-child(1) > a").click(); //go back to home

    // // 2.4 Check if you can edit movie
    // cy.get("#footerRow > div:nth-child(3) > ul > li:nth-child(3) > a").click();
    // cy.get("#email").type("admin@yahoo.com");
    // cy.get("#password").type("Admin123.");
    // cy.get("#form > button").click();
    // cy.get("#customSearchInput > div > input").type("Wonder Woman 2");
    // cy.get(
    //   "#root > div > div > div > div.all-moovies > div > div > div.col-md-.mAction > div:nth-child(2) > button > svg"
    // ).click();
    // cy.get(
    //   "#updateMovie > div > div > div.container.updateMovieContainer > div > form > div.row.updateTitleRow.justify-content-center.align-items-center > input"
    // )
    //   .wait(5000)
    //   .click();

    // //2.5 Verify if you can remove a project
    // cy.get("#footerRow > div:nth-child(3) > ul > li:nth-child(3) > a").click();
    // cy.get("#email").type("admin@yahoo.com");
    // cy.get("#password").type("Admin123.");
    // cy.get("#form > button").click();
    // cy.get("#customSearchInput > div > input").type("Wonder Woman 2");
    // cy.get(
    //   "#root > div > div > div > div.all-moovies > div > div > div.col-md-.mAction > div:nth-child(1) > button"
    // ).click();
    // cy.get(
    //   "#deleteMoovie > div > div > div.modal-footer > button.deleteMovieModal"
    // ).click();
    // cy.get("#root > div > div > nav > div > a > svg").click();

    
    //end of program
  });
});
