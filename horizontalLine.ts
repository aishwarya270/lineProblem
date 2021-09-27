import { browser, element, by } from "protractor";
import { click, sendKeys, waitToBePresent } from '@hetznercloud/protractor-test-helper';

browser.waitForAngularEnabled(false);
browser.get("http://www.htmlcanvasstudio.com/");

browser.sleep(2000);

export class StraightLine {
    private static canvasTextArea = element(by.id("imageTemp"))
    private static lineBox = element(by.className("button line"));

    public static async drawVerticalLine() {
        (await click(this.lineBox)
            .then(() => click(this.canvasTextArea))
            .then(() => browser.actions().
                mouseMove(this.canvasTextArea, {
                    x: 288,
                    y: 87,
                }))
            .then(() => browser.actions().
                mouseMove(this.canvasTextArea, {
                    x: 291,
                    y: 299,
                })))
            // .then(()=> click)
            .click()
            .perform();

        browser.sleep(5000);


        // browser.actions().
        //     mouseDown().mouseMove(this.canvasTextArea, {
        //         x: 500,
        //         y: 200
        //     })
        //     .perform();
        // browser.sleep(5000);

    }


    // public static async drawHorizontalLine() {
    //     click(this.canvasTextArea)

    //     browser.actions().
    //         mouseMove(this.canvasTextArea, {
    //             x: 100,
    //             y: 120
    //         }).mouseDown().mouseMove(this.canvasTextArea, {
    //             x: 200,
    //             y: 120
    //         })
    //         .perform();
    // }
}
