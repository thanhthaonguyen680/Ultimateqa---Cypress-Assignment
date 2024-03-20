import {AutomationPage,ListOfLinkText,ListofFooterLinks,Locator, Dropdownlist} from "../pages/automationpage"
describe('Verify Automation page', () => {
  beforeEach("Open the website", () => {
      cy.visit("/")
    })
      it('TC_01_Automation page should display correct titles and texts', () => {
    
      cy.get(AutomationPage.title).should('contain','Automation Practice');
      cy.get(AutomationPage.subtitle).should('contain','Use your skills to learn how to automate different scenarios');
      cy.get(AutomationPage.menubarItem1).should('contain','Java SDET Academy');
      cy.get(AutomationPage.menubarItem2).should('contain','Learning');
      cy.get(AutomationPage.menubarItem3).should('contain','Success Stories');
      cy.get(AutomationPage.menubarItem4).should('contain','Blog');
      cy.get(AutomationPage.menubarItem5).should('contain','About');
      cy.contains(AutomationPage.link_text1).should('be.visible');
      cy.contains(AutomationPage.link_text2).should('be.visible');
      cy.contains(AutomationPage.link_text3).should('be.visible');
      cy.contains(AutomationPage.link_text4).should('be.visible');
      cy.contains(AutomationPage.link_text5).should('be.visible');
      cy.contains(AutomationPage.link_text6).should('be.visible');
      cy.contains(AutomationPage.link_text7).should('be.visible');
      cy.get(AutomationPage.menu_footer1).should('contain','Java SDET Academy');
      cy.get(AutomationPage.menu_footer2).should('contain','Success Stories');
      cy.get(AutomationPage.menu_footer3).should('contain','Blog');
      cy.get(AutomationPage.menu_footer4).should('contain','About');
      cy.get(AutomationPage.menu_footer5).should('contain','Contact Us');
      cy.get(AutomationPage.footer_secondary1).should('contain','Free Courses');
      cy.get(AutomationPage.footer_secondary2).should('contain','Selenium Java');
      cy.get(AutomationPage.footer_secondary3).should('contain','Selenium C#');
      cy.get(AutomationPage.footer_secondary4).should('contain','Selenium Resources');
      cy.get(AutomationPage.footer_secondary5).should('contain','Automation Exercises');
    });

    it('TC_02_Verify display the links text of the section ', () => {
      for(let i = 0; i<ListOfLinkText.length;i++){
        const listLinkText = ListOfLinkText[i];
        cy.get(Locator.listlinksection,{timeout:10000}).should('be.visible').then(()=>{
          cy.get(Locator.listlinksection).eq(i).find('a').click();
          cy.url().should('include',listLinkText.url);
        })
        cy.go('back');
      }
    });  

    it('TC_03_Verify the links of the Footer',()=>{
      for(let i = 0; i<ListofFooterLinks.length;i++){
        const listFooterLink = ListofFooterLinks[i];
        cy.get(Locator.listlinkfooter,{timeout:10000}).should('be.visible').then(()=>{
          cy.get(Locator.listlinkfooter).eq(i).find('a').click();
          cy.url().should('include',listFooterLink.url)
        })
     
        cy.go('back');
      }
  });

  it('TC_04_Verify the dropdown list in the Learning of menu bar', () => {
    cy.get(Locator.dropdownlistlocator).realHover();
    for(let i = 0; i<Dropdownlist.length;i++){
      const dropdownlist = Dropdownlist[i];
      cy.get(Locator.dropdownlistItem,{timeout:10000}).should('be.visible').then(()=>{
        cy.get(Locator.dropdownlistItem).eq(i).find('a').click();
        cy.url().should('include',dropdownlist.url)
      })
      cy.go('back');
    }
  })
})

