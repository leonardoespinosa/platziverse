'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  // Define models relationship with sequelize
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)

  // Verify DB connection
  await sequelize.authenticate()

  if (config.setup) {
    // Create tables in DB if then not exists
    await sequelize.sync({ force: true })
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
