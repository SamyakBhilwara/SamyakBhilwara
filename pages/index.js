export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <img src="/logo.jpg" alt="Logo" style={{ maxWidth: '150px', marginBottom: '20px' }} />
      <h1>Bhilwara Computer Hub</h1>
      <h2 style={{ color: 'red' }}>New Batches Starting July 2025</h2>
      <p>Welcome to Bhilwara Computer Hub. We offer professional computer training courses.</p>
      <a href="https://wa.me/917413914777" target="_blank" style={{
        display: 'inline-block',
        backgroundColor: '#25D366',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        marginTop: '20px'
      }}>
        Chat on WhatsApp
      </a>
      <footer style={{ marginTop: '40px', fontSize: '14px', color: '#666' }}>
        &copy; 2025 Bhilwara Computer Hub. All rights reserved.
      </footer>
    </div>
  );
}