const tilesheet = {
	src: 'tilesheet.png',
	width: 1664,
	height: 1024,
	tileWidth: 128,
	tileHeight: 128,
	boxes: [
		{
			iconX: 1,
			iconY: 0,
			iconFadedX: 1,
			iconFadedY: 1,
			walls: [0,1],
			floors: [0,1]
		},
		{
			iconX: 2,
			iconY: 0,
			iconFadedX: 2,
			iconFadedY: 1,
			walls: [1,2],
			floors: [0,1,2]
		},
		{
			iconX: 3,
			iconY: 0,
			iconFadedX: 3,
			iconFadedY: 1,
			walls: [0,1,2],
			floors: [0,1,2]
		},
		{
			iconX: 4,
			iconY: 0,
			iconFadedX: 4,
			iconFadedY: 1,
			walls: [0,1,2],
			floors: [1,2]
		},
		{
			iconX: 5,
			iconY: 0,
			iconFadedX: 5,
			iconFadedY: 1,
			walls: [0,2],
			floors: [0,2]
		}
	],
	walls: [
		{
			iconX: 7,
			iconY: 7
		},
		{
			iconX: 8,
			iconY: 7
		},
		{
			iconX: 9,
			iconY: 7
		}
	],
	floors: [
		{
			iconX: 10,
			iconY: 6
		},
		{
			iconX: 11,
			iconY: 6
		},
		{
			iconX: 12,
			iconY: 6
		}
	],
	goals: [
		{
			iconX: 12,
			iconY: 1
		},
		{
			iconX: 12,
			iconY: 2
		},
		{
			iconX: 12,
			iconY: 3
		},
		{
			iconX: 12,
			iconY: 4
		},
		{
			iconX: 12,
			iconY: 5
		},
	],
	player: {
		up: {
			still: [
				{
					iconX: 3,
					iconY: 5
				}
			],
			walk: [
				{
					iconX: 4,
					iconY: 5
				},
				{
					iconX: 3,
					iconY: 5
				},
				{
					iconX: 5,
					iconY: 5
				},
				{
					iconX: 3,
					iconY: 5
				}
			]
		},
		down: {
			still: [
				{
					iconX: 0,
					iconY: 5
				}
			],
			walk: [
				{
					iconX: 1,
					iconY: 5
				},
				{
					iconX: 0,
					iconY: 5
				},
				{
					iconX: 2,
					iconY: 5
				},
				{
					iconX: 0,
					iconY: 5
				}
			]
		},
		left: {
			still: [
				{
					iconX: 3,
					iconY: 7
				}
			],
			walk: [
				{
					iconX: 4,
					iconY: 7
				},
				{
					iconX: 3,
					iconY: 7
				},
				{
					iconX: 5,
					iconY: 7
				},
				{
					iconX: 3,
					iconY: 7
				}
			]
		},
		right: {
			still: [
				{
					iconX: 0,
					iconY: 7
				}
			],
			walk: [
				{
					iconX: 1,
					iconY: 7
				},
				{
					iconX: 0,
					iconY: 7
				},
				{
					iconX: 2,
					iconY: 7
				},
				{
					iconX: 0,
					iconY: 7
				}
			]
		}
	}
};
