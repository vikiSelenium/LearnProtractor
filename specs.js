
describe('Multiple scenarios', function()
{
    var firstNum = element(by.model('first'));
    var secondNum = element(by.model('second'));
    var clickButton = element(by.id('gobutton'));
    var result = element(by.className('ng-binding'));
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo');
    });
   //tc1
    it('We are running multiple scenarios', function(){

        expect(browser.getTitle()).toEqual('Super Calculator');

        });
        //tc2 
        it('should add two variables', function()
        {
            firstNum.sendKeys('1');
            secondNum.sendKeys('2');
            clickButton.click();

            expect(result.getText()).toEqual('3');
       });
        //tc3
        it('should add 4 and 8', function()
        {
            firstNum.sendKeys('4');
            secondNum.sendKeys('8');
            clickButton.click();

            expect(result.getText()).toEqual('12');

        });
    });

