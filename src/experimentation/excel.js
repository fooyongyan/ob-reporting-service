
const ExcelJS = require('exceljs');

const testData = [
    {id: 1, name: 'John Doe', dob: new Date(1970, 1, 1)},
    {id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7)},
    {id: 3, name: 'Jane Doe', dob: new Date(1965, 1, 7)},
    {id: 4, name: 'Jane Doe', dob: new Date(1965, 1, 7)}
]

function test() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Me';
    workbook.lastModifiedBy = 'Her';
    workbook.created = new Date(1985, 8, 30);
    workbook.modified = new Date();
    workbook.lastPrinted = new Date(2016, 9, 27);
    workbook.properties.date1904 = true;
    workbook.calcProperties.fullCalcOnLoad = true;
    
    const sheetName = "sample"
    const worksheet = workbook.addWorksheet(sheetName);

    worksheet.columns = [
        {header: 'Id', key: 'id', width: 30},
        {header: 'Name', key: 'name', width: 30}, 
        {header: 'D.O.B.', key: 'dob', width: 30}
    ];
    
    testData.forEach ( e => worksheet.addRow(e));
    workbook.xlsx.writeFile('sample.xlsx')

}

test();