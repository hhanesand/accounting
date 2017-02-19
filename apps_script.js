/**
 * Created by hakonhanesand on 2/18/17.
 */

function copyFormatting (fromRange, toRange) {
  'use strict'

  fromRange.copyFormatToRange(toRange.getSheet(),
    toRange.getColumn(),
    toRange.getLastColumn(),
    toRange.getRow(),
    toRange.getLastRow())
}

function onOpen () {
  updateTime()
}

function updateTime () {
  var response = UrlFetchApp.fetch('https://morning-dusk-92308.herokuapp.com/hours')
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()

  if (response.getResponseCode() != 200) {
    spreadsheet.toast('Could not fetch hours from timely...')
    Logger.log('Error : Could not fetch hours from timely...')
    return
  }

  var monthOffset = spreadsheet.getRangeByName('monthOffsetHoursWorked').getValue()
  var startHoursWorkedRange = spreadsheet.getRangeByName('startHoursWorked')
  var currentMonthHoursWorked = startHoursWorkedRange.offset(monthOffset, 0)

  var responseJSON = JSON.parse(response.getContentText())
  currentMonthHoursWorked.setValue(responseJSON.minutes * 0.000694444444444)
  copyFormatting(startHoursWorkedRange, currentMonthHoursWorked)
}
