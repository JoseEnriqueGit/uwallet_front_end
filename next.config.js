const path = require("path");

/** @type {import('next')NextConfig} */
module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	async rewrites() {
		return [
			{
				source: "/v1/:path*",
				// destination: `${process.env.URL_API}/v1/:path*`,
				// Local API route
				destination: "http://localhost:3031/v1/:path*",
			},
		];
	},
};
