module.exports = {
  "presets": [
    "@babel/react",
    "@babel/typescript",
    [
      "@babel/env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining"
  ]
}