const ExcelJs = require('exceljs');

module.exports = {

    createWorkbook ( ) {
        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'Me';
        workbook.lastModifiedBy = 'Her';
        workbook.created = new Date(1985, 8, 30);
        workbook.modified = new Date();
        workbook.lastPrinted = new Date(2016, 9, 27);
        workbook.properties.date1904 = true;
        workbook.calcProperties.fullCalcOnLoad = true;
    },

    addWorksheet ( workbook, sheetName ) {
        const sheet = workbook.addWorksheet(sheetName);
        worksheet.state = 'visible';
        return sheet; 
    },
    
    getWorksheet ( workbook, sheetName ) {
        const sheet = workbook.getWorksheet(sheetName);
        return sheet; 
    }

}