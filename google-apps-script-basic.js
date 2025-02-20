function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const data = e.parameter;
  const timestamp = new Date();
  
  // Log incoming data for debugging
  Logger.log('Received form data:');
  Logger.log(JSON.stringify(data));
  
  try {
    const sheets = spreadsheet.getSheets();
    
    if (data.formType === 'contact') {
      Logger.log('Processing contact form submission');
      // Find contact sheet by ID
      const contactSheet = sheets.find(sheet => sheet.getSheetId() === 2080504786);
      if (!contactSheet) {
        throw new Error('Contact sheet not found');
      }
      
      // Save to contact sheet
      Logger.log('Saving contact form data');
      contactSheet.appendRow([
        timestamp,
        data.name,
        data.email,
        data.subject,
        data.message
      ]);
      Logger.log('Contact form data saved successfully');
    } else if (data.formType === 'newsletter') {
      Logger.log('Processing newsletter signup');
      // Find newsletter sheet by ID
      const newsletterSheet = sheets.find(sheet => sheet.getSheetId() === 0);
      if (!newsletterSheet) {
        throw new Error('Newsletter sheet not found');
      }
      
      // Save to Newsletter sheet
      Logger.log('Saving newsletter data');
      newsletterSheet.appendRow([
        timestamp,
        data.email
      ]);
      Logger.log('Newsletter data saved successfully');
    } else {
      throw new Error('Invalid form type: ' + data.formType);
    }
    
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: 'success',
        message: 'Data saved successfully'
      })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Error occurred: ' + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: 'error', 
        message: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Service is running');
}