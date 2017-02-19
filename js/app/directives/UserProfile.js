function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			pos: 'h6',
			desc: 'p'
		},
		template: [
			`<div>
				<h3>User Profile</h3>
				Name: <div ng-transclude="name"></div>
				Position: <div ng-transclude="pos"></div>
				Description: <div ng-transclude="desc"></div>
			</div>`
		].join('')
	};
}

angular
	.module('app')
	.directive('userProfile', UserProfile);
