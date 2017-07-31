module.exports = {
	hyperloop: {
		ios: {
			xcodebuild: {
				flags: {
					FRAMEWORK_SEARCH_PATHS: '../../src'
				},
				frameworks: [
					'Applozic'
				]
			},
			thirdparty: {
				'Applozic': {
					source: ['src'],
					header: 'src',
					resource: 'src'
				}
			}
		}
	}
};
 