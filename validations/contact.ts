// ** VeeValidate Imports
import * as v from 'valibot'

// ** Label
export const contactLabel = {
    name: 'Your Name',
    phone: 'Phone Number',
    email: 'Your Email',
    subject: 'Subject',
    message: 'Your Message'
}

// ** Schema
export const contactForm = v.object({
    name: v.pipe(
        v.string(`${contactLabel.name} cannot be empty.`),
        v.nonEmpty(`${contactLabel.name} cannot be empty.`)
    ),
    phone: v.pipe(
        v.string(`${contactLabel.phone} cannot be empty.`),
        v.minLength(10, `${contactLabel.phone} must be at least 10 digits.`),
        v.maxLength(15, `${contactLabel.phone} must not exceed 15 digits.`),
        v.regex(/^\+?[0-9]{10,15}$/, 'Invalid phone number format.')
    ),
    email: v.pipe(
        v.string(`${contactLabel.email} cannot be empty.`),
        v.email(`${contactLabel.email} is not a valid format.`),
        v.nonEmpty(`${contactLabel.email} cannot be empty.`)
    ),
    subject: v.pipe(
        v.string(`${contactLabel.subject} cannot be empty.`),
        v.nonEmpty(`${contactLabel.subject} cannot be empty.`)
    ),
    message: v.pipe(
        v.string(`${contactLabel.message} cannot be empty.`),
        v.nonEmpty(`${contactLabel.message} cannot be empty.`)
    )
    
})

export const contactFormSchema = v.safeParser(contactForm)

// ** Types
export type IContactForm = v.InferInput<typeof contactForm>
