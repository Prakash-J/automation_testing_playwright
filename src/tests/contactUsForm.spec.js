import path from 'path';
import { test, expect } from '../fixtures/contactUsFormFixture.ts';
import { contactUsFormData } from '../data/devData.ts';

test.describe('Contact Us Form', () => {
  test.describe.configure({ mode: 'parallel' });
  const filePaths = [
    'src/data/sampleFiles/1721876592322.png',
    'src/data/sampleFiles/Prakash Jayagopal  CV - Base Resume Testing.docx',
    'src/data/sampleFiles/Prakash Jayagopal  CV - Base Resume Testing.pdf',
    'src/data/sampleFiles/text-on-image.jpg',
  ];

  filePaths.forEach((filePath) => {
    const name = path.basename(filePath);
    test(`Fill Contact Us: upload "${name}" and submit`, async ({ contactUsForm, homePage }) => {
      await homePage.goToHomePage();
      await homePage.selectNavigationLink(' Contact us');
      await expect(contactUsForm.pageHeading).toBeVisible();
      await contactUsForm.startFillForm(contactUsFormData, filePath);
      await contactUsForm.clickFormSubmitButton();
    });
  });
});
