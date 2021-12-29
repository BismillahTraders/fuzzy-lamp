#!/usr/bin/env node
// This module accepts a search record object as input and
// returns a ranking score which influences how results are sorted.

// higher in this list == higher search ranking
// anything NOT matched by this list gets the highest ranking
// a lower ranking means the record will have a higher priority
const rankings = ['/rest', '/graphql', '/site-policy'].reverse()

export default function rank(record) {
  for (const index in rankings) {
    const pattern = rankings[index]
    if (record.objectID.includes(pattern)) return Number(index)
  }

  // Set the default ranking to the highest possible
  return rankings.length
}
