/**
 * Created by hakonhanesand on 2/19/17.
 */

'use strict'

const git = require('simple-git')
const fs = require('fs')
const moment = require('moment')

var developmentDirectory = process.env.HOME + '/Documents/Developer'

function isGitDir (path) {
  try {
    fs.statSync(path + '/.git')
    return true
  } catch (e) {
    return false
  }
}

function getAllProjectPaths () {
  var results = []

  var walk = function (dir) {
    var list = fs.readdirSync(dir)
    list.forEach(function (file) {
      if (['Packages', 'Carthage'].includes(file)) {
        return
      }

      file = dir + '/' + file
      var stat = fs.statSync(file)

      if (stat && stat.isDirectory()) {
        walk(file)

        if (isGitDir(file)) {
          results = results.concat(file)
        }
      }
    })
  }

  walk(developmentDirectory)
  return results
}

getAllProjectPaths().forEach(function (path) {
  var currentMonth = moment().startOf('month').toISOString()

  git(path).raw([
    'log',
    '--branches=*',
    '--since=' + currentMonth,
    '--date=local',
    '--pretty=format:"%h%x09%an%x09%ad%x09%s"'
  ], function (error, result) {
    if (result == null) {
      console.log('no changes for ' + path)
      return
    }

    if (error) {
      console.error(error)
    }

    console.log(result)

    var string = '\n# Changes for ' + path + '\n' + result

    fs.appendFile('./changelog.md', string, function (err) {
      if (err) {
        return console.log(err)
      }
    })
  })
})
