const presets = [
	[
    "@babel/env",
    {
      targets: {
        edge: "17",
        chrome: "64",
        firefox: "60",
        safari: "11.1"
      }
    }
  ]	
]

module.exports = { presets };