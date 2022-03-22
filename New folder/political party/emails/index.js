import { emailSender } from '@keystonejs/email';

const jsxEmailSender = emailSender.jsx({
  root: __dirname,
  transport: 'mailgun',
});

export const sendEmail = (templatePath, rendererProps, options) => {
  if (!templatePath) {
    console.error('No template path provided');
  }
  return jsxEmailSender(templatePath).send(rendererProps, options);
};
