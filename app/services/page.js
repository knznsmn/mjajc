export const metadata = {
  title: "Services - MJAJC",
  description: "Discover our comprehensive digital solutions including web design, development, consulting, and support services.",
};

export default function ServicesPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Our Services</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--hue-text-secondary)' }}>
        We offer comprehensive digital solutions tailored to your unique needs and goals.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div style={{ padding: '1.5rem', background: 'var(--hue-surface)', borderRadius: '8px', border: '1px solid var(--hue-border)' }}>
          <h2>Web Design</h2>
          <p>
            Beautiful, user-centered design solutions that capture your brand essence 
            and provide exceptional user experiences across all devices.
          </p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--hue-surface)', borderRadius: '8px', border: '1px solid var(--hue-border)' }}>
          <h2>Development</h2>
          <p>
            Custom web applications and websites built with modern technologies, 
            optimized for performance, accessibility, and scalability.
          </p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--hue-surface)', borderRadius: '8px', border: '1px solid var(--hue-border)' }}>
          <h2>Consulting</h2>
          <p>
            Strategic digital transformation guidance to help you make informed 
            decisions about technology, user experience, and business growth.
          </p>
        </div>

        <div style={{ padding: '1.5rem', background: 'var(--hue-surface)', borderRadius: '8px', border: '1px solid var(--hue-border)' }}>
          <h2>Support</h2>
          <p>
            Ongoing maintenance, optimization, and technical support to ensure 
            your digital solutions continue to perform at their best.
          </p>
        </div>
      </div>
    </div>
  );
}