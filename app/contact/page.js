import contentsData from "@/data/contents.json";

export const metadata = {
  title: "Contact - MJAJC",
  description: "Get in touch with our team. We'd love to hear about your project and discuss how we can help.",
};

export default function ContactPage() {
  const { contact, social } = contentsData.site;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--hue-text-secondary)' }}>
        Ready to start your project? We'd love to hear from you. Get in touch and let's create something amazing together.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        {/* Contact Information */}
        <div style={{ padding: '1.5rem', background: 'var(--hue-surface)', borderRadius: '8px', border: '1px solid var(--hue-border)' }}>
          <h2>Get in Touch</h2>
          
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Email</h3>
            <a 
              href={`mailto:${contact.email}`}
              style={{ color: 'var(--hue-primary)', textDecoration: 'none' }}
            >
              {contact.email}
            </a>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Phone</h3>
            <a 
              href={`tel:${contact.phone}`}
              style={{ color: 'var(--hue-primary)', textDecoration: 'none' }}
            >
              {contact.phone}
            </a>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Address</h3>
            <p style={{ color: 'var(--hue-text-secondary)' }}>
              {contact.address}
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={social.twitter} style={{ color: 'var(--hue-primary)', textDecoration: 'none' }}>
                Twitter
              </a>
              <a href={social.linkedin} style={{ color: 'var(--hue-primary)', textDecoration: 'none' }}>
                LinkedIn
              </a>
              <a href={social.github} style={{ color: 'var(--hue-primary)', textDecoration: 'none' }}>
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ padding: '1.5rem', background: 'var(--hue-surface)', borderRadius: '8px', border: '1px solid var(--hue-border)' }}>
          <h2>Send us a Message</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  borderRadius: '4px', 
                  border: '1px solid var(--hue-border)',
                  background: 'var(--hue-bg)',
                  fontFamily: 'Hanuman, serif'
                }}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  borderRadius: '4px', 
                  border: '1px solid var(--hue-border)',
                  background: 'var(--hue-bg)',
                  fontFamily: 'Hanuman, serif'
                }}
              />
            </div>

            <div>
              <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                required
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  borderRadius: '4px', 
                  border: '1px solid var(--hue-border)',
                  background: 'var(--hue-bg)',
                  fontFamily: 'Hanuman, serif'
                }}
              />
            </div>

            <div>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Message
              </label>
              <textarea 
                id="message" 
                name="message"
                rows="5"
                required
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  borderRadius: '4px', 
                  border: '1px solid var(--hue-border)',
                  background: 'var(--hue-bg)',
                  fontFamily: 'Hanuman, serif',
                  resize: 'vertical'
                }}
              />
            </div>

            <button 
              type="submit"
              style={{ 
                background: 'var(--hue-primary)', 
                color: 'white', 
                padding: '0.75rem 1.5rem', 
                borderRadius: '4px', 
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'Hanuman, serif',
                transition: 'var(--transition-fast)'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}