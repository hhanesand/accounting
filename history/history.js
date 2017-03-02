/**
 * Created by hakonhanesand on 2/19/17.
 */

'use strict'

const git = require('simple-git')
const fs = require('fs')
const moment = require('moment')
const Promise = require('promise')

/* eslint-disable no-extend-native */
String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1)
}
/* eslint-enable no-extend-native */

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

function getChangesFromPath (path) {
  return new Promise(function (resolve, reject) {
    const currentMonth = moment().subtract(1, 'month').startOf('month').toISOString()

    git(path).raw([
      'log',
      '--branches=*',
      '--since=' + currentMonth,
      '--date=short',
      '--author=Hakon Hanesand',
      '--pretty=format:"%h %ad \t%s"'
    ], function (error, result) {
      if (error) {
        console.error(error)
        reject(error)
        return
      }

      const repoName = path.substring(path.lastIndexOf('/') + 1, path.length)

      if (result == null) {
        resolve('\n### No changes for ' + repoName + '\n')
        return
      }

      const changes = result.split('\n').map(function (line) {
        return ' - ' + line.slice(1, -1) + '\n'
      }).join('')

      resolve('\n### Changes for ' + repoName + '\n' + changes)
    })
  })
}

Promise.all(getAllProjectPaths().map(function (path) {
  return getChangesFromPath(path)
})).then(function (changes) {
  const file = changes.join('').slice(1)

  fs.unlinkSync('./changelog.md')
  fs.appendFileSync('./changelog.md', file)
}, function (error) {
  console.log(error)
})
