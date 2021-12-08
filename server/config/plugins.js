module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  }, 
  email: {
    provider: "nodemailer", 
    providerOptions: { 
      host: "smtp.gmail.com", 
      port: 587, 
      auth: {
        user: env('EMAIL_SMTP_USER'), 
        pass: env('EMAIL_SMTP_PASS'),
      },
		settings: {
				defaultFrom: "Ecossistema EJ's" 
      },
    },
  },
});
