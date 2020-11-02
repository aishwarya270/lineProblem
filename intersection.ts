import { StraightLine } from './horizontalLine';
import { browser } from 'protractor';
describe("Must be able to draw horizontal and vertical line", () => {

    browser.waitForAngularEnabled(false);

    it(" Draw two lines intersecting each other", async () => {

        // await StraightLine.drawHorizontalLine();
        await StraightLine.drawVerticalLine();
    })
})