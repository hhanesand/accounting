/**
 * Created by hakonhanesand on 2/18/17.
 */

function onOpen () {
  var response = UrlFetchApp.fetch('https://morning-dusk-92308.herokuapp.com/hours')

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  var earnings = spreadsheet.getSheetByName('Earnings')

  var monthOffset = earnings.getRangeByName('monthOffsetHoursWorked').getValue()
  var startHoursWorkedRange = earnings.getRangeByName('startHoursWorked')

  startHoursWorkedRange.offset(monthOffset, 0).setValue(response.minutes)
}
