'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequalize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // Define models relationship with sequalize
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  // Verify DB connection
  await sequalize.authenticate()

  // Create tables in DB if then not exists
  sequalize.sync()

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
