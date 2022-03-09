describe('My first test', function(){
    it('Dies not do much', function(){
        let start = 2000;
        let amount = 400;

        for(var i = start; i <= start+amount; i++){
            cy.visit(`https://piatkadlanatury.pl/glosowanie/praca/?s_di=${i}&u_di=816&st=3`);
            cy.get('#setVote').focus();
            cy.focused().click({force:true});
            cy.wait(1000);
        }
    })
}
)