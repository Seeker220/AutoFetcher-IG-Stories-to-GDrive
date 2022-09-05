/**
 * Creates a custom menu in Google Sheets when the spreadsheet opens.
 */
export function onOpen() {
  try {
    SpreadsheetApp.getUi().createMenu('IGSF')
        .addItem('Fetch stories', 'run')
        .addItem('Move seleted files', 'moveSelected')
        .addItem('Delete seleted logs', 'deleteSelected')
        .addToUi();
  } catch (e) {
    // TODO (Developer) - Handle exception
    Logger.log('Failed with error: %s', e.error);
  }
}
