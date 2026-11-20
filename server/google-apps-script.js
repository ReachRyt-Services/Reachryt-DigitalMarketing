/**
 * Reachryt Consultation Form — Official Google Apps Script Connector
 *
 * Target Spreadsheet:
 * https://docs.google.com/spreadsheets/d/1j7J_furrab7YnEoMOJlSlRkTITZ7x0ewG0vQu87vDR4/edit
 *
 * Verified Columns (Sheet1!A1:G1):
 * A: "Full Name"
 * B: "Institution or Agency Name "
 * C: "Work Email Address"
 * D: "Phone / WhatsApp Number"
 * E: "Organisation Type"
 * F: "Primary Service Interest"
 * G: "Tell Us"
 *
 * HOW TO DEPLOY (Takes ~45 seconds, no Google Cloud Service Account JSON required):
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1j7J_furrab7YnEoMOJlSlRkTITZ7x0ewG0vQu87vDR4/edit
 * 2. Click Extensions -> Apps Script
 * 3. Paste this entire file into Code.gs and click Save
 * 4. Click Deploy -> New deployment -> Select type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 5. Copy the resulting Web App URL (ends with /exec) and set it in server/.env:
 *    GOOGLE_APPS_SCRIPT_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById('1j7J_furrab7YnEoMOJlSlRkTITZ7x0ewG0vQu87vDR4');
    var sheetName = payload.sheetName || 'Sheet1';
    var sheet = ss.getSheetByName(sheetName) || ss.getSheets()[0];

    var rowData = payload.row || {};
    var values = payload.values || [
      rowData['Full Name'] || '',
      rowData['Institution or Agency Name '] || '',
      rowData['Work Email Address'] || '',
      rowData['Phone / WhatsApp Number'] || '',
      rowData['Organisation Type'] || '',
      rowData['Primary Service Interest'] || '',
      rowData['Tell Us'] || ''
    ];

    sheet.appendRow(values);

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: 'Row appended to ' + sheet.getName()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: err.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
