const products = [
	{
		brand: "Edward Green",
		model: "Albert Double Monk Velvet",
		price: "$1,095.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/EG-Albert-Double-Monk-Black-Velvet-Front-Angle_720x.jpg?v=1628476993",
		isFav: false,
		variants: [
			{
				color: "Black",
				sizes: [
					{
						size: 1,
						qty: 5,
					},
					{
						size: 2,
						qty: 7,
					},
				],
			},
			{
				color: "Navy",
				sizes: [
					{
						size: "SM",
						qty: 6,
					},
					{
						size: "LG",
						qty: 5,
					},
				],
			},
		],
	},

	{
		brand: "Crockett & Jones",
		model: "Alex Calf",
		price: "$795.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/Crockett_Jones-Alex-Dark-Brown-Calf-Front_720x.jpg?v=1642993739",
		isFav: false,
		variants: [
			{
				color: "Brown",
				sizes: [
					{
						size: 1,
						qty: 5,
					},
					{
						size: 2,
						qty: 8,
					},
				],
			},
			{
				color: "Black",
				sizes: [
					{
						size: 1,
						qty: 3,
					},
					{
						size: 2,
						qty: 11,
					},
				],
			},
		],
	},
	{
		brand: "Crockett & Jones",
		model: "Audley Calf",
		price: "$995.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/CJ-Audley-Black-Calf-Front-Angle_720x.jpg?v=1628136926",
		isFav: false,
		variants: [
			{
				color: "Black",
				sizes: [
					{
						size: 1,
						qty: 2,
					},
					{
						size: 2,
						qty: 1,
					},
				],
			},
			{
				color: "Brown",
				sizes: [
					{
						size: 1,
						qty: 5,
					},
					{
						size: 2,
						qty: 1,
					},
				],
			},
		],
	},
	{
		brand: "Crockett & Jones",
		model: "Barrington Antique Calf",
		price: "$995.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/CJ-Barrington-Tan-Antique-Calf-Front-Angle_720x.jpg?v=1628137047",
		isFav: false,
		variants: [
			{
				color: "Tan",
				sizes: [
					{
						size: 1,
						qty: 7,
					},
					{
						size: 2,
						qty: 7,
					},
				],
			},
			{
				color: "Dark Brown",
				sizes: [
					{
						size: 1,
						qty: 9,
					},
					{
						size: 2,
						qty: 11,
					},
				],
			},
		],
	},
	{
		brand: "John Lobb",
		model: "Beckett Museum Calf",
		price: "$2,295.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/JL-Beckett-Black-Calf-EE-Width-Front-Angle-Tree_720x.jpg?v=1628741043",
		isFav: false,
		variants: [
			{
				color: "Black",
				sizes: [
					{
						size: 1,
						qty: 2,
					},
					{
						size: 2,
						qty: 5,
					},
				],
			},
			{
				color: "Brown",
				sizes: [
					{
						size: 1,
						qty: 3,
					},
					{
						size: 2,
						qty: 15,
					},
				],
			},
		],
	},
	{
		brand: "Edward Green",
		model: "Belgravia Calf",
		price: "$1,950.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/EG-Belgravia-Black-Calf-Front-Angle_720x.jpg?v=1628478997",
		isFav: false,
		variants: [
			{
				color: "Black",
				sizes: [
					{
						size: 1,
						qty: 8,
					},
					{
						size: 2,
						qty: 2,
					},
				],
			},
			{
				color: "Tan",
				sizes: [
					{
						size: 1,
						qty: 6,
					},
					{
						size: 2,
						qty: 21,
					},
				],
			},
		],
	},
	{
		brand: "John Lobb",
		model: "Chapel Museum Calf",
		price: "$1000.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/JL-Chapel-Dark-Brown-Museum-Calf-Front-Angle-Tree_720x.jpg?v=1628744928",
		isFav: false,
		variants: [
			{
				color: "Brown",
				sizes: [
					{
						size: 1,
						qty: 4,
					},
					{
						size: 2,
						qty: 18,
					},
				],
			},
			{
				color: "Black",
				sizes: [
					{
						size: 1,
						qty: 8,
					},
					{
						size: 2,
						qty: 3,
					},
				],
			},
		],
	},
	{
		brand: "Quoddy",
		model: "Classic Boat Shoe Chromexcel",
		price: "$495.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/qu_01_008_720x.jpg?v=1589796523",
		isFav: false,
		variants: [
			{
				color: "Brown",
				sizes: [
					{
						size: 1,
						qty: 8,
					},
					{
						size: 2,
						qty: 1,
					},
				],
			},
			{
				color: "Blue",
				sizes: [
					{
						size: 1,
						qty: 9,
					},
					{
						size: 2,
						qty: 5,
					},
				],
			},
		],
	},
	{
		brand: "Alden",
		model: "Tassel Moccasin Calf Suede",
		price: "$895.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/AldenTasselLoaferIvorySuede_720x.jpg?v=1627962871",
		isFav: false,
		variants: [
			{
				color: "White",
				sizes: [
					{
						size: 1,
						qty: 5,
					},
					{
						size: 2,
						qty: 6,
					},
				],
			},
			{
				color: "Black",
				sizes: [
					{
						size: 1,
						qty: 2,
					},
					{
						size: 2,
						qty: 15,
					},
				],
			},
		],
	},
	{
		brand: "Rubinacci",
		model: "Marphy Loafer Limited Edition Tweed",
		price: "$795.00",
		image: "https://cdn.shopify.com/s/files/1/0284/2610/9000/products/image_1399_720x.jpg?v=1593676431",
		isFav: false,
		variants: [
			{
				color: "Grey",
				sizes: [
					{
						size: 1,
						qty: 4,
					},
					{
						size: 2,
						qty: 8,
					},
				],
			},
			{
				color: "Green",
				sizes: [
					{
						size: 1,
						qty: 8,
					},
					{
						size: 2,
						qty: 3,
					},
				],
			},
		],
	},
];

export default products;
