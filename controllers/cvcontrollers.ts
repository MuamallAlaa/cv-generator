import { NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import CatchAysnc from "../utilities/catchaysnc";
const { chromium } = require("playwright");

// const publicFolderPath = path.join(__dirname, "../public");
// const filePath = path.join(publicFolderPath, "her.html");

const GenerateCv = CatchAysnc(
  async (req: Request, res: Response, next: NextFunction) => {
    interface CvData {
      name: string;
      email: string;
      phone: string;
      address: string;
      about: string;
      education: string;
      experience: string;
    }
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    // await page.goto("http://localhost:3000/");
    // const pageTitle = await page.title("new");

    // await browser.close();
    const browser = await chromium.launch();
    const page = await browser.newPage();
    console.log(path.join(path.dirname(__dirname), "/public/cv.html"));
    await page.goto(path.join(path.dirname(__dirname), "/public/cv.html"));

    await page.evaluate((data: CvData) => {
      const Name = document.querySelector(".name") as HTMLElement;
      const Email = document.querySelector("#email") as HTMLElement;
      const phone = document.querySelector("#phone") as HTMLElement;
      const address = document.querySelector("#address") as HTMLElement;
      const aboutme = document.querySelector("#aboutme-p") as HTMLElement;
      const experience = document.querySelector("#experience") as HTMLElement;
      const education = document.querySelector("#education-s") as HTMLElement;
      Name.textContent = data.name;
      Email.textContent = data.email;
      phone.textContent = data.phone;
      address.textContent = data.address;
      aboutme.textContent = data.about;
      experience.textContent = data.experience;
      education.textContent = data.education;
    }, req.body);

    // await page.screenshot({ path: "screenshot.png" });
    const htmlContent = await page.content();
    const pdfBuffer = await page.pdf({
      format: "A4",
    });
    fs.writeFile(
      `./public/pdffiles/${req.body.name}-${uuidv4()}.pdf`,
      pdfBuffer,
      (err) => {
        if (err) {
          console.error("Error saving PDF:", err);
        } else {
          console.log("PDF saved successfully.");
        }
      }
    );

    await browser.close();
    res.status(200).send(htmlContent);
  }
);
export { GenerateCv };
